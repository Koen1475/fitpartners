import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Functional Training – FIT Partners",
  description: "Persoonlijk trainingsprogramma met meetbare resultaten. Intensieve begeleiding op maat bij FIT Partners in Deurne.",
};

const waarom = [
  "Persoonlijk trainingsprogramma",
  "Intensieve begeleiding",
  "Training op afspraak (stok achter de deur)",
  "Jaarlijks sportonderzoek",
  "Iedere 8 weken een nieuw trainingsprogramma",
  "Evaluatie, coaching en bijsturing",
  "Periodieke metingen gewicht, vetpercentage en spiermassa",
];

export default function FunctionalTraining() {
  return (
    <main>
      {/* Page hero */}
      <section style={{ position: "relative", height: 380, display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/images/Hero.jpg)", backgroundSize: "cover", backgroundPosition: "center 30%", filter: "brightness(0.3)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,11,10,1) 0%, rgba(12,11,10,0) 60%)" }} />
        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "0 24px 56px", width: "100%" }}>
          <p style={{ color: "#b79d3e", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 12px" }}>Wat bieden wij</p>
          <h1 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(40px, 6vw, 80px)", textTransform: "uppercase", color: "#f4efe6", margin: 0, lineHeight: 1 }}>
            Functional Training
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background: "#0c0b0a", padding: "72px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontSize: 22, color: "#cfc9bd", lineHeight: 1.7, fontWeight: 300, margin: "0 0 40px", borderLeft: "3px solid #b79d3e", paddingLeft: 28 }}>
              Werken met een aanpak op maat. Duidelijke doelen, meetbare resultaten en persoonlijke aandacht zijn in onze ogen essentieel.
            </p>
          </Reveal>
          <Reveal>
            <p style={{ fontSize: 16, color: "#a39d92", lineHeight: 1.9, margin: "0 0 24px" }}>
              Kies je voor FIT Partners dan kies je voor topbegeleiding op maat!
            </p>
            <p style={{ fontSize: 16, color: "#a39d92", lineHeight: 1.9, margin: 0 }}>
              We starten met een eerste kennismaking. Er wordt aandacht besteed aan diverse basis bewegingsvormen.
              Jouw trainer checkt aan de hand hiervan het startpunt waar vanuit gewerkt kan worden met eerste oefenvormen
              die voor jou geschikt zijn. Je gaat eerst aan de slag, leert ons centrum en onze manier van trainen kennen.
              Na diverse trainingen, plannen we het eerste sportonderzoek in. De resultaten van dit onderzoek, vormen de
              basis voor alle volgende schema&apos;s en trainingen.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Waarom section */}
      <section style={{ background: "#131211", padding: "72px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <Reveal>
            <h2 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(28px, 4vw, 48px)", textTransform: "uppercase", color: "#f4efe6", margin: "0 0 48px", lineHeight: 1 }}>
              Waarom trainen bij FIT Partners?
            </h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
            {waarom.map((item, i) => (
              <Reveal key={i} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 16, padding: "20px 0", borderBottom: "1px solid #2a2720" }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#b79d3e", flexShrink: 0, marginTop: 6, display: "inline-block" }} />
                  <span style={{ color: "#cfc9bd", fontSize: 15, lineHeight: 1.5 }}>{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#0c0b0a", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <Reveal>
            <h2 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(28px, 4vw, 48px)", textTransform: "uppercase", color: "#f4efe6", margin: "0 0 20px", lineHeight: 1 }}>
              Direct een afspraak maken?
            </h2>
            <p style={{ color: "#a39d92", fontSize: 16, lineHeight: 1.8, marginBottom: 40 }}>
              Bel ons op{" "}
              <a href="tel:06-14634488" style={{ color: "#b79d3e", textDecoration: "none", fontWeight: 600 }}>06-14634488</a>
              {" "}of stuur een bericht via onderstaande knop.
            </p>
            <a href="mailto:info@fit-partners.nl?subject=Aanvraag intake Functional Training"
              style={{ display: "inline-block", background: "#b79d3e", color: "#0c0b0a", padding: "16px 40px", fontWeight: 700, fontSize: 14, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}>
              Aanvraag intake
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
