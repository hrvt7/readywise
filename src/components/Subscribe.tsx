"use client";
import { useState } from "react";

export function Subscribe() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [state, setState] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [msg, setMsg] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!consent) return setMsg("Kérjük, fogadd el az adatkezelést.");
    setState("loading");
    try {
      const r = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, consent }),
      });
      const j = await r.json();
      if (!r.ok) throw new Error(j.error ?? "Hiba");
      setState("ok");
      setMsg("Kész! Havonta egy rövid, 10 perces feladatot küldünk.");
    } catch (err) {
      setState("err");
      setMsg(err instanceof Error ? err.message : "Hiba történt");
    }
  }

  return (
    <form onSubmit={submit} className="w-full max-w-xl">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@cimed.hu"
          className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm outline-none ring-cyan/40 transition placeholder:text-mute/60 focus:ring-2"
        />
        <button disabled={state === "loading"} className="btn-primary rounded-xl px-6 py-3.5 text-sm font-bold disabled:opacity-60">
          {state === "loading" ? "Küldés…" : "Feliratkozom"}
        </button>
      </div>
      <label className="mt-3 flex items-start gap-2 text-xs text-mute">
        <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 accent-emerald-400" />
        <span>Hozzájárulok, hogy a Readywise havi emlékeztetőt küldjön. Bármikor leiratkozhatok. Lásd: Adatvédelem.</span>
      </label>
      {msg && <p className={`mt-3 text-sm ${state === "ok" ? "text-emerald-300" : "text-amber-300"}`}>{msg}</p>}
    </form>
  );
}
