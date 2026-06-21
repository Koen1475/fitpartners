import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Wie zijn we – FIT Partners",
  description: "Het levensverhaal van FIT Partners. Van Wellness Test & Training Deurne in 2012 tot een volledig trainingscentrum met CrossBox aan de Dr. Huub van Doorneweg.",
};

const timeline = [
  {
    date: "02 april 2012",
    year: "2012",
    title: "De geboorte",
    body: "FIT Partners is geboren — toentertijd beter bekend als Wellness Test & Training Deurne. Eigenaar Niek Smits introduceerde met zijn toenmalige compagnon dit unieke concept in de sport- en bewegingsbegeleiding. In samenwerking met Fysiotherapie Rinus Louwers werden de eerste trainingen begeleid op locatie.",
  },
  {
    date: "September 2013",
    year: "2013",
    title: "Een nieuwe naam",
    body: "Wellness Test & Training Deurne verandert van naam: FIT Partners. Een naam die past bij de visie van persoonlijke begeleiding en samenwerking.",
  },
  {
    date: "Februari 2014",
    year: "2014",
    title: "Op eigen benen",
    body: "Na twee jaar groeide FIT Partners uit haar jasje. De verhuizing naar de huidige locatie aan de Dr. Huub van Doorneweg 8 te Deurne werd een feit. Tijd om zelfstandig te staan.",
  },
  {
    date: "Maart 2015",
    year: "2015",
    title: "Ruimte voor groei",
    body: "Eenmaal gesetteld begon de verbouwing. Er werd meer ruimte gecreëerd voor een trainingsbox, zodat groepslessen aangeboden konden worden.",
  },
  {
    date: "November 2016",
    year: "2016",
    title: "SportLab Zuid",
    body: "Oprichting van dochteronderneming SportLab Zuid: een test- en trainingsadviesbureau met een eigen identiteit. FIT Partners ging door als trainingscentrum en maakt gebruik van de wetenschappelijke sportonderzoeken van SportLab Zuid.",
  },
  {
    date: "September 2018",
    year: "2018",
    title: "Zelfstandig verder",
    body: "Niek Smits gaat zelfstandig verder met trainingscentrum FIT Partners en test- en trainingsadviesbureau SportLab Zuid, nadat zijn compagnon besloot te stoppen.",
  },
  {
    date: "November 2019",
    year: "2019",
    title: "Uitbreiding trainingscentrum",
    body: "Uitbreiding van het trainingscentrum: vergroting van de trainingsfaciliteiten voor Functional Training en de toevoeging van een volledig zelfstandig ingerichte CrossBox.",
  },
  {
    date: "April 2023",
    year: "2023",
    title: "Eigenaar van eigen locatie",
    body: "FIT Partners is officieel eigenaar van de eigen locatie aan de Dr. Huub van Doorneweg. Een mijlpaal waar met trots op wordt teruggekeken.",
    milestone: true,
  },
];

export default function WieZijnWe() {
  return (
    <main>
      {/* Hero */}
      <section style={{ position: "relative", height: 360, display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/images/Niek.jpg)", backgroundSize: "cover", backgroundPosition: "center 20%", filter: "brightness(0.18)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,11,10,1) 0%, rgba(12,11,10,0) 55%)" }} />
        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "0 24px 64px", width: "100%" }}>
          <p style={{ color: "#b79d3e", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 12px" }}>Over ons</p>
          <h1 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(40px, 6vw, 80px)", textTransform: "uppercase", color: "#f4efe6", margin: "0 0 16px", lineHeight: 1 }}>
            Wie zijn we?
          </h1>
          <p style={{ color: "#cfc9bd", fontSize: 17, lineHeight: 1.7, maxWidth: 560, margin: 0 }}>
            Het levensverhaal van FIT Partners — van een klein idee in 2012 tot een volwaardig trainingscentrum in Deurne.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ background: "#0c0b0a", padding: "80px 24px 100px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative" }}>

          {/* Vertical line */}
          <div style={{ position: "absolute", left: 52, top: 0, bottom: 0, width: 1, background: "linear-gradient(to bottom, transparent, #b79d3e 8%, #b79d3e 92%, transparent)" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {timeline.map((item, i) => (
              <Reveal key={i} delay={1}>
                <div style={{ display: "flex", gap: 40, paddingBottom: i < timeline.length - 1 ? 56 : 0, position: "relative" }}>

                  {/* Year + dot */}
                  <div style={{ flexShrink: 0, width: 64, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 4 }}>
                    <div style={{
                      width: item.milestone ? 18 : 12,
                      height: item.milestone ? 18 : 12,
                      borderRadius: "50%",
                      background: item.milestone ? "#b79d3e" : "#0c0b0a",
                      border: `2px solid #b79d3e`,
                      flexShrink: 0,
                      zIndex: 1,
                      boxShadow: item.milestone ? "0 0 16px rgba(183,157,62,0.5)" : "none",
                      marginBottom: 10,
                    }} />
                    <span style={{ fontFamily: "var(--font-anton)", fontSize: 13, color: "#b79d3e", letterSpacing: "0.04em", writingMode: "vertical-lr", transform: "rotate(180deg)", lineHeight: 1 }}>
                      {item.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div style={{
                    background: item.milestone ? "#131211" : "transparent",
                    border: item.milestone ? "1px solid #b79d3e" : "none",
                    borderLeft: item.milestone ? `3px solid #b79d3e` : "none",
                    padding: item.milestone ? "28px 32px" : "0 0 0 4px",
                    flex: 1,
                  }}>
                    <p style={{ color: "#b79d3e", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 8px", fontWeight: 700 }}>
                      {item.date}
                    </p>
                    <h2 style={{ fontFamily: "var(--font-anton)", fontSize: 22, textTransform: "uppercase", color: "#f4efe6", margin: "0 0 12px", lineHeight: 1.1 }}>
                      {item.title}
                    </h2>
                    <p style={{ color: "#a39d92", fontSize: 15, lineHeight: 1.9, margin: 0 }}>
                      {item.body}
                    </p>
                    {item.milestone && (
                      <div style={{ marginTop: 20, display: "inline-flex", alignItems: "center", gap: 8 }}>
                        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#b79d3e", display: "inline-block" }} />
                        <span style={{ color: "#b79d3e", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Mijlpaal</span>
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#131211", padding: "72px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <Reveal>
            <h2 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(26px, 4vw, 44px)", textTransform: "uppercase", color: "#f4efe6", margin: "0 0 16px", lineHeight: 1 }}>
              Maak deel uit van ons verhaal
            </h2>
            <p style={{ color: "#a39d92", fontSize: 15, lineHeight: 1.8, marginBottom: 36 }}>
              Kom kennismaken en ontdek wat FIT Partners voor jou kan betekenen.
            </p>
            <a href="tel:06-14634488"
              style={{ display: "inline-block", background: "#b79d3e", color: "#0c0b0a", padding: "15px 40px", fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}>
              Gratis intake plannen
            </a>
          </Reveal>
        </div>
      </section>

      <style>{`
        @media (max-width: 600px) {
          /* On mobile, collapse the year column into the content */
        }
      `}</style>
    </main>
  );
}
