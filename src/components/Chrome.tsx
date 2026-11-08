"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { BigBack } from "performative-ui";
import { Lockup } from "./brand/Logo";

const links = [
  { href: "/terv", label: "Tervező" },
  { href: "/szimulator", label: "Szimulátor" },
  { href: "/helyzetek", label: "Mit tegyek, ha…" },
  { href: "/tippek", label: "Tippek" },
  { href: "/orszagok", label: "Országok" },
];

export function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ["rgba(6,8,15,0)", "rgba(6,8,15,0.75)"]);
  const border = useTransform(scrollY, [0, 80], ["rgba(255,255,255,0)", "rgba(255,255,255,0.08)"]);
  useEffect(() => setOpen(false), [path]);
  return (
    <motion.header style={{ background: bg, borderColor: border }} className="no-print fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" aria-label="Haven72 főoldal"><Lockup size={19} /></Link>
        <nav className="hidden gap-1 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`relative rounded-full px-3.5 py-2 text-[13.5px] transition ${path.startsWith(l.href) ? "text-white" : "text-mute hover:text-white"}`}>
              {path.startsWith(l.href) && <motion.span layoutId="navpill" className="absolute inset-0 rounded-full bg-white/[.07] ring-1 ring-white/10" transition={{ type: "spring", stiffness: 400, damping: 32 }} />}
              <span className="relative">{l.label}</span>
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/terv" className="btn-primary hidden rounded-xl px-4 py-2.5 text-sm font-bold sm:inline-block">Tervet készítek</Link>
          <button aria-label="Menü" onClick={() => setOpen((v) => !v)} className="btn-ghost flex h-10 w-10 items-center justify-center rounded-xl md:hidden">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden border-t border-line bg-ink/90 md:hidden">
            <div className="flex flex-col gap-1 px-5 py-4">
              {links.map((l) => (
                <Link key={l.href} href={l.href} className="rounded-xl px-3 py-3 text-base text-mute hover:bg-white/5 hover:text-white">{l.label}</Link>
              ))}
              <Link href="/terv" className="btn-primary mt-2 rounded-xl px-4 py-3 text-center font-bold">Tervet készítek</Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export function Footer() {
  return (
    <div className="no-print mt-32">
      <div className="glow-line mx-auto max-w-5xl" />
      <BigBack
        company="Haven72"
        gradient
        copyright={`© ${new Date().getFullYear()} Haven72 · Tájékoztató segédlet, nem hatósági kiadvány · Életveszélyben: 112`}
        columns={[
          { heading: "Eszközök", links: [{ label: "Tervező", href: "/terv" }, { label: "Áramszünet-szimulátor", href: "/szimulator" }, { label: "Áramtartalék-kalkulátor", href: "/aram" }, { label: "Vészcsomag-összerakó", href: "/csomag" }, { label: "Hűtőkártya", href: "/terv/kartya" }, { label: "Forgatókönyvek", href: "/forgatokonyvek" }] },
          { heading: "Tudás", links: [{ label: "Mit tegyek, ha…", href: "/helyzetek" }, { label: "Tippek", href: "/tippek" }, { label: "Országok", href: "/orszagok" }, { label: "Forrásregiszter", href: "/forrasok" }, { label: "Módszertan", href: "/modszertan" }] },
          { heading: "Átláthatóság", links: [{ label: "Adatvédelem", href: "/adatvedelem" }, { label: "Partnerlinkek", href: "/modszertan#partnerlinkek" }] },
        ]}
        className="!bg-transparent"
      />
    </div>
  );
}
