import type { Metadata } from "next";
import RoosterFTContent from "./RoosterFTContent";

export const metadata: Metadata = {
  title: "Rooster Functional Training Deurne",
  description: "Bekijk het wekelijkse rooster voor Functional Training bij FIT Partners in Deurne. Schrijf je in voor een sessie of neem contact op.",
  alternates: { canonical: "https://fit-partners.nl/rooster/functional-training" },
};

export default function RoosterFunctionalTrainingPage() {
  return <RoosterFTContent />;
}
