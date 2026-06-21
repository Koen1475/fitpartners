import type { Metadata } from "next";
import { Anton, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FIT Partners – Personal Training & Sportonderzoek",
  description:
    "Bereik jouw fitnessdoelen met bewezen methoden. Personal training, sportonderzoek en voedingscoaching op maat in een professionele studio.",
  keywords: "personal training, sportonderzoek, voedingscoaching, fitness, personal trainer",
  openGraph: {
    title: "FIT Partners – Personal Training & Sportonderzoek",
    description: "Bereik jouw fitnessdoelen met bewezen methoden. Personal training op maat.",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${anton.variable} ${montserrat.variable}`}>
      <body style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
