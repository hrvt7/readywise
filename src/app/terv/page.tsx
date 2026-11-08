import type { Metadata } from "next";
import Planner from "./Planner";

export const metadata: Metadata = {
  title: "Tervező",
  description: "Számold ki, mennyi víz, étel és milyen eszközök kellenek a háztartásodnak – hivatalos ajánlások alapján.",
};

export default function Page() {
  return <Planner />;
}
