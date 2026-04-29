import { cn } from "@/lib/utils";
import { Rocket } from "lucide-react";

const goldStroke = "#c5a059";

export function PhoneFrame({
  label,
  className,
  children,
}: {
  label?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <div
        className="relative aspect-[10/21] w-[min(132px,100%)] overflow-hidden rounded-[1.65rem] border border-[#c5a059]/55 bg-black/85 p-[7px] shadow-[0_0_40px_rgba(197,160,89,0.08)] ring-1 ring-[#bf953f]/25"
        aria-hidden={label === undefined ? true : undefined}
      >
        <div className="absolute left-1/2 top-2 h-[5px] w-12 -translate-x-1/2 rounded-full bg-zinc-950/90" />
        <div className="flex h-full w-full flex-col overflow-hidden rounded-[1.35rem] border border-[#c5a059]/20 bg-gradient-to-b from-zinc-950 to-black">
          {children}
        </div>
      </div>
      {label ? (
        <span className="text-center font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-gold-400/90">
          {label}
        </span>
      ) : null}
    </div>
  );
}

export function LaptopFrame({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="w-full rounded-t-lg border-x border-t border-[#c5a059]/45 bg-zinc-950/90 px-1.5 pt-2 shadow-[inset_0_1px_0_rgba(197,160,89,0.12)] ring-1 ring-[#bf953f]/20">
        <div className="mb-2 flex gap-1 ps-2">
          {["bg-red-500/80", "bg-amber-500/70", "bg-emerald-500/70"].map(
            (c, i) => (
              <span key={i} className={cn("size-2 rounded-full", c)} />
            ),
          )}
        </div>
        <div className="aspect-[16/10] overflow-hidden rounded-t border border-[#c5a059]/25 bg-black">
          {children}
        </div>
      </div>
      <div className="relative h-[9px] w-[110%] max-w-none rounded-sm border border-[#c5a059]/30 bg-gradient-to-b from-[#171717] to-black shadow-[0_22px_50px_-12px_rgba(197,160,89,0.15)]">
        <div className="absolute inset-x-[38%] -bottom-px h-1 rounded-b bg-[#c5a059]/30" />
      </div>
    </div>
  );
}

/** Feature card: digital menu phone with steak */
export function IllustrationDigitalMenu() {
  return (
    <div className="relative flex flex-1 items-center justify-center p-5">
      <PhoneFrame className="w-[140px]">
        <>
          <div className="border-b border-[#c5a059]/15 px-3 py-3">
            <p className="text-[8px] font-medium uppercase tracking-widest text-white/85">
              Signature
            </p>
          </div>
          <div className="relative flex flex-1 flex-col items-center justify-center gap-2 px-3 py-5">
            <svg
              viewBox="0 0 96 96"
              className="h-20 w-20 shrink-0"
              aria-hidden
            >
              <defs>
                <linearGradient id="stk" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ebe1c8" />
                  <stop offset="45%" stopColor="#c5a059" />
                  <stop offset="100%" stopColor="#6b5330" />
                </linearGradient>
              </defs>
              <ellipse
                cx="48"
                cy="54"
                rx="28"
                ry="18"
                fill="none"
                stroke={goldStroke}
                strokeWidth="1.25"
              />
              <path
                d="M38 54c12-13 42-17 54-10"
                fill="none"
                stroke={goldStroke}
                strokeWidth="1.1"
                opacity="0.55"
              />
              <ellipse
                cx="48"
                cy="54"
                rx="22"
                ry="13"
                fill="url(#stk)"
                opacity="0.9"
              />
              <path
                d="M40 54c14-14 42-17 54-11"
                fill="none"
                stroke="white"
                strokeOpacity="0.14"
                strokeWidth="4"
              />
            </svg>
            <button
              type="button"
              className="rounded-md border border-gold-400/40 bg-black/55 px-2.5 py-1 font-sans text-[8px] font-semibold uppercase tracking-[0.18em] text-gold-200"
            >
              Add to Cart
            </button>
          </div>
          <div className="flex items-center justify-between border-t border-[#c5a059]/15 px-3 py-2">
            <span className="text-[7px] text-white/65">Browse</span>
            <span className="text-[7px] tracking-wider text-gold-400">
              ●●●●
            </span>
          </div>
        </>
      </PhoneFrame>
    </div>
  );
}

/** Cart + tracking map split */
export function IllustrationTracking() {
  return (
    <div className="flex flex-1 flex-col gap-3 p-4">
      <div className="flex gap-2">
        {[1, 2, 3].map((row) => (
          <div
            key={row}
            className="flex flex-1 items-center gap-2 rounded-md border border-[#c5a059]/20 bg-black/65 px-2 py-1.5"
          >
            <div className="size-6 rounded-[4px] border border-[#c5a059]/30 bg-gradient-to-br from-black to-zinc-900" />
            <div className="min-w-0 flex-1 space-y-1">
              <div className="h-1.5 w-[70%] rounded-full bg-[#c5a059]/35" />
              <div className="h-1 w-[45%] rounded-full bg-white/10" />
            </div>
          </div>
        ))}
      </div>
      <PhoneFrame label="Live Tracking" className="w-[150px] self-center py-3">
        <div className="relative flex flex-1 flex-col p-3">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[7px] font-semibold uppercase tracking-[0.18em] text-gold-300">
              Routed
            </span>
            <span className="text-[7px] text-emerald-400/85">● Live</span>
          </div>
          <svg
            viewBox="0 0 120 170"
            className="relative h-full min-h-[120px] w-full rounded-md border border-[#c5a059]/20 bg-black/85"
          >
            <path
              d="M22 146h78"
              stroke={goldStroke}
              strokeDasharray="2 4"
              strokeOpacity={0.5}
              strokeWidth="1"
            />
            <path
              d="M26 138 C54 138 94 110 106 92"
              fill="none"
              stroke="#c5a059"
              strokeDasharray="4 6"
              strokeOpacity="0.65"
              strokeWidth="2"
            />
            <circle
              cx="24"
              cy="34"
              r="6"
              fill="none"
              stroke="#eaeaea"
              strokeOpacity="0.85"
              strokeWidth="1.8"
            />
            <polygon
              fill="#d4af37"
              opacity="0.95"
              points="102,138 118,146 102,154"
              transform="rotate(-12 112 146)"
            />
            <g transform="translate(70 134) rotate(-28)" stroke={goldStroke} strokeWidth={1}>
              <rect
                fill="#050505"
                height="13"
                rx="2"
                strokeOpacity={0.9}
                width="34"
                x="-34"
                y="-6"
              />
              <rect
                fill="none"
                height="6"
                rx="1"
                opacity={0.6}
                width="26"
                x="-31"
                y="-13"
              />
              <circle
                cx="-22"
                cy="8"
                fill="none"
                r="3"
                stroke="#eaeaea"
                strokeOpacity="0.6"
              />
              <circle
                cx="-6"
                cy="8"
                fill="none"
                r="3"
                stroke="#eaeaea"
                strokeOpacity="0.6"
              />
            </g>
          </svg>
        </div>
      </PhoneFrame>
    </div>
  );
}

/** Web dashboard laptop */
export function IllustrationDashboard() {
  return (
    <div className="flex flex-1 items-center justify-center p-5">
      <LaptopFrame className="w-[min(220px,100%)]">
        <div className="relative flex h-full w-full flex-col gap-3 p-3">
          <div className="flex items-center justify-between">
            <div className="h-2 w-16 rounded-full bg-[#c5a059]/35" />
            <div className="flex gap-2">
              {["w-14", "w-8", "w-10"].map((w, i) => (
                <div key={i} className={`h-2 rounded-full bg-white/10 ${w}`} />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {["Orders", "Revenue", "Avg."].map((t, i) => (
              <div
                key={t}
                className="rounded border border-[#c5a059]/20 bg-black/60 p-2"
              >
                <p className="text-[7px] uppercase tracking-wider text-gold-500/85">
                  {t}
                </p>
                <div className="mt-2 h-8">
                  <svg viewBox="0 0 64 32" className="size-full opacity-95">
                    <path
                      d={
                        i === 0
                          ? "M2 24 L10 12 L22 20 L42 16 L62 26"
                          : i === 1
                            ? "M2 26 L22 26 L42 14 L62 22"
                            : "M2 26 L18 26 L62 26"
                      }
                      fill="none"
                      stroke={goldStroke}
                      strokeOpacity="0.55"
                      strokeWidth="1.75"
                      vectorEffect="non-scaling-stroke"
                    />
                    <circle
                      cx="34"
                      cy="16"
                      r="1.75"
                      fill="#c5a059"
                      opacity="0.95"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
          <div className="relative mt-auto h-24 rounded-md border border-[#c5a059]/22 bg-black/72 p-3">
            <div className="mb-3 flex gap-4">
              {["Prep", "Run", "Close"].map((t) => (
                <span
                  key={t}
                  className="text-[6px] uppercase tracking-[0.2em] text-white/65"
                >
                  {t}
                </span>
              ))}
            </div>
            <svg
              aria-hidden
              className="h-10 w-full"
              preserveAspectRatio="none"
              viewBox="0 0 200 42"
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((bar) => (
                <rect
                  fill="#c5a059"
                  fillOpacity={0.2 + bar * 0.06}
                  height={10 + bar * 0.45}
                  key={bar}
                  rx="2"
                  width={7}
                  x={10 + bar * 15}
                  y={
                    40 -
                    Math.sin(bar / 3) * 8 -
                    bar * 0.72 -
                    (10 + bar * 0.45)
                  }
                />
              ))}
            </svg>
          </div>
        </div>
      </LaptopFrame>
    </div>
  );
}

/** Rocket + data stream speed lines */
export function IllustrationSpeed() {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-between gap-4 overflow-hidden p-6">
      <div className="relative z-[1] flex flex-col items-center gap-4">
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-[-18px] rounded-full border border-[#c5a059]/25 blur-[0.35px]" />
          <div className="absolute inset-[-42px] rounded-full bg-gradient-to-b from-gold-400/10 via-transparent to-transparent opacity-80" />
          <Rocket aria-hidden className="relative size-20 stroke-[1.3] text-gold-400 drop-shadow-[0_12px_30px_rgba(197,160,89,0.28)]" />
        </div>
      </div>
      <div className="relative w-full max-w-[220px]">
        <svg
          viewBox="0 0 220 72"
          className="animate-nexora-dash w-full opacity-95"
          preserveAspectRatio="none"
          aria-hidden
        >
          {Array.from({ length: 28 }).map((_, i) => (
            <line
              key={i}
              x1="-20"
              y1={6 + i * 2}
              stroke="#c5a059"
              strokeOpacity={0.06 + ((i % 5) / 55) + (i % 9) / 90}
              strokeWidth={0.85 + ((i % 4) / 50)}
              x2={(i % 8) + 238}
              y2={6 + i * 2 - (i % 5) / 40}
            />
          ))}
          <defs>
            <linearGradient id="wave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#bf953f" stopOpacity="0" />
              <stop offset="40%" stopColor="#fcfcfc" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#b38728" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M8 54c52-52 154-74 216-82"
            fill="none"
            stroke="url(#wave)"
            strokeWidth="1.85"
          />
          <circle cx="216" cy="36" fill="#eaeaea" r="4" opacity="0.92" />
        </svg>
        <span className="absolute bottom-6 left-6 font-sans text-[9px] font-semibold uppercase tracking-[0.28em] text-gold-200/90 drop-shadow-[0_0_10px_rgba(197,160,89,0.35)]">
          Sub-second sync
        </span>
      </div>
    </div>
  );
}
