"use client";

import { CursorIcon, FrameIcon, MonitorIcon, PuzzleIcon } from "./icons";

/* ── Phone Mockup — uses the real Framer image ───────────────────────── */
function PhoneMockup() {
  return (
    <div className="absolute inset-x-0 bottom-0 top-[100px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://framerusercontent.com/images/sYgrMK32t75yrfeDiPBHgGkE0.png"
        alt="Mobile app preview"
        width={810}
        height={550}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center top",
          borderRadius: "inherit",
        }}
      />
    </div>
  );
}

/* ── Smart Automation Pipeline ────────────────────────────────────────── */
function AutomationPipeline() {
  const steps = [
    "Capture data automatically",
    "Analyze with AI",
    "Categorize tasks instantly",
    "Generate organized output",
  ];
  return (
    <div className="absolute inset-x-0 top-[160px] bottom-[120px] flex flex-col items-center justify-center gap-0">
      {steps.map((label, i) => (
        <div key={label} className="flex flex-col items-center w-full px-5">
          {/* Step pill */}
          <div className="w-full flex items-center gap-3 bg-black/35 ring-1 ring-white/15 backdrop-blur-sm rounded-full px-4 py-3">
            {/* Check circle */}
            <div className="shrink-0 size-6 rounded-full bg-[#2d1a0e] ring-1 ring-orange/60 flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#e05c2a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <span className="text-[13px] text-white font-medium">{label}</span>
          </div>
          {/* Connecting line (not after last) */}
          {i < steps.length - 1 && (
            <div className="w-px h-6 bg-white/15" />
          )}
        </div>
      ))}
    </div>
  );
}

/* ── Main Component ───────────────────────────────────────────────────── */
export function Essentials() {
  return (
    <section
      id="features"
      className="relative z-10 bg-ink text-white px-6 pt-28 pb-24"
    >
      {/* Section title */}
      <div className="mx-auto max-w-[840px] text-center">
        <h2 className="text-[44px] md:text-[56px] font-semibold leading-[1.05] tracking-tight">
          All the essentials for modern
          <br /> productivity
        </h2>
        <p className="mt-5 text-white/60 text-[16px]">
          Mobile, automation, workflows, and insights - all in sync and ready to go.
        </p>
      </div>

      {/*
        Grid layout (matches original):
        ┌──────────────┬────────────┬──────────────┐
        │              │Performance │              │
        │  Mobile App  ├────────────│ Smart Auto   │
        │  (big left)  │Live Collab │ (orange tall)│
        └──────────────┴────────────┴──────────────┘
        cols: 6 / 3 / 3
      */}
      <div className="mx-auto mt-14 grid max-w-[1461px] gap-2 md:grid-cols-12">

        {/* ── BIG LEFT: Mobile app (row-span-2) ─────────────────────────── */}
        <div className="md:col-start-1 md:col-end-7 md:row-start-1 md:row-end-3 rounded-2xl bg-[#111] ring-1 ring-white/5 p-7 relative overflow-hidden min-h-[632px]">
          <h3 className="text-[22px] font-semibold">Work anywhere with our mobile app</h3>
          <p className="mt-2 text-white/55 text-[14px] max-w-sm">
            Stay connected and productive on the go – the power of our platform in your pocket.
          </p>
          <PhoneMockup />
        </div>

        {/* ── MIDDLE TOP: Performance ─────────────────────────────────────── */}
        <div className="md:col-start-7 md:col-end-10 md:row-start-1 rounded-2xl bg-[#111] ring-1 ring-white/5 relative overflow-hidden min-h-[310px]">
          {/* Speed lines */}
          <div className="absolute inset-0">
            <svg viewBox="0 0 400 280" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
              {Array.from({ length: 16 }).map((_, i) => {
                const startX = 10 + i * 24;
                const startY = 10 + i * 4;
                const endX = 390;
                const endY = 40 + i * 14;
                const hue = 15 + i * 4;
                const lightness = 50 + i * 1.5;
                return (
                  <line
                    key={i}
                    x1={startX}
                    y1={startY}
                    x2={endX}
                    y2={endY}
                    stroke={`hsl(${hue}, 90%, ${lightness}%)`}
                    strokeWidth={1.6 - i * 0.04}
                    strokeLinecap="round"
                    opacity={0.9 - i * 0.03}
                  />
                );
              })}
            </svg>
          </div>
          <div className="absolute inset-x-7 bottom-6">
            <h3 className="text-[20px] font-semibold leading-tight">Performance that scales with you</h3>
            <p className="mt-2 text-white/55 text-[13px]">
              Whether you&apos;re a 3-person startup or a growing enterprise.
            </p>
          </div>
        </div>

        {/* ── MIDDLE BOTTOM: Live collaboration ──────────────────────────── */}
        <div className="md:col-start-7 md:col-end-10 md:row-start-2 rounded-2xl bg-[#111] ring-1 ring-white/5 p-6 relative overflow-hidden min-h-[310px]">
          <h3 className="text-[20px] font-semibold leading-tight">Live collaboration</h3>
          <p className="mt-2 text-white/55 text-[13px] max-w-[220px]">
            Team members stay aligned with real-time updates, comments, and notifications.
          </p>

          {/* Collaboration card mockup */}
          <div className="absolute bottom-5 left-5 right-5">
            <div className="bg-[#1a1a1a] rounded-2xl p-4 ring-1 ring-white/8">
              {/* Header row */}
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#e05c2a] text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">Erica</span>
                <span className="text-[10px] text-white/40">13 Nov, 2025</span>
                <span className="ml-auto bg-white/10 text-white/60 text-[10px] px-2 py-0.5 rounded-full">Medium</span>
              </div>
              {/* Task title */}
              <p className="text-[13px] text-white font-medium mb-3">Design onboard</p>
              {/* Avatars + stats */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-1.5">
                  <div className="size-6 rounded-full bg-[#10b981] ring-1 ring-black" />
                  <div className="size-6 rounded-full bg-[#f59e0b] ring-1 ring-black" />
                </div>
                <span className="text-[10px] text-white/40 flex items-center gap-0.5">
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                  3
                </span>
                <span className="text-[10px] text-white/40 flex items-center gap-0.5">
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
                  2
                </span>
              </div>
            </div>
            {/* Samuel floating label */}
            <div className="absolute -top-3 -right-1">
              <span className="bg-[#e05c2a] text-white text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-lg">
                Samuel
              </span>
            </div>
          </div>
        </div>

        {/* ── RIGHT TALL: Smart automation (orange, row-span-2) ──────────── */}
        <div className="md:col-start-10 md:col-end-13 md:row-start-1 md:row-end-3 rounded-2xl relative overflow-hidden min-h-[632px]"
          style={{ background: "linear-gradient(160deg, #e05c2a 0%, #c0390a 40%, #8b1a00 100%)" }}>

          {/* Subtle radial glow top-right */}
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-30"
            style={{ background: "radial-gradient(circle, #ff8c4a, transparent)" }} />

          {/* Title + description at top */}
          <div className="relative z-10 p-7 pt-8">
            <h3 className="text-[22px] font-semibold text-white">Smart automation</h3>
            <p className="mt-2 text-white/80 text-[13.5px] leading-snug">
              Reduce manual tasks with AI‑driven workflows (like expense categorization or time tracking).
            </p>
          </div>

          {/* Pipeline steps */}
          <AutomationPipeline />
        </div>
      </div>

      {/* USP minis row — 4 small features */}
      <div className="mx-auto mt-16 grid max-w-[1461px] gap-y-10 gap-x-8 md:grid-cols-4">
        {[
          { icon: <CursorIcon className="size-5 text-orange" />, title: "Custom workflows", body: "Tailored to match your team's unique process with ease." },
          { icon: <MonitorIcon className="size-5 text-orange" />, title: "Clear insights",   body: "Intuitive dashboards and analytics to help you track progress and make informed decisions." },
          { icon: <PuzzleIcon  className="size-5 text-orange" />, title: "Tool integrations", body: "Seamlessly connects with popular apps (e.g. Slack, Zoom, Mailchimp)." },
          { icon: <FrameIcon   className="size-5 text-orange" />, title: "Adaptable & scalable", body: "Designed for teams of all sizes with customization options to match your workflow." },
        ].map((f) => (
          <div key={f.title}>
            <div className="size-11 rounded-xl bg-white/5 ring-1 ring-white/5 grid place-items-center">
              {f.icon}
            </div>
            <h4 className="mt-4 text-[16px] font-semibold">{f.title}</h4>
            <p className="mt-1.5 text-[13.5px] text-white/55">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
