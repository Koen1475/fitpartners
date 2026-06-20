import Reveal from "./Reveal";

const steps = [
  { num: "01", title: "Nulmeting", desc: "We starten met een uitgebreid sportonderzoek. Jouw conditie, belastbaarheid en doelen worden in kaart gebracht." },
  { num: "02", title: "Plan op maat", desc: "Op basis van de data stellen we een trainingsschema en voedingsplan op dat past bij jou, niet bij de gemiddelde klant." },
  { num: "03", title: "Begeleiding", desc: "Wekelijkse sessies met jouw vaste trainer. Directe feedback, technische coaching en motivatie waar nodig." },
  { num: "04", title: "Tussenmetingen", desc: "Elke fase sluiten we af met een meting. Zo zien we de progressie in cijfers en sturen we bij waar nodig." },
];

export default function Aanpak() {
  return (
    <section id="aanpak" style={{ background: "#131211", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <p style={{ color: "#dbca91", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>Werkwijze</p>
          <h2 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(36px, 5vw, 64px)", textTransform: "uppercase", color: "#f4efe6", margin: "0 0 64px", lineHeight: 1 }}>
            Meten = weten
          </h2>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 40 }}>
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={(i + 1) as 1 | 2 | 3 | 4}>
              <div style={{ borderTop: "1px solid #2a2720", paddingTop: 28 }}>
                <div style={{ fontFamily: "var(--font-anton)", fontSize: 56, color: "#dbca91", opacity: 0.2, lineHeight: 1, marginBottom: 16 }}>{s.num}</div>
                <h3 style={{ fontFamily: "var(--font-anton)", fontSize: 24, textTransform: "uppercase", color: "#f4efe6", margin: "0 0 12px" }}>{s.title}</h3>
                <p style={{ color: "#a39d92", lineHeight: 1.7, fontSize: 15, margin: 0 }}>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
