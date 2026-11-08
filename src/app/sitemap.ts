import type { MetadataRoute } from "next";
import { COUNTRIES } from "@/lib/countries";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://haven72.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/terv", "/terv/kartya", "/helyzetek", "/tippek", "/forgatokonyvek", "/orszagok", "/forrasok", "/modszertan", "/adatvedelem"];
  return [
    ...pages.map((p) => ({ url: `${base}${p}`, lastModified: new Date("2026-11-08") })),
    ...COUNTRIES.map((c) => ({ url: `${base}/orszagok/${c.code.toLowerCase()}`, lastModified: new Date("2026-11-08") })),
  ];
}
