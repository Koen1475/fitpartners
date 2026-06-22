import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Kennisbank – Sport, Training & Voeding",
  description:
    "Handige artikelen en antwoorden over personal training, VO2max, functional training en voeding. Geschreven door de trainers van FIT Partners in Deurne.",
  alternates: { canonical: "https://fit-partners.nl/kennisbank" },
};

const articles = [
  {
    slug: "wat-is-vo2max",
    label: "Sportonderzoek",
    title: "Wat is VO2max en waarom is het belangrijk?",
    excerpt:
      "VO2max is de beste maatstaf voor je conditie. Ontdek wat het betekent, hoe het gemeten wordt en hoe je het kunt verbeteren.",
    readTime: "5 min",
  },
  {
    slug: "functional-training-voordelen",
    label: "Training",
    title: "7 voordelen van functional training",
    excerpt:
      "Functional training gaat verder dan spieren kweken. Leer hoe deze trainingsmethode je dagelijkse leven, blessurerisico en prestaties verbetert.",
    readTime: "4 min",
  },
  {
    slug: "voeding-en-sport",
    label: "Voeding",
    title: "Voeding en sport: de basis die het verschil maakt",
    excerpt:
      "Wat je eet voor, tijdens en na een training bepaalt voor een groot deel het resultaat. Een praktische gids voor sporters op elk niveau.",
    readTime: "6 min",
  },
];

export default function Kennisbank() {
  return (
    <main>
      {/* Hero */}
      <section style={{ background: "#131211", padding: "100px 24px 72px", borderBottom: "1px solid #2a2720" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <p style={{ color: "#BC9C22", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 16px" }}>FIT Partners</p>
            <h1 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(48px, 7vw, 96px)", textTransform: "uppercase", color: "#f4efe6", margin: "0 0 24px", lineHeight: 1 }}>
              Kennisbank
            </h1>
            <p style={{ color: "#b8b3aa", fontSize: 17, lineHeight: 1.8, maxWidth: 560, margin: 0 }}>
              Artikelen en antwoorden van onze trainers over sport, training en voeding. Zodat jij beter begrijpt wat je doet en waarom.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Articles grid */}
      <section style={{ background: "#0c0b0a", padding: "80px 24px 100px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 2 }}>
            {articles.map((a, i) => (
              <Reveal key={a.slug} delay={(i + 1) as 1 | 2 | 3}>
                <Link href={`/kennisbank/${a.slug}`} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                  <article className="kb-card" style={{
                    background: "#131211",
                    border: "1px solid #2a2720",
                    padding: "36px 32px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                    transition: "border-color 0.25s",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span style={{ color: "#BC9C22", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700 }}>{a.label}</span>
                      <span style={{ color: "#8c8780", fontSize: 12 }}>{a.readTime} leestijd</span>
                    </div>
                    <h2 style={{ fontFamily: "var(--font-anton)", fontSize: 22, textTransform: "uppercase", color: "#f4efe6", margin: 0, lineHeight: 1.15 }}>
                      {a.title}
                    </h2>
                    <p style={{ color: "#b8b3aa", fontSize: 14, lineHeight: 1.8, margin: 0, flex: 1 }}>
                      {a.excerpt}
                    </p>
                    <span style={{ color: "#BC9C22", fontSize: 13, fontWeight: 600, letterSpacing: "0.04em", marginTop: 8 }}>
                      Lees artikel →
                    </span>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* FAQ callout */}
          <Reveal>
            <div style={{ marginTop: 48, background: "#131211", border: "1px solid #BC9C22", padding: "36px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
              <div>
                <p style={{ color: "#BC9C22", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700, margin: "0 0 8px" }}>Veelgestelde vragen</p>
                <h2 style={{ fontFamily: "var(--font-anton)", fontSize: 28, textTransform: "uppercase", color: "#f4efe6", margin: 0 }}>
                  Heb je een specifieke vraag?
                </h2>
              </div>
              <Link href="/kennisbank/faq" style={{
                background: "#BC9C22", color: "#0c0b0a", padding: "14px 28px",
                fontWeight: 700, fontSize: 13, letterSpacing: "0.08em",
                textTransform: "uppercase", textDecoration: "none", flexShrink: 0,
              }}>
                Bekijk FAQ
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`.kb-card:hover { border-color: #BC9C22 !important; }`}</style>
    </main>
  );
}
