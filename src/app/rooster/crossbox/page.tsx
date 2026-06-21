import type { Metadata } from "next";
import RoosterCBContent from "./RoosterCBContent";

export const metadata: Metadata = {
  title: "Rooster CrossBox Deurne",
  description: "Bekijk het wekelijkse CrossBox rooster bij FIT Partners in Deurne. Groepslessen CrossMAX, Circuittraining, Cardioboksen en meer.",
  alternates: { canonical: "https://fit-partners.nl/rooster/crossbox" },
};

export default function RoosterCrossboxPage() {
  return <RoosterCBContent />;
}
