import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useId } from "react";

import { cn } from "@/lib/utils";

function ArrowConnector({ className }: { className?: string }) {
  const gid = useId().replace(/:/g, "");
  const gradId = `${gid}-eco-arrow`;

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center text-gold-400/85",
        className,
      )}
      aria-hidden
    >
      <svg viewBox="0 0 120 48" className="h-10 w-24 md:h-12 md:w-28 lg:w-[6.5rem]">
        <defs>
          <linearGradient id={gradId} x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#e6d49e" stopOpacity={0.4} />
            <stop offset="50%" stopColor="#dfc07b" />
            <stop offset="100%" stopColor="#986c2c" stopOpacity={0.9} />
          </linearGradient>
        </defs>
        <path
          d="M4 28h92l-16-14M96 28l-16 14"
          stroke={`url(#${gradId})`}
          strokeWidth="1.35"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M8 20c18-6 36-6 56 0"
          stroke={`url(#${gradId})`}
          strokeWidth="0.55"
          opacity="0.45"
          fill="none"
        />
      </svg>
    </div>
  );
}

function ArrowDownMobile() {
  const did = useId().replace(/:/g, "");
  const downId = `${did}-eco-down`;

  return (
    <div className="flex justify-center py-1 lg:hidden" aria-hidden>
      <svg viewBox="0 0 48 64" className="h-12 w-8 text-gold-400/75">
        <defs>
          <linearGradient id={downId} x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#e6d49e" />
            <stop offset="100%" stopColor="#7d5f2a" />
          </linearGradient>
        </defs>
        <path
          d="M24 8v40l-10-10M24 48l10-10"
          stroke={`url(#${downId})`}
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

function PhoneMenuMock() {
  const pid = useId().replace(/:/g, "");
  const g = `${pid}-phone`;

  return (
    <svg viewBox="0 0 200 280" className="mx-auto h-[200px] w-auto max-w-full text-gold-400" aria-hidden>
      <defs>
        <linearGradient id={g} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f6eedb" />
          <stop offset="100%" stopColor="#986c2c" />
        </linearGradient>
      </defs>
      <rect x="36" y="16" width="128" height="248" rx="22" stroke={`url(#${g})`} strokeWidth="1.2" fill="none" />
      <rect x="88" y="28" width="24" height="4" rx="2" fill={`url(#${g})`} opacity="0.45" />
      <rect x="52" y="48" width="96" height="10" rx="3" stroke={`url(#${g})`} strokeWidth="0.7" opacity="0.35" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect
            x="52"
            y={74 + i * 52}
            width="96"
            height="42"
            rx="6"
            stroke={`url(#${g})`}
            strokeWidth="0.75"
            opacity={0.4 - i * 0.08}
          />
          <rect x="62" y={86 + i * 52} width="52" height="6" rx="2" stroke={`url(#${g})`} strokeWidth="0.6" opacity="0.55" />
        </g>
      ))}
      <rect x="62" y="216" width="76" height="28" rx="8" stroke={`url(#${g})`} strokeWidth="1.1" fill="rgba(218,174,118,0.08)" />
      <text x="100" y="234" fill="white" fontSize="8" letterSpacing="0.18em" textAnchor="middle" className="font-sans">
        ADD TO CART
      </text>
    </svg>
  );
}

function PhoneMapMock() {
  const mid = useId().replace(/:/g, "");
  const gm = `${mid}-map`;

  return (
    <svg viewBox="0 0 200 280" className="mx-auto h-[200px] w-auto max-w-full text-gold-400" aria-hidden>
      <defs>
        <linearGradient id={gm} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#dfc07b" />
          <stop offset="100%" stopColor="#7d5f2a" />
        </linearGradient>
      </defs>
      <rect x="36" y="16" width="128" height="248" rx="22" stroke={`url(#${gm})`} strokeWidth="1.2" fill="none" />
      <rect x="88" y="28" width="24" height="4" rx="2" fill={`url(#${gm})`} opacity="0.35" />
      <path d="M52 64h96M52 82h76M52 100h84" stroke={`url(#${gm})`} strokeWidth="0.4" opacity="0.35" />
      <path
        d="M58 200c48-74 104-118 154-154"
        stroke={`url(#${gm})`}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeDasharray="6 8"
        fill="none"
      />
      <rect x="96" y="168" width="44" height="18" rx="5" stroke={`url(#${gm})`} strokeWidth="0.95" />
      <circle cx="108" cy="190" r="6" stroke={`url(#${gm})`} strokeWidth="0.8" />
      <circle cx="128" cy="190" r="6" stroke={`url(#${gm})`} strokeWidth="0.8" />
      <path
        d="M108 96c8-12 24-12 32 0v18c-8 10-24 10-32 0V96z"
        stroke={`url(#${gm})`}
        strokeWidth="0.85"
        fill="none"
      />
    </svg>
  );
}

function LaptopMock() {
  const lid = useId().replace(/:/g, "");
  const gl = `${lid}-lap`;

  return (
    <svg viewBox="0 0 280 200" className="mx-auto h-[160px] w-auto max-w-full text-gold-400" aria-hidden>
      <defs>
        <linearGradient id={gl} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f3ead1" />
          <stop offset="100%" stopColor="#9a7430" />
        </linearGradient>
      </defs>
      <rect x="32" y="24" width="216" height="132" rx="10" stroke={`url(#${gl})`} strokeWidth="1.15" fill="none" />
      <rect x="48" y="40" width="184" height="12" rx="4" stroke={`url(#${gl})`} strokeWidth="0.55" opacity="0.35" />
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={56 + i * 40}
          y={92 - i * 4}
          width="24"
          height={40 + i * 6}
          rx="4"
          stroke={`url(#${gl})`}
          strokeWidth="0.8"
          opacity={0.45 + i * 0.1}
          fill="none"
        />
      ))}
      <path d="M56 132h176" stroke={`url(#${gl})`} strokeWidth="0.5" opacity="0.3" />
      <path d="M20 164h240l-20 12H40l-20-12z" stroke={`url(#${gl})`} strokeWidth="1" opacity="0.7" />
    </svg>
  );
}

export function NexoraEcosystemSection({ className }: { className?: string }) {
  return (
    <section
      className={cn("w-full", className)}
      aria-labelledby="ecosystem-heading"
    >
      <div className="mb-12 text-center">
        <h2
          id="ecosystem-heading"
          className="font-serif text-xl font-semibold tracking-[0.28em] text-white sm:text-2xl"
        >
          One connected platform
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed tracking-wide text-gold-200/75">
          Menu, live routing, and back-office intelligence stay in sync—built for
          teams that move at service speed.
        </p>
      </div>

      <div className="flex flex-col items-stretch lg:flex-row lg:items-stretch lg:justify-center lg:gap-0">
        <Card
          className={cn(
            "border border-[#c89c49]/35 bg-black/80 shadow-[inset_0_1px_0_rgba(250,239,217,0.1)] backdrop-blur-sm lg:max-w-[300px] lg:flex-1",
          )}
        >
          <CardHeader className="pb-2">
            <CardDescription className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-gold-400/90">
              Order
            </CardDescription>
            <CardTitle className="font-serif text-lg tracking-[0.06em] text-white">
              Mobile menu
            </CardTitle>
          </CardHeader>
          <CardContent>
            <PhoneMenuMock />
          </CardContent>
        </Card>

        <ArrowDownMobile />
        <ArrowConnector className="hidden min-w-[5rem] items-center justify-center py-8 lg:flex" />

        <Card
          className={cn(
            "border border-[#c89c49]/35 bg-black/80 shadow-[inset_0_1px_0_rgba(250,239,217,0.1)] backdrop-blur-sm lg:max-w-[300px] lg:flex-1",
          )}
        >
          <CardHeader className="pb-2">
            <CardDescription className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-gold-400/90">
              Trace
            </CardDescription>
            <CardTitle className="font-serif text-lg tracking-[0.06em] text-white">
              Live tracking
            </CardTitle>
          </CardHeader>
          <CardContent>
            <PhoneMapMock />
          </CardContent>
        </Card>

        <ArrowDownMobile />
        <ArrowConnector className="hidden min-w-[5rem] items-center justify-center py-8 lg:flex" />

        <Card
          className={cn(
            "border border-[#c89c49]/35 bg-black/80 shadow-[inset_0_1px_0_rgba(250,239,217,0.1)] backdrop-blur-sm lg:max-w-[300px] lg:flex-1",
          )}
        >
          <CardHeader className="pb-2">
            <CardDescription className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-gold-400/90">
              Operate
            </CardDescription>
            <CardTitle className="font-serif text-lg tracking-[0.06em] text-white">
              Web dashboard
            </CardTitle>
          </CardHeader>
          <CardContent>
            <LaptopMock />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
