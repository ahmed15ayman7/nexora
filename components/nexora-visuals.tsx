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
        strokeWidth={1.2}
        opacity={0.92}
      />
      <rect x="88" y="28" width="64" height="6" rx="3" fill={line} opacity={0.45} />

      <rect x="36" y="48" width="168" height="34" rx="10" stroke={goldMuted} strokeWidth={1.05} opacity={0.8} />
      <text x="120" y="70" textAnchor="middle" fill={line} fontSize={11} fontFamily={ui}>
        عرض المنيو
      </text>

      <text x="120" y="104" textAnchor="middle" fill={goldStroke} fontSize={8.5} fontFamily={ui} opacity={0.92}>
        قائمة اليوم للاطّلاع
      </text>

      {/* ثلاث بطاقات أصناف؛ هذا القسم مخصّص للعرض فقط حسب تجزئة المنتج */}
      {[0, 1, 2].map((i) => {
        const y = 116 + i * 74;
        return (
          <g key={`eco-menu-row-${String(i)}`}>
            <rect x="32" y={y} width="176" height="60" rx="15" stroke={goldStroke} strokeWidth={1.05} opacity={0.93} />
            <rect x="44" y={y + 12} width="42" height="36" rx="9" stroke={goldMuted} strokeWidth={1} />
            <path
              d={`M98 ${21 + y}h98M98 ${36 + y}h64`}
              stroke={line}
              strokeWidth={1.05}
              opacity={0.48}
              strokeLinecap="round"
            />
          </g>
        );
      })}

      <rect x="34" y="362" width="172" height="68" rx="14" stroke={goldMuted} strokeWidth={1.05} opacity={0.6} />
      <text x="120" y="388" textAnchor="middle" fill={line} fontSize={8} fontFamily={ui}>
        عرض الأسعار والأصناف فقط قبل ما العربة تأخذ ذلك في جزء تجزئة آخر
      </text>
      <text x="120" y="416" textAnchor="middle" fill={goldStroke} fontSize={8.75} fontFamily={ui}>
        تأكيد الطلب وحالة الدفع حيث تكمِّنون ذلك خارج هذا القسم
      </text>
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
        strokeWidth={1.2}
        opacity={0.92}
      />
      <rect x="88" y="28" width="64" height="6" rx="3" fill={line} opacity={0.45} />

      <text x="120" y="56" textAnchor="middle" fill={goldStroke} fontSize={11} fontFamily={ui}>
        طلباتي
      </text>
      <text x="120" y="80" textAnchor="middle" fill={line} fontSize={8} fontFamily={ui} opacity={0.86}>
        نفس جوّال تسجيل الطلب حيث أدخل عميلكم بيانته
      </text>

      <text x="120" y="104" textAnchor="middle" fill={goldStroke} fontSize={7.85} fontFamily={ui}>
        رقم الجوال
      </text>
      <rect x="36" y="112" width="168" height="44" rx="12" stroke={goldMuted} strokeWidth={1.1} opacity={0.85} />
      <text x="120" y="139" textAnchor="middle" fill={line} fontSize={9.75} fontFamily={ui} opacity={0.58}>
        05xx ····· ·····
      </text>

      <rect x="44" y="172" width="152" height="40" rx="14" stroke={goldStroke} strokeWidth={1.15} />
      <text x="120" y="198" textAnchor="middle" fill={line} fontSize={11} fontFamily={ui}>
        بحث عن الطلبات
      </text>

      {[0, 1, 2].map((i) => (
        <g key={`ol-${String(i)}`}>
          <rect x="32" y={214 + i * 58} width="176" height="48" rx="12" stroke={goldStroke} opacity={0.9 - i * 0.06} />
          <path
            d={`M48 ${230 + i * 58}h84M48 ${246 + i * 58}h98`}
            stroke={line}
            strokeWidth={1}
            opacity={0.42}
          />
          <circle cx="198" cy={238 + i * 58} r="11" stroke={goldMuted} strokeWidth={1.15} opacity={0.88} />
        </g>
      ))}

      <rect x="32" y="398" width="176" height="34" rx="10" stroke={line} strokeOpacity={0.35} opacity={0.92} strokeWidth={0.9} />
      <text x="120" y="420" textAnchor="middle" fill={goldStroke} fontSize={7.5} fontFamily={ui}>
        حالة كل طلب واضحة — يمكن إضافة خريطة خارجية حيث تكمِّنون ذلك
      </text>
    </svg>
  );
}

/** لوحة إداريّة: تعديل المحتوى (منيو · عروض) ولوحة الطلبات معًا */
export function DeviceLaptopOperations(props: SVGProps<SVGSVGElement>) {
  const ui = arabicUi;
  return (
    <svg viewBox="0 0 380 268" fill="none" aria-hidden {...props}>
      <path d="M48 218h294l26 14h-346l26-14Z" stroke={goldMuted} strokeWidth={1} />
      <rect x="28" y="18" width="324" height="190" rx="12" stroke={goldStroke} strokeWidth={1.1} />

      <rect x="40" y="34" width="56" height="158" rx="8" stroke={line} opacity={0.4} strokeWidth={1.05} />
      <text x="68" y="58" textAnchor="middle" fill={goldStroke} fontSize={7} fontFamily={ui}>
        محتوى
      </text>
      <path d="M52 92h34M52 126h34" stroke={goldMuted} strokeWidth={8} strokeLinecap="round" opacity={0.5} />
      <text x="68" y="158" textAnchor="middle" fill={goldStroke} fontSize={7} fontFamily={ui}>
        منيو · عروض
      </text>

      <rect x="108" y="34" width="118" height="158" rx="10" stroke={goldMuted} strokeWidth={1.05} />
      <text x="167" y="56" textAnchor="middle" fill={goldStroke} fontSize={8.5} fontFamily={ui}>
        تعديل المنيو
      </text>
      <path d="M124 76h136M124 98h142M124 120h138" stroke={line} strokeWidth={0.9} opacity={0.42} />

      <rect x="238" y="34" width="114" height="158" rx="10" stroke={goldStroke} strokeWidth={1.05} />
      <text x="295" y="56" textAnchor="middle" fill={goldStroke} fontSize={8.75} fontFamily={ui}>
        الطلبات
      </text>
      <path d="M254 76h154M254 102h154M254 126h154M254 154h154" stroke={line} strokeWidth={0.85} opacity={0.45} />
    </svg>
  );
}

/** لوحة إدارة عامة: مؤشرات ورسوم وصلاحيات شاملة */
export function DeviceLaptopExecutive(props: SVGProps<SVGSVGElement>) {
  const ui = arabicUi;
  const barGrad = `exec-bar-${useId().replace(/:/g, "")}`;
  const r = 44;
  const c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 400 274" fill="none" aria-hidden {...props}>
      <path d="M50 226h324l44 42h-412l44-42Z" stroke={goldMuted} strokeWidth={1} />
      <rect x="22" y="18" width="356" height="196" rx="14" stroke={goldStroke} strokeWidth={1.12} />
      <text x="200" y="46" textAnchor="middle" fill={goldStroke} fontSize={11} fontFamily={ui}>
        إدارة عامة
      </text>
      <text x="200" y="66" textAnchor="middle" fill={line} fontSize={8} fontFamily={ui} opacity={0.85}>
        طلبات · عملاء · صلاحيات كاملة
      </text>

      <defs>
        <linearGradient id={barGrad} x1="0" y1="1" x2="0" y2="0">
          <stop stopColor="#090909" />
          <stop offset="1" stopColor="#d4af3788" />
        </linearGradient>
      </defs>

      <circle cx="96" cy="130" r={r} stroke={goldMuted} strokeWidth={8} opacity={0.38} />
      <circle
        cx="96"
        cy="130"
        r={r}
        stroke={goldStroke}
        strokeWidth={8}
        strokeLinecap="round"
        strokeDasharray={`${c * 0.72} ${c}`}
        transform={`rotate(-90 96 130)`}
        fill="none"
      />

      {[0, 1, 2, 3].map((i) => (
        <rect
          key={`ex-bar-${String(i)}`}
          x={160 + i * 54}
          y={176 - i * 8}
          width={30}
          height={58 + i * 16}
          rx={7}
          fill={`url(#${barGrad})`}
          stroke={goldStroke}
          opacity={0.92 - i * 0.06}
        />
      ))}

      <path d="M294 154h78M294 172h92M294 190h78" stroke={line} strokeWidth={1} opacity={0.35} />
      <circle cx="320" cy="124" r="32" stroke={line} opacity={0.18} strokeWidth={14} />

      <text x="200" y="204" textAnchor="middle" fill={line} fontSize={7.75} fontFamily={ui}>
        يُضبط عندكم من يضيف أو يعدّل أي عنصر في الموقع
      </text>
    </svg>
  );
}

export const featureMocks = [
  {
    title: "عرض المنيو على الجوال",
    subtitle:
      "بطاقات أصناف بصورة وسطرّان لوصف مختصر؛ واجهة للاطّلاع على القائمة والأسعار، مع إمكان فصل تأكيد الطلب والعربة في مسار أو وحدة تجزئة أخرى إن رغبت.",
    description:
      "هاتف بعمود بطاقات وعنوان «عرض المنيو»؛ الأسفل يذكّر أن تأكيد الطلب وحالة الدفع يمكن ضبطهما خارج هذا القسم حسب تجزئة المنتج.",
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
      "العميل يُدخل نفس جوّال تسجيل الطلب، ثم زر «بحث عن الطلبات»، فتظهر أسطر تلخِّص طلباته وحالاتها.",
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
      "رسم لابتوب يقسِّم الشاشة: يسارًا شريط تنقل للمحتوى، ووسطًا مساحة لسطور المنتجات والعروض، ويمينًا جدولًا لمراجعة الطلبات كما في الرسم.",
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
      "دائرة إحصاء، أعمدة تقارير، وسطر يذكِّر بصلاحية تعديل أي عنصر في الموقع عند من تمنحونهم حق الإدارة العامة.",
    description:
      "واجهة لابتوب فيها مقطع دائري، أعمدة متدرّجة، وعناصر حواشٍ تُقترَن بمؤشرات الطلبات والعملاء كما في الرسم؛ السطر السفلي يفسِّر أن الصلاحيات الشاملة تُضبط عندكم.",
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

