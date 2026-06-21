import type { Metadata } from "next";
import TeamContent from "./TeamContent";

export const metadata: Metadata = {
  title: "Ons Team – Personal Trainers in Deurne",
  description: "Maak kennis met het team van FIT Partners in Deurne. Gecertificeerde personal trainers met passie voor sport, gezondheid en persoonlijke begeleiding.",
  alternates: { canonical: "https://fit-partners.nl/over-ons/team" },
};

export default function TeamPage() {
  return <TeamContent />;
}
