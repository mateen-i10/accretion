"use client";

import { Check } from "./icons";

/* ── Faded background task data (3 columns) ──────────────────────────── */
const col1: Task[] = [
  { id: "#UI007", title: "Design onboarding flow",                tag: "Design",      tagType: "pink",   priority: "Backlog" },
  { id: "#BC005", title: "Review customer support tickets",       tag: "Project",     tagType: "purple", priority: "Backlog" },
  { id: "#UI012", title: "Set up analytics dashboard for Q4",     tag: "Design",      tagType: "pink",   priority: "Backlog" },
  { id: "#BC008", title: "Prepare onboarding docs for new team",  tag: "Project",     tagType: "purple", priority: "Backlog" },
];
const col2: Task[] = [
  { id: "#UI003", title: "Write product launch announcement",     tag: "Development", tagType: "blue",   priority: "Backlog" },
  { id: "#FTC09", title: "Update pricing page layout",            tag: "",            tagType: "",       priority: "Backlog" },
  { id: "#UI015", title: "Audit mobile app performance metrics",  tag: "Development", tagType: "blue",   priority: "Backlog" },
  { id: "#BC010", title: "Draft Q4 project milestones report",    tag: "",            tagType: "",       priority: "Backlog" },
];
const col3: Task[] = [
  { id: "#UI009", title: "Create wireframes for settings page",   tag: "Design",      tagType: "pink",   priority: "Backlog" },
  { id: "#FTC11", title: "Migrate database to new schema",        tag: "Development", tagType: "blue",   priority: "Backlog" },
  { id: "#BC003", title: "Set up automated email workflows",      tag: "Project",     tagType: "purple", priority: "Backlog" },
  { id: "#UI017", title: "Review and update brand guidelines",    tag: "Design",      tagType: "pink",   priority: "Backlog" },
];

const TAG_COLORS: Record<string, { bg: string; text: string }> = {
  pink:   { bg: "rgba(236,72,153,0.1)",  text: "rgb(219,39,119)"  },
  blue:   { bg: "rgba(59,130,246,0.1)",  text: "rgb(96,165,250)"  },
  purple: { bg: "rgba(139,92,246,0.1)",  text: "rgb(167,139,250)" },
};

interface Task {
  id: string;
  title: string;
  tag: string;
  tagType: string;
  priority: string;
}

/* ── Compact background task card (faded behind the overlay) ────────── */
function TaskCard({ id, title, tag, tagType, priority }: Task) {
  const tagColor = TAG_COLORS[tagType];
  return (
    <div
      className="shrink-0"
      style={{
        background: "linear-gradient(rgb(23,23,23) 0%, rgb(15,15,15) 31%)",
        borderRadius: "21px",
        padding: "18px 20px",
        width: "280px",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <p style={{ fontSize: "14px", fontWeight: 500, color: "white", margin: 0, marginBottom: "12px", lineHeight: 1.3, whiteSpace: "normal" }}>
        {title}
      </p>
      <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
        <span style={{ background: "rgb(28,28,28)", color: "rgb(212,212,212)", borderRadius: "999px", padding: "3px 9px", fontSize: "10.5px" }}>{id}</span>
        {tag && tagColor && (
          <span style={{ background: tagColor.bg, color: tagColor.text, borderRadius: "999px", padding: "3px 9px", fontSize: "10.5px" }}>{tag}</span>
        )}
        <span style={{ background: "rgba(226,107,8,0.1)", color: "rgb(226,107,8)", borderRadius: "999px", padding: "3px 9px", fontSize: "10.5px" }}>{priority}</span>
      </div>
    </div>
  );
}

function ScrollColumn({ tasks, duration, delay }: { tasks: Task[]; duration: number; delay: number }) {
  const doubled = [...tasks, ...tasks];
  return (
    <div className="flex flex-col gap-4" style={{ animation: `scrollUp ${duration}s linear ${delay}s infinite` }}>
      {doubled.map((t, i) => <TaskCard key={i} {...t} />)}
    </div>
  );
}

/* ── Focused central task card (sharp, on top of overlay) ───────────── */
function FocusedCard() {
  return (
    <div
      style={{
        background: "linear-gradient(rgb(28,28,28) 0%, rgb(17,17,17) 100%)",
        borderRadius: "24px",
        padding: "22px 24px",
        width: "340px",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 30px 60px -20px rgba(0,0,0,0.8)",
      }}
    >
      {/* Title */}
      <h6 style={{ fontSize: "17px", fontWeight: 600, color: "white", margin: 0, marginBottom: "14px" }}>
        Design onboarding flow
      </h6>

      {/* Badges */}
      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "20px" }}>
        <span style={{ background: "rgb(28,28,28)", color: "rgb(212,212,212)", borderRadius: "999px", padding: "4px 11px", fontSize: "11.5px", border: "1px solid rgba(255,255,255,0.06)" }}>#UI007</span>
        <span style={{ background: "rgba(236,72,153,0.12)", color: "rgb(236,72,153)", borderRadius: "999px", padding: "4px 11px", fontSize: "11.5px" }}>Design</span>
        <span style={{ background: "rgba(226,107,8,0.12)", color: "rgb(226,107,8)", borderRadius: "999px", padding: "4px 11px", fontSize: "11.5px" }}>Backlog</span>
      </div>

      {/* Avatars + meta */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {/* Avatar stack */}
        <div style={{ display: "flex" }}>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg,#f59e0b,#dc2626)", border: "2px solid #161616" }} />
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg,#8b5cf6,#ec4899)", border: "2px solid #161616", marginLeft: -8 }} />
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg,#10b981,#06b6d4)", border: "2px solid #161616", marginLeft: -8 }} />
          {/* + indicator */}
          <div style={{
            width: 28, height: 28, borderRadius: "50%",
            border: "1px dashed rgba(255,255,255,0.25)",
            marginLeft: -8,
            display: "grid", placeItems: "center",
            color: "rgba(255,255,255,0.5)", fontSize: 14,
          }}>+</div>
        </div>

        <div style={{ marginLeft: "auto", display: "flex", gap: "12px", color: "rgba(255,255,255,0.4)", fontSize: 12, alignItems: "center" }}>
          {/* Attachment */}
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/>
            </svg>
            2
          </span>
          {/* Comments */}
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
            3
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Glowing "+" pill (the AI input bar with rainbow gradient border) ── */
function GlowingPlus() {
  return (
    <div
      style={{
        position: "relative",
        padding: "2px",
        borderRadius: "999px",
        background: "conic-gradient(from 200deg at 50% 50%, #ff5a1f 0%, #ff7a3a 15%, #ec4899 35%, #a855f7 55%, #ec4899 75%, #ff5a1f 100%)",
        width: "340px",
        boxShadow:
          "0 0 40px 4px rgba(255,90,31,0.35), 0 0 80px 10px rgba(236,72,153,0.18)",
      }}
    >
      <div
        style={{
          background: "rgb(15,15,15)",
          borderRadius: "999px",
          height: "62px",
          display: "grid",
          placeItems: "center",
        }}
      >
        <div
          style={{
            width: 34, height: 34, borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.18)",
            display: "grid", placeItems: "center",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

const features = [
  { title: "Generate tasks from context",         body: "Create new tasks instantly from docs, chats, or voice notes with AI." },
  { title: "Summarize conversations and updates", body: "Turn long threads, comments, or project updates into quick summaries." },
  { title: "Autofill and extract details",        body: "Populate fields automatically and pull key info from text with AI." },
  { title: "Smart search across everything",      body: "Find issues, tasks, or feedback with semantic AI-powered search." },
];

export function AccretionAI() {
  return (
    <section className="bg-ink text-white overflow-hidden">

      {/* ── HERO AREA ─────────────────────────────────────────────────── */}
      <div className="relative" style={{ height: "780px" }}>

        {/* Layer 1: faded background card columns */}
        <div className="absolute inset-0 flex justify-center gap-6 pt-10 overflow-hidden">
          <div className="hidden md:block overflow-hidden" style={{ height: "780px" }}>
            <ScrollColumn tasks={col1} duration={32} delay={0} />
          </div>
          <div className="overflow-hidden" style={{ height: "780px" }}>
            <ScrollColumn tasks={col2} duration={26} delay={-6} />
          </div>
          <div className="hidden md:block overflow-hidden" style={{ height: "780px" }}>
            <ScrollColumn tasks={col3} duration={28} delay={-12} />
          </div>
        </div>

        {/* Layer 2: STRONG radial darkening overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(50% 45% at 50% 42%, rgba(10,10,10,0) 0%, rgba(10,10,10,0.55) 28%, rgba(10,10,10,0.88) 55%, rgb(10,10,10) 80%)",
          }}
        />

        {/* Layer 3: extra side-fade so columns truly fade off */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgb(10,10,10) 0%, rgba(10,10,10,0.3) 22%, rgba(10,10,10,0) 38%, rgba(10,10,10,0) 62%, rgba(10,10,10,0.3) 78%, rgb(10,10,10) 100%)",
          }}
        />

        {/* Layer 4: focal content (focused card + glowing + + title) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6">
          {/* Focused card */}
          <div className="mb-6">
            <FocusedCard />
          </div>

          {/* Glowing + button */}
          <div className="mb-14">
            <GlowingPlus />
          </div>

          {/* Title block */}
          <div className="text-center">
            <p className="text-white/60 text-[14px]">Say hello to</p>
            <h2 className="mt-2 text-[64px] md:text-[88px] font-semibold leading-none tracking-tight bg-gradient-to-r from-orange via-orange-2 to-amber-200 bg-clip-text text-transparent">
              Accretion AI
            </h2>
            <p className="mt-6 text-white/60 text-[16px] max-w-xl mx-auto">
              Automate repetitive tasks, get smart reminders, and free up time for real progress.
            </p>
          </div>
        </div>
      </div>

      {/* ── FEATURE CARDS ────────────────────────────────────────────── */}
      <div className="mx-auto px-6 pt-12 pb-24 grid max-w-[1461px] gap-y-10 gap-x-8 md:grid-cols-4">
        {features.map((f) => (
          <div key={f.title}>
            <div
              className="size-14 rounded-2xl grid place-items-center"
              style={{ background: "linear-gradient(rgb(38,38,38) 0%, rgb(15,15,15) 100%)" }}
            >
              <Check className="size-5 text-orange" />
            </div>
            <h4 className="mt-5 text-[16px] font-semibold">{f.title}</h4>
            <p className="mt-2 text-[13.5px] leading-relaxed" style={{ color: "rgb(161,161,161)" }}>
              {f.body}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
