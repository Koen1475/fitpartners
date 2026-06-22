import type { Metadata } from "next";
import { Anton, Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntakeModalLoader from "@/components/IntakeModalLoader";

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

const BASE = "https://fit-partners.nl";

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "FIT Partners – Personal Training Studio Deurne",
    template: "%s | FIT Partners Deurne",
  },
  description:
    "Personal training, CrossBox, sportonderzoek en voedingsadvies in Deurne. Professionele begeleiding op maat met meetbare resultaten. Plan vandaag je gratis intake.",
  keywords: [
    "personal training Deurne",
    "personal trainer Deurne",
    "sportonderzoek",
    "VO2max test",
    "CrossBox",
    "functional training",
    "voedingsadvies",
    "fitness Deurne",
    "FIT Partners",
  ],
  authors: [{ name: "FIT Partners" }],
  creator: "FIT Partners",
  openGraph: {
    title: "FIT Partners – Personal Training Studio Deurne",
    description:
      "Personal training, CrossBox, sportonderzoek en voedingsadvies in Deurne. Professionele begeleiding op maat.",
    url: BASE,
    siteName: "FIT Partners",
    locale: "nl_NL",
    type: "website",
    images: [{ url: "/images/Hero.jpg", width: 1200, height: 630, alt: "FIT Partners – Personal Training Studio Deurne" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FIT Partners – Personal Training Studio Deurne",
    description: "Personal training, CrossBox en sportonderzoek in Deurne.",
    images: ["/images/Hero.jpg"],
  },
  alternates: { canonical: BASE },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "FIT Partners",
  description:
    "Personal training studio in Deurne. Wij bieden functional training, CrossBox, sportonderzoeken en voedingsadvies op maat.",
  url: BASE,
  telephone: "06-14634488",
  email: "info@fit-partners.nl",
  image: `${BASE}/images/Hero.jpg`,
  logo: `${BASE}/images/Logo.png`,
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "dr. Huub van Doorneweg 8d",
    addressLocality: "Deurne",
    postalCode: "5753 PM",
    addressCountry: "NL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.4598,
    longitude: 5.8069,
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "21:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "14:00" },
  ],
  hasMap: "https://maps.google.com/?q=FIT+Partners+Deurne",
  sameAs: [
    "https://www.instagram.com/fitpartners_/",
    "https://www.facebook.com/FITPartners/",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "3",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Mark" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Voor het eerst train ik met een plan dat klopt. De tussenmetingen houden me echt scherp.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Esther" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Geen anoniem sportschool-gevoel maar echte begeleiding. Ik zie elke maand vooruitgang.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Joost" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "De rust en aandacht in de studio zijn top. Ik ga met plezier en haal mijn doelen.",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${anton.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
        <Header logo={
          <Link href="/" style={{ flexShrink: 0 }}>
            <Image
              src="/images/FIT-Partners-Logo-Witte-Letters-450X150.png"
              alt="FIT Partners"
              width={160}
              height={54}
              style={{ objectFit: "contain" }}
              priority
              quality={60}
              sizes="160px"
            />
          </Link>
        } />
        {children}
        <Footer />
        <IntakeModalLoader />
      </body>
    </html>
  );
}
