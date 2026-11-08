"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { HoverIcon } from "@/components/hover";

type BIP = Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: "accepted" | "dismissed" }> };

/** Service worker regisztráció, offline sáv, „Telepítés” kártya. */
export default function Pwa() {
  const [offline, setOffline] = useState(false);
  const [ready, setReady] = useState(false);
  const [install, setInstall] = useState<BIP | null>(null);
  const [hideInstall, setHideInstall] = useState(true);

  useEffect(() => {
    setOffline(!navigator.onLine);
    const on = () => setOffline(false), off = () => setOffline(true);
    addEventListener("online", on); addEventListener("offline", off);

    if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
      navigator.serviceWorker.register("/sw.js").then((reg) => {
        if (reg.active && !sessionStorage.getItem("h72:swready")) { setReady(true); sessionStorage.setItem("h72:swready", "1"); setTimeout(() => setReady(false), 4500); }
        reg.addEventListener("updatefound", () => {
          const w = reg.installing;
          w?.addEventListener("statechange", () => { if (w.state === "activated" && !navigator.serviceWorker.controller) { setReady(true); setTimeout(() => setReady(false), 4500); } });
        });
        // szkriptek és országoldalak előtöltése a háttérben, miután a worker aktív
        navigator.serviceWorker.ready.then((r) => {
          r.active?.postMessage({ type: "CACHE_ASSETS" });
          setTimeout(() => r.active?.postMessage({ type: "CACHE_URLS", urls: ["at","de","cz","nl","be","sk","pl","ro","fr","ch","se","fi","no","dk","ee"].map((c) => `/orszagok/${c}`) }), 8000);
        });
      }).catch(() => {});
    }

    const bip = (e: Event) => { e.preventDefault(); setInstall(e as BIP); setHideInstall(localStorage.getItem("h72:install-dismissed") === "1" || matchMedia("(display-mode: standalone)").matches); };
    addEventListener("beforeinstallprompt", bip);
    return () => { removeEventListener("online", on); removeEventListener("offline", off); removeEventListener("beforeinstallprompt", bip); };
  }, []);

  const doInstall = async () => {
    if (!install) return;
    await install.prompt();
    const { outcome } = await install.userChoice;
    if (outcome === "accepted") setInstall(null);
  };
  const dismiss = () => { setHideInstall(true); localStorage.setItem("h72:install-dismissed", "1"); };

  return (
    <>
      <AnimatePresence>
        {offline && (
          <motion.div initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -40, opacity: 0 }} className="fixed inset-x-0 top-0 z-[60] flex items-center justify-center gap-2 bg-amber-400 px-4 py-1.5 text-center text-xs font-semibold text-ink">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink" /> Nincs internet – a mentett oldalak és a terved offline is elérhetők.
          </motion.div>
        )}
        {ready && !offline && (
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ opacity: 0 }} className="fixed bottom-4 left-1/2 z-[60] flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-ink/90 px-4 py-2 text-xs text-white shadow-xl backdrop-blur">
            <HoverIcon name="shield" size={14} className="text-mint" /> Offline is elérhető: a fő oldalak letöltve.
          </motion.div>
        )}
        {install && !hideInstall && (
          <motion.div initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 60, opacity: 0 }} transition={{ type: "spring", stiffness: 260, damping: 26 }} className="fixed bottom-4 right-4 z-[60] w-[calc(100%-2rem)] max-w-sm rounded-2xl border border-white/10 bg-ink/95 p-4 shadow-2xl backdrop-blur-xl" data-hover>
            <div className="flex gap-3">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/[.06]"><HoverIcon name="home" size={22} className="text-cyan" /></div>
              <div className="min-w-0 flex-1">
                <div className="font-semibold">Tedd a kezdőképernyőre</div>
                <p className="mt-0.5 text-xs leading-relaxed text-mute">Áramszünetben nincs net. Telepítve a terved, a hűtőkártya és az útmutatók offline is megnyílnak.</p>
                <div className="mt-3 flex gap-2">
                  <button onClick={doInstall} className="btn-primary rounded-lg px-3.5 py-2 text-xs font-bold">Telepítés</button>
                  <button onClick={dismiss} className="btn-ghost rounded-lg px-3.5 py-2 text-xs font-semibold">Most nem</button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
