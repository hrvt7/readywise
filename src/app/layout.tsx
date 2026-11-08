import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Footer, Nav } from "@/components/Chrome";

const sora = localFont({ variable: "--font-sora", display: "swap", src: [{ path: "../fonts/unbounded-latin.woff2", weight: "400 900" }, { path: "../fonts/unbounded-latin-ext.woff2", weight: "400 900" }] });
const manrope = localFont({ variable: "--font-manrope", display: "swap", src: [{ path: "../fonts/manrope-latin.woff2", weight: "200 800" }, { path: "../fonts/manrope-latin-ext.woff2", weight: "200 800" }] });
const jet = localFont({ variable: "--font-jet", display: "swap", src: [{ path: "../fonts/jetbrains-latin.woff2", weight: "100 800" }, { path: "../fonts/jetbrains-latin-ext.woff2", weight: "100 800" }] });

const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://haven72.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: { default: "Haven72 – Három nap nyugalom. Előre.", template: "%s · Haven72" },
  description:
    "Személyre szabott 72 órás felkészülési terv a háztartásodra: víz, étel, áram, gyógyszer, menekülés. Hivatalos EU-s és nemzeti források alapján, félelemkeltés nélkül.",
  openGraph: { type: "website", locale: "hu_HU", siteName: "Haven72", title: "Haven72 – Három nap nyugalom. Előre.", description: "Pontos mennyiségek, hivatalos források, 10 perc alatt." },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#06080f" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu" className={`${sora.variable} ${manrope.variable} ${jet.variable} pui-theme`}>
      <body className="min-h-screen overflow-x-hidden">
        <div className="noise" aria-hidden />
        <Analytics />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
