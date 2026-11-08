import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Haven72 – Három nap nyugalom",
    short_name: "Haven72",
    description: "72 órás felkészülési terv, hivatalos útmutatók és hűtőkártya – internet nélkül is.",
    start_url: "/?source=pwa",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#06080f",
    theme_color: "#06080f",
    lang: "hu",
    categories: ["utilities", "lifestyle"],
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icons/maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
    shortcuts: [
      { name: "Tervező", url: "/terv", description: "A saját 72 órás terved" },
      { name: "Hűtőkártya", url: "/terv/kartya" },
      { name: "Mit tegyek, ha…", url: "/helyzetek" },
    ],
  };
}
