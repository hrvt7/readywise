import type { Metadata } from "next";
import { PageHead } from "@/components/PageHead";
import Tips from "./Tips";

export const metadata: Metadata = {
  title: "Tippek és praktikák vészhelyzetre – hivatalos forrásokból",
  description: "Gyakorlati trükkök áramszünetre, vízhiányra, hidegre és kitelepítésre európai polgári védelmi hatóságok ajánlásaiból.",
};

export default function Page() {
  return (
    <>
      <PageHead kicker="Tippek és trükkök" title={<>A kis dolgok, amik<br />számítanak.</>} sub="Nem csak liter és kilogramm: azok a praktikák, amiket az európai polgári védelmi hatóságok a saját lakosságuknak tanítanak. Mindegyik mellett ott a forrás." />
      <Tips />
    </>
  );
}
