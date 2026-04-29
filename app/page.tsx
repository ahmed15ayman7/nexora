import Image from "next/image";

import {
  DeviceLaptopDashboard,
  DevicePhoneMenu,
  DevicePhoneTracking,
  EcoArrow,
  featureMocks,
} from "@/components/nexora-visuals";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ecosystem = [
  {
    eyebrow: "Digital Menu on Mobile",
    title: "Add to Cart",
    body: "Curated courses, plating-first photography, one-tap cart assembly.",
    node: DevicePhoneMenu,
  },
  {
    eyebrow: "Fast Live Order Tracking",
    title: "Live Tracking",
    body: "Dispatch-aware ETAs rendered on a restrained map lattice.",
    node: DevicePhoneTracking,
  },
  {
    eyebrow: "Integrated Web Dashboard",
    title: "Control Room",
    body: "Revenue ladders, SLA counters, orchestration timelines on desktop.",
    node: DeviceLaptopDashboard,
  },
] as const;

export default function Home() {
  return (
    <div className="relative isolate flex min-h-full flex-col overflow-hidden">
      <div
        className="pointer-events-none absolute -left-44 top-[-12%] h-[620px] w-[620px] rounded-full blur-[138px]"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.14), transparent 68%)",
        }}
      />

      <header className="relative z-[1] flex flex-col items-center px-6 pb-14 pt-[max(8vh,3.5rem)] text-center md:pb-18">
        <p
          className="border-b border-[#d4af37]/55 pb-[0.72rem] text-[clamp(3.125rem,6vw,4rem)] font-semibold uppercase tracking-[0.34em]"
          style={{ fontFamily: "var(--font-display), serif" }}
        >
          NEXORA
        </p>
        <p
          className="mt-[0.6rem] bg-gradient-to-b from-[#f1e8c9] via-[#d9b65b] to-[#a87b1c] bg-clip-text pb-px text-[0.68rem] font-semibold uppercase tracking-[1.06em] text-transparent sm:text-[0.72rem]"
        >
          Restaurant
        </p>

        <div className="mx-auto mt-12 flex max-w-sm flex-col items-center gap-4 sm:mt-14 sm:max-w-md lg:max-w-lg">
          <div className="relative">
            <div className="absolute inset-[-18px] rounded-full blur-[96px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(212,175,55,0.36), transparent 74%)",
              }}
            />

            <div className="relative overflow-hidden rounded-full border border-[#d4af37]/85 bg-black/95 p-[2px] shadow-[0_0_70px_-8px_rgba(212,175,55,0.55)] md:p-[3px]">
              <div className="overflow-hidden rounded-full border border-black/95 bg-black">
                <Image
                  src="/nexora-emblem.png"
                  alt="NEXORA emblem with chef motifs and serif wordmark around a metallic gold ring."
                  width={520}
                  height={520}
                  priority
                  className="aspect-square h-auto w-[min(68vw,22rem)] object-cover sm:w-[min(72vw,24rem)]"
                />
              </div>
            </div>

            {/* Lower arc text from brand — repeated in footer */}
          </div>
        </div>
      </header>

      <main className="relative z-[1] mx-auto flex w-full max-w-[1120px] flex-1 flex-col gap-28 px-4 pb-[min(28vh,8rem)] sm:gap-36 sm:px-6 lg:px-8">
        <section aria-labelledby="nexora-loop">
          <div className="mb-14 flex flex-col items-center gap-3 text-center">
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.38em] text-[#dcb567]">
              Seamless ecosystem loop
            </span>
            <h2
              id="nexora-loop"
              className="text-balance text-[1.76rem] font-semibold uppercase tracking-[0.07em]"
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              Mobile · Live · Dashboard
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-300/90 md:text-[0.9375rem]">
              Operators, guests, and couriers converge on synchronized rails—each
              device speaks the same gold language across black glass.
            </p>
          </div>

          <div className="hidden lg:flex lg:flex-row lg:items-end lg:justify-center lg:gap-6 xl:gap-8">
            {ecosystem.flatMap((pane, idx) => {
              const PaneIcon = pane.node;
              const isPhone = PaneIcon !== DeviceLaptopDashboard;

              const card = (
                <div
                  key={pane.title}
                  className="flex max-w-none flex-[1_1_0] flex-col items-center rounded-2xl border border-[#d4af37]/42 bg-black/76 px-[1rem] pb-10 pt-6 text-center shadow-[0_40px_90px_-60px_rgba(212,175,55,0.55)] backdrop-blur-2xl md:px-[1.0625rem]"
                >
                  <div className="mb-8 flex w-full max-w-[246px] items-center justify-center">
                    <PaneIcon
                      className={
                        isPhone
                          ? "h-auto w-[14.0625rem] max-w-none"
                          : "h-auto w-full max-w-none translate-y-[4px]"
                      }
                    />
                  </div>
                  <p className="text-[0.7925rem] font-semibold uppercase tracking-[0.22em] text-[#dfb768] xl:text-[0.8175rem]">
                    {pane.eyebrow}
                  </p>
                  <h3 className="mt-[0.55rem] text-[0.835rem] font-semibold uppercase tracking-[0.16em] text-white">
                    {pane.title}
                  </h3>
                  <p className="mt-[0.775rem] max-w-[21rem] text-[0.85rem] leading-relaxed text-zinc-300/90 xl:text-[0.875rem]">
                    {pane.body}
                  </p>
                </div>
              );

              if (idx < ecosystem.length - 1) {
                return [
                  card,
                  <div
                    key={`${pane.title}-connector`}
                    className="flex min-w-[112px] items-center justify-center self-center pb-16"
                  >
                    <EcoArrow className="h-12 min-w-[5.875rem]" />
                  </div>,
                ];
              }

              return [card];
            })}
          </div>

          {/* tablet / stacked */}
          <div className="flex flex-col gap-14 lg:hidden">
            {ecosystem.map((pane, idx) => {
              const PaneIcon = pane.node;
              const isPhone = PaneIcon !== DeviceLaptopDashboard;
              return (
                <div key={pane.title}>
                  <div className="mx-auto flex w-full max-w-md flex-col items-center rounded-2xl border border-[#d4af37]/42 bg-black/76 px-[1.125rem] py-10 text-center backdrop-blur-2xl sm:max-w-xl">
                    <div className="mb-9 flex w-full max-w-[278px] items-center justify-center sm:max-w-[320px]">
                      <PaneIcon
                        className={
                          isPhone
                            ? "h-auto w-full max-w-none"
                            : "h-auto w-full max-w-none translate-y-[6px]"
                        }
                      />
                    </div>
                    <p className="text-[0.8175rem] font-semibold uppercase tracking-[0.22em] text-[#dfb768]">
                      {pane.eyebrow}
                    </p>
                    <h3 className="mt-[0.6rem] text-[0.86rem] font-semibold uppercase tracking-[0.16em] text-white">
                      {pane.title}
                    </h3>
                    <p className="mt-[0.7425rem] max-w-xl text-[0.9175rem] leading-relaxed text-zinc-300/90">
                      {pane.body}
                    </p>
                  </div>
                  {idx < ecosystem.length - 1 ? (
                    <EcoArrow className="mx-auto mt-10 h-auto w-[16.8125rem] max-w-none -rotate-[2deg]" />
                  ) : null}
                </div>
              );
            })}
          </div>
        </section>

        <section aria-labelledby="feature-grid" className="space-y-12">
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.38em] text-[#dcb567]">
              Platform primitives
            </span>
            <h2
              id="feature-grid"
              className="text-balance text-[1.7rem] font-semibold uppercase tracking-[0.07em]"
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              Digital · Tracking · Dashboard · Velocity
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-300/90 md:text-[0.9375rem]">
              Four engineered surfaces—minimal chrome, obsessive contrast, tactile
              gold linework calibrated for speed.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {featureMocks.map((spec) => {
              const Viz = spec.node;
              return (
                <Card key={spec.title}>
                  <CardHeader>
                    <span className="inline-flex rounded-full border border-[#d4af37]/30 px-4 py-[0.0625rem] text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#ebb43b] md:text-[0.72rem]">
                      Feature suite
                    </span>
                    <CardTitle className="text-[1rem] uppercase tracking-[0.16em] text-white lg:text-[1.08rem]"
                      style={{ fontFamily: "var(--font-display), serif" }}
                    >
                      {spec.title}
                    </CardTitle>
                    <CardDescription>{spec.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="flex items-center justify-center bg-gradient-to-b from-black via-black/94 to-transparent pt-12 pb-[2.0625rem]">
                    <Viz className="h-auto max-h-[16.8125rem] w-full max-w-[272px] xl:max-w-none" />
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section
          aria-label="Primary ordering call to action"
          className="mx-auto mt-[-0.0625rem] flex max-w-xl flex-col items-center gap-[0.88rem]"
        >
          <Button variant="gold" aria-label="Start ordering via NEXORA">
            Order Now
          </Button>
          <span className="text-center text-[0.7425rem] uppercase tracking-[0.22em] text-zinc-500">
            Reservations · Pickup · Courier hand-off
          </span>
        </section>

        <footer className="mt-8 flex flex-col items-center gap-[0.9375rem] pb-24 text-[0.6825rem] uppercase tracking-[0.34em] text-[#dfb768] md:mt-[-0.9375rem] md:gap-[1.0625rem]">
          <p
            aria-label="Brand strapline Taste Beyond Experience"
            className="text-center md:max-w-3xl"
            style={{
              fontFamily: "var(--font-display), serif",
              letterSpacing: "0.28em",
            }}
          >
            Taste Beyond Experience
          </p>

          {/* subtle sparkle */}
          <span
            aria-hidden
            className="-mt-[0.18rem] text-[18px] text-[#d9b058] opacity-95 [text-shadow:_0_0_32px_rgba(212,_175,_55,_0.72)]"
          >
            ✦
          </span>
        </footer>
      </main>
    </div>
  );
}
