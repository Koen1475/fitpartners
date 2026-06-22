import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description: "Privacyverklaring van FIT Partners. Lees hoe wij omgaan met jouw persoonsgegevens.",
  alternates: { canonical: "https://fit-partners.nl/privacy" },
  robots: { index: false, follow: false },
};

const sections = [
  {
    title: "Wie zijn wij?",
    body: `FIT Partners is gevestigd aan de dr. Huub van Doorneweg 8d, 5753 PM Deurne. Wij zijn verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in deze privacyverklaring. Bij vragen kun je contact opnemen via info@fit-partners.nl of 06-14634488.`,
  },
  {
    title: "Welke gegevens verwerken wij?",
    body: `Wij verwerken persoonsgegevens die je zelf aan ons verstrekt, bijvoorbeeld via het contactformulier, de intakeaanvraag of telefonisch contact. Het gaat om: naam, telefoonnummer, e-mailadres en het bericht dat je achterlaat. Daarnaast verwerken wij gegevens die nodig zijn voor de uitvoering van onze dienstverlening, zoals trainingsgegevens en meetresultaten van sportonderzoeken.`,
  },
  {
    title: "Waarom verwerken wij deze gegevens?",
    body: `Wij verwerken jouw gegevens om contact met je op te nemen naar aanleiding van een aanvraag, om onze dienstverlening (personal training, sportonderzoek, voedingsadvies) uit te voeren, en om te voldoen aan wettelijke verplichtingen. Wij verwerken geen gegevens voor commerciële doeleinden van derden.`,
  },
  {
    title: "Hoe lang bewaren wij jouw gegevens?",
    body: `Wij bewaren jouw persoonsgegevens niet langer dan noodzakelijk voor het doel waarvoor ze zijn verzameld. Contactgegevens van (potentiële) klanten worden maximaal 1 jaar bewaard na het laatste contact. Trainings- en meetgegevens van actieve leden bewaren wij zolang de samenwerking duurt en tot maximaal 2 jaar daarna.`,
  },
  {
    title: "Delen wij jouw gegevens?",
    body: `Wij verkopen jouw gegevens niet aan derden. Wij delen gegevens alleen met partijen die noodzakelijk zijn voor onze dienstverlening, zoals ons roostersysteem (SportBit) en ons franchisennetwerk (Sport Assistance), en uitsluitend voor zover dat nodig is. Met deze partijen sluiten wij verwerkersovereenkomsten af.`,
  },
  {
    title: "Jouw rechten",
    body: `Je hebt het recht om jouw persoonsgegevens in te zien, te corrigeren of te laten verwijderen. Ook heb je het recht op dataportabiliteit en het recht om bezwaar te maken tegen de verwerking. Stuur een verzoek naar info@fit-partners.nl. We reageren binnen 4 weken. Als je een klacht hebt over de verwerking van jouw gegevens, kun je contact opnemen met de Autoriteit Persoonsgegevens via autoriteitpersoonsgegevens.nl.`,
  },
  {
    title: "Beveiliging",
    body: `FIT Partners neemt passende technische en organisatorische maatregelen om jouw persoonsgegevens te beschermen tegen verlies of ongeautoriseerde toegang.`,
  },
  {
    title: "Cookies",
    body: `Deze website maakt gebruik van functionele cookies die noodzakelijk zijn voor de werking van de site. Er worden geen tracking- of advertentiecookies geplaatst zonder jouw toestemming.`,
  },
  {
    title: "Wijzigingen",
    body: `Wij behouden ons het recht voor deze privacyverklaring te wijzigen. De meest actuele versie is altijd te vinden op fit-partners.nl/privacy. Versie: juni 2026.`,
  },
];

export default function Privacy() {
  return (
    <main>
      <section style={{ background: "#131211", padding: "100px 24px 64px", borderBottom: "1px solid #2a2720" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ color: "#ffd53b", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 16px" }}>FIT Partners</p>
          <h1 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(36px, 5vw, 64px)", textTransform: "uppercase", color: "#f4efe6", margin: "0 0 20px", lineHeight: 1 }}>
            Privacyverklaring
          </h1>
          <p style={{ color: "#b8b3aa", fontSize: 15, lineHeight: 1.8, margin: 0 }}>
            FIT Partners respecteert jouw privacy. In deze verklaring leggen wij uit welke persoonsgegevens wij verzamelen, waarom en hoe wij daarmee omgaan.
          </p>
        </div>
      </section>

      <section style={{ background: "#0c0b0a", padding: "72px 24px 96px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 48 }}>
          {sections.map((s, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "32px 1fr", gap: "0 24px", alignItems: "start" }}>
              <span style={{ fontFamily: "var(--font-anton)", fontSize: 13, color: "#ffd53b", opacity: 0.5, paddingTop: 3 }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 style={{ fontFamily: "var(--font-anton)", fontSize: 20, textTransform: "uppercase", color: "#f4efe6", margin: "0 0 12px", lineHeight: 1.1 }}>
                  {s.title}
                </h2>
                <p style={{ color: "#b8b3aa", fontSize: 15, lineHeight: 1.85, margin: 0 }}>{s.body}</p>
              </div>
            </div>
          ))}

          <div style={{ borderTop: "1px solid #2a2720", paddingTop: 32, marginTop: 8 }}>
            <p style={{ color: "#8c8780", fontSize: 13, lineHeight: 1.7, margin: 0 }}>
              FIT Partners — dr. Huub van Doorneweg 8d, 5753 PM Deurne —{" "}
              <a href="mailto:info@fit-partners.nl" style={{ color: "#ffd53b", textDecoration: "none" }}>info@fit-partners.nl</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
