"use client";

import { useEffect, useRef } from "react";
import { FUNNEL_SVG } from "./funnelSvg";

// Replicates the Accretion hero animation:
//  - Soft orange background gradient (framer-ghv5fp equivalent), opacity 0.2
//  - Static rings (g.rings)
//  - Static base spokes (g.spokes-base)
//  - Animated raindrop overlay (g.spokes-flow): each path keeps its varied
//    color + dasharray segment length; we slide stroke-dashoffset along the
//    path so segments flow from the outer edge into the central hole.
export function FunnelGrid() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const flows = el.querySelectorAll<SVGPathElement>("g.spokes-flow path");
    flows.forEach((p, i) => {
      // Stagger across a 5s loop so paths don't fire in sync.
      const delay = ((i * 0.31) % 5).toFixed(2);
      p.style.animation = `fg-rain 5s ${delay}s linear infinite`;
      // Soft glow so streaks read clearly on cream bg.
      p.style.filter = "drop-shadow(0 0 4px rgba(255,140,70,0.45))";
    });
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[760px] overflow-hidden"
    >
      {/* Background gradient — orange radial glow at low opacity, fades in.
          Equivalent to framer-ghv5fp (initial 0.001 → 0.2 over 1s, delay 1.2s). */}
      <div
        className="absolute inset-0 fg-bg-gradient"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(255,122,58,0.55) 0%, rgba(255,90,31,0.25) 30%, transparent 65%)",
        }}
      />

      <div
        className="absolute inset-0"
        dangerouslySetInnerHTML={{ __html: FUNNEL_SVG }}
      />

      {/* Top fade so the grid blends into hero text area */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-cream to-transparent" />

      <style>{`
        /* Streak slides along each path: from start (outer edge) to end (hole). */
        @keyframes fg-rain {
          0%   { stroke-dashoffset: 0; opacity: 0; }
          10%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { stroke-dashoffset: -1; opacity: 0; }
        }
        @keyframes fg-bg-fade {
          from { opacity: 0; }
          to   { opacity: 0.2; }
        }
        .fg-bg-gradient {
          opacity: 0;
          animation: fg-bg-fade 1s 1.2s cubic-bezier(0.12,0.23,0.5,1) forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          g.spokes-flow path { animation: none !important; }
          .fg-bg-gradient { animation: none; opacity: 0.2; }
        }
      `}</style>
    </div>
  );
}
