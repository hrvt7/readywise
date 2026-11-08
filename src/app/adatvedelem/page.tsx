import type { Metadata } from "next";
import { PageHead } from "@/components/PageHead";

export const metadata: Metadata = { title: "Adatvédelem" };

export default function Page() {
  return (
    <>
      <PageHead kicker="Adatvédelem" title="Röviden és érthetően" />
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <div className="surface space-y-5 rounded-3xl p-7 text-[15px] leading-relaxed text-mute">
          <p><b className="text-white">A terved a te eszközödön marad.</b> A tervező adatait (háztartás mérete, kipipált tételek) csak a böngésződ helyi tárolója tartalmazza, nem küldjük el szerverre.</p>
          <p><b className="text-white">Hírlevél.</b> Ha feliratkozol, kizárólag az e-mail címedet és a hozzájárulás időpontját tároljuk, a havi emlékeztető küldése céljából. Bármikor leiratkozhatsz, és kérheted az adataid törlését.</p>
          <p><b className="text-white">Nincs követő süti.</b> Hirdetési vagy profilozó sütit nem használunk.</p>
          <p><b className="text-white">Partnerlinkek.</b> Partnerlinkre kattintva a partner oldalán annak adatkezelése érvényes.</p>
          <p className="text-xs">Az adatkezelő adatai és a teljes tájékoztató az éles indulás előtt kerül ide.</p>
        </div>
      </div>
    </>
  );
}
