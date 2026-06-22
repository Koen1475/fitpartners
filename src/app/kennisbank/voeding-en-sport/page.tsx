import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Voeding en sport: de basis die het verschil maakt",
  description:
    "Wat je eet voor, tijdens en na een training bepaalt voor een groot deel het resultaat. Praktisch voedingsadvies voor sporters op elk niveau, van FIT Partners Deurne.",
  alternates: { canonical: "https://fit-partners.nl/kennisbank/voeding-en-sport" },
  openGraph: {
    title: "Voeding en sport: de basis die het verschil maakt | FIT Partners",
    description: "Wat je eet voor, tijdens en na een training bepaalt het resultaat. Praktische voedingstips voor sporters.",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Voeding en sport: de basis die het verschil maakt",
  description: "Wat je eet voor, tijdens en na een training bepaalt voor een groot deel het resultaat. Praktisch voedingsadvies voor sporters op elk niveau.",
  author: { "@type": "Organization", name: "FIT Partners" },
  publisher: {
    "@type": "Organization",
    name: "FIT Partners",
    logo: { "@type": "ImageObject", url: "https://fit-partners.nl/images/Logo.png" },
  },
  datePublished: "2024-01-01",
  url: "https://fit-partners.nl/kennisbank/voeding-en-sport",
};

export default function VoedingEnSport() {
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
            <span style={{ color: "#ffd53b", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700 }}>Voeding</span>
            <span style={{ color: "#8c8780", fontSize: 12 }}>6 min leestijd</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(36px, 5vw, 72px)", textTransform: "uppercase", color: "#f4efe6", margin: "0 0 24px", lineHeight: 1.05 }}>
            Voeding en sport: de basis die het verschil maakt
          </h1>
          <p style={{ color: "#cfc9bd", fontSize: 18, lineHeight: 1.8, margin: 0, fontWeight: 300 }}>
            Trainen is de prikkel. Voeding is het herstel. Zonder de juiste brandstof werk je harder voor minder resultaat.
          </p>
        </div>
      </section>

      <article style={{ background: "#0c0b0a", padding: "72px 24px 96px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>

          <Reveal>
            <p style={{ color: "#b8b3aa", fontSize: 16, lineHeight: 1.9, margin: "0 0 48px" }}>
              Veel sporters trainen hard maar stagneren in resultaat. Negen van de tien keer speelt voeding daarin een doorslaggevende rol. Niet omdat ze weinig eten, maar omdat ze het verkeerde eten op het verkeerde moment. In dit artikel leggen we de basisbeginselen uit van sportvoeding, zonder ingewikkelde schema&apos;s.
            </p>
          </Reveal>

          <Reveal>
            <h2 style={{ fontFamily: "var(--font-anton)", fontSize: 28, textTransform: "uppercase", color: "#f4efe6", margin: "0 0 20px" }}>
              De drie macronutriënten
            </h2>
            <p style={{ color: "#b8b3aa", fontSize: 16, lineHeight: 1.9, margin: "0 0 24px" }}>
              Alle voeding bestaat uit drie bouwstenen die elk een andere functie hebben voor een actief lichaam:
            </p>
            <div style={{ display: "grid", gap: 12, margin: "0 0 56px" }}>
              {[
                { name: "Koolhydraten", role: "Brandstof", body: "De primaire energiebron tijdens intensieve training. Gevonden in volkoren granen, aardappelen, rijst, fruit en peulvruchten. Beperk ze niet als sporter; kies wel de vezelrijke variant." },
                { name: "Eiwitten", role: "Herstel en opbouw", body: "Onmisbaar voor spierherstel na een training. Streef naar 1,6 tot 2,2 gram per kilogram lichaamsgewicht per dag. Goede bronnen: kwark, eieren, kip, vis, peulvruchten en noten." },
                { name: "Vetten", role: "Hormonale balans", body: "Gezonde vetten ondersteunen hormoonproductie, celopbouw en de opname van vetoplosbare vitamines. Kies voor onverzadigde vetten uit olijfolie, avocado, vette vis en noten." },
              ].map((m) => (
                <div key={m.name} style={{ background: "#131211", border: "1px solid #2a2720", padding: "24px 28px", display: "grid", gridTemplateColumns: "160px 1fr", gap: 24, alignItems: "start" }}>
                  <div>
                    <p style={{ color: "#f4efe6", fontSize: 15, fontWeight: 700, margin: "0 0 4px" }}>{m.name}</p>
                    <span style={{ color: "#ffd53b", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 700 }}>{m.role}</span>
                  </div>
                  <p style={{ color: "#b8b3aa", fontSize: 14, lineHeight: 1.8, margin: 0 }}>{m.body}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h2 style={{ fontFamily: "var(--font-anton)", fontSize: 28, textTransform: "uppercase", color: "#f4efe6", margin: "0 0 20px" }}>
              Timing: voor, tijdens en na
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 0, margin: "0 0 56px" }}>
              {[
                {
                  moment: "Voor de training",
                  timing: "1,5 tot 2 uur van tevoren",
                  tips: ["Lichte maaltijd met koolhydraten en eiwitten", "Vermijd zware vetten of veel vezels", "Voorbeeld: rijst met kip of een banaan met kwark"],
                },
                {
                  moment: "Tijdens de training",
                  timing: "Bij sessies langer dan 60 min",
                  tips: ["Water is voldoende voor trainingen onder 60 minuten", "Langer dan een uur: overweeg een rijpe banaan of sportdrank", "Hydratatie is altijd prioriteit"],
                },
                {
                  moment: "Na de training",
                  timing: "Binnen 30 tot 60 minuten",
                  tips: ["Eiwitten voor spierherstel (20 tot 40 gram)", "Koolhydraten om glycogeen aan te vullen", "Voorbeeld: proteïneshake met fruit, of kwark met havermout"],
                },
              ].map((phase, i) => (
                <div key={i} style={{
                  borderTop: "1px solid #2a2720", padding: "28px 0",
                  display: "grid", gridTemplateColumns: "1fr 2fr", gap: 32, alignItems: "start",
                }}>
                  <div>
                    <p style={{ color: "#f4efe6", fontSize: 15, fontWeight: 600, margin: "0 0 4px" }}>{phase.moment}</p>
                    <span style={{ color: "#8c8780", fontSize: 12 }}>{phase.timing}</span>
                  </div>
                  <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                    {phase.tips.map((tip, j) => (
                      <li key={j} style={{ display: "flex", gap: 12, color: "#b8b3aa", fontSize: 14, lineHeight: 1.7, marginBottom: 6 }}>
                        <span style={{ color: "#ffd53b", flexShrink: 0 }}>–</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div style={{ background: "#131211", border: "1px solid #2a2720", borderLeft: "4px solid #ffd53b", padding: "28px 32px", margin: "0 0 56px" }}>
              <p style={{ color: "#cfc9bd", fontSize: 17, lineHeight: 1.8, margin: "0 0 8px", fontWeight: 600 }}>
                Onthoud dit:
              </p>
              <p style={{ color: "#b8b3aa", fontSize: 16, lineHeight: 1.8, margin: 0 }}>
                Consistentie in voeding over de hele dag weegt zwaarder dan perfecte timing. Eet gevarieerd, voldoende en aangepast aan jouw trainingsbelasting. Dat is de basis.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <h2 style={{ fontFamily: "var(--font-anton)", fontSize: 28, textTransform: "uppercase", color: "#f4efe6", margin: "0 0 20px" }}>
              De meest gemaakte fouten
            </h2>
            <ul style={{ listStyle: "none", margin: "0 0 64px", padding: 0 }}>
              {[
                "Te weinig eten om gewicht te verliezen, waardoor je spiermassa verliest in plaats van vet",
                "Te weinig eiwitten binnenkrijgen, waardoor herstel na training onvoldoende is",
                "Koolhydraten vermijden terwijl je intensief traint",
                "Onvoldoende water drinken. Zelfs lichte uitdroging verlaagt je prestaties met 10 tot 20%",
                "Vertrouwen op supplementen in plaats van een gevarieerd voedingspatroon als basis",
              ].map((fout, i) => (
                <li key={i} style={{ display: "flex", gap: 16, padding: "13px 0", borderBottom: "1px solid #2a2720", color: "#cfc9bd", fontSize: 15, lineHeight: 1.5 }}>
                  <span style={{ color: "#ffd53b", fontWeight: 700, flexShrink: 0 }}>✗</span>
                  {fout}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <div style={{ background: "#131211", border: "1px solid #ffd53b", padding: "36px 40px", textAlign: "center" }}>
              <p style={{ color: "#ffd53b", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700, margin: "0 0 12px" }}>Persoonlijk voedingsadvies</p>
              <h3 style={{ fontFamily: "var(--font-anton)", fontSize: 28, textTransform: "uppercase", color: "#f4efe6", margin: "0 0 16px" }}>
                Maak het concreet voor jou
              </h3>
              <p style={{ color: "#b8b3aa", fontSize: 15, lineHeight: 1.7, margin: "0 0 28px" }}>
                Bij FIT Partners integreren we voedingsadvies in jouw persoonlijk trainingsprogramma. Zo werkt alles samen.
              </p>
              <Link href="/wat-bieden-wij/voedingsadvies" style={{ display: "inline-block", background: "#ffd53b", color: "#0c0b0a", padding: "14px 32px", fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}>
                Meer over voedingsadvies
              </Link>
            </div>
          </Reveal>
        </div>
      </article>
    </main>
  );
}
