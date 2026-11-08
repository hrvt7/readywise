import type { Metadata } from "next";
import { PageHead } from "@/components/PageHead";
import Packer from "./Packer";

export const metadata: Metadata = {
  title: "Vészcsomag-összerakó – mi fér 20 kilóba?",
  description: "Rakd össze a felkapható vészcsomagot: a katasztrófavédelem listája, 20 kg-os súlyhatár, a hiányzó tételek jelzése.",
};

export default function Page() {
  return (
    <>
      <PageHead kicker="Vészcsomag" title={<>Mi fér bele<br />20 kilóba?</>} sub="A katasztrófavédelem szerint a veszélyhelyzeti csomag legfeljebb 20 kg, hátizsákban, hogy szabad maradjon a kezed. Pakold be, amit vinnél – a mérleg és a hivatalos lista szól, ha baj van." />
      <Packer />
    </>
  );
}
