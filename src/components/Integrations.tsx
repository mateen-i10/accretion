import { LogoMark } from "./icons";
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/* ── Brand-style icon placeholders (simplified monochrome marks) ─────── */
function GitHubIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.02c-3.2.69-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18.92-.26 1.92-.39 2.91-.39s1.99.13 2.91.39c2.21-1.49 3.18-1.18 3.18-1.18.63 1.6.23 2.78.11 3.07.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.79 1.06.79 2.14v3.17c0 .31.21.67.8.56 4.56-1.52 7.85-5.83 7.85-10.91C23.5 5.65 18.35.5 12 .5z"/>
    </svg>
  );
}
function GitLabIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 21.5l3.7-11.4H8.3L12 21.5zm-9-8.1l1.1-3.4 4.6 11.5L3 13.4zm21 0l-5.7 8.1 4.6-11.5L24 13.4zM7.4 2.5l3.6 11.1H4L7.4 2.5zm9.2 0L20 13.6h-7.1l3.7-11.1z"/>
    </svg>
  );
}
function BitbucketIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M2.65 3a.77.77 0 00-.76.89l2.85 17.34a1 1 0 001 .84h13.65a.77.77 0 00.76-.65l2.85-17.53a.77.77 0 00-.76-.89zm11.7 12.36H9.7l-1.25-6.51h7l-1.1 6.51z"/>
    </svg>
  );
}
function JiraIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M11.53 2C11.53 4.45 13.51 6.43 15.96 6.43H17.5V7.92C17.5 10.37 19.48 12.35 21.93 12.35V2.78C21.93 2.35 21.58 2 21.15 2H11.53Z"/>
      <path d="M6.77 6.79C6.77 9.24 8.75 11.22 11.2 11.22H12.74V12.71C12.74 15.16 14.72 17.14 17.17 17.14V7.57C17.17 7.14 16.82 6.79 16.39 6.79H6.77Z"/>
      <path d="M2 11.58C2 14.03 3.98 16.01 6.43 16.01H7.97V17.5C7.97 19.95 9.95 21.93 12.4 21.93V12.36C12.4 11.93 12.05 11.58 11.62 11.58H2Z"/>
    </svg>
  );
}
function SentryIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 3l9 16H3l9-16z" />
      <path d="M12 9l5 8h-3" />
    </svg>
  );
}
function CircleCIIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="3" fill="currentColor" />
    </svg>
  );
}
function ZendeskIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M11 8L2 20h9V8zm2 14h9c0-2.49-2.01-4.5-4.5-4.5S13 19.51 13 22zm0-18h9L13 16V4zm-2 2c0 2.49-2.01 4.5-4.5 4.5S2 8.49 2 6h9z"/>
    </svg>
  );
}
function IntercomIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <line x1="7" y1="8" x2="7" y2="16" strokeLinecap="round" />
      <line x1="11" y1="6" x2="11" y2="18" strokeLinecap="round" />
      <line x1="15" y1="6" x2="15" y2="18" strokeLinecap="round" />
      <line x1="19" y1="8" x2="19" y2="16" strokeLinecap="round" />
    </svg>
  );
}
function HubspotIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
      <circle cx="17" cy="14" r="4" />
      <circle cx="6" cy="6" r="2" />
      <line x1="6" y1="8" x2="6" y2="14" strokeLinecap="round" />
      <line x1="8" y1="14" x2="13" y2="14" strokeLinecap="round" />
      <line x1="17" y1="6" x2="17" y2="10" strokeLinecap="round" />
    </svg>
  );
}
function FigmaIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M8.5 2A3.5 3.5 0 005 5.5 3.5 3.5 0 005 8a3.5 3.5 0 000 4.5A3.5 3.5 0 005 17a3.5 3.5 0 003.5 3.5 3.5 3.5 0 003.5-3.5v-3a3.5 3.5 0 003.5 1.5 3.5 3.5 0 100-7A3.5 3.5 0 0019 5.5 3.5 3.5 0 0015.5 2H8.5z" opacity=".9"/>
    </svg>
  );
}
function CanvaIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M15 9c-1-1.5-2.5-2-4-1.5-2 .7-3 3-2.5 5.5.5 2.5 2.7 4 4.7 3.3 1.5-.5 2.3-2 2.3-3.3" strokeLinecap="round" />
    </svg>
  );
}
function MiroIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M16 2c-1 0-1.5.5-1 1.5l3 6c.5 1 0 1.5-1 1.5-1.5 0-2-.5-2-1.5l-2-6c-.3-1-.8-1.5-2-1.5-1 0-1.5.5-1 1.5l2 7c.4 1 0 1.5-1 1.5-1.5 0-2-.5-2-1.5l-1-7c-.2-1-.7-1.5-2-1.5-1.5 0-2 .5-1.5 1.5L5 14c.3 1-.2 1.5-1 1.5C2.5 15.5 2 16 2 17v3c0 1 .5 1.5 1.5 1.5h17c1 0 1.5-.5 1.5-1.5V3.5c0-1-.5-1.5-1.5-1.5H16z" opacity=".9"/>
    </svg>
  );
}
function SketchIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 2L2 9l10 13L22 9 12 2zm0 2.5L19 9h-4l-3 4.5L9 9H5l7-4.5zM9 10h6l-3 8-3-8z" opacity=".9"/>
    </svg>
  );
}
function LoomIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18M3 12h18M5 6l14 12M19 6L5 18" />
    </svg>
  );
}
function GoogleAnalyticsIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <rect x="15" y="4" width="5" height="16" rx="2" opacity=".9"/>
      <rect x="9" y="9" width="5" height="11" rx="2" opacity=".7"/>
      <circle cx="6" cy="18" r="2.5" />
    </svg>
  );
}
function HotjarIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
      <path d="M12 3c-3 4-4 6-4 9a4 4 0 008 0c0-3-1-5-4-9z" />
      <path d="M12 14c-1.5 1.5-2 2.5-2 4a2 2 0 004 0c0-1.5-.5-2.5-2-4z" />
    </svg>
  );
}
function MixpanelIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <circle cx="4" cy="12" r="2.5" />
      <circle cx="12" cy="12" r="2.5" />
      <circle cx="20" cy="12" r="2.5" />
    </svg>
  );
}

/* ── Tool → icon mapping ─────────────────────────────────────────────── */
const ICONS: Record<string, (p: IconProps) => React.JSX.Element> = {
  GitHub: GitHubIcon,
  GitLab: GitLabIcon,
  Bitbucket: BitbucketIcon,
  Jira: JiraIcon,
  Sentry: SentryIcon,
  CircleCI: CircleCIIcon,
  Zendesk: ZendeskIcon,
  Intercom: IntercomIcon,
  Hubspot: HubspotIcon,
  Figma: FigmaIcon,
  Canva: CanvaIcon,
  Miro: MiroIcon,
  Sketch: SketchIcon,
  Loom: LoomIcon,
  "Google Analytics": GoogleAnalyticsIcon,
  Hotjar: HotjarIcon,
  Mixpanel: MixpanelIcon,
};

/* ── Card data ───────────────────────────────────────────────────────── */
interface Group {
  title: string;
  body: string;
  tools: string[];
  count: number;
}

const left: Group[] = [
  {
    title: "Engineering",
    body: "Sync your code, issues, and deployments directly into your workflow.",
    tools: ["GitHub", "GitLab", "Bitbucket", "Jira", "Sentry", "CircleCI"],
    count: 6,
  },
  {
    title: "Customer Experience",
    body: "Connect support and CRM tools to turn conversations into action.",
    tools: ["Zendesk", "Intercom", "Hubspot"],
    count: 3,
  },
];

const right: Group[] = [
  {
    title: "Media & Design",
    body: "Bring designs, assets, and feedback into your projects seamlessly.",
    tools: ["Figma", "Canva", "Miro", "Sketch", "Loom"],
    count: 5,
  },
  {
    title: "Analytics",
    body: "Connect your data tools to track performance and uncover insights.",
    tools: ["Google Analytics", "Hotjar", "Mixpanel"],
    count: 3,
  },
];

/* ── A single integration "pill" (icon + name) ───────────────────────── */
function ToolPill({ name }: { name: string }) {
  const Icon = ICONS[name];
  return (
    <div
      className="inline-flex items-center gap-3 shrink-0"
      style={{
        background: "linear-gradient(180deg, rgb(38,38,38) 0%, rgb(15,15,15) 100%)",
        borderRadius: "16px",
        padding: "12px 16px",
        border: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {Icon && <Icon className="size-4 text-white/85" />}
      <span className="text-[13px] font-medium text-white">{name}</span>
    </div>
  );
}

/* ── A single category card with corner count badge ──────────────────── */
function CategoryCard({ group }: { group: Group }) {
  return (
    <div
      className="relative"
      style={{
        background: "rgb(10,10,10)",
        borderRadius: "20px",
        padding: "24px",
        border: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* Corner count badge (notched bottom-left rounded) */}
      <div
        className="absolute top-0 right-0 grid place-items-center text-[14px] text-white/55"
        style={{
          width: "52px",
          height: "47px",
          borderRadius: "0 20px 0 16px",
          background: "rgba(255,255,255,0.025)",
          borderLeft: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        {group.count}
      </div>

      <h3 className="text-[20px] font-semibold pr-12">{group.title}</h3>
      <p className="mt-2 text-[14px] text-white/55 max-w-[400px]">{group.body}</p>

      <div className="mt-6 flex flex-wrap gap-2.5">
        {group.tools.map((t) => (
          <ToolPill key={t} name={t} />
        ))}
      </div>
    </div>
  );
}

/* ── Main section ────────────────────────────────────────────────────── */
export function Integrations() {
  return (
    <section
      id="integrations"
      className="bg-ink text-white pt-24 pb-24 px-6 relative overflow-hidden"
    >
      {/* Title block */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-[44px] md:text-[58px] font-semibold tracking-tight leading-tight">
          Integrations
        </h2>
        <p className="mt-4 text-white/55 text-[15px] inline-flex items-center justify-center gap-2">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1"
            style={{
              background: "linear-gradient(180deg, rgb(38,38,38) 0%, rgb(15,15,15) 100%)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <LogoMark className="size-3.5 text-orange" />
            <span className="text-white font-semibold text-[13px]">17</span>
          </span>
          <span>
            integrations and adding more{" "}
            <span className="text-white font-semibold">every month</span>
          </span>
        </p>
      </div>

      {/* 3-column layout: left cards / center hub image / right cards */}
      <div className="mx-auto mt-12 max-w-[1461px] grid gap-3 lg:grid-cols-[1fr_auto_1fr] items-start">

        {/* LEFT column: 2 stacked cards */}
        <div className="flex flex-col gap-3">
          {left.map((g) => (
            <CategoryCard key={g.title} group={g} />
          ))}
        </div>

        {/* CENTER hub card */}
        <div className="hidden lg:block min-w-[460px]">
          <div
            className="relative overflow-hidden h-full"
            style={{
              background:
                "linear-gradient(180deg, rgb(23,23,23) 65%, rgb(206,48,0) 100%)",
              borderRadius: "16px",
              minHeight: "520px",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            {/* Layer 1: converging lines image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://framerusercontent.com/images/zqhgN3PVfzbqecQwtwaBJ5c3YX0.png"
              alt="Lines converging into a central point"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center bottom",
                borderRadius: "inherit",
              }}
            />

            {/* Layer 2a: CSS-based orange radial glow at bottom — pulsing */}
            <div
              className="absolute pointer-events-none hub-glow-pulse"
              style={{
                left: 0,
                right: 0,
                bottom: 0,
                height: "65%",
                background:
                  "radial-gradient(80% 100% at 50% 100%, rgba(255,98,7,0.6) 0%, rgba(255,98,7,0.28) 32%, rgba(255,98,7,0) 65%)",
              }}
            />

            {/* Layer 2b: inner hotter core — flickering at a different speed */}
            <div
              className="absolute pointer-events-none hub-glow-flicker"
              style={{
                left: 0,
                right: 0,
                bottom: 0,
                height: "45%",
                background:
                  "radial-gradient(50% 100% at 50% 100%, rgba(255,180,80,0.55) 0%, rgba(255,98,7,0.35) 35%, rgba(255,98,7,0) 70%)",
                mixBlendMode: "screen",
              }}
            />

            {/* Layer 2c: original Framer glow image (extra texture) — also flickers */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://framerusercontent.com/images/5jCTZkN5qTJXPF3cMebHL9Q68vo.png"
              alt=""
              aria-hidden
              className="hub-glow-flicker"
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                width: "100%",
                height: "55%",
                objectFit: "cover",
                objectPosition: "center bottom",
                pointerEvents: "none",
                mixBlendMode: "screen",
                animationDuration: "7s",
                animationDelay: "-2s",
              }}
            />

            {/* Layer 3: dust texture (subtle) */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://framerusercontent.com/images/LnPF8gTRqFtW05iYoI2PqE8sBk.png"
              alt=""
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.49,
                mixBlendMode: "screen",
                pointerEvents: "none",
              }}
            />

            {/* Layer 4: centered "Logo Mark" badge */}
            <div
              className="absolute"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div
                className="relative grid place-items-center"
                style={{
                  width: "96px",
                  height: "96px",
                  borderRadius: "20px",
                  background:
                    "linear-gradient(180deg, rgb(38,38,38) 0%, rgb(15,15,15) 100%)",
                  boxShadow:
                    "0 10px 40px 0 rgba(255,98,7,0.45), 0 0 0 1px rgba(255,255,255,0.06) inset",
                }}
              >
                {/* RimLight (orange radial from bottom) */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    borderRadius: "inherit",
                    background:
                      "radial-gradient(41% 40% at 50% 100%, rgb(255,98,7) 6%, rgba(255,98,7,0) 100%)",
                  }}
                />
                {/* Inner dark fill */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    inset: "1px",
                    borderRadius: "19px",
                    background: "rgb(23,23,23)",
                  }}
                />
                {/* Inner orange highlight */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    borderRadius: "inherit",
                    background:
                      "radial-gradient(100% 100% at 50% 100%, rgb(255,98,7) 0%, rgba(255,98,8,0) 100%)",
                    opacity: 0.18,
                  }}
                />
                {/* Accretion brand mark — bold filled circle with diagonal slash */}
                <svg
                  className="relative z-10"
                  viewBox="0 0 32 32"
                  fill="none"
                  width="48"
                  height="48"
                  style={{ pointerEvents: "none" }}
                >
                  {/* Filled rounded circle */}
                  <circle cx="16" cy="16" r="11.5" fill="white" />
                  {/* Dark cut-out diagonal slash */}
                  <path
                    d="M9 23 L23 9"
                    stroke="rgb(23,23,23)"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT column: 2 stacked cards */}
        <div className="flex flex-col gap-3">
          {right.map((g) => (
            <CategoryCard key={g.title} group={g} />
          ))}
        </div>
      </div>
    </section>
  );
}
