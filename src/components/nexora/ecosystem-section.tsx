"use client";

import type { ReactNode } from "react";

import { ArrowRight } from "lucide-react";

import {
  IllustrationDashboard,
  IllustrationDigitalMenu,
  IllustrationTracking,
} from "@/components/nexora/device-mockups";
import { cn } from "@/lib/utils";

export function NexoraEcosystemSection({ className }: { className?: string }) {
  return (
    <section className={cn("mx-auto w-full max-w-6xl px-6", className)}>
      <header className="mx-auto mb-16 max-w-2xl text-center">
        <p className="font-serif text-lg tracking-[0.38em] text-white sm:text-[1.3rem]">
          Seamless ecosystem
        </p>
        <p className="mt-5 text-sm leading-relaxed text-gold-200/78 sm:text-[0.9275rem]">
          Browse on mobile, follow couriers live, orchestrate throughput from web—one
          connected stack built for relentless precision.
        </p>
      </header>

      <div className="flex flex-col items-center gap-[4.6875rem] lg:flex-row lg:items-start lg:justify-between lg:gap-8">
        <EcosystemLane
          eyebrow="Digital menu · mobile"
          content={
            <div className="origin-top scale-[0.962]">
              <IllustrationDigitalMenu />
            </div>
          }
        />

        <EcosystemDivider />

        <EcosystemLane
          eyebrow="Live tracking"
          content={
            <div className="mt-[-2px] origin-top scale-[0.96]">
              <IllustrationTracking />
            </div>
          }
        />

        <EcosystemDivider />

        <EcosystemLane
          className="w-full lg:max-w-[320px]"
          eyebrow="Integrated web dashboard"
          content={<IllustrationDashboard />}
        />
      </div>
    </section>
  );
}

function EcosystemDivider() {
  return (
    <div className="-my-[2px] hidden items-start justify-start lg:flex lg:flex-col lg:justify-center lg:pb-10 lg:pt-[5.9375rem]">
      <ArrowRight
        aria-hidden
        className="size-[40px] text-gold-400"
        strokeWidth={1.18}
      />
    </div>
  );
}

function EcosystemLane({
  eyebrow,
  content,
  className,
}: {
  eyebrow: string;
  content: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex w-full justify-center lg:block", className)}>
      <div className="text-center lg:mx-auto lg:max-w-fit">
        <p className="mb-[26px] text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-200/88">
          {eyebrow}
        </p>
        {content}
      </div>
    </div>
  );
}
