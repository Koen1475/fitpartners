import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import IntakeTriggerButton from "@/components/IntakeTriggerButton";

export const metadata: Metadata = {
  title: "7 voordelen van functional training",
  description:
    "Functional training gaat verder dan spieren kweken. Ontdek 7 bewezen voordelen van deze trainingsmethode voor je dagelijkse leven, blessurerisico en sportprestaties.",
  alternates: { canonical: "https://fit-partners.nl/kennisbank/functional-training-voordelen" },
  openGraph: {
    title: "7 voordelen van functional training | FIT Partners",
    description: "Functional training gaat verder dan spieren kweken. Ontdek 7 bewezen voordelen van deze methode.",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "7 voordelen van functional training",
  description: "Functional training gaat verder dan spieren kweken. Ontdek 7 bewezen voordelen voor je dagelijkse leven, blessurerisico en sportprestaties.",
  author: { "@type": "Organization", name: "FIT Partners" },
  publisher: {
    "@type": "Organization",
    name: "FIT Partners",
    logo: { "@type": "ImageObject", url: "https://fit-partners.nl/images/Logo.png" },
  },
  datePublished: "2024-01-01",
  url: "https://fit-partners.nl/kennisbank/functional-training-voordelen",
};

const voordelen = [
  {
    nr: "01",
    title: "Betere prestaties in het dagelijks leven",
    body: "Functional training traint bewegingspatronen, geen geïsoleerde spieren. Bukken, tillen, draaien en duwen: je traint precies wat je elke dag nodig hebt. Het resultaat is dat je lichaam buiten de sportschool beter functioneert.",
  },
  {
    nr: "02",
    title: "Minder kans op blessures",
    body: "Door te trainen op coördinatie, stabiliteit en spierkrachtverhoudingen verklein je de kans op overbelasting en acute blessures. Veel sporters ontdekken dat chronische klachten aan schouder, rug of knie verdwijnen na een paar maanden gericht functional trainen.",
  },
  {
    nr: "03",
    title: "Verhoogd metabolisme en vetverbranding",
    body: "Samengestelde oefeningen vragen meer spieren tegelijk. Dit kost meer energie tijdens en na de training. Je lichaam blijft tot 24 uur na een intensieve sessie extra calorieën verbranden, het zogeheten afterburn-effect.",
  },
  {
    nr: "04",
    title: "Sneller resultaat in minder tijd",
    body: "Omdat je meerdere spiergroepen tegelijk aanspreekt, hoef je geen urenlange trainingen te plannen. Twee tot drie keer per week 60 minuten is voldoende voor zichtbare en meetbare resultaten.",
  },
  {
    nr: "05",
    title: "Betere lichaamshouding en minder rugpijn",
    body: "Functional training versterkt de rompmusculatuur (core) die je houding ondersteunt. Rug- en nekklachten door een zittende leefstijl verminderen significant wanneer de diepe stabilisatoren sterker worden.",
  },
  {
    nr: "06",
    title: "Persoonlijk afgestemd op jouw niveau",
    body: "Elke oefening is aanpasbaar: van licht tot intensief, van beginner tot gevorderde sporter. Bij FIT Partners werken we altijd met een schema dat past bij jouw startniveau, doelen en fysieke gesteldheid.",
  },
  {
    nr: "07",
    title: "Meetbare progressie dankzij periodieke testen",
    body: "Via sportonderzoeken en periodieke metingen maken we jouw progressie zichtbaar. Geen gissen of hopen dat je vooruitgaat. Je ziet zwart op wit wat er veranderd is na elke trainingsperiode.",
  },
];

export default function FunctionalTrainingVoordelen() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section style={{ background: "#131211", padding: "100px 24px 64px", borderBottom: "1px solid #2a2720" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <Link href="/kennisbank" style={{ color: "#ffd53b", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", display: "inline-block", marginBottom: 24 }}>
            ← Kennisbank
          </Link>
          <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 24 }}>
            <span style={{ color: "#ffd53b", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700 }}>Training</span>
            <span style={{ color: "#6f6a60", fontSize: 12 }}>4 min leestijd</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(36px, 5vw, 72px)", textTransform: "uppercase", color: "#f4efe6", margin: "0 0 24px", lineHeight: 1.05 }}>
            7 voordelen van functional training
          </h1>
          <p style={{ color: "#cfc9bd", fontSize: 18, lineHeight: 1.8, margin: 0, fontWeight: 300 }}>
            Functional training is meer dan een hype. Het is een bewezen methode die jouw lichaam sterker, veerkrachtiger en beter maakt voor het leven buiten de sportschool.
          </p>
        </div>
      </section>

      <article style={{ background: "#0c0b0a", padding: "72px 24px 96px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>

          <Reveal>
            <p style={{ color: "#b8b3aa", fontSize: 16, lineHeight: 1.9, margin: "0 0 64px" }}>
              De term "functional training" wordt veel gebruikt, maar wat betekent het nu eigenlijk? Kort samengevat: je traint bewegingspatronen die aansluiten bij wat je lichaam in het dagelijkse leven of in je sport nodig heeft. Geen geïsoleerde spiergroepen, maar het hele systeem tegelijk. Hieronder de zeven belangrijkste voordelen.
            </p>
          </Reveal>

          {voordelen.map((v, i) => (
            <Reveal key={i}>
              <div style={{ display: "flex", gap: 28, marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid #2a2720" }}>
                <span style={{ fontFamily: "var(--font-anton)", fontSize: 40, color: "#ffd53b", opacity: 0.35, lineHeight: 1, flexShrink: 0, width: 52 }}>{v.nr}</span>
                <div>
                  <h2 style={{ fontFamily: "var(--font-anton)", fontSize: 22, textTransform: "uppercase", color: "#f4efe6", margin: "0 0 14px", lineHeight: 1.15 }}>
                    {v.title}
                  </h2>
                  <p style={{ color: "#b8b3aa", fontSize: 16, lineHeight: 1.9, margin: 0 }}>{v.body}</p>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal>
            <div style={{ background: "#131211", border: "1px solid #ffd53b", padding: "36px 40px", textAlign: "center" }}>
              <p style={{ color: "#ffd53b", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700, margin: "0 0 12px" }}>Klaar om te starten?</p>
              <h3 style={{ fontFamily: "var(--font-anton)", fontSize: 28, textTransform: "uppercase", color: "#f4efe6", margin: "0 0 16px" }}>
                Plan een gratis intake
              </h3>
              <p style={{ color: "#b8b3aa", fontSize: 15, lineHeight: 1.7, margin: "0 0 28px" }}>
                Kom kennismaken bij FIT Partners in Deurne. We bespreken jouw doelen en maken een plan op maat.
              </p>
              <IntakeTriggerButton />
            </div>
          </Reveal>
        </div>
      </article>
    </main>
  );
}
