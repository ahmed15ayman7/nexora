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
  title: "نيكسورا | منصة مطاعم رقمية",
  description:
    "منصة طلبات فاخرة تجمع القائمة الرقمية، التتبع المباشر، ولوحة التحكم في تجربة واحدة.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${display.variable} ${ui.variable} h-full`}>
      <body className="min-h-full bg-black text-neutral-50 antialiased">{children}</body>
    </html>
  );
}
