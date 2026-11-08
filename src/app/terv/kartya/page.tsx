import type { Metadata } from "next";
import { FridgeCard } from "./FridgeCard";

export const metadata: Metadata = { title: "Hűtőkártya", description: "Egyoldalas, nyomtatható családi vészhelyzeti kártya: segélyhívók, találkozópont, kontaktok, készlet." };

export default function Page() {
  return <FridgeCard />;
}
