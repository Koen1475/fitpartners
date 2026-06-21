import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Aanpak from "@/components/Aanpak";
import Diensten from "@/components/Diensten";
import Team from "@/components/Team";
import Reviews from "@/components/Reviews";
import Tarieven from "@/components/Tarieven";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "FIT Partners – Personal Training Studio Deurne",
  description:
    "Personal training, CrossBox groepslessen, sportonderzoek en voedingsadvies in Deurne. Professionele begeleiding op maat met meetbare resultaten. Plan vandaag je gratis intake.",
  alternates: { canonical: "https://fit-partners.nl" },
  openGraph: {
    title: "FIT Partners – Personal Training Studio Deurne",
    description: "Personal training, CrossBox, sportonderzoek en voedingsadvies. Professionele begeleiding in Deurne.",
    url: "https://fit-partners.nl",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Aanpak />
      <Diensten />
      <Team />
      <Reviews />
      <Tarieven />
      <FAQ />
      <Contact />
    </main>
  );
}
