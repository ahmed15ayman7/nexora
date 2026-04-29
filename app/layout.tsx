import type { Metadata } from "next";
import { Cairo, El_Messiri } from "next/font/google";

import "./globals.css";

const display = El_Messiri({
  variable: "--font-display",
  subsets: ["arabic", "latin"],
  weight: ["500", "600", "700"],
});

const ui = Cairo({
  variable: "--font-ui",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "نيكسورا | منيو وطلب وتتبّع — منصّة مطاعم",
  description:
    "نموذج لمسار الطلب بالكامل: منيو ذكية على الموبايل، تتبّع لايف للتوصيل، ولوحة تحكم للصالة… الكلام مصري ومشروح بالتفاصيل.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar-EG" dir="rtl" className={`${display.variable} ${ui.variable} h-full`}>
      <body className="min-h-full bg-black text-neutral-50 antialiased">{children}</body>
    </html>
  );
}
