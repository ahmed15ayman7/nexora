import { useId } from "react";
import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

function GoldDefs({
  goldId,
  softId,
}: {
  goldId: string;
  softId: string;
}) {
  return (
    <defs>
      <linearGradient id={goldId} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f6eedb" />
        <stop offset="45%" stopColor="#dfc07b" />
        <stop offset="100%" stopColor="#986c2c" />
      </linearGradient>
      <linearGradient id={softId} x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#e6d49e" />
        <stop offset="100%" stopColor="#9a7430" />
      </linearGradient>
    </defs>
  );
}

function Frame({
  goldId,
  softId,
  className,
  children,
}: PropsWithChildren<{
  goldId: string;
  softId: string;
  className?: string;
}>) {
  return (
    <svg
      viewBox="0 0 320 220"
      className={cn("h-auto w-full max-w-[420px] text-gold-400", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <GoldDefs goldId={goldId} softId={softId} />
      {children}
    </svg>
  );
}

function useGoldIds() {
  const raw = useId().replace(/:/g, "");
  return { goldId: `${raw}-g`, softId: `${raw}-s` };
}

/** Smartphone with menu list and stylized steak plate */
export function IllustrationDigitalMenu() {
  const { goldId, softId } = useGoldIds();
  const ug = `url(#${goldId})`;
  const us = `url(#${softId})`;

  return (
    <Frame goldId={goldId} softId={softId}>
      <rect
        x="68"
        y="24"
        width="184"
        height="172"
        rx="18"
        stroke={ug}
        strokeWidth="1.25"
        opacity="0.95"
      />
      <rect x="152" y="34" width="16" height="3" rx="1.5" fill={us} opacity="0.55" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect
            x="84"
            y={58 + i * 26}
            width="108"
            height="6"
            rx="2"
            stroke={ug}
            strokeWidth="0.85"
            opacity={0.45 - i * 0.06}
          />
          <rect
            x="206"
            y={58 + i * 26}
            width="34"
            height="14"
            rx="3"
            stroke={ug}
            strokeWidth="0.85"
            opacity="0.42"
          />
        </g>
      ))}
      <ellipse cx="160" cy="138" rx="36" ry="22" stroke={ug} strokeWidth="1.4" />
      <path
        d="M148 138c8-14 26-14 34 2"
        stroke={ug}
        strokeWidth="1"
        opacity="0.75"
      />
      <path
        d="M140 154h44"
        stroke={ug}
        strokeWidth="1"
        strokeDasharray="3 5"
        opacity="0.65"
      />
      <circle cx="152" cy="132" r="4" stroke={ug} strokeWidth="0.9" />
      <rect x="150" y="184" width="20" height="3" rx="1.5" fill={us} opacity="0.55" />
    </Frame>
  );
}

/** Cart list + simplified map with route and courier */
export function IllustrationTracking() {
  const { goldId, softId } = useGoldIds();
  const ug = `url(#${goldId})`;
  const us = `url(#${softId})`;

  return (
    <Frame goldId={goldId} softId={softId}>
      <rect x="24" y="36" width="118" height="148" rx="12" stroke={ug} strokeWidth="1.1" opacity="0.9" />
      <text x="38" y="58" fill={us} opacity="0.9" fontSize="9" letterSpacing="0.12em">
        CART
      </text>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="38" y={68 + i * 34} width="92" height="22" rx="4" stroke={ug} strokeWidth="0.75" opacity="0.42" />
          <rect x="44" y={76 + i * 34} width="8" height="8" rx="2" stroke={ug} strokeWidth="0.7" opacity="0.55" />
        </g>
      ))}
      <rect x="170" y="36" width="126" height="148" rx="12" stroke={ug} strokeWidth="1.1" opacity="0.9" />
      <path
        d="M185 150c24-40 48-68 88-88"
        stroke={ug}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="4 6"
        className="animate-nexora-dash"
      />
      <path d="M188 58h84M188 78h64M188 98h72" stroke={ug} strokeWidth="0.5" opacity="0.25" />
      <path d="M188 118h52M188 138h70" stroke={ug} strokeWidth="0.5" opacity="0.2" />
      <path
        d="M252 56c10 0 16 8 13 17-5 22-38 54-38 54s-30-34-37-53c-3-11 6-18 17-18h45z"
        stroke={ug}
        strokeWidth="1"
        fill="none"
        opacity="0.85"
      />
      <rect x="210" y="122" width="42" height="18" rx="4" stroke={ug} strokeWidth="1" />
      <circle cx="218" cy="144" r="6" stroke={ug} strokeWidth="0.85" />
      <circle cx="244" cy="144" r="6" stroke={ug} strokeWidth="0.85" />
    </Frame>
  );
}

/** Laptop with analytics bars and KPI strip */
export function IllustrationDashboard() {
  const { goldId, softId } = useGoldIds();
  const ug = `url(#${goldId})`;

  return (
    <Frame goldId={goldId} softId={softId}>
      <path d="M62 174h196l-22 22H84l-22-22z" stroke={ug} strokeWidth="1.1" opacity="0.75" />
      <rect x="74" y="40" width="172" height="118" rx="8" stroke={ug} strokeWidth="1.15" />
      <rect x="84" y="52" width="152" height="10" rx="3" stroke={ug} strokeWidth="0.65" opacity="0.35" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x={98 + i * 24}
          y={102 - i * 6}
          width="14"
          height={32 + i * 6}
          stroke={ug}
          strokeWidth="0.9"
          rx="3"
          fill="none"
          opacity={0.5 + i * 0.08}
        />
      ))}
      <path d="M90 134h146" stroke={ug} strokeWidth="0.6" opacity="0.3" />
      <path
        d="M98 126c18-22 54-42 118-54"
        stroke={ug}
        strokeWidth="1"
        opacity="0.55"
        strokeLinecap="round"
      />
      <circle cx="104" cy="124" r="3" stroke={ug} strokeWidth="0.8" opacity="0.7" />
      <circle cx="168" cy="108" r="3" stroke={ug} strokeWidth="0.8" opacity="0.7" />
      <circle cx="222" cy="96" r="3" stroke={ug} strokeWidth="0.8" opacity="0.7" />
    </Frame>
  );
}

/** Rocket + speed stream */
export function IllustrationSpeed() {
  const { goldId, softId } = useGoldIds();
  const ug = `url(#${goldId})`;

  return (
    <Frame goldId={goldId} softId={softId}>
      <g opacity="0.85">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <path
            key={i}
            d={`M${24 + i * 18} ${120 + i * (i % 2 === 0 ? -4 : 4)} l${88 - i * 14} ${-28 + i * 3}`}
            stroke={ug}
            strokeWidth={0.4 + i * 0.12}
            strokeLinecap="round"
            opacity={0.2 + i * 0.1}
          />
        ))}
      </g>
      <path
        d="M186 148l32-72 10 62-42 10zm32-72l38-28-18 62-28-38"
        stroke={ug}
        strokeWidth="1.25"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M212 118l26-52" stroke={ug} strokeWidth="0.9" opacity="0.55" />
      <circle cx="208" cy="124" r="5" stroke={ug} strokeWidth="1" opacity="0.9" />
      <circle cx="120" cy="122" r="38" stroke={ug} strokeWidth="0.55" opacity="0.15" />
      {[0, 1, 2].map((i) => (
        <circle
          key={i}
          cx={70 + i * 22}
          cy={154 - i * 6}
          r="4"
          stroke={ug}
          strokeWidth="0.6"
          opacity="0.35"
          className="animate-nexora-scan"
          style={{ animationDelay: `${i * 0.25}s` }}
        />
      ))}
    </Frame>
  );
}
