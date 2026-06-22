import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description: "Neem contact op met FIT Partners in Deurne. Stuur een bericht of bel ons op 06-14634488.",
  alternates: { canonical: "https://fit-partners.nl/contact" },
};

export default function Contact() {
  return <ContactContent />;
}
