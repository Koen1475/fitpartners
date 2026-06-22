import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Wat is VO2max en waarom is het belangrijk?",
  description:
    "VO2max is de gouden standaard voor het meten van je conditie. Leer wat het betekent, hoe het gemeten wordt bij FIT Partners en hoe je het kunt verbeteren.",
  alternates: { canonical: "https://fit-partners.nl/kennisbank/wat-is-vo2max" },
  openGraph: {
    title: "Wat is VO2max en waarom is het belangrijk? | FIT Partners",
    description: "VO2max is de gouden standaard voor conditiemeting. Leer hoe het werkt en hoe je het verbetert.",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Wat is VO2max en waarom is het belangrijk?",
  description: "VO2max is de gouden standaard voor het meten van je conditie. Leer wat het betekent, hoe het gemeten wordt en hoe je het verbetert.",
  author: { "@type": "Organization", name: "FIT Partners" },
  publisher: {
    "@type": "Organization",
    name: "FIT Partners",
    logo: { "@type": "ImageObject", url: "https://fit-partners.nl/images/Logo.png" },
  },
  datePublished: "2024-01-01",
  url: "https://fit-partners.nl/kennisbank/wat-is-vo2max",
};

export default function WatIsVO2max() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section style={{ background: "#131211", padding: "100px 24px 64px", borderBottom: "1px solid #2a2720" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <Link href="/kennisbank" style={{ color: "#BC9C22", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
            ← Kennisbank
          </Link>
          <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 24 }}>
            <span style={{ color: "#BC9C22", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700 }}>Sportonderzoek</span>
            <span style={{ color: "#8c8780", fontSize: 12 }}>5 min leestijd</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(36px, 5vw, 72px)", textTransform: "uppercase", color: "#f4efe6", margin: "0 0 24px", lineHeight: 1.05 }}>
            Wat is VO2max en waarom is het belangrijk?
          </h1>
          <p style={{ color: "#cfc9bd", fontSize: 18, lineHeight: 1.8, margin: 0, fontWeight: 300 }}>
            VO2max is de meest betrouwbare maatstaf voor je aerobe conditie. Maar wat meet het precies, en wat zegt het over jouw gezondheid en prestaties?
          </p>
        </div>
      </section>

      {/* Article body */}
      <article style={{ background: "#0c0b0a", padding: "72px 24px 96px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>

          <Reveal>
            <h2 style={{ fontFamily: "var(--font-anton)", fontSize: 28, textTransform: "uppercase", color: "#f4efe6", margin: "0 0 20px" }}>
              De definitie
            </h2>
            <p style={{ color: "#b8b3aa", fontSize: 16, lineHeight: 1.9, margin: "0 0 40px" }}>
              VO2max staat voor het maximale zuurstofverbruik: de maximale hoeveelheid zuurstof die jouw lichaam per minuut kan opnemen, transporteren en gebruiken tijdens intensieve inspanning. Het wordt uitgedrukt in milliliter zuurstof per kilogram lichaamsgewicht per minuut (ml/kg/min).
            </p>
            <p style={{ color: "#b8b3aa", fontSize: 16, lineHeight: 1.9, margin: "0 0 64px" }}>
              Hoe hoger je VO2max, hoe efficienter je lichaam zuurstof verwerkt. Dit vertaalt zich direct naar een beter uithoudingsvermogen, een snellere vetverbranding en een langere levensduur van het hart-vaatstelsel.
            </p>
          </Reveal>

          <Reveal>
            <div style={{ background: "#131211", border: "1px solid #2a2720", borderLeft: "4px solid #BC9C22", padding: "28px 32px", margin: "0 0 64px" }}>
              <p style={{ color: "#cfc9bd", fontSize: 17, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>
                "Een VO2max van 50 ml/kg/min bij een man van 40 jaar wordt beschouwd als uitstekend. Topsporters halen waarden van 80 of hoger."
              </p>
            </div>
          </Reveal>

          <Reveal>
            <h2 style={{ fontFamily: "var(--font-anton)", fontSize: 28, textTransform: "uppercase", color: "#f4efe6", margin: "0 0 20px" }}>
              Waarom is VO2max zo belangrijk?
            </h2>
            <p style={{ color: "#b8b3aa", fontSize: 16, lineHeight: 1.9, margin: "0 0 24px" }}>
              VO2max is meer dan een conditiegetal voor atleten. Wetenschappelijk onderzoek laat zien dat een hogere VO2max direct verband houdt met:
            </p>
            <ul style={{ listStyle: "none", margin: "0 0 40px", padding: 0 }}>
              {[
                "Een lager risico op hart- en vaatziekten",
                "Betere bloedsuikerregulatie en insulinegevoeligheid",
                "Lagere bloeddruk",
                "Meer energie in het dagelijkse leven",
                "Snellere vetverbranding tijdens inspanning",
                "Langere levensverwachting",
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: 16, padding: "11px 0", borderBottom: "1px solid #2a2720", color: "#cfc9bd", fontSize: 15, lineHeight: 1.5 }}>
                  <span style={{ color: "#BC9C22", fontWeight: 700, flexShrink: 0 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <h2 style={{ fontFamily: "var(--font-anton)", fontSize: 28, textTransform: "uppercase", color: "#f4efe6", margin: "0 0 20px" }}>
              Hoe meten wij jouw VO2max?
            </h2>
            <p style={{ color: "#b8b3aa", fontSize: 16, lineHeight: 1.9, margin: "0 0 24px" }}>
              Bij FIT Partners meten we VO2max via ademgasanalyse. Je draagt een masker dat elke ademhaling analyseert terwijl je een inspanningsprotocol doorloopt op de loopband, fiets of step. Tegelijkertijd meten we lactaatwaarden in het bloed om de anaerobe drempel nauwkeurig te bepalen.
            </p>
            <p style={{ color: "#b8b3aa", fontSize: 16, lineHeight: 1.9, margin: "0 0 64px" }}>
              Dit geeft ons een compleet beeld van jouw energiesystemen en trainingszones, niet slechts een schatting op basis van een polshorloge.
            </p>
          </Reveal>

          <Reveal>
            <h2 style={{ fontFamily: "var(--font-anton)", fontSize: 28, textTransform: "uppercase", color: "#f4efe6", margin: "0 0 20px" }}>
              Hoe verbeter je je VO2max?
            </h2>
            <p style={{ color: "#b8b3aa", fontSize: 16, lineHeight: 1.9, margin: "0 0 24px" }}>
              De goede nieuws: VO2max is trainbaar. De meest effectieve methoden zijn:
            </p>
            <div style={{ display: "grid", gap: 16, margin: "0 0 40px" }}>
              {[
                { title: "Intervaltraining op hoge intensiteit", desc: "Korte blokken op of boven je anaerobe drempel met voldoende herstel. Dit is de snelste manier om VO2max te verhogen." },
                { title: "Duurtraining in zone 2", desc: "Lang en rustig trainen op lage intensiteit verbetert je aerobe basis en efficiëntie van het hart." },
                { title: "Krachttraining", desc: "Spierkracht ondersteunt cardiovasculaire efficiëntie en vermindert de energiekosten per beweging." },
              ].map((item, i) => (
                <div key={i} style={{ background: "#131211", border: "1px solid #2a2720", padding: "24px 28px", display: "flex", gap: 20 }}>
                  <span style={{ color: "#BC9C22", fontFamily: "var(--font-anton)", fontSize: 20, flexShrink: 0, lineHeight: 1 }}>0{i + 1}</span>
                  <div>
                    <p style={{ color: "#f4efe6", fontSize: 15, fontWeight: 600, margin: "0 0 6px" }}>{item.title}</p>
                    <p style={{ color: "#b8b3aa", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div style={{ background: "#131211", border: "1px solid #BC9C22", padding: "36px 40px", textAlign: "center" }}>
              <p style={{ color: "#BC9C22", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700, margin: "0 0 12px" }}>Wil jij jouw VO2max meten?</p>
              <h3 style={{ fontFamily: "var(--font-anton)", fontSize: 28, textTransform: "uppercase", color: "#f4efe6", margin: "0 0 16px" }}>
                Plan een sportonderzoek
              </h3>
              <p style={{ color: "#b8b3aa", fontSize: 15, lineHeight: 1.7, margin: "0 0 28px" }}>
                Tijdens ons wetenschappelijk sportonderzoek brengen we jouw VO2max, anaerobe drempel en trainingszones nauwkeurig in kaart.
              </p>
              <Link href="/wat-bieden-wij/sportonderzoeken" style={{ display: "inline-block", background: "#BC9C22", color: "#0c0b0a", padding: "14px 32px", fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}>
                Meer over sportonderzoek
              </Link>
            </div>
          </Reveal>
        </div>
      </article>
    </main>
  );
}
