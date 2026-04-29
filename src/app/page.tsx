import Image from "next/image";
import type { ComponentType } from "react";

import {
  IllustrationDigitalMenu,
  IllustrationDashboard,
  IllustrationSpeed,
  IllustrationTracking,
} from "@/components/nexora/device-mockups";
import { NexoraEcosystemSection } from "@/components/nexora/ecosystem-section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Sparkle } from "lucide-react";

type FeatureTile = {
  eyebrow: string;
  title: string;
  copy: string;
  Media: ComponentType;
};

const FEATURE_TILES: FeatureTile[] = [
  {
    eyebrow: "Browse & entice",
    title: "Digital Menu",
    copy:
      "High-contrast plating, pacing cues, dietary tags, and instant add-to-cart for luminous storefronts.",
    Media: IllustrationDigitalMenu,
  },
  {
    eyebrow: "Stage-aware carts",
    title: "Smart Cart & Tracking",
    copy:
      "Split carts with SLA overlays, routed couriers with ETA threads and live telemetry on the map.",
    Media: IllustrationTracking,
  },
  {
    eyebrow: "Command layer",
    title: "Seamless Web App",
    copy:
      "Operations dashboards unify ticketing, pacing, ingest, forecasting triggers, and partner connectors.",
    Media: IllustrationDashboard,
  },
  {
    eyebrow: "Throughput stack",
    title: "Fast & Reliable",
    copy:
      "Sub-second payloads, jitter-free transports, deterministic sync, and observability across every storefront hop.",
    Media: IllustrationSpeed,
  },
];

function CapabilityCard(tile: FeatureTile) {
  const IllustrationComponent = tile.Media;

  return (
    <Card
      className={cn(
        "border border-[#c89c49]/35 bg-black/85 shadow-[inset_0_1px_0_rgba(250,239,217,0.12)] backdrop-blur-sm",
      )}
    >
      <CardHeader className="gap-3 pb-4 pt-10 text-left sm:px-8">
        <CardDescription className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-gold-400/90">
          {tile.eyebrow}
        </CardDescription>
        <CardTitle className="font-serif text-xl tracking-[0.08em] text-white md:text-[1.35rem]">
          {tile.title}
        </CardTitle>
        <CardDescription className="text-[0.9rem] leading-relaxed tracking-wide text-muted-foreground md:text-[0.95rem]">
          {tile.copy}
        </CardDescription>
      </CardHeader>
      <CardContent className="relative flex min-h-[220px] flex-1 px-4 pb-8 pt-2 sm:px-6">
        <div className="mx-auto flex w-full max-w-[520px] items-center justify-center">
          <IllustrationComponent />
        </div>
      </CardContent>
    </Card>
  );
}

export default function Home() {
  return (
    <div className="nexora-page relative isolate min-h-screen overflow-hidden pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 blur-[146px]"
        style={{
          opacity: 0.16,
          boxShadow: "inset 0 -152px 360px rgba(218,174,118,0.18)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(#000,#000036), radial-gradient(78% 90% at 118% -4%, hsla(45,71%,71%,0.18), hsla(0,0%,0%,1) 96%)",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-noise opacity-[0.07] saturate-115 mix-blend-overlay"
      />

      <main className="relative z-[1] mx-auto flex max-w-[1120px] flex-col px-6 pb-24 pt-20 sm:px-10">
        <header className="mb-14 text-center">
          <h1 className="font-heading text-[clamp(3rem,8vw,4.75rem)] font-semibold leading-none tracking-[0.12em] text-white">
            NEXORA
          </h1>
          <p className="mt-4 font-sans text-[0.62rem] font-semibold uppercase tracking-[2.2vw] text-gold-400 sm:text-[0.62rem] sm:tracking-[1.42rem]">
            Restaurant
          </p>
          <p className="mx-auto mt-8 max-w-md text-[0.95rem] leading-relaxed text-gold-200/85">
            A precision-built digital storefront for luminous hospitality—with
            routing intelligence from cart to coupe.
          </p>
        </header>

        <figure
          className="relative mx-auto w-[min(320px,82vw)]"
          aria-labelledby="nexora-logo-caption"
        >
          <div
            aria-hidden
            className="absolute inset-4 rounded-full blur-[120px]"
            style={{ backgroundColor: "rgba(228,217,183,0.09)" }}
          />
          <Image
            priority
            src="/logo.jpg"
            alt="Circular Nexora emblem in metallic gold on deep black lacquer glass"
            width={672}
            height={672}
            sizes="320px"
            className={cn(
              "relative z-[1] mx-auto block h-auto max-h-[320px] w-full rounded-[clamp(154px,36vw,310px)] object-cover",
              "ring-[1.5px] ring-gold-500/40 shadow-[0_80px_120px_-92px_rgba(197,160,92,0.55)]",
            )}
          />
          <figcaption id="nexora-logo-caption" className="sr-only">
            Gold circular Nexora emblem with chef hat, utensils, crest, and Taste
            Beyond Experience tag along the rim.
          </figcaption>
        </figure>

        <section
          aria-labelledby="capability-matrix-heading"
          className="mx-auto mt-24 w-full max-w-[1000px]"
        >
          <div className="mb-14 text-center">
            <h2
              id="capability-matrix-heading"
              className="font-serif text-xl font-semibold tracking-[0.32em] text-white sm:text-2xl"
            >
              Capability matrix
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-[0.95rem] leading-relaxed text-gold-200/78">
              Four polished rails—gold chrome borders, shimmering iconography,
              surgical microcopy anchored to obsessive operators.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
            {FEATURE_TILES.map((tile) => (
              <CapabilityCard key={tile.title} {...tile} />
            ))}
          </div>
        </section>

        <NexoraEcosystemSection className="mt-28 lg:mt-36" />

        <div className="mt-20 flex w-full justify-center">
          <Button
            type="button"
            className={cn(
              "h-14 min-w-[260px] rounded-full border border-gold-200/25 bg-gradient-to-b from-[#f6eedb] via-[#dfc07b] to-[#986c2c]",
              "font-sans text-sm font-semibold uppercase tracking-[0.45em] text-black shadow-[0_24px_80px_-32px_rgba(197,160,92,0.65)]",
              "hover:brightness-110 active:brightness-95",
            )}
          >
            Order Now
          </Button>
        </div>

        <footer className="relative mx-auto mt-24 max-w-3xl pb-16 text-center">
          <p className="font-heading text-[0.8125rem] font-medium uppercase tracking-[0.38em] text-gold-300/92">
            Taste Beyond Experience
          </p>
          <Sparkle
            aria-hidden
            strokeWidth={1.15}
            className="pointer-events-none absolute -bottom-2 right-2 size-6 text-white/85 sm:right-6"
          />
        </footer>
      </main>
    </div>
  );
}
