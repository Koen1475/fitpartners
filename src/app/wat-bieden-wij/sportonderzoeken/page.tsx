import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Sportonderzoeken – FIT Partners",
  description: "Wetenschappelijk sportonderzoek bij FIT Partners. VO2max, anaerobe drempel, lichaamssamenstelling en persoonlijk trainingsadvies.",
};

const onderdelen = [
  "Wandel-, hardloop- of fietsprotocol",
  "Stappenprotocol en maximaaltest",
  "Ademgasanalyse, O2-opname en VO2max",
  "Bepaling optimale trainingszones en anaerobe drempel a.d.h.v. lactaatwaarden",
  "Analyse bewegingseconomie",
  "Bepaling optimale vetverbrandingshartslag",
  "Meting herstelcapaciteit",
  "Meting lichaamssamenstelling",
  "Meting spierkracht en spierbalans",
];

const voordelen = [
  "Bepalen op optimale trainingszones",
  "Resultaatgericht en gevarieerd trainen",
  "Verantwoorde trainingsopbouw",
  "Effectief en efficiënt trainen",
  "Arbeid/rust verhouding optimaliseren",
  "Kans op blessures minimaliseren",
  "Optioneel: strategische bepaling van wedstrijden en events",
];

function StaggeredGallery() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr 1fr", gridTemplateRows: "240px 180px", gap: 6 }} className="staggered-gallery">
      {/* Left: tall, spans 2 rows */}
      <div style={{ position: "relative", gridRow: "1 / 3", overflow: "hidden" }}>
        <Image src="/images/DataLab.jpg" alt="Sportonderzoek" fill
          style={{ objectFit: "cover", objectPosition: "center 30%", filter: "grayscale(100%) brightness(0.75)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(183,157,62,0.08) 0%, transparent 60%)" }} />
      </div>
      {/* Middle top */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <Image src="/images/SportTest.jpg" alt="Sportonderzoek" fill
          style={{ objectFit: "cover", objectPosition: "center 20%", filter: "grayscale(100%) brightness(0.7)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(12,11,10,0.5))" }} />
      </div>
      {/* Right top: offset inward */}
      <div style={{ position: "relative", overflow: "hidden", marginTop: 32 }}>
        <Image src="/images/DataLab.jpg" alt="Sportonderzoek" fill
          style={{ objectFit: "cover", objectPosition: "center 60%", filter: "grayscale(100%) brightness(0.65)" }} />
        <div style={{ position: "absolute", inset: 0, borderLeft: "3px solid #b79d3e", opacity: 0.4 }} />
      </div>
      {/* Middle bottom: offset down */}
      <div style={{ position: "relative", overflow: "hidden", marginTop: -24 }}>
        <Image src="/images/SportTest.jpg" alt="Sportonderzoek" fill
          style={{ objectFit: "cover", objectPosition: "center 70%", filter: "grayscale(100%) brightness(0.8)" }} />
      </div>
      {/* Right bottom */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <Image src="/images/DataLab.jpg" alt="Sportonderzoek" fill
          style={{ objectFit: "cover", objectPosition: "center 40%", filter: "grayscale(100%) brightness(0.6)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(183,157,62,0.06), transparent)" }} />
      </div>
    </div>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 16, padding: "12px 0", borderBottom: "1px solid #2a2720" }}>
          <span style={{ color: "#b79d3e", fontSize: 16, flexShrink: 0, marginTop: 1, fontWeight: 700 }}>✓</span>
          <span style={{ color: "#cfc9bd", fontSize: 15, lineHeight: 1.5 }}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Sportonderzoeken() {
  return (
    <main>
      {/* Hero */}
      <section style={{ position: "relative", height: 400, display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/images/SportTest.jpg)", backgroundSize: "cover", backgroundPosition: "center 30%", filter: "brightness(0.2)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,11,10,1) 0%, rgba(12,11,10,0) 55%)" }} />
        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "0 24px 64px", width: "100%" }}>
          <p style={{ color: "#b79d3e", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 12px" }}>Wat bieden wij</p>
          <h1 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(40px, 6vw, 80px)", textTransform: "uppercase", color: "#f4efe6", margin: "0 0 16px", lineHeight: 1 }}>
            Sportonderzoeken
          </h1>
          <p style={{ color: "#cfc9bd", fontSize: 17, lineHeight: 1.7, maxWidth: 640, margin: 0 }}>
            Leden in ons functioneel trainingscentrum worden jaarlijks uitgenodigd voor een wetenschappelijk sportonderzoek.
            Tussen het jaar door kunnen losse meetmomenten ingepland worden.
          </p>
        </div>
      </section>

      {/* Wat is dat */}
      <section style={{ background: "#0c0b0a", padding: "72px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Reveal>
            <h2 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(28px, 4vw, 48px)", textTransform: "uppercase", color: "#f4efe6", margin: "0 0 40px", lineHeight: 1 }}>
              Sportonderzoek, wat is dat?
            </h2>
          </Reveal>
          <Reveal>
            <p style={{ fontSize: 16, color: "#b8b3aa", lineHeight: 1.9, margin: "0 0 24px" }}>
              De VO2max, de anaerobe drempel en de bewegingseconomie (belangrijke termen in de sportwereld) zijn allen te
              verbeteren door training. Voorwaarde om deze 3 variabelen optimaal te ontwikkelen is het maken van goede keuzes
              in het trainingsprogramma (en eventuele periodisering richting wedstrijden en events). De sportonderzoeken geven
              je inzicht in deze trainingsvariabelen en geven je de richtlijnen om het trainingseffect te optimaliseren.
            </p>
            <p style={{ fontSize: 16, color: "#b8b3aa", lineHeight: 1.9, margin: 0 }}>
              Door middel van het koppelen van vaste meetprotocollen en een maximaaltest aan lactaatmetingen en
              ademgasanalyse, kunnen we VO2max, anaerobe drempel en bewegingseconomie nauwkeurig in kaart brengen. Het
              aanvullende spiervermogens-onderzoek geeft inzicht in kracht en balans van grote spiergroepen. Op basis van
              deze wetenschappelijk onderbouwde metingen geven wij een duidelijk, realistisch en persoonlijk trainingsadvies
              gekeken naar je persoonlijke doelstellingen.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Staggered gallery */}
      <section style={{ background: "#0c0b0a", padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Reveal>
            <StaggeredGallery />
          </Reveal>
        </div>
      </section>

      {/* Onderdelen */}
      <section style={{ background: "#131211", padding: "72px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Reveal>
            <h2 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(24px, 3vw, 40px)", textTransform: "uppercase", color: "#f4efe6", margin: "0 0 8px", lineHeight: 1 }}>
              Onderdelen van het sportonderzoek
            </h2>
            <div style={{ width: 40, height: 2, background: "#b79d3e", margin: "16px 0 40px" }} />
          </Reveal>
          <Reveal>
            <CheckList items={onderdelen} />
            <div style={{ borderBottom: "1px solid #2a2720" }} />
          </Reveal>
        </div>
      </section>

      {/* Resultaten + Voordelen */}
      <section style={{ background: "#0c0b0a", padding: "72px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontSize: 16, color: "#b8b3aa", lineHeight: 1.9, margin: "0 0 64px", borderLeft: "3px solid #b79d3e", paddingLeft: 28 }}>
              De behaalde resultaten worden uitvoerig met je besproken en vertaald naar de praktijk. Basisconditie, maximale
              vermogens, sterke en zwakke punten bepalen in grote lijnen het algemene trainingsadvies. Trainingsrichtlijnen
              worden gesteld a.d.h.v. je doelstellingen en je kunt hierna direct aan de slag!
            </p>
          </Reveal>

          <Reveal>
            <h2 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(24px, 3vw, 40px)", textTransform: "uppercase", color: "#f4efe6", margin: "0 0 8px", lineHeight: 1 }}>
              Voordelen sportonderzoek
            </h2>
            <div style={{ width: 40, height: 2, background: "#b79d3e", margin: "16px 0 40px" }} />
          </Reveal>
          <Reveal>
            <CheckList items={voordelen} />
            <div style={{ borderBottom: "1px solid #2a2720" }} />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#131211", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <Reveal>
            <h2 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(28px, 4vw, 48px)", textTransform: "uppercase", color: "#f4efe6", margin: "0 0 20px", lineHeight: 1 }}>
              Direct een afspraak maken?
            </h2>
            <p style={{ color: "#b8b3aa", fontSize: 16, lineHeight: 1.8, marginBottom: 40 }}>
              Bel ons op{" "}
              <a href="tel:06-14634488" style={{ color: "#b79d3e", textDecoration: "none", fontWeight: 600 }}>06-14634488</a>
              {" "}of stuur een bericht via onderstaande knop.
            </p>
            <a href="mailto:info@fit-partners.nl?subject=Aanvraag sportonderzoek"
              style={{ display: "inline-block", background: "#b79d3e", color: "#0c0b0a", padding: "16px 40px", fontWeight: 700, fontSize: 14, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}>
              Aanvraag intake
            </a>
          </Reveal>
        </div>
      </section>
      <style>{`
        @media (max-width: 640px) {
          .staggered-gallery {
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: 180px 180px 180px !important;
          }
          .staggered-gallery > div:first-child {
            grid-row: 1 / 2 !important;
            grid-column: 1 / 3 !important;
          }
          .staggered-gallery > div { margin-top: 0 !important; }
        }
      `}</style>
    </main>
  );
}
