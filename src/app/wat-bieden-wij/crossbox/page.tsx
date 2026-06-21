import type { Metadata } from "next";
import CrossboxContent from "./CrossboxContent";

export const metadata: Metadata = {
  title: "CrossBox Groepslessen Deurne – CrossMAX, Cardioboksen & Mobility",
  description:
    "CrossBox groepslessen in Deurne: CrossMAX, Circuittraining, Cardioboksen, Mobility en CrossMAX Teens. Effectief trainen aan kracht en conditie bij FIT Partners.",
  alternates: { canonical: "https://fit-partners.nl/wat-bieden-wij/crossbox" },
  openGraph: {
    title: "CrossBox Groepslessen Deurne | FIT Partners",
    description: "CrossMAX, Cardioboksen, Mobility en meer. Effectieve groepslessen in Deurne.",
    type: "website",
  },
};

export default function CrossboxPage() {
  return <CrossboxContent />;
}
