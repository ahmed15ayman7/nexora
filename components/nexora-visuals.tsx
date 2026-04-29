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

      {/* شريط علوي — يحمِّل صفحة «منيو على الموبايل» وفق نص المرحلة */}
      <rect x="36" y="48" width="168" height="34" rx="10" stroke={goldMuted} strokeWidth={1.05} opacity={0.8} />
      <text x="120" y="70" textAnchor="middle" fill={line} fontSize={11} fontFamily={ui}>
        منيو رقمي
      </text>

      <text x="120" y="104" textAnchor="middle" fill={goldStroke} fontSize={8.5} fontFamily={ui} opacity={0.92}>
        اختَر الصنف
      </text>

      {/* ثلاث بطاقات أصناف: مصغَّر وسطرّان نص — منيو حقيقية لا شكل فارغ وسط الشاشة */}
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

      {/* خطّان ملخِّص قبل الزرّ — إيحاء بأن العربة تتراكب سطرًا سطرًا كما في نصكم */}
      <path d="M52 350h136" stroke={line} strokeWidth={1} opacity={0.35} strokeDasharray="5 7" />
      <path d="M62 362h118" stroke={line} strokeWidth={1} opacity={0.28} strokeDasharray="5 8" />

      <rect x="42" y="386" width="156" height="46" rx="16" stroke={goldStroke} strokeWidth={1.15} />
      <text x="120" y="417" textAnchor="middle" fill={line} fontSize={11} fontFamily={ui}>
        أضِف إلى العربة
      </text>
    </svg>
  );
}

export function DevicePhoneTracking(props: SVGProps<SVGSVGElement>) {
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

      {/* شريط حالة: الطلب «خارج المطعم» في الطريق */}
      <rect x="40" y="48" width="160" height="28" rx="10" stroke={goldMuted} strokeWidth={1.05} opacity={0.75} />
      <text x="120" y="66" textAnchor="middle" fill={line} fontSize={8.75} fontFamily={ui} opacity={0.95}>
        الطلب خارج · بالطريق
      </text>

      {/* لوحة خريطة تملأ وسط الهاتف */}
      <rect
        x="30"
        y="88"
        width="180"
        height="288"
        rx="20"
        fill="rgb(10 10 9 / 0.52)"
        stroke={goldMuted}
        strokeWidth={1.08}
      />

      <g stroke={line} strokeWidth={0.5} opacity={0.28}>
        <path d="M42 132h156M42 174h156M42 218h156M42 266h156M42 314h156" />
        <path d="M78 104v284M138 104v284M188 104v284" />
      </g>

      {/* مسار المنقط بين المطعم ووجهة التسليم */}
      <path
        d="M100 164 C138 226 154 274 174 319"
        stroke={goldStroke}
        strokeWidth={2}
        strokeDasharray="8 10"
        strokeLinecap="round"
        opacity={0.94}
      />

      {/* نقطة المطعم (انطلاق) */}
      <g>
        <circle cx="94" cy="148" r="13" fill="rgb(14 13 11)" stroke={goldStroke} strokeWidth={1.55} />
        <circle cx="94" cy="148" r="5" stroke={line} opacity={0.75} />
      </g>
      <text x="94" y="124" textAnchor="middle" fill={goldStroke} fontSize={7} fontFamily={ui} opacity={0.94}>
        المطعم
      </text>

      {/* نقطة عنوان العميل */}
      <g>
        <circle cx="174" cy="332" r="13" fill="rgb(13 12 10)" stroke={goldMuted} strokeWidth={1.4} />
        <circle cx="174" cy="332" r="5" stroke={line} opacity={0.5} />
      </g>
      <text x="174" y="354" textAnchor="middle" fill={line} fontSize={7} fontFamily={ui} opacity={0.85}>
        التسليم
      </text>

      {/* هالة خفيفة لتلميح موقع الموصّل على المسار */}
      <circle cx="144" cy="252" r="16" stroke={goldStroke} strokeWidth={0.9} opacity={0.22} />

      {/* الموصّل على المنتصف الأمام للمسار (أثناء التسليم خارج المطعم) */}
      <g transform="translate(126 246) rotate(18)">
        <rect width="44" height="18" rx="7" stroke={goldStroke} strokeWidth={1.2} />
        <circle cx="12" cy="22" r="7" stroke={line} strokeWidth={1} />
        <circle cx="32" cy="22" r="7" stroke={line} strokeWidth={1} />
      </g>

      {/* بانر تتبّع لحظي — يطابق وصف المحتوى في الصفحة */}
      <rect x="28" y="388" width="184" height="38" rx="12" stroke={goldStroke} strokeWidth={1.05} />
      <text x="120" y="413" textAnchor="middle" fill={line} fontSize={10} fontFamily={ui}>
        لايف · رايحالك
      </text>
    </svg>
  );
}

export function DeviceLaptopDashboard(props: SVGProps<SVGSVGElement>) {
  const lidId = "lid-gradient-nexora-ecosystem-laptop";
  return (
    <svg viewBox="0 0 360 246" fill="none" aria-hidden {...props}>
      <path d="M42 204h278l26 18h-332l26-18Z" stroke={goldStroke} strokeWidth={1} />
      <rect x="32" y="22" width="296" height="182" rx="12" stroke={goldStroke} strokeWidth={1.1} />
      <rect x="44" y="42" width="72" height="10" rx="3" stroke={line} opacity={0.55} />
      <path
        d="M76 154l36-30 42 14 54-74 74 48"
        stroke={goldStroke}
        strokeWidth={1.35}
      />
      <rect x="64" y="154" width="220" height="28" rx="6" stroke={line} opacity={0.45} />
      <rect x="70" y="116" width="18" height="38" rx="4" stroke={goldMuted} opacity={0.75} />
      <rect x="96" y="96" width="18" height="58" rx="4" stroke={goldStroke} />
      <rect x="126" y="108" width="18" height="46" rx="4" stroke={line} opacity={0.55} />
      <rect x="198" y="68" width="112" height="46" rx="8" stroke={line} opacity={0.42} />
      <path
        d="M10 226h344"
        stroke={`url(#${lidId})`}
        strokeWidth={8}
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id={lidId} x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#111" />
          <stop offset="0.5" stopColor="#d4af37" stopOpacity="0.65" />
          <stop offset="1" stopColor="#111" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** قائمة منتجات: صورة مصغّرة + سطرّان نصّ لكل صف */
function IllustrationDigitalMenu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 280 296" fill="none" aria-hidden {...props}>
      <rect
        x="72"
        y="16"
        width="136"
        height="264"
        rx="32"
        stroke={goldStroke}
        strokeWidth={1.25}
      />
      <rect x="124" y="30" width="32" height="6" rx="3" fill={line} opacity={0.4} />
      <rect x="96" y="52" width="88" height="22" rx="8" stroke={goldMuted} opacity={0.55} />

      {[0, 1].map((i) => (
        <g key={`row-${String(i)}`}>
          <rect
            x="84"
            y={86 + i * 66}
            width="112"
            height="56"
            rx="14"
            stroke={goldStroke}
            opacity={0.94}
          />
          <rect
            x="96"
            y={96 + i * 66}
            width="40"
            height="36"
            rx="10"
            stroke={goldMuted}
          />
          <path
            d={`M154 ${107 + i * 66}h98M154 ${126 + i * 66}h78`}
            stroke={line}
            strokeWidth={1.05}
            opacity={0.55}
          />
        </g>
      ))}

      <rect x="84" y="235" width="112" height="40" rx="16" stroke={goldStroke} strokeWidth={1.2} />
      <text x="140" y="260" textAnchor="middle" fill={line} fontSize={10} fontFamily={arabicUi}>
        تأكيد
      </text>
    </svg>
  );
}

/** عربة (أصناف بصورة مصغّرة) ثم فاصل ومسمّيات ثم خريطة بمسار ومركبة توصيل */
function IllustrationCartAndMap(props: SVGProps<SVGSVGElement>) {
  const ui = arabicUi;
  return (
    <svg viewBox="0 0 260 400" fill="none" aria-hidden {...props}>
      {/* هيكل الهاتف */}
      <rect
        x="48"
        y="10"
        width="164"
        height="380"
        rx="34"
        stroke={goldStroke}
        strokeWidth={1.22}
      />
      <rect x="116" y="26" width="28" height="6" rx="3" fill={line} opacity={0.4} />

      {/* ─── قسم العربة ─── */}
      <text
        x="130"
        y="48"
        textAnchor="middle"
        fill={goldStroke}
        fontSize={10}
        fontFamily={ui}
      >
        العربة
      </text>

      {[0, 1, 2].map((i) => {
        const y = 54 + i * 42;
        return (
          <g key={`cart-${String(i)}`}>
            <rect x="62" y={y} width="136" height="36" rx="11" stroke={goldStroke} opacity={0.9} />
            <rect x="72" y={y + 7} width="34" height="22" rx="7" stroke={goldMuted} />
            <path
              d={`M118 ${12 + y}h74M118 ${21 + y}h48`}
              stroke={line}
              strokeWidth={1}
              opacity={0.48}
              strokeLinecap="round"
            />
          </g>
        );
      })}

      <path d="M86 182h88" stroke={line} strokeWidth={1} strokeDasharray="4 6" opacity={0.42} />

      {/* ─── فاصل بين العربة والخريطة ─── */}
      <path d="M58 204h144" stroke={goldStroke} strokeWidth={1.05} opacity={0.55} />
      <text x="130" y="226" textAnchor="middle" fill={line} fontSize={9.5} fontFamily={ui} opacity={0.92}>
        تتبّع على الخريطة
      </text>

      {/* ─── لوحة الخريطة (بدون رسوم خارج الحدّ) ─── */}
      <rect
        x="58"
        y="236"
        width="144"
        height="130"
        rx="16"
        fill="rgb(12 11 10 / 0.58)"
        stroke={goldStroke}
        strokeWidth={1.15}
      />

      <g stroke={line} strokeWidth={0.55} opacity={0.32}>
        <path d="M66 258h128M66 281h128M66 306h128M66 331h128" />
        <path d="M86 246v114M126 246v114M166 246v114" />
      </g>

      {/* مسار التوصيل (تحت نقاط الانطلاق/الاستلام) */}
      <path
        d="M106 284 Q146 294 174 332"
        stroke={goldStroke}
        strokeWidth={2}
        strokeDasharray="7 10"
        strokeLinecap="round"
        opacity={0.95}
      />

      {/* نقطة انطلاق (المطعم) */}
      <g>
        <circle cx="94" cy="276" r="12" fill="rgb(16 14 11)" stroke={goldStroke} strokeWidth={1.5} />
        <circle cx="94" cy="276" r="5" stroke={line} strokeWidth={1} opacity={0.7} />
      </g>
      <text x="94" y="248" textAnchor="middle" fill={goldStroke} fontSize={7.5} fontFamily={ui} opacity={0.95}>
        من المطعم
      </text>

      {/* نقطة التسليم */}
      <g>
        <circle cx="178" cy="338" r="12" fill="rgb(14 13 11)" stroke={goldMuted} strokeWidth={1.45} />
        <circle cx="178" cy="338" r="5" stroke={line} strokeWidth={1} opacity={0.55} />
      </g>
      <text x="178" y="358" textAnchor="middle" fill={line} fontSize={7.5} fontFamily={ui} opacity={0.88}>
        للعميل
      </text>

      {/* مركبة التوصيل فوق الطبقات لتبدو ظاهرة */}
      <g transform="translate(128 294) rotate(28)">
        <rect width="42" height="18" rx="7" stroke={goldStroke} strokeWidth={1.25} />
        <circle cx="12" cy="22" r="7" stroke={line} strokeWidth={1} />
        <circle cx="32" cy="22" r="7" stroke={line} strokeWidth={1} />
      </g>
    </svg>
  );
}

/** KPIs دوائر، أعمدة، ومؤشِّر اتّجاه واحد لليوم */
function IllustrationAdminDashboard(props: SVGProps<SVGSVGElement>) {
  const gradId = `nexora-bar-fill-features-${useId().replace(/:/g, "")}`;
  return (
    <svg viewBox="0 0 400 236" fill="none" aria-hidden {...props}>
      <defs>
        <linearGradient id={gradId} x1="0" y1="1" x2="0" y2="0">
          <stop stopColor="#070707" />
          <stop offset="1" stopColor="#cfa63a52" />
        </linearGradient>
      </defs>
      <path d="M44 188h328l42 42h-412l42-42Z" stroke={goldMuted} strokeWidth={1} />
      <rect x="28" y="28" width="344" height="162" rx="16" stroke={goldStroke} strokeWidth={1.12} />
      <rect x="54" y="48" width="144" height="22" rx="8" stroke={line} opacity={0.52} />

      {[0, 1, 2].map((k) => (
        <circle
          key={`k-${String(k)}`}
          cx={108 + k * 120}
          cy="118"
          r="42"
          stroke={goldStroke}
          opacity={0.82}
        />
      ))}

      {[116, 150, 186, 222].map((bx, idx) => (
        <rect
          key={`bar-${String(bx)}`}
          x={bx}
          y={174 - idx * 12}
          width="32"
          height={40 + idx * 18}
          rx="8"
          fill={`url(#${gradId})`}
          stroke={goldStroke}
          opacity={0.93 - idx * 0.07}
        />
      ))}
      <path
        d="M74 174l94-142 246 284 162-346"
        stroke={line}
        strokeWidth={1.7}
      />
    </svg>
  );
}

/** قياس زمن دائري (قوس تقدّم + عقرب) + خطوط حركة = سرعة واستقرار وقت الذّروة */
function IllustrationFastPerformance(props: SVGProps<SVGSVGElement>) {
  const cx = 102;
  const cy = 100;
  const r = 64;
  const circumference = 2 * Math.PI * r;
  const progressRatio = 0.78;

  return (
    <svg viewBox="0 0 300 200" fill="none" aria-hidden {...props}>
      {/* مسار المؤشِّر الخلفي */}
      <circle cx={cx} cy={cy} r={r} stroke={goldMuted} strokeWidth={2.6} opacity={0.38} />

      {/* قوس تقدُّم — يقوِّي فكرة «سرعة استجابة» دون قطع خارج الدائرة */}
      <circle
        cx={cx}
        cy={cy}
        r={r}
        stroke={goldStroke}
        strokeWidth={6.75}
        strokeLinecap="round"
        opacity={0.95}
        strokeDasharray={`${circumference * progressRatio} ${circumference}`}
        transform={`rotate(-90 ${cx} ${cy})`}
      />

      {/* عقرب إلى منطقة أداء مرتفع */}
      <path
        d={`M ${cx} ${cy} L ${cx + 44} ${cy - 42}`}
        stroke={line}
        strokeWidth={2.35}
        strokeLinecap="round"
      />
      <circle cx={cx} cy={cy} r={9} fill="#0a0b0c" stroke={goldStroke} strokeWidth={1.35} />

      {/* خطوط حركة — أطوال واتساعات واقعية ضمن الحد */}
      {[0, 1, 2, 3, 4].map((i) => {
        const y = 62 + i * 11;
        const len = 36 + i * 15;
        return (
          <path
            key={`streak-${String(i)}`}
            d={`M ${173 + i * 7} ${y} h ${len}`}
            stroke="#eacb7ebb"
            strokeWidth={Math.max(3.1, 7.25 - i * 0.7)}
            strokeLinecap="round"
            opacity={0.93 - i * 0.1}
          />
        );
      })}

      <text x="150" y="184" textAnchor="middle" fill={line} fontSize={11} fontFamily={arabicUi}>
        استقرار وقت الذّروة
      </text>
    </svg>
  );
}

export const featureMocks = [
  {
    title: "المنيو الرقمية على الجوال",
    subtitle: "بطاقة لكل صنف: خانة للصورة، سطرّان للنص، ثم زر واحد أسفل الصفحة.",
    description:
      "الرسم داخل إطار هاتف: ثلاث بطاقات متشابهة؛ في كل منها يمينًا خانة لمربَّع تصوَّر له صورة الطبَق، ويسارًا مستطيلان يمثّلان اسمًا ووصفًا قصيرًا؛ أسفل الشاشة زر واحد عريض لمرحلة التأكيد. هذا ترتيب واجهة منيو وليس رسومًا عشوائية.",
    caption:
      "التكرار بذات هوية البطاقة يبيِّن أنكم تعرضون عدة منتجات على نفس النمط قبل الانتقال للعربة.",
    points: [
      "فصل كل منتج عن الآخر مرئيًا فيسهِّل مسح الواجهة والمقارنة بين الأصناف.",
      "الزر الأسفلي الواحد يجعل خطوة «المتابعة» واضحة دون تعارض مع أزرار ثانوية بنفس الشرائح.",
      "المنيو مخصّصة للعميل على الجوال، منفصلة عن أي لوحة إدارة تفتحونها في المتصفّح لاحقًا.",
    ],
    node: IllustrationDigitalMenu,
  },
  {
    title: "عربة ومتابعة على الخريطة",
    subtitle: "عنوان «العربة»؛ ثلاثة صفوف بصورة صغيرة وسطرّان نصّ؛ تحتها عنوان «التتبّع» لوحة خرائط ومسار ومَركبة.",
    description:
      "من أعلى لأسفل: قسم العربة عنوانه «العربة»، وفيها ثلاث صفوف؛ كل صف فيه مربَّع يشبه الصورة المصغّرة ثم سطرّان أمامهما كاسم ووصف مختصر؛ ثم فاصل ثم عنوان «تتبّع على الخريطة». أسفله مستطيل مظلّل داخل الهاتف بشبكة خرائط عمود وفَق، ومؤشِّران مسمّيان «من المطعم» و«للعميل» بلونين مختلفين، ومسار متقطّع يربطهما، ومركبة بسيطة على المسار لعرض الموصّل—كل ذلك في شاشة موبايل واحدة دون عناصر خارج الحدود.",
    caption:
      "الفاصل بين قسم العربة وقسم الخريطة يميِّز بين «ماذا طلب» وبين «أين كان الطريق» دون خلط المرجعيتين.",
    points: [
      "يسمح للضيف أو للمطعم بحالة واحدة أمامكم: قائمة المواد وحالة الموضع المعروضة معًا.",
      "المسار بين النقطتين يوضِّح أن المتتبّع جغرافي وليس تحديثًا نظاميًّا فارغ المعنى بصريًا.",
      "رمز المركبة يكمِّل الرسالة بحيث لا يفسَّر أيُّ من الرسم بوصف مخزني داخلي فقط.",
    ],
    node: IllustrationCartAndMap,
  },
  {
    title: "لوحة تحكم وتشغيل ويب",
    subtitle: "دوائر ومؤشرات وأعمدة داخل شاشة لاب توب وقاعدة تحته.",
    description:
      "الرسم ليس هاتفًا: مستطيل شاشة وفيه مجموعة دوائر كبيرة تشبه KPIs، رسوم عمودية، وخط أمام ذلك يعبِّر عن اتّجاه اليوم؛ تحت الشاشة قاعدة الحاسوب واضحة. الفكرة هي نافذة ويب لفريقكم التشغيلي لمتابعة اليوم وليس لتجربة الزبائن عبر الموبايل.",
    caption:
      "المحتوى عدديًّا في الدوائر مثال للتخطيط فقط؛ تربطونه لاحقًا بقياسكم الفعلي عند الانطلاق.",
    points: [
      "تلائم مراجعة سريعة لعدِّة مؤشرات في لمحة واحدة دون تجزئة إلى شاشات متعددة الآن.",
      "الأعمدة مقترنة بالخط تدعمان حوارًا عن المواسم أو الذّروة قبل الدخول في جداول تفصيلية.",
      "واجهة سطح المكتب والمتصفِّح توضِّح أن هذه الطبقة مخصّصة لفريقكم الداخلي وليست لتجربة العميل على الهاتف.",
    ],
    node: IllustrationAdminDashboard,
  },
  {
    title: "سرعة استجابة واستقرار وقت الذّروة",
    subtitle: "قياس زمن بدائرة وقوس تقدّم وعقرب؛ وبجانبه خطوط حركة أفقيِّة.",
    description:
      "قراءة دائرية: حلقة خلفية خام وقوس تقدُّم ذهبي يمسح معظم المحيط؛ وعقرب من المركز لأعلى اليمين. بجانبهما خطوط أفقيّة متنامية الطول ترمز لتدفُّق المراحل بسلاسة في وقت الذّروة؛ لا تُعتبر قياسًا رقميًا نهائيًا قبل تهيئة الأنظمة لديكم.",
    caption:
      "الخطوط لا تمثِّل قراءة مراقبة حيًّا هنا؛ إنها رمز بصري تربطونه لاحقًا بقياس الخادم والدفع الفعلي.",
    points: [
      "يصف بصورة واحدة لماذا يهم أن تبقى واجهة التأكيد سريعة الاستجابة مع نموِّ الطلبات في نفس الساعة.",
      "يجعل حديثَ الذّروة أوضح دون ادِّعاء رقم واحد قبل ربط الأنظمة لديكم.",
      "يضع الأساس لتربطوا لاحقًا بنفس الإطار البصري أرقام الخادم أو أزمنة إتمام الدفع عند العميل.",
    ],
    node: IllustrationFastPerformance,
  },
] as const;
