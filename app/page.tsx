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
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const heroChips = [
  "منيو على الموبايل",
  "تتبّع على الخريطة",
  "لوحة تشغيل للمطعم",
] as const;

const ecosystem = [
  {
    step: "١",
    eyebrow: "المنيو على الموبايل",
    title: "تزوّدي الطلب من غير لفّ ولا تكرار",
    role: "أول نقطة بتقابل عميلكم.",
    body:
      "العميل بيتفرّج على الصنف زي ما قدامه تقريبًا: الصورة بتضبط توقّعاته قبل ما يكمّي، العنوان فوق بينظّم الأقسام، والزر الذهبي تحت بيوضّح إن العربة بتتبني بعد «موافقة واحدة منك» ومش بتتفرّغ من غير ما تحسّي.",
    bullets: [
      "شريط عنوان «منيو رقمي» في الأعلى بيوضّح إن المرحلة دي واجهة موبايل، وجُملة «اختَر الصنف» تحت العنوان بتوجِّه عين العميل للأصناف فورًا.",
      "ثلاث بطاقات؛ كل وحدة فيها مصغَّر وفيه خطّين قداموه كإسم ومعلومة قصيرة — أسلوب أقرب لمنيو فعلية من رسم واحد وسط الشاشة.",
      "خطَّين بتنقيط خفيف قبل الزر بتلمّح إن العربة بتتعبّى سطر ورا التاني قبل ضغطة «أضِف إلى العربة».",
    ],
    mockNote:
      "زر تأكيد الطلب بصياغة مختصرة تتماشى مع لغة واجهة الزائر اليومية.",
    node: DevicePhoneMenu,
  },
  {
    step: "٢",
    eyebrow: "متابعة الأوردر وهو خارج",
    title: "شوفي الأوردر رايح فين بالظبط",
    role: "نفس عميلكم… مرحلة تانية بتقلّل القلق.",
    body:
      "بعد ما العربة تتسجّل، الصورة التانية بتورّي خريطة مبسّطة ومسار للموصّل: من غير ما العميل يفتح تطبيق تاني، عنده إحساس إن الأوردر «مش متشال» وإن في توقيت تقريبي منطقي للتسليم.",
    bullets: [
      "الشبكة الخفيفة جوّه الخريطة بتقسّم المساحة لمربعات واضحة؛ عشان تقدري تقارني الزحمة بصريًا من غير ما التفاصيل تضيع بين حدّ البُطاقة والحدّ التاني.",
      "خط منقط ومؤشِّر لتتبع العربية بتاع التوصيل بيوضّح إن الحركة بتاع الموصّل على الشاشة قريبة للحركة بتاعتو في الطريق مش رسم ورا بعض.",
      "بانر صغير تحت («لايف · رايحالك») بيلمّ المعلومات في جملة قبل ما العميل يفتح أي تفاصيل زيادة.",
    ],
    mockNote:
      "يراعي التوازن بين تفاصيل الخريطة وحركة موصِّل التوصيل وفق واقع التشغيل عندكم.",
    node: DevicePhoneTracking,
  },
  {
    step: "٣",
    eyebrow: "لوحة لمشغّل المطعم",
    title: "تشغيل كامل على لابتوب واحد",
    role: "ناحية التشغيل والقيادة قبل الحسّابات الجاية ورا الشاشات.",
    body:
      "اللابتوب هنا واجهة تقيلة شويه عشان تستوعب أرقام متعددة: عدّادات، أسطر، وفترات اليوم؛ الفكرة إن الموظّف الأساسي يخفّ ضغط الزحمة لما يكون عنده نقطة بتلمّ أكتر من «أوردر لحالة» ورا بعض.",
    bullets: [
      "الخط الدهبي الأفقي اللي تحت الشاشة بيعطيك إضاءة تخلي العين تركّز عن طريق العرض بتاعكم.",
      "الأشكال الهندسية بتلمّ لتقارير مبدئية — من غير الدخول في «شاشات إكسل» من أول لحظة.",
      "الفصل بين الموبايل واللابتوب في النموذج نفسه بيوضّح إن العميل يفضل على الموبايل… والتشغيل يفضل على الشاشة الكبيرة.",
    ],
    mockNote:
      "صفحة تناسب المراجعة السريعة مع الإدارة دون تشويش رسومات أو زحمة عناصر.",
    node: DeviceLaptopDashboard,
  },
] as const;

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-10 flex flex-col items-center gap-3 text-center sm:mb-11 sm:gap-4">
      <span className="text-[0.72rem] font-semibold tracking-wide text-[#dcb567]">
        {children}
      </span>
      <span className="nexora-label-line mx-auto h-[1px] w-[min(244px,calc(100vw-2.5rem))]" />
    </div>
  );
}

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#d4af37]/45 bg-[linear-gradient(160deg,rgb(0_0_0_/_0.72),rgb(18_16_12_/_0.88))] px-[0.78rem] py-[0.38rem] text-[0.72rem] font-medium text-[#f0deae] shadow-[0_18px_48px_-36px_rgb(212_175_55_/_0.55)] backdrop-blur-sm sm:text-[0.74rem]">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <div className="relative isolate flex min-h-full flex-col overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] flex justify-center px-10">
        <div className="h-px max-w-[min(42rem,92vw)] flex-1 bg-gradient-to-r from-transparent via-[#d4af37]/45 to-transparent" />
      </div>

      <div
        className="pointer-events-none absolute -start-[10rem] top-[-10%] h-[620px] w-[620px] rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.14), transparent 68%)",
        }}
      />

      <header className="relative z-[1] flex flex-col items-center px-5 pb-16 pt-[max(6.5vh,2.5rem)] text-center sm:px-6 md:pb-[4.5rem]">
        <span className="mb-9 inline-flex items-center rounded-full border border-[#d4af37]/42 bg-black/76 px-[1rem] py-[0.38rem] text-[0.65rem] font-medium tracking-wide text-[#eecf8f] backdrop-blur-sm sm:mb-10 sm:text-[0.6825rem]">
          مطعم · تجربة رقمية · تشغيل موحّد
        </span>

        <div className="relative inline-flex max-w-[36rem] flex-col items-center gap-4">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-x-28 -top-8 -bottom-10"
          >
            <div
              className="absolute inset-0 blur-[94px]"
              style={{
                background:
                  "linear-gradient(transparent, transparent 70%, rgb(212 175 55 / .12))",
              }}
            />
          </div>

          <div className="relative flex flex-col items-center">
            <p
              className="relative border-[#d4af37]/50 pb-[0.68rem] text-[clamp(2.875rem,6.65vw,3.925rem)] font-semibold leading-none tracking-[0.16em]"
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              NEXORA
            </p>
            <p className="relative mt-[0.5rem] bg-gradient-to-b from-[#f6edd2] via-[#d9b65b] to-[#956b18] bg-clip-text pb-px text-[0.88rem] font-semibold text-transparent sm:text-[0.92rem]">
              تجربة طلب وفخامة بتعكس حضور المكان
            </p>
          </div>

          <p className="relative mt-2 max-w-[32rem] text-[0.945rem] leading-[1.95] text-zinc-300/92 sm:text-[0.975rem]">
            منصّة واحدة تربط اختيار الأصناف من الموبايل بمتابعة التوصيل، ثم قراءات التشغيل على سطح المكتب —
            وهوّية بصرية موحّدة بالأسود والذهبي بتعكس رقي المطعم وتنظيم الخدمة.
          </p>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-[0.4425rem] sm:gap-2">
            {heroChips.map((label) => (
              <Chip key={label}>{label}</Chip>
            ))}
          </div>
        </div>

        <div className="relative mx-auto mt-14 flex max-w-xl flex-col items-center gap-[1.0625rem] sm:mt-16 lg:gap-8">
          <div className="relative">
            <div
              className="absolute inset-[-21px] rounded-full blur-[100px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(212,175,55,0.38), transparent 74%)",
              }}
            />

            <div className="relative rounded-full border-[1.65px] border-[#cfac4a] bg-black/94 p-[2px] shadow-[0_38px_90px_-8px_rgb(212_175_55_/_0.6)] backdrop-blur-sm md:border-[2.5px] md:p-[4px]">
              <div className="rounded-full bg-[linear-gradient(130deg,#0b0b0d_42%,#141210_92%)] p-[7px]">
                <Image
                  src="/logo.jpg"
                  alt="شعار دائري دهبي لماركة مطاعم بتفاصيل شيف وخط عربى فاخر."
                  width={520}
                  height={520}
                  priority
                  className="aspect-square h-auto max-h-[clamp(234px,_68vw,_22rem)] w-[clamp(234px,_68vw,_22rem)] rounded-full object-cover sm:max-h-[clamp(262px,_72vw,_24rem)] sm:w-[clamp(262px,_72vw,_24rem)]"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-[1] mx-auto flex w-full max-w-[1140px] flex-1 flex-col gap-[4.25rem] px-5 pb-[min(28vh,6.9125rem)] pt-5 sm:gap-[5rem] md:gap-[5.5rem] lg:px-8">
        <section aria-labelledby="nexora-loop">
          <div className="mb-11 flex flex-col items-center gap-4 text-center sm:mb-[3.0625rem] sm:gap-5">
            <SectionEyebrow>مسار الطلب على ثلاث مراحل</SectionEyebrow>
            <h2
              id="nexora-loop"
              className="text-balance text-[1.72rem] font-semibold tracking-wide text-neutral-50 sm:text-[clamp(1.62rem,_3.25vw,_1.92rem)]"
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              من الموبايل للخريطة ثم لتشغيل المطعم
            </h2>
            <p className="mx-auto max-w-[36rem] text-[0.9525rem] leading-[1.92] text-zinc-300/93 sm:text-[0.9825rem] md:leading-[1.965]">
              العرض المتسلسل ده بيجسّد رحلة الأوردر: اختيار من القائمة، متابعة لحظية للتوصيل، ثم قراءات تشغيلية واضحة لإدارة الصالة أو الفرع.
            </p>
          </div>

          <div className="mx-auto flex w-full max-w-[90vw] flex-col md:max-w-[90vw]" lang="ar">
            {ecosystem.map((pane, idx) => {
              const PaneIcon = pane.node;
              const isPhone = PaneIcon !== DeviceLaptopDashboard;
              return (
                <div key={pane.title} className="w-full">
                  <article className="group overflow-hidden rounded-[1.0625rem] border border-[#d6b45a]/44 bg-black/73 text-start shadow-[0_38px_100px_-64px_rgb(212_175_55_/_0.42)] backdrop-blur-2xl transition duration-[500ms] ease-out hover:border-[#e6b965]/62 hover:shadow-[0_48px_120px_-68px_rgb(212_175_55_/_0.55)]">
                    <div className="flex flex-wrap items-center gap-3 border-b border-[#d4af37]/22 px-[1rem] pb-4 pt-5 sm:px-[1.25rem]">
                      <span className="inline-flex h-[2.1rem] min-w-[2.1rem] items-center justify-center rounded-full border border-[#e3c46a]/55 bg-black/58 text-[0.8rem] font-bold text-[#f3dea6]">
                        {pane.step}
                      </span>
                      <span className="flex-1 text-[0.8rem] font-semibold text-[#e6c068]">{pane.role}</span>
                    </div>
<div className="flex justify-evenly">
                    <div className="flex flex-col items-center border-b border-[#d4af37]/12 px-[1rem] pb-8 pt-8 sm:px-[1.25rem] flex-grow">
                      <div className="mb-8 flex min-h-[14rem] w-full max-w-[280px] items-center justify-center sm:max-w-[298px]">
                        <PaneIcon
                          className={
                            isPhone
                              ? "h-auto w-full max-w-none drop-shadow-[0_14px_40px_rgb(212_175_55_/_0.17)] transition duration-700 group-hover:scale-[1.02]"
                              : "h-auto w-full max-w-none translate-y-[10px] drop-shadow-[0_20px_58px_rgb(212_175_55_/_0.24)] sm:translate-y-[14px]"
                          }
                        />
                      </div>
                      <div className="w-full">
                        <p className="text-[0.88rem] font-semibold text-[#ebcf8f]">{pane.eyebrow}</p>
                        <h3
                          className="mt-[0.42rem] text-[1.04rem] font-semibold text-white"
                          style={{ fontFamily: "var(--font-display), serif" }}
                        >
                          {pane.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex flex-col gap-[1rem] px-[1rem] pb-8 pt-7 text-start sm:px-[1.25rem]">
                      <p className="text-[0.94rem] leading-[1.95] text-zinc-300/93 sm:text-[0.9575rem]">
                        {pane.body}
                      </p>
                      <div>
                        <p className="text-[0.7825rem] font-semibold text-[#d9b058]">
                          عناصر بارزة على الشاشة
                        </p>
                        <ul className="mt-2.5 list-disc space-y-1.5 ps-5 text-[0.898rem] leading-[1.925] text-zinc-300/91 marker:text-[#cfa03a] sm:text-[0.908rem]">
                          {pane.bullets.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      </div>
                      <p className="rounded-[0.7rem] border border-[#d9b058]/22 bg-black/62 px-[0.86rem] py-[0.6425rem] text-[0.805rem] leading-[1.92] text-zinc-300/92">
                        <span className="font-medium text-[#eab04a]/95">خلاصة:&nbsp;</span>
                        {pane.mockNote}
                      </p>
                    </div></div>
                  </article>

                  {idx < ecosystem.length - 1 ? (
                    <div className="flex justify-center py-9 sm:py-10">
                      <EcoArrow
                        aria-hidden
                        className="h-[3.0625rem] w-auto min-w-[5.875rem] rotate-90 opacity-92"
                      />
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </section>

        <section aria-labelledby="feature-grid" className="space-y-14 md:space-y-16">
          <div className="flex flex-col items-center gap-[1.0625rem] text-center sm:gap-[1.25rem]">
            <SectionEyebrow>مكوّنات التشغيل</SectionEyebrow>
            <h2
              id="feature-grid"
              className="text-balance text-[1.72rem] font-semibold tracking-wide sm:text-[clamp(1.6rem,_2.85vw,_1.9025rem)]"
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              أربع محاور للخدمة والسرعة والتحكّم
            </h2>
            <p className="mx-auto max-w-[38rem] px-1 leading-[1.95] text-zinc-300/93 md:text-[0.985rem] md:leading-[1.9825rem]">
              توزيع مختصر لجانب المنيو الرقمية، العربة ومتابعتها اللحظية، إدارة المطعم من المتصفّح، وضوابط تجربة نهاية رحلة الطلب عند الذروّة.
            </p>
          </div>

          <div className="mx-auto grid max-w-none gap-[1.9125rem] md:grid-cols-2 md:gap-10">
            {featureMocks.map((spec) => {
              const Viz = spec.node;
              return (
                <Card key={spec.title} className="flex flex-col text-start transition duration-[520ms] ease-out hover:-translate-y-[2px] hover:border-[#eab04a]/60 hover:bg-black/78 hover:shadow-[0_76px_150px_-90px_rgb(212_175_55_/_0.6)]">
                  <CardHeader className="gap-[0.55rem]">
                    <span className="inline-flex w-fit rounded-full border border-[#eab04a]/38 bg-black/54 px-[1rem] py-[5px] text-[0.7025rem] font-medium text-[#f2dfba] backdrop-blur-sm md:text-[0.734rem]">
                      محور
                    </span>
                    <CardTitle className="text-[1.08rem] text-white lg:text-[1.16rem]" style={{ fontFamily: "var(--font-display), serif" }}>
                      {spec.title}
                    </CardTitle>
                    <p className="text-[0.855rem] font-medium text-[#e6be78] xl:text-[0.8925rem]">
                      {spec.subtitle}
                    </p>
                  </CardHeader>

                  <CardContent className="flex flex-1 flex-col gap-8 bg-gradient-to-b from-black via-black/93 to-transparent pb-7 pt-[1.9625rem] backdrop-blur-sm md:gap-10 md:pb-8 md:pt-[2.35rem]">
                    <div className="relative flex w-full max-w-none items-center justify-center before:pointer-events-none before:absolute before:inset-[-41%_-16%_-36%_-16%] before:rounded-[2.625rem] before:bg-[radial-gradient(circle_at_50%,rgb(212_175_55_/_0.15),transparent_73%)] before:blur-[36px] before:opacity-45 md:before:inset-[-44%_-16%_-40%_-16%]">
                      <Viz className="relative z-[1] h-auto max-h-[17.5rem] w-full max-w-[300px]" />
                    </div>

                    <CardDescription className="text-[0.98625rem] leading-[2.068] xl:text-[1.005rem]">
                      {spec.description}
                    </CardDescription>

                    <div>
                      <p className="text-[0.785rem] font-medium text-[#e6b962]">
                        نقاط سريعة
                      </p>
                      <ul className="mt-3 list-[square] space-y-2.5 ps-5 marker:text-[#d9b058]">
                        {spec.points.map((p) => (
                          <li
                            key={p}
                            className="text-[0.9425rem] leading-[2.068] text-zinc-300/93"
                          >
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>

                  <CardFooter className="rounded-b-2xl border-t border-[#d4af37]/26 bg-black/76 pt-7 pb-[1.15rem] text-start backdrop-blur-sm md:pb-8 md:pt-8">
                    <p className="text-[0.838rem] leading-[2.068] text-zinc-300/93">
                      <span className="font-medium text-[#eab04a]/95">يشمل التصميم:&nbsp;</span>
                      {spec.caption}
                    </p>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </section>

        <section
          aria-label="دعوة رئيسية لطلب أوردر"
          className="mx-auto mt-[-0.0625rem] flex max-w-2xl flex-col items-center gap-[1.1rem] pb-8"
        >
          <Button variant="gold" aria-label="بدء طلب عبر منصّة نيكسورا">
            اطلب الآن
          </Button>
          <span className="text-center text-[0.805rem] leading-[1.86] tracking-wide text-zinc-400/93">
            حجز طاولة جوّة · استلام انت من الفرع · توصيل لحد الباب بتاعكم
          </span>
        </section>

        <footer className="relative mt-[1.9625rem] flex flex-col items-center gap-[0.9625rem] pb-[min(94px,_18vh)] text-[clamp(1.005rem,_2.15vw,_1.108rem)] text-[#eab04a]/96">
          <span className="pointer-events-none absolute -top-[2.6825rem] h-px w-[min(32rem,calc(100vw_-_3rem))] bg-gradient-to-r from-transparent via-[#eab04a]/35 to-transparent" />

          <p
            aria-label="شعار تجربة مذاق"
            className="relative max-w-[40rem] text-center leading-snug md:max-w-[44rem]"
            style={{
              fontFamily: "var(--font-display), serif",
              letterSpacing: "0.055em",
            }}
          >
            المذاق فيها حكايات… من غير ما يتلخّبط الزمن وراكم
          </p>

          <span
            aria-hidden
            className="-mt-[0.08rem] text-[21px] text-[#d9b058] opacity-93 [text-shadow:0_0_40px_rgb(212_175_55_/_.7)] md:text-[22px]"
          >
            ✦
          </span>
        </footer>
      </main>
    </div>
  );
}
