import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://haven72.vercel.app";
  return { rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/offline.html"] }, sitemap: `${base}/sitemap.xml` };
}
