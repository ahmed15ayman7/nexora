import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";

import "./globals.css";

const playfairSerif = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-serif",
});

const montserratSans = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans-alt",
});

export const metadata: Metadata = {
  title: "NEXORA RESTAURANT · Digital Ordering Platform",
  description:
    "Luxury-forward restaurant ordering experiences with live tracking and enterprise-grade dashboards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${playfairSerif.variable} ${montserratSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
