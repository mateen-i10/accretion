import { FunnelGrid } from "./FunnelGrid";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream pt-36 pb-48 z-10">
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/60 ring-1 ring-black/5 py-1 pl-1 pr-3 text-[13px] text-ink/80 backdrop-blur">
          <span className="rounded-full bg-orange px-2 py-0.5 text-[10.5px] font-semibold tracking-wide text-white">NEW</span>
          <span>Now with brand new AI integration</span>
        </div>
        <h1 className="mt-7 text-[56px] md:text-[68px] font-semibold leading-[1.02] tracking-[-0.02em] text-ink">
          All your work pulled
          <br /> into one powerful place
        </h1>
        <p className="mt-6 mx-auto max-w-xl text-[16px] md:text-[17px] text-ink/60">
          Organize tasks and projects in one connected, accessible platform.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="#cta"
            className="inline-flex items-center rounded-xl bg-ink px-6 py-3 text-[14.5px] font-medium text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)] hover:bg-ink-3 transition"
          >
            Get started
          </a>
        </div>
      </div>

      <FunnelGrid />
    </section>
  );
}
