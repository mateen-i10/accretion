"use client";

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function NietzscheLogo(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.4" />
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a) => {
        const rad = (a * Math.PI) / 180;
        const cos = parseFloat(Math.cos(rad).toFixed(4));
        const sin = parseFloat(Math.sin(rad).toFixed(4));
        return (
          <line
            key={a}
            x1={12 + 4.2 * cos}
            y1={12 + 4.2 * sin}
            x2={12 + 9.5 * cos}
            y2={12 + 9.5 * sin}
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

function AcmeCorpLogo(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 1.5 L13.8 9.8 L22 12 L13.8 14.2 L12 22.5 L10.2 14.2 L2 12 L10.2 9.8 Z" />
    </svg>
  );
}

function LuminousLogo(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M3 7.5 L15.5 7.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M5.5 12 L18 12" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M8 16.5 L20.5 16.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

function SpheruleLogo(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 2.5 C7 2.5 3.5 7 3.5 12 C3.5 17 7 21.5 12 21.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M12 2.5 C17 2.5 20.5 7 20.5 12 C20.5 17 17 21.5 12 21.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <line x1="2.5" y1="12" x2="21.5" y2="12" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function SisyphusLogo(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14.5 2 L7 13 L11.5 13 L9.5 22 L17 11 L12.5 11 Z" />
    </svg>
  );
}

function CapsuleLogo(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="8.5" cy="12" r="6.5" fill="currentColor" fillOpacity="0.35" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="15.5" cy="12" r="6.5" fill="currentColor" fillOpacity="0.75" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

const logos = [
  { name: "Nietzsche", Icon: NietzscheLogo },
  { name: "Acme Corp", Icon: AcmeCorpLogo },
  { name: "Luminous",  Icon: LuminousLogo },
  { name: "Spherule",  Icon: SpheruleLogo },
  { name: "Sisyphus",  Icon: SisyphusLogo },
  { name: "Capsule",   Icon: CapsuleLogo },
];

export function TrustedBy() {
  // Triple the array so the marquee never visibly seams
  const tripled = [...logos, ...logos, ...logos];

  return (
    // Matches original: ~850px wide, centered, tight vertical rhythm
    <div className="mx-auto max-w-[850px] px-6 mt-16">
      <p className="text-center text-[12px] font-normal text-ink/85">
        Trusted by teams everywhere
      </p>
      <div
        className="mt-6 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        {/* Each logo cell ≈ 137px (matches the original li width). gap-20 = 80px (matches original ul gap) */}
        <ul className="flex items-center gap-20 animate-marquee whitespace-nowrap text-ink list-none m-0 p-0">
          {tripled.map(({ name, Icon }, i) => (
            <li
              key={i}
              className="flex items-center justify-center gap-2 shrink-0"
              style={{ minWidth: "137px" }}
            >
              <Icon className="size-6 shrink-0" />
              <span className="text-[20px] font-semibold tracking-tight leading-none">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
