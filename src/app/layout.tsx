import type { Metadata, Viewport } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import { Footer, Nav } from "@/components/Chrome";

const sora = Sora({ subsets: ["latin", "latin-ext"], variable: "--font-sora", weight: ["400", "600", "700", "800"] });
const manrope = Manrope({ subsets: ["latin", "latin-ext"], variable: "--font-manrope" });

const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://readywise.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: { default: "Readywise – Készülj fel nyugodtan, percek alatt", template: "%s · Readywise" },
  description:
    "Személyre szabott vészhelyzeti felkészülési terv a háztartásodra: víz, étel, áram, gyógyszer, menekülés. Hivatalos EU-s és nemzeti források alapján.",
  openGraph: { type: "website", locale: "hu_HU", siteName: "Readywise" },
};

export const viewport: Viewport = { themeColor: "#05070f" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu" className={`${sora.variable} ${manrope.variable}`}>
      <body className="min-h-screen overflow-x-hidden">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
