import type { Metadata } from "next";
import { PageHead } from "@/components/PageHead";
import PowerCalc from "./PowerCalc";

export const metadata: Metadata = {
  title: "Áramtartalék-kalkulátor – mekkora powerbank vagy erőmű kell?",
  description: "Válaszd ki, mit akarsz működtetni áramszünetben, és megmutatjuk, hány órát bír egy powerbank vagy hordozható erőmű, és mekkora kapacitás kell 3 napra.",
};

export default function Page() {
  return (
    <>
      <PageHead kicker="Áramtartalék" title={<>Mekkora akku kell<br />három napra?</>} sub="Pipáld ki, mit akarsz működtetni áramszünetben. Megmutatjuk, mennyit bír egy powerbank vagy hordozható erőmű, mi kapja az energiát először, és mekkora kapacitást érdemes venni." />
      <PowerCalc />
    </>
  );
}
