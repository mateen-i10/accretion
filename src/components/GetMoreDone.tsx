"use client";

import { useEffect, useRef, useState } from "react";

const DURATION = 4000; // ms each item stays active before auto-advancing

const items = [
  {
    title: "Stay organized with ease",
    body: "View all your projects, tasks, and deadlines in one simple dashboard. No more scattered to-dos.",
  },
  {
    title: "Get more done every day",
    body: "Break down big goals into smaller steps and keep momentum with clear priorities.",
  },
  {
    title: "Work together seamlessly",
    body: "Assign tasks, share updates, and keep everyone aligned—whether your team is remote or in-office.",
  },
  {
    title: "Seamless across desktop and mobile",
    body: "From office to on-the-go, your projects are always accessible when you need them.",
  },
];

/* Gradient that exactly matches the original Framer site */
const LOADER_GRADIENT =
  "linear-gradient(90deg, rgb(51,0,20) 0%, rgb(161,0,18) 30.18%, rgb(223,91,0) 49.1%, rgb(250,175,1) 70.72%, rgb(250,234,205) 100%)";

/* Separator color from original: rgb(122,109,73) ≈ dark gold/amber */
const SEP_COLOR = "rgba(122,109,73,0.45)";

export function GetMoreDone() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number>(0);

  /* Auto-advance with smooth rAF-based progress */
  useEffect(() => {
    setProgress(0);
    startRef.current = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startRef.current;
      const pct = Math.min((elapsed / DURATION) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        // Move to next item
        setActive((prev) => (prev + 1) % items.length);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [active]);

  /* Click an item → jump to it */
  const handleClick = (i: number) => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    setActive(i);
  };

  return (
    <section className="bg-ink text-white px-6 pt-24 pb-24">
      <div className="mx-auto max-w-[1461px]">
        <div className="grid md:grid-cols-12 gap-16">

          {/* ── LEFT: title + accordion ────────────────────────────────── */}
          <div className="md:col-span-4">
            <h2 className="text-[36px] md:text-[44px] font-semibold leading-[1.05] tracking-tight">
              Get more done, together, anytime, anywhere
            </h2>
            <p className="mt-4 text-[15px] text-white/60 max-w-md">
              This is how we help you stay organized, collaborate with your team.
            </p>

            <div className="mt-10">
              {items.map((it, i) => (
                <div
                  key={it.title}
                  onClick={() => handleClick(i)}
                  className="relative cursor-pointer"
                >
                  {/* ── Top separator + gradient progress bar ─────────── */}
                  <div
                    className="relative w-full overflow-hidden"
                    style={{ height: "1px", backgroundColor: SEP_COLOR }}
                  >
                    {/* Filled gradient portion */}
                    <div
                      className="absolute inset-y-0 left-0"
                      style={{
                        width: active === i ? `${progress}%` : active > i ? "100%" : "0%",
                        background: LOADER_GRADIENT,
                        transition: active === i ? "none" : "width 0.3s ease",
                      }}
                    />
                  </div>

                  {/* ── Accordion content ─────────────────────────────── */}
                  <div className="py-5">
                    <h3
                      className={`text-[18px] md:text-[20px] font-semibold transition-colors duration-300 ${
                        active === i ? "text-white" : "text-white/30"
                      }`}
                    >
                      {it.title}
                    </h3>
                    <div
                      className={`grid transition-all duration-500 ${
                        active === i
                          ? "grid-rows-[1fr] opacity-100 mt-2"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <p className="overflow-hidden text-[14px] text-white/60 max-w-md">
                        {it.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Final bottom separator */}
              <div className="relative w-full overflow-hidden" style={{ height: "1px", backgroundColor: SEP_COLOR }}>
                <div className="absolute inset-y-0 left-0 w-full" style={{ background: LOADER_GRADIENT, opacity: 0.5 }} />
              </div>
            </div>
          </div>

          {/* ── RIGHT: sticky dashboard preview ───────────────────────── */}
          <div className="md:col-span-8">
            <div className="md:sticky md:top-24">
              <div className="relative rounded-3xl overflow-hidden ring-1 ring-white/10 bg-ink-2 aspect-[934/700]">
                {items.map((it, i) => (
                  <div
                    key={i}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      active === i ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      background: `radial-gradient(ellipse at 30% 20%, hsl(${
                        (i * 67 + 20) % 360
                      } 55% 28%), #161616 70%)`,
                    }}
                  >
                    {/* Faux dashboard chrome */}
                    <div className="absolute inset-6 rounded-2xl bg-ink-3/80 backdrop-blur ring-1 ring-white/10 overflow-hidden">
                      <div className="h-9 border-b border-white/10 flex items-center px-4 gap-1.5">
                        <span className="size-2.5 rounded-full bg-white/15" />
                        <span className="size-2.5 rounded-full bg-white/15" />
                        <span className="size-2.5 rounded-full bg-white/15" />
                        <span className="ml-4 text-[11px] text-white/40">{it.title}</span>
                      </div>
                      <div className="p-5 grid grid-cols-3 gap-3 h-[calc(100%-2.25rem)]">
                        <div className="col-span-1 rounded-lg bg-white/5 ring-1 ring-white/5 p-3 space-y-2">
                          {["Inbox", "Today", "Upcoming", "Projects", "Team"].map((s) => (
                            <div key={s} className="text-[11px] text-white/50 px-2 py-1 rounded hover:bg-white/5">
                              {s}
                            </div>
                          ))}
                        </div>
                        <div className="col-span-2 space-y-2.5">
                          {Array.from({ length: 5 }).map((_, k) => (
                            <div
                              key={k}
                              className="rounded-lg bg-white/[0.04] ring-1 ring-white/5 px-3 py-2 flex items-center gap-3"
                            >
                              <span
                                className={`size-2.5 rounded-full ${
                                  k === i % 5 ? "bg-orange" : "bg-white/20"
                                }`}
                              />
                              <span className="text-[12px] text-white/70 flex-1">
                                {it.title.split(" ").slice(0, 3).join(" ")} task {k + 1}
                              </span>
                              <span className="text-[10px] text-white/30">{k + 2}d</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
