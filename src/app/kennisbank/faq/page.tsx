import type { Metadata } from "next";
import FAQContent from "./FAQContent";
import { faqs } from "./faqData";

export const metadata: Metadata = {
  title: "Veelgestelde vragen – Personal Training, CrossBox & Sportonderzoek",
  description:
    "Antwoorden op de meest gestelde vragen over personal training, CrossBox, sportonderzoek en voedingsadvies bij FIT Partners in Deurne.",
  alternates: { canonical: "https://fit-partners.nl/kennisbank/faq" },
  openGraph: {
    title: "Veelgestelde vragen | FIT Partners Deurne",
    description: "Alles wat je wilt weten over personal training, CrossBox, sportonderzoek en voedingsadvies.",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.flatMap(cat =>
    cat.items.map(item => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    }))
  ),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQContent />
    </>
  );
}
