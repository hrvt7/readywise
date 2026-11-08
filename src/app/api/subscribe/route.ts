import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(req: Request) {
  let body: { email?: string; consent?: boolean };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Érvénytelen kérés." }, { status: 400 });
  }
  const email = (body.email ?? "").trim().toLowerCase();
  if (!EMAIL.test(email) || email.length > 254) return NextResponse.json({ error: "Érvénytelen e-mail cím." }, { status: 400 });
  if (body.consent !== true) return NextResponse.json({ error: "Hozzájárulás szükséges." }, { status: 400 });

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    return NextResponse.json({ error: "A feliratkozás hamarosan indul – az adatbázis még nincs bekötve." }, { status: 503 });
  }
  const db = createClient(url, key, { auth: { persistSession: false } });
  const { error } = await db.from("subscribers").upsert({ email, consent_at: new Date().toISOString(), locale: "hu" }, { onConflict: "email" });
  if (error) return NextResponse.json({ error: "Most nem sikerült, próbáld újra később." }, { status: 500 });
  return NextResponse.json({ ok: true });
}
