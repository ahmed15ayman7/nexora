import { useId, type SVGProps } from "react";

const goldStroke = "#d4af37";
const goldMuted = "#a98c38";
const line = "#dfc68edc";
const arabicUi = 'var(--font-ui), Cairo, ui-sans-serif, system-ui, sans-serif';

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
      <circle
        cx={22}
        cy={23}
        r={2}
        fill="#d9c07a88"
        stroke="#d9b058"
        strokeWidth={0.6}
      />
    </svg>
  );
}

export function DevicePhoneMenu(props: SVGProps<SVGSVGElement>) {
  const ui = arabicUi;
  return (
    <svg viewBox="0 0 240 460" fill="none" aria-hidden {...props}>
      <rect
        x="18"
        y="16"
        width="204"
        height="428"
        rx="32"
        stroke={goldStroke}
        strokeWidth={1.45}
        fill="rgb(8 8 9 / 0.35)"
      />
      <rect x="88" y="28" width="64" height="6" rx="3" fill={line} opacity={0.5} />

      <rect
        x="36"
        y="48"
        width="168"
        height="40"
        rx="11"
        stroke={goldStroke}
        strokeWidth={1.15}
        fill="rgb(212 175 55 / 0.06)"
      />
      <text x="120" y="73" textAnchor="middle" fill={goldStroke} fontSize={12.5} fontWeight={600} fontFamily={ui}>
        منيو
      </text>

      {[0, 1, 2].map((i) => {
        const y = 110 + i * 76;
        return (
          <g key={`eco-menu-row-${String(i)}`}>
            <rect
              x="30"
              y={y}
              width="180"
              height="64"
              rx="15"
              stroke={goldStroke}
              strokeWidth={1.15}
              fill="rgb(20 18 14 / 0.45)"
            />
            <rect x="42" y={y + 14} width="44" height="36" rx="9" stroke={goldMuted} strokeWidth={1.15} fill="rgb(0 0 0 / 0.25)" />
            <path
              d={`M100 ${26 + y}h94M100 ${43 + y}h72`}
              stroke={line}
              strokeWidth={1.2}
              opacity={0.55}
              strokeLinecap="round"
            />
          </g>
        );
      })}

      {/* زر أسفل مخفّف كعنصر بصري فقط بدون شرح طويل */}
      <rect x="76" y="408" width="88" height="5" rx="2.5" fill={goldStroke} opacity={0.55} />
    </svg>
  );
}

export function DevicePhoneOrderLookup(props: SVGProps<SVGSVGElement>) {
  const ui = arabicUi;
  return (
    <svg viewBox="0 0 240 460" fill="none" aria-hidden {...props}>
      <rect
        x="18"
        y="16"
        width="204"
        height="428"
        rx="32"
        stroke={goldStroke}
        strokeWidth={1.45}
        fill="rgb(8 8 9 / 0.35)"
      />
      <rect x="88" y="28" width="64" height="6" rx="3" fill={line} opacity={0.5} />

      <text x="120" y="58" textAnchor="middle" fill={goldStroke} fontSize={13} fontWeight={600} fontFamily={ui}>
        طلباتي
      </text>

      <rect x="36" y="78" width="168" height="46" rx="12" stroke={goldMuted} strokeWidth={1.15} fill="rgb(20 18 14 / 0.4)" />
      <path
        d="M52 106h136"
        stroke={line}
        strokeWidth={1.3}
        strokeLinecap="round"
        opacity={0.35}
      />

      <rect x="40" y="142" width="160" height="44" rx="13" stroke={goldStroke} strokeWidth={1.2} fill="rgb(212 175 55 / 0.12)" />
      <text x="120" y="170" textAnchor="middle" fill={goldStroke} fontSize={13} fontWeight={600} fontFamily={ui}>
        بحث
      </text>

      {[0, 1, 2].map((i) => (
        <g key={`ol-${String(i)}`}>
          <rect
            x="30"
            y={208 + i * 62}
            width="180"
            height="52"
            rx="12"
            stroke={goldStroke}
            strokeWidth={1.1}
            fill="rgb(14 13 11 / 0.5)"
            opacity={1 - i * 0.04}
          />
          <path
            d={`M48 ${224 + i * 62}h90M48 ${243 + i * 62}h78`}
            stroke={line}
            strokeWidth={1.1}
            opacity={0.5}
            strokeLinecap="round"
          />
          <circle cx="200" cy={234 + i * 62} r="11" stroke={goldMuted} strokeWidth={1.2} fill="rgb(212 175 55 / 0.08)" />
        </g>
      ))}

      <rect x="76" y="408" width="88" height="5" rx="2.5" fill={goldStroke} opacity={0.55} />
    </svg>
  );
}

/** لوحة إداريّة: محتوى + تحرير + طلبات — نصوص قصيرة وأشكال أوضح */
export function DeviceLaptopOperations(props: SVGProps<SVGSVGElement>) {
  const ui = arabicUi;
  return (
    <svg viewBox="0 0 380 268" fill="none" aria-hidden {...props}>
      <path d="M48 218h294l26 14h-346l26-14Z" stroke={goldMuted} strokeWidth={1.1} fill="rgb(6 6 7 / 0.5)" />
      <rect x="28" y="18" width="324" height="190" rx="12" stroke={goldStroke} strokeWidth={1.2} fill="rgb(10 10 12 / 0.55)" />

      <path d="M102 38v164M232 38v164" stroke={goldStroke} strokeOpacity={0.35} strokeWidth={1} />

      <rect x="38" y="34" width="58" height="162" rx="8" stroke={line} strokeOpacity={0.5} fill="rgb(0 0 0 / 0.2)" strokeWidth={1.1} />
      {[74, 100, 126].map((yy) => (
        <path key={`nav-${yy}`} d={`M46 ${yy}h42`} stroke={goldMuted} strokeWidth={6} strokeLinecap="round" opacity={0.55} />
      ))}

      <rect x="110" y="34" width="114" height="162" rx="10" stroke={goldMuted} strokeWidth={1.1} fill="rgb(212 175 55 / 0.04)" />
      <path d="M126 62h92M126 86h98M126 110h94M126 136h90" stroke={line} strokeWidth={1.15} opacity={0.48} strokeLinecap="round" />

      <rect x="236" y="34" width="104" height="162" rx="10" stroke={goldStroke} strokeWidth={1.15} fill="rgb(212 175 55 / 0.06)" />
      <path d="M250 70h152M250 98h152M250 126h152M250 156h152" stroke={line} strokeWidth={1} opacity={0.4} strokeLinecap="round" />

      <text x="190" y="30" textAnchor="middle" fill={goldStroke} fontSize={9.5} fontWeight={600} fontFamily={ui}>
        لوحة التشغيل
      </text>
    </svg>
  );
}

/** لوحة إدارة عامة: دائرة KPI + أعمدة — نص عنوان واحد فقط */
export function DeviceLaptopExecutive(props: SVGProps<SVGSVGElement>) {
  const ui = arabicUi;
  const barGrad = `exec-bar-${useId().replace(/:/g, "")}`;
  const r = 48;
  const c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 400 274" fill="none" aria-hidden {...props}>
      <path d="M50 226h324l44 42h-412l44-42Z" stroke={goldMuted} strokeWidth={1.1} fill="rgb(6 6 7 / 0.5)" />
      <rect x="22" y="18" width="356" height="196" rx="14" stroke={goldStroke} strokeWidth={1.2} fill="rgb(10 10 12 / 0.55)" />
      <text x="200" y="48" textAnchor="middle" fill={goldStroke} fontSize={12} fontWeight={600} fontFamily={ui}>
        إدارة عامة
      </text>

      <defs>
        <linearGradient id={barGrad} x1="0" y1="1" x2="0" y2="0">
          <stop stopColor="#090909" />
          <stop offset="1" stopColor="#cfa63a" stopOpacity={0.55} />
        </linearGradient>
      </defs>

      <circle cx="108" cy="132" r={r} stroke={goldMuted} strokeWidth={9} opacity={0.45} fill="none" />
      <circle
        cx="108"
        cy="132"
        r={r}
        stroke={goldStroke}
        strokeWidth={9}
        strokeLinecap="round"
        strokeDasharray={`${c * 0.7} ${c}`}
        transform={`rotate(-90 108 132)`}
        fill="none"
      />
      <circle cx="108" cy="132" r="6" fill={goldStroke} opacity={0.9} />

      {[0, 1, 2, 3].map((i) => (
        <rect
          key={`ex-bar-${String(i)}`}
          x={178 + i * 48}
          y={174 - i * 10}
          width={32}
          height={62 + i * 18}
          rx={8}
          fill={`url(#${barGrad})`}
          stroke={goldStroke}
          strokeWidth={1.1}
          opacity={0.94 - i * 0.05}
        />
      ))}

      <circle cx="312" cy="128" r="36" stroke={goldStroke} strokeOpacity={0.25} strokeWidth={16} fill="rgb(212 175 55 / 0.06)" />
      <path d="M294 154h74M294 174h82" stroke={line} strokeWidth={1.1} opacity={0.4} strokeLinecap="round" />
    </svg>
  );
}

export const featureMocks = [
  {
    title: "عرض المنيو على الجوال",
    subtitle:
      "بطاقات أصناف بصورة وسطرّان لوصف مختصر؛ واجهة للاطّلاع على القائمة والأسعار، مع إمكان فصل تأكيد الطلب والعربة في مسار أو وحدة تجزئة أخرى إن رغبت.",
    description:
      "هاتف يظهر عليه عنوان «منيو» فوق ثلاث بطاقات بصور مصغّرة وأسطر نصية، وفي الأسفل شريط تنقّل مرجعي بسيط بدل أزرار مطوّلة داخل الرسم.",
    caption:
      "الشكل يعكس تجربة قراءة سريعة للمنيو قبل أي خطوة شراء؛ التحديثات تتم من لوحة المحتوى عند من يملك الصلاحية.",
    points: [
      "يُمكن عرض المنيو وحده لزيادة الوضوح، ثم تحويل العميل لمسار العربة أو الدفع حيث تكمِّنون ذلك في الإعداد.",
      "مناسب لقوائم موسمية تُحدَّث مركزيًا بينما يبقى الموبايل خفيفًا على العين.",
      "التسعير والصور تُدار من الداخل بحيث لا تختلف واجهة العميل عن ما يعتمدونه في التشغيل.",
    ],
    node: DevicePhoneMenu,
  },
  {
    title: "متابعة الطلب بحثًا برقم الجوال",
    subtitle:
      "العميل يُدخل نفس جوّال تسجيل الطلب، ثم يضغط «بحث»، فتظهر أسطر تلخِّص طلباته وحالاتها.",
    description:
      "هاتف فيه عنوان «طلباتي»، وحقل لرقم الجوال، ثم زر بحث، ثم عدة بطاقات أسطر تُجسِّد نتائج البحث كما في الجهاز المعروض في الرسم.",
    caption:
      "الدوائر الصغيرة على يمين الصف يمكن أن ترمز لحالة سريعة لكل صف حسب ما تضبطونه في المنتج.",
    points: [
      "يربط البحث بذلك الرقم نفسه الذي أدخله العميل عند إنشاء الطلب حتى لا يختلط أمر طلبات أشخاص مختلفين.",
      "يتيح عرض عدة أسطر عندما يكون للعميل أكثر من طلب على نفس الرقم.",
      "يمكن لاحقًا ربط الحالة بمسار التوصيل أو خرائط خارجية دون تغيير منطق القائمة نفسها.",
    ],
    node: DevicePhoneOrderLookup,
  },
  {
    title: "لوحة المحتوى ومراجعة الطلبات",
    subtitle:
      "شريط محتوى (منيو وعروض) بجانب مساحة لتحرير المنيو، ولوحة أعمدة لمراجعة الطلبات في نفس المتصفّح.",
    description:
      "رسم لابتوب يفصل الشاشة عموديًا: يسار قائمة جانبية مرسومة بخطوط، ووسط مساحة أسطر، ويمين شبكة صفوف كجدول طلبات؛ عنوان واحد فقط «لوحة التشغيل» فوق الرسم.",
    caption:
      "التقسيم يوضِّح أن تعديل القائمة يمكن أن يتم بجانب متابعة الطلبات دون الخروج من نفس الجلسة عند ضبط صلاحياتكم.",
    points: [
      "يُمكِّن فريق التشغيل من تحديث المنيو والعروض ثم قفل التغييرات قبل أن تنعكس على واجهة العميل.",
      "جدول الطلبات يحفز مراجعة يومية للحالات دون الانتقال إلى أداة أخرى.",
      "يمكن لاحقًا ربط كل عمود بحالة مطبخ أو صلاحية موظّف حسب إعداداتكم.",
    ],
    node: DeviceLaptopOperations,
  },
  {
    title: "الإدارة العامة والتحليلات",
    subtitle:
      "دائرة إحصاء، أعمدة تقارير، ومؤشرات جانبية — العنوان «إدارة عامة» فقط داخل الشاشة.",
    description:
      "واجهة لابتوب فيها دائرة مقطوعة، أعمدة متدرّجة، وحلقة ومؤشِّر خطوط في الجانب؛ بدون أسطر تشريح طويلة داخل الشاشة — التفاصيل في النص خارج الرسم.",
    caption:
      "الأرقام في الرسم تعبير بصري فقط؛ تربطونها لاحقًا ببياناتكم الفعلية من مصدر واحد للحقيقة.",
    points: [
      "تجمع في شاشة واحدة إشارات أداء يومية لاتخاذ قرار سريع قبل التعمّق في التقارير التفصيلية.",
      "الأعمدة تدعم مناقشة المواسم والذّروة مع فريقكم.",
      "يُستكمل بسياسة صلاحيات تمنح «أدمنًا عامًا» صلاحية التعديل على كل أجزاء الموقع كما تحدّدون في إعداداتكم.",
    ],
    node: DeviceLaptopExecutive,
  },
] as const;

