import Image from "next/image";
import type { ReactNode } from "react";

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
    eyebrow: "القائمة الرقمية على الجوال",
    title: "أضِف إلى العربة",
    body: "قائمة منسقة، وتصوير احترافي للأطباق، وتجميع العربة بتمريرة واحدة واضحة.",
    node: DevicePhoneMenu,
  },
  {
    eyebrow: "تتبع حي ومباشر للطلبات",
    title: "تتبّع لحظي",
    body: "أوقات وصول واقعية من مسار المراسلين، ومخطّط طرق يعطيكم ثقة ثابتة في كل منعطف.",
    node: DevicePhoneTracking,
  },
  {
    eyebrow: "لوحة ويب تشغيل متكاملة",
    title: "غرفة القيادة",
    body: "مؤشرات الإيرادات، التزامات الخدمة، وجداول زمنية لإدارة الصالة من جهازكم المكتبي.",
    node: DeviceLaptopDashboard,
  },
] as const;

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-12 flex flex-col items-center gap-3 text-center sm:gap-4">
      <span className="text-[0.7rem] font-semibold tracking-wide text-[#dcb567]">
        {children}
      </span>
      <span className="nexora-label-line mx-auto h-[1px] w-[min(236px,calc(100vw-3rem))]" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative isolate flex min-h-full flex-col overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] flex justify-center px-10">
        <div className="h-px max-w-xl flex-1 bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />
      </div>

      {/* ambient glow */}
      <div
        className="pointer-events-none absolute -start-[10rem] top-[-10%] h-[620px] w-[620px] rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.14), transparent 68%)",
        }}
      />

      <header className="relative z-[1] flex flex-col items-center px-6 pb-16 pt-[max(7vh,2.85rem)] text-center md:pb-[4.375rem]">
        <span className="mb-12 inline-flex items-center rounded-full border border-[#d4af37]/55 bg-black/76 px-[1.0625rem] py-[0.41rem] text-[0.64rem] font-semibold tracking-[0.12em] text-[#ebb43b]/95 shadow-[0_28px_60px_-50px_rgb(212_175_55_/_0.55)] backdrop-blur-sm">
          منصة تشغيل مطاعم رقمية
        </span>

        <div className="relative inline-flex flex-col items-center">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-x-24 -top-[1.0625rem] -bottom-[0.6rem]"
          >
            <div className="absolute inset-0 blur-[92px]"
              style={{
                background:
                  "linear-gradient(transparent, transparent 72%, rgb(212 175 55 / .13))",
              }}
            />
          </div>

          <p
            className="relative border-[#d4af37]/50 pb-[0.68rem] text-[clamp(3rem,7vw,3.925rem)] font-semibold leading-none tracking-[0.2em]"
            style={{ fontFamily: "var(--font-display), serif" }}
          >
            NEXORA
          </p>
          <p className="relative mt-[0.5rem] bg-gradient-to-b from-[#f1e8c9] via-[#d9b65b] to-[#a87b1c] bg-clip-text pb-px text-[0.8625rem] font-semibold text-transparent">
            مطعم فاخر
          </p>
        </div>

        <div className="relative mx-auto mt-14 flex max-w-xl flex-col items-center gap-[1.0625rem] sm:mt-16 lg:gap-8">
          <div className="relative">
            <div
              className="absolute inset-[-20px] rounded-full blur-[100px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(212,175,55,0.38), transparent 74%)",
              }}
            />

            <div className="relative rounded-full border-[1.65px] border-[#cfac4a] bg-black/94 p-[2px] shadow-[0_36px_80px_-10px_rgb(212_175_55_/_0.62)] backdrop-blur-sm md:border-[2.5px] md:p-[4px]">
              <div className="rounded-full bg-[linear-gradient(130deg,#0b0b0d_42%,#141210_92%)] p-[6px]">
                <Image
                  src="/nexora-emblem.png"
                  alt="شعار نيكسورا الذهبي الداخلي بتفاصيل طباخ وخط عربات."
                  width={520}
                  height={520}
                  priority
                  className="aspect-square h-auto max-h-[clamp(238px,_68vw,_22rem)] w-[clamp(238px,_68vw,_22rem)] rounded-full object-cover sm:max-h-[clamp(266px,_72vw,_24rem)] sm:w-[clamp(266px,_72vw,_24rem)]"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-[1] mx-auto flex w-full max-w-[1128px] flex-1 flex-col gap-[6.8125rem] px-5 pb-[min(28vh,7rem)] pt-2 sm:gap-[7rem] md:gap-[7.5rem] lg:px-[1.8625rem]">
        {/* Product flow retained LTR for consistent device mocks */}
        <section aria-labelledby="nexora-loop" className="">
          <div className="mb-12 flex flex-col items-center gap-4 text-center sm:gap-5">
            <SectionEyebrow>حلقة النظام السلس</SectionEyebrow>
            <h2
              id="nexora-loop"
              className="text-balance text-[1.8rem] font-semibold tracking-wide text-neutral-50 sm:text-[clamp(1.66rem,_3.4vw,_1.98rem)]"
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              جوال حيّ · لوحة تحكم عميقة
            </h2>
            <p className="mx-auto max-w-2xl text-[0.96rem] leading-[1.9] text-zinc-300/93 md:text-[1rem] md:leading-[2.025]">
              يجتمع فريقكم والضيوف والمرسلون على ذات المسار المزامن؛ كل نقطة طرفية تتحدّث
              لهجة ذهبية وحيدة على سطح الزجاج الداكن.
            </p>
          </div>

          <div
            className="hidden gap-10 lg:flex lg:flex-row lg:items-end lg:justify-between lg:[direction:ltr]"
            lang="ar"
            dir="ltr"
          >
            {ecosystem.flatMap((pane, idx) => {
              const PaneIcon = pane.node;
              const isPhone = PaneIcon !== DeviceLaptopDashboard;

              const card = (
                <article
                  key={pane.title}
                  className="group flex flex-[1_1_22%] min-w-0 flex-col items-center rounded-2xl border border-[#d5b45a]/40 bg-black/73 px-[1rem] pb-10 pt-8 text-center shadow-[0_54px_120px_-74px_rgb(212_175_55_/_0.48)] backdrop-blur-2xl transition duration-[520ms] ease-out hover:-translate-y-[2px] hover:border-[#ebb43b]/65 hover:shadow-[0_68px_150px_-80px_rgb(212_175_55_/_0.68)] md:max-w-none md:pb-11 xl:pb-[2.8625rem] xl:pt-11"
                >
                  <div className="mb-10 flex min-h-[15.0625rem] w-full items-center justify-center transition duration-700 group-hover:[transform:perspective(940px)_rotateX(10deg)_scale(1.04)] xl:mb-11">
                    <PaneIcon
                      className={
                        isPhone
                          ? "drop-shadow-[0_18px_40px_rgb(212_175_55_/_0.18)] h-auto max-h-none w-[14.0625rem] max-w-none"
                          : "h-auto w-full max-w-none translate-y-[7px] drop-shadow-[0_24px_64px_rgb(212_175_55_/_0.25)] xl:translate-y-[14px]"
                      }
                    />
                  </div>
                  <p className="text-[0.86rem] font-semibold text-[#e4c068] xl:text-[0.91rem]">
                    {pane.eyebrow}
                  </p>
                  <h3 className="mt-[0.6rem] text-[1.05rem] font-semibold text-white xl:text-[1.08rem]">
                    {pane.title}
                  </h3>
                  <p className="mx-auto mt-[1rem] max-w-[22rem] leading-[2.05] text-[0.95rem] text-zinc-300/93 xl:max-w-[23rem] xl:text-[0.99rem]">
                    {pane.body}
                  </p>
                </article>
              );

              if (idx < ecosystem.length - 1) {
                return [
                  card,
                  <div
                    key={`${pane.title}-connector`}
                    className="flex shrink-0 items-center justify-center self-center pb-[4.0625rem] pt-[1.8625rem]"
                  >
                    <EcoArrow className="h-auto min-w-[118px]" />
                  </div>,
                ];
              }

              return [card];
            })}
          </div>

          {/* mobile / tablet */}
          <div className="flex flex-col gap-16 lg:hidden" lang="ar">
            {ecosystem.map((pane, idx) => {
              const PaneIcon = pane.node;
              const isPhone = PaneIcon !== DeviceLaptopDashboard;
              return (
                <div key={pane.title} className="">
                  <article className="group mx-auto flex w-full max-w-md flex-col items-center rounded-[1.0625rem] border border-[#d8b964]/52 bg-black/73 px-[1.0625rem] py-11 text-center backdrop-blur-2xl transition duration-[520ms] ease-out hover:-translate-y-[1px] hover:border-[#eab04a]/73 hover:shadow-[0_42px_100px_-64px_rgb(212_175_55_/_0.6)] sm:max-w-2xl sm:rounded-2xl sm:pb-12">
                    <div className="mb-10 flex w-full max-w-[294px] items-center justify-center sm:max-w-[328px]">
                      <PaneIcon
                        className={
                          isPhone
                            ? "h-auto max-h-none w-full max-w-none drop-shadow-[0_18px_48px_rgb(212_175_55_/_0.2)] transition duration-700 group-hover:scale-[1.025]"
                            : "h-auto w-full max-w-none translate-y-[12px] drop-shadow-[0_22px_64px_rgb(212_175_55_/_0.26)] xl:translate-y-[22px]"
                        }
                      />
                    </div>
                    <p className="font-semibold tracking-wide text-[#eacf8b] xl:text-[0.94rem]">
                      {pane.eyebrow}
                    </p>
                    <h3 className="mt-[0.6rem] text-[1.04rem] font-semibold tracking-wide">
                      {pane.title}
                    </h3>
                    <p className="mx-auto mt-[0.9625rem] max-w-xl leading-[2.0625rem] text-[1.02625rem] text-zinc-300/92 xl:text-[1.06rem]">
                      {pane.body}
                    </p>
                  </article>
                  {idx < ecosystem.length - 1 ? (
                    <EcoArrow className="mx-auto mt-[1.9625rem] h-auto min-w-[6.9375rem] rotate-90" />
                  ) : null}
                </div>
              );
            })}
          </div>
        </section>

        <section aria-labelledby="feature-grid" className="space-y-14">
          <div className="flex flex-col items-center gap-[1.0625rem] text-center sm:gap-6">
            <SectionEyebrow>مكونات أساسية للمنصة</SectionEyebrow>
            <h2
              id="feature-grid"
              className="text-balance text-[1.8rem] font-semibold tracking-wide sm:text-[clamp(1.66rem,_3vw,_1.95rem)]"
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              رقمية · تتبّع ذكاء · لوحة · سرعة خام
            </h2>
            <p className="mx-auto max-w-3xl px-1 leading-[2.065] text-zinc-300/93 md:text-[1.0025rem] md:leading-[2.0825rem]">
              أربعة واجهات مُحمّسة؛ حدٌّ أدنى من الزخرفة الزائدة وأقصى تبايُن لتَعقيم
              المسامع والعين قبل أن تصل للضيف النهائي.
            </p>
          </div>

          <div className="mx-auto grid max-w-none gap-[1.9625rem] md:grid-cols-2 md:gap-9">
            {featureMocks.map((spec) => {
              const Viz = spec.node;
              return (
                <Card key={spec.title} className="transition duration-[520ms] ease-out hover:-translate-y-[2px] hover:border-[#eab04a]/60 hover:bg-black/78 hover:shadow-[0_76px_150px_-90px_rgb(212_175_55_/_0.6)]">
                  <CardHeader>
                    <span className="inline-flex rounded-full border border-[#eab04a]/40 bg-black/48 px-[1.0825rem] py-[3px] text-[0.74rem] font-semibold tracking-wide text-[#f2d892] backdrop-blur-sm md:text-[0.76625rem]">
                      حزمة مزايا
                    </span>
                    <CardTitle
                      className="text-[1.06rem] text-white lg:text-[1.14rem]"
                      style={{ fontFamily: "var(--font-display), serif" }}
                    >
                      {spec.title}
                    </CardTitle>
                    <CardDescription className="text-[1.0025rem] leading-[2.0875rem]">
                      {spec.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex items-center justify-center bg-gradient-to-b from-black via-black/93 to-transparent pt-[2.9rem] pb-[2rem] xl:pb-[2.3rem] backdrop-blur-sm">
                    <div className="relative flex w-full max-w-[300px] items-center justify-center before:pointer-events-none before:absolute before:inset-[-42%_-18%] before:rounded-[2.5rem] before:bg-[radial-gradient(circle_at_50%,rgb(212_175_55_/_0.15),transparent_74%)] before:blur-[34px] before:opacity-45">
                      <Viz className="relative z-[1] h-auto max-h-[17.25rem] w-full xl:max-w-none" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section
          aria-label="دعوة رئيسية للطلب"
          className="mx-auto mt-[-0.0625rem] flex max-w-2xl flex-col items-center gap-[1.065rem]"
        >
          <Button variant="gold" aria-label="ابدأ طلبًا عبر منصّة نيكسورا">
            اطلب الآن
          </Button>
          <span className="text-center text-[0.78rem] tracking-wide text-zinc-400/93">
            حجوزات · استلام محلي · تسليم سريع
          </span>
        </section>

        <footer className="relative mt-[1.9625rem] flex flex-col items-center gap-[0.9625rem] pb-[min(92px,_18vh)] text-[1.0825rem] text-[#eab04a]/96 md:text-[clamp(1.0025rem,_2.3vw,_1.08rem)]">
          <span className="absolute -top-[2.9625rem] h-px max-w-xl flex-1 bg-gradient-to-r from-transparent via-[#eab04a]/35 to-transparent" />

          <p
            aria-label="شعار نيكسورا: تجربة مذاق بلا حدود"
            className="relative max-w-xl text-center md:max-w-none"
            style={{
              fontFamily: "var(--font-display), serif",
              letterSpacing: "0.065em",
            }}
          >
            تجربة مذاق لا حدود لها
          </p>

          <span className="-mt-[0.0825rem] text-[21px] text-[#d9b058] opacity-93 [text-shadow:0_0_40px_rgb(212_175_55_/_0.7)] md:text-[22px]" aria-hidden>
            ✦
          </span>
        </footer>
      </main>
    </div>
  );
}
