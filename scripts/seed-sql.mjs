// A repóban élő forrásregiszterből és országszabályokból SQL seed-et generál.
// Használat: node scripts/seed-sql.mjs > supabase/seed.sql
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import ts from "typescript";

const require = createRequire(import.meta.url);
const load = (p) => {
  const out = ts.transpileModule(readFileSync(p, "utf8"), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } });
  const m = { exports: {} };
  new Function("module", "exports", "require", out.outputText)(m, m.exports, require);
  return m.exports;
};
const q = (v) => (v == null ? "null" : `'${String(v).replace(/'/g, "''")}'`);

const { SOURCES } = load("src/lib/sources.ts");
const { COUNTRIES } = load("src/lib/countries.ts");

const lines = ["begin;", "delete from public.source_facts;"];
for (const s of SOURCES) {
  lines.push(
    `insert into public.sources (id,publisher,title,region,year,url,kind,checked) values (${[s.id, s.publisher, s.title, s.region, s.year, s.url, s.kind, s.checked].map(q).join(",")}) on conflict (id) do update set publisher=excluded.publisher,title=excluded.title,url=excluded.url,checked=excluded.checked,updated_at=now();`,
  );
  for (const f of s.facts) lines.push(`insert into public.source_facts (source_id,fact) values (${q(s.id)},${q(f)});`);
}
for (const c of COUNTRIES) {
  lines.push(
    `insert into public.country_rules (code,name,official_days,water_l_per_day,status,headline) values (${[c.code, c.name].map(q).join(",")},${c.officialDays ?? "null"},${c.waterLPerDay ?? "null"},${q(c.status)},${q(c.headline)}) on conflict (code) do update set official_days=excluded.official_days,water_l_per_day=excluded.water_l_per_day,status=excluded.status,headline=excluded.headline,updated_at=now();`,
  );
}
lines.push("commit;");
console.log(lines.join("\n"));
