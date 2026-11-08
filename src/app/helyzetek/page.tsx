import type { Metadata } from "next";
import { PageHead } from "@/components/PageHead";
import Situations from "./Situations";

export const metadata: Metadata = {
  title: "Mit tegyek, ha…? – hivatalos vészhelyzeti útmutatók",
  description: "Légiriadó, áramszünet, sugárzás, árvíz, hőség, kitelepítés: európai polgári védelmi hatóságok útmutatói lépésről lépésre, forrással.",
};

export default function Page() {
  return (
    <>
      <PageHead kicker="Helyzetek" title={<>Mit tegyek, ha…?</>} sub="Európai polgári védelmi hatóságok hivatalos útmutatói helyzetenként, lépésről lépésre. Minden lépés mellett ott a forrás." />
      <Situations />
    </>
  );
}
