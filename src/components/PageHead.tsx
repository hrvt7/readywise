import { Reveal } from "./Motion";

export function PageHead({ kicker, title, sub }: { kicker: string; title: React.ReactNode; sub?: string }) {
  return (
    <section className="relative overflow-hidden pt-32 pb-12 md:pt-40">
      <div className="aurora opacity-60" />
      <div className="grid-bg absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[.2em] text-mint">{kicker}</p>
          <h1 className="font-display mt-3 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">{title}</h1>
          {sub && <p className="mt-5 max-w-2xl text-lg text-mute">{sub}</p>}
        </Reveal>
      </div>
    </section>
  );
}
