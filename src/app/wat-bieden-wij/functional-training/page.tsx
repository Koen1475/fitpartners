import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { ClipboardList, UserCheck, CalendarCheck, Activity, RefreshCw, TrendingUp, Ruler } from "lucide-react";

export const metadata: Metadata = {
  title: "Functional Training Deurne – Personal Training op maat",
  description: "Personal training met een schema volledig op jouw lichaam en doelen afgestemd. VO2max-gebaseerde begeleiding, 8-weekse programma's en periodieke metingen bij FIT Partners Deurne.",
  alternates: { canonical: "https://fit-partners.nl/wat-bieden-wij/functional-training" },
  openGraph: { title: "Functional Training Deurne | FIT Partners", description: "Personal training op maat met meetbare resultaten en wetenschappelijk onderbouwde aanpak.", type: "website" },
};

const waarom = [
  {
    icon: ClipboardList,
    title: "Persoonlijk trainingsprogramma",
    desc: "Elk schema is volledig afgestemd op jouw lichaam, doelen en startniveau. Geen standaard plan, maar jouw plan.",
  },
  {
    icon: UserCheck,
    title: "Intensieve begeleiding",
    desc: "Jouw trainer is aanwezig bij elke sessie. Techniek, motivatie en progressie worden continu gemonitord.",
  },
  {
    icon: CalendarCheck,
    title: "Training op afspraak",
    desc: "Vaste afspraken geven structuur en commitment. De stok achter de deur die je nodig hebt om door te zetten.",
  },
  {
    icon: Activity,
    title: "Jaarlijks sportonderzoek",
    desc: "VO2max, anaerobe drempel en lichaamssamenstelling in kaart gebracht. Trainen op basis van data, niet op gevoel.",
  },
  {
    icon: RefreshCw,
    title: "Iedere 8 weken nieuw programma",
    desc: "Je lichaam went aan prikkels. Elke 8 weken een nieuw schema zodat je blijft progresseren.",
  },
  {
    icon: TrendingUp,
    title: "Evaluatie, coaching en bijsturing",
    desc: "Regelmatige evaluatiemomenten houden je scherp. We sturen bij waar nodig en vieren wat al gelukt is.",
  },
  {
    icon: Ruler,
    title: "Periodieke metingen",
    desc: "Gewicht, vetpercentage en spiermassa worden periodiek gemeten zodat je altijd weet waar je staat.",
  },
];

export default function FunctionalTraining() {
  return (
    <main>
      {/* Hero */}
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
            <p style={{ fontSize: 16, color: "#b8b3aa", lineHeight: 1.9, margin: "0 0 24px" }}>
              Kies je voor FIT Partners dan kies je voor topbegeleiding op maat!
            </p>
            <p style={{ fontSize: 16, color: "#b8b3aa", lineHeight: 1.9, margin: 0 }}>
              We starten met een eerste kennismaking. Er wordt aandacht besteed aan diverse basis bewegingsvormen.
              Jouw trainer checkt aan de hand hiervan het startpunt waar vanuit gewerkt kan worden met eerste oefenvormen
              die voor jou geschikt zijn. Je gaat eerst aan de slag, leert ons centrum en onze manier van trainen kennen.
              Na diverse trainingen plannen we het eerste sportonderzoek in. De resultaten van dit onderzoek vormen de
              basis voor alle volgende schema&apos;s en trainingen.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Feature cards */}
      <section style={{ background: "#131211", padding: "80px 24px 96px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <h2 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(28px, 4vw, 48px)", textTransform: "uppercase", color: "#f4efe6", margin: "0 0 56px", lineHeight: 1 }}>
              Waarom trainen bij FIT Partners?
            </h2>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 2 }}>
            {waarom.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={i} delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <div className="feature-card" style={{
                    background: "#0c0b0a",
                    padding: "32px 28px",
                    border: "1px solid #2a2720",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                  }}>
                    <div style={{
                      width: 46, height: 46, borderRadius: "50%",
                      background: "rgba(183,157,62,0.08)",
                      border: "1px solid rgba(183,157,62,0.3)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <Icon size={20} color="#b79d3e" strokeWidth={1.5} />
                    </div>
                    <h3 style={{
                      fontFamily: "var(--font-anton)", fontSize: 17,
                      textTransform: "uppercase", color: "#f4efe6",
                      margin: 0, lineHeight: 1.2, letterSpacing: "0.03em",
                    }}>
                      {item.title}
                    </h3>
                    <p style={{ color: "#b8b3aa", fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
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
            <p style={{ color: "#b8b3aa", fontSize: 16, lineHeight: 1.8, marginBottom: 40 }}>
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

      <style>{`
        .feature-card { transition: border-color 0.25s; }
        .feature-card:hover { border-color: #b79d3e !important; }
      `}</style>
    </main>
  );
}
