import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Manrope, Unbounded } from "next/font/google";
import "./globals.css";
import { Footer, Nav } from "@/components/Chrome";

const sora = Unbounded({ subsets: ["latin", "latin-ext"], variable: "--font-sora", weight: ["400", "500", "600", "700", "800"] });
const manrope = Manrope({ subsets: ["latin", "latin-ext"], variable: "--font-manrope" });
const jet = JetBrains_Mono({ subsets: ["latin", "latin-ext"], variable: "--font-jet", weight: ["400", "500"] });

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
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
