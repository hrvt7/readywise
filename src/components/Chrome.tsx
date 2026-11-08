"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "motion/react";
import { ShieldLogo } from "./Icons";

const links = [
  { href: "/terv", label: "Tervező" },
  { href: "/orszagok", label: "Országok" },
  { href: "/forrasok", label: "Források" },
  { href: "/modszertan", label: "Módszertan" },
];

export function Nav() {
  const path = usePathname();
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ["rgba(5,7,15,0)", "rgba(5,7,15,0.72)"]);
  const border = useTransform(scrollY, [0, 80], ["rgba(255,255,255,0)", "rgba(255,255,255,0.08)"]);
  return (
    <motion.header style={{ background: bg, borderColor: border }} className="no-print fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <ShieldLogo />
          <span className="font-display text-lg font-bold tracking-tight">
            Ready<span className="text-grad">wise</span>
          </span>
        </Link>
        <nav className="hidden gap-1 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`relative rounded-full px-4 py-2 text-sm transition ${path.startsWith(l.href) ? "text-white" : "text-mute hover:text-white"}`}>
              {path.startsWith(l.href) && <motion.span layoutId="navpill" className="absolute inset-0 rounded-full bg-white/8 ring-1 ring-white/10" />}
              <span className="relative">{l.label}</span>
            </Link>
          ))}
        </nav>
        <Link href="/terv" className="btn-primary rounded-xl px-4 py-2.5 text-sm font-bold">
          Kezdd el 10 perc alatt
        </Link>
      </div>
    </motion.header>
  );
}

export function Footer() {
  return (
    <footer className="no-print mt-32 border-t border-line">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <ShieldLogo />
            <span className="font-display text-lg font-bold">Readywise</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-mute">
            Független, hivatalos forrásokra épülő felkészülési segédlet. Nem helyettesíti a hatósági utasításokat – valós vészhelyzetben mindig a helyi hatóságot kövesd, életveszélyben hívd a 112-t.
          </p>
        </div>
        <div className="text-sm">
          <div className="mb-3 font-semibold">Oldalak</div>
          <ul className="space-y-2 text-mute">
            {links.map((l) => (
              <li key={l.href}><Link className="hover:text-white" href={l.href}>{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div className="text-sm">
          <div className="mb-3 font-semibold">Átláthatóság</div>
          <ul className="space-y-2 text-mute">
            <li><Link className="hover:text-white" href="/adatvedelem">Adatvédelem</Link></li>
            <li><Link className="hover:text-white" href="/modszertan#partnerlinkek">Partnerlinkek</Link></li>
            <li><Link className="hover:text-white" href="/forrasok">Forrásregiszter</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line py-6 text-center text-xs text-mute">© {new Date().getFullYear()} Readywise · Adatok utolsó ellenőrzése: 2026. november</div>
    </footer>
  );
}
