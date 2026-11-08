import type { Metadata } from "next";
import { PageHead } from "@/components/PageHead";
import Simulator from "./Simulator";

export const metadata: Metadata = {
  title: "Áramszünet-szimulátor – meddig bírná a háztartásod?",
  description: "Pörgesd előre az időt 72 óráig: mikor romlik meg a hűtő, mikor merül le a telefon, mikor hűl ki a lakás, mikor fogy el a víz – a saját terved alapján.",
};

export default function Page() {
  return (
    <>
      <PageHead kicker="Szimulátor" title={<>Elment az áram.<br />És most?</>} sub="Pörgesd előre az időt. Látod, mikor romlik meg a hűtő, mikor merül le a telefon, mikor hűl ki a lakás, és mikor fogy el a víz – a te háztartásodra számolva." />
      <Simulator />
    </>
  );
}
