import type { SVGProps } from "react";

const goldStroke = "#d4af37";
const goldSoft = "#b8952f";
const line = "#e8cf7acc";

export function EcoArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 44" fill="none" aria-hidden {...props}>
      <path
        d="M8 24h94l-10 13m10-13-10-13"
        stroke="#d9b058"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.35}
      />
      <circle cx={22} cy={23} r={2} fill="#d9c07a88" stroke="#d9b058" strokeWidth={0.6} />
    </svg>
  );
}

export function DevicePhoneMenu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 240 460" fill="none" aria-hidden {...props}>
      <rect
        x="18"
        y="16"
        width="204"
        height="428"
        rx="32"
        stroke={goldStroke}
        strokeWidth={1.2}
        opacity={0.9}
      />
      <rect x="88" y="28" width="64" height="6" rx="3" fill={line} opacity={0.45} />
      <rect x="36" y="56" width="168" height="36" rx="8" stroke={goldSoft} opacity={0.45} />
      <text
        x="120"
        y="78"
        textAnchor="middle"
        fill={line}
        fontSize={11}
        fontFamily="ui-sans-serif, system-ui"
        letterSpacing="0.08em"
      >
        DIGITAL MENU
      </text>

      {/* Plate + steak abstraction */}
      <ellipse cx="120" cy="196" rx="74" ry="54" stroke={goldStroke} strokeWidth={1} />
      <ellipse cx="120" cy="208" rx="56" ry="22" stroke={line} strokeWidth={0.9} />
      <path
        d="M84 218c38 16 74 6 108-26"
        stroke={goldStroke}
        strokeWidth={1.25}
        strokeLinecap="round"
      />

      {/* Line items */}
      <rect x="40" y="292" width="160" height="12" rx="3" stroke={line} opacity={0.45} />
      <rect x="40" y="314" width="120" height="12" rx="3" stroke={line} opacity={0.3} />

      {/* Add to Cart */}
      <rect
        x="44"
        y="376"
        width="152"
        height="42"
        rx="14"
        stroke={goldStroke}
        strokeWidth={1}
      />
      <text
        x="120"
        y="399"
        textAnchor="middle"
        fill={line}
        fontSize={10}
        fontFamily="ui-sans-serif, system-ui"
        letterSpacing="0.26em"
      >
        ADD TO CART
      </text>
    </svg>
  );
}

export function DevicePhoneTracking(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 240 460" fill="none" aria-hidden {...props}>
      <rect x="18" y="16" width="204" height="428" rx="32" stroke={goldStroke} strokeWidth={1.2} />
      <rect x="88" y="28" width="64" height="6" rx="3" fill={line} opacity={0.45} />

      <rect x="32" y="58" width="176" height="240" rx="18" stroke={goldSoft} opacity={0.45} />

      {/* Map grid */}
      <path
        d="M54 148h134M54 216h134M116 108v216"
        stroke={line}
        strokeWidth={0.6}
        opacity={0.35}
      />
      <circle cx="78" cy="168" r="5" stroke={goldStroke} />
      <path
        d="M120 268c40-72 112-126 174-174"
        stroke={goldStroke}
        strokeDasharray="4 9"
      />
      {/* Car */}
      <path
        d="M154 296h36l14 18 18 6"
        stroke={goldStroke}
        strokeWidth={1.35}
        strokeLinejoin="round"
      />
      <circle cx="170" cy="322" r="11" stroke={line} />

      {/* Live chip */}
      <rect x="40" y="318" width="160" height="34" rx="10" stroke={goldStroke} />
      <text
        x="120"
        y="337"
        textAnchor="middle"
        fill={line}
        fontSize={9}
        fontFamily="ui-sans-serif, system-ui"
        letterSpacing="0.18em"
      >
        LIVE · EN ROUTE
      </text>
    </svg>
  );
}

export function DeviceLaptopDashboard(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 360 246" fill="none" aria-hidden {...props}>
      {/* Lid */}
      <path
        d="M42 204h278l26 18h-332l26-18Z"
        stroke={goldStroke}
        strokeWidth={1}
      />
      <rect x="32" y="22" width="296" height="182" rx="12" stroke={goldStroke} strokeWidth={1.1} />
      <rect x="44" y="42" width="72" height="10" rx="3" stroke={line} opacity={0.55} />

      {/* Mini charts */}
      <path
        d="M76 154l36-30 42 14 54-74 74 48"
        stroke={goldStroke}
        strokeWidth={1.35}
      />
      <rect x="64" y="154" width="220" height="28" rx="6" stroke={line} opacity={0.45} />

      {/* Bar columns */}
      <rect x="70" y="116" width="18" height="38" rx="4" stroke={goldSoft} opacity={0.75} />
      <rect x="96" y="96" width="18" height="58" rx="4" stroke={goldStroke} />
      <rect x="126" y="108" width="18" height="46" rx="4" stroke={line} opacity={0.55} />

      {/* Content blocks */}
      <rect x="198" y="68" width="112" height="46" rx="8" stroke={line} opacity={0.42} />

      {/* Base glow */}
      <path
        d="M10 226h344"
        stroke="url(#lid-g)"
        strokeWidth={8}
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="lid-g" x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#111" />
          <stop offset="0.5" stopColor="#d4af37" stopOpacity="0.65" />
          <stop offset="1" stopColor="#111" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function MiniPhoneSteak(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 220 340" aria-hidden {...props}>
      <rect
        width="204"
        height="318"
        x="8"
        y="10"
        rx="34"
        stroke={goldStroke}
        opacity={0.85}
      />
      <path
        d="M112 154c54 20 104-44 154-134"
        stroke={line}
        strokeWidth={1.1}
        opacity={0.45}
      />
      <ellipse cx="108" cy="126" rx="74" ry="46" stroke={goldStroke} />
      <path
        d="M78 154c62 24 132-42 174-146"
        stroke={goldStroke}
        strokeWidth={1.35}
      />
      <ellipse cx="110" cy="208" rx="42" ry="18" stroke={line} opacity={0.45} />
    </svg>
  );
}

function MiniCartMap(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 220 340" aria-hidden {...props}>
      <rect width="204" height="318" x="8" y="10" rx="34" stroke={goldStroke} opacity={0.85} />

      {/* List */}
      {[0, 1, 2].map((i) => (
        <rect
          key={`row-${String(i)}`}
          x={36}
          y={76 + i * 28}
          width="146"
          height="16"
          rx="4"
          stroke={line}
          opacity={0.42}
        />
      ))}

      {/* Map */}
      <rect x="42" y="210" width="136" height="98" rx="16" stroke={goldSoft} opacity={0.55} />
      <path d="M64 274h126" stroke={line} strokeWidth={0.7} opacity={0.35} strokeDasharray="4 10" />
      <circle cx="98" cy="252" r="6" stroke={goldStroke} />
      <path
        d="M154 294h22l14 16 16 6"
        stroke={goldStroke}
        strokeWidth={1.35}
      />
      <circle cx="166" cy="306" r="11" stroke={line} />
    </svg>
  );
}

function MiniLaptopWeb(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 340 246" aria-hidden {...props}>
      <rect x="22" y="16" width="296" height="182" rx="12" stroke={goldStroke} />
      <rect x="190" y="44" width="118" height="58" rx="8" stroke={line} opacity={0.42} />

      {[0, 1].map((i) => (
        <rect
          key={`dash-${String(i)}`}
          x={34 + i * 84}
          y={124}
          width="118"
          height="54"
          rx="8"
          stroke={goldSoft}
          opacity={0.45}
        />
      ))}

      <path d="M0 214h344" stroke="#b8952f" opacity={0.4} />

      {/* Base */}
      <path d="M34 218h274l34 26h-334l34-26Z" stroke={goldStroke} />
    </svg>
  );
}

function MiniRocketBurst(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 300 246" aria-hidden {...props}>
      <path d="M20 206h284" stroke={line} strokeWidth={0.7} opacity={0.28} />

      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={`wave-${String(i)}`}
          d={`M ${12 + i * 14} ${140 + Math.sin(i) * 4} q 70 -22 154 0`}
          stroke={goldStroke}
          strokeOpacity={0.42 - i * 0.065}
          fill="none"
        />
      ))}

      <path
        d="M216 154l28-116 28 132-92-76z"
        stroke={goldStroke}
        strokeWidth={1.55}
      />
      <path
        d="M234 174h40l26 26h-116l52-34z"
        stroke={goldSoft}
      />
      {[0, 1].map((i) => (
        <path
          key={`spark-${String(i)}`}
          d="M246 206l8-62"
          stroke="#e8cf7a99"
          strokeWidth={0.95}
          strokeDasharray="10 26"
          transform={`rotate(${34 + i * 18} 246 160)`}
        />
      ))}
    </svg>
  );
}

export const featureMocks = [
  {
    title: "Digital Menu",
    description:
      "Elegant menus on mobile with plated photography pacing and deliberate discovery.",
    node: MiniPhoneSteak,
  },
  {
    title: "Smart Cart & Tracking",
    description:
      "Structured cart timelines paired with a live courier map for confidence at every mile.",
    node: MiniCartMap,
  },
  {
    title: "Seamless Web App",
    description:
      "A restrained operator surface for inventory, ticketing, and table orchestration.",
    node: MiniLaptopWeb,
  },
  {
    title: "Fast & Reliable",
    description:
      "Predictable throughput with streaming updates and deterministic checkout paths.",
    node: MiniRocketBurst,
  },
] as const;
