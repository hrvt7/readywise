import { Reveal } from "./Motion";

export function PageHead({ kicker, title, sub }: { kicker: string; title: React.ReactNode; sub?: string }) {
  return (
    <section className="relative overflow-hidden pt-32 pb-12 md:pt-40">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-indigo/15 blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-mint/10 blur-[120px]" />
      <div className="grid-bg absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="eyebrow">{kicker}</p>
          <h1 className="font-display mt-3 max-w-4xl text-4xl font-bold leading-[1.05] md:text-[52px]">{title}</h1>
          {sub && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mute">{sub}</p>}
        </Reveal>
      </div>
    </section>
  );
}
