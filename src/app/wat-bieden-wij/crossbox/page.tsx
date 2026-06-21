"use client";
import { useState } from "react";
import Reveal from "@/components/Reveal";

const tabs = [
  {
    label: "CrossMAX",
    content: [
      "CrossMAX is een trainingsmethode waarbij wordt gewerkt aan kracht, flexibiliteit en het uithoudingsvermogen. We werken hierbij met workouts of the day (WODS). Dat betekent elke dag een andere workout waarbij je veel verschillende, functionele bewegingen maakt. Een WOD is vaak een mix van conditie en kracht. Denk aan bewegingsvormen als sprinten, springen, tillen, klimmen en duwen. Daarbij gebruik makend van diverse materialen: gewichten, kettlebels, halterstangen, boxen, roeiers, airbikes en ga zo maar door.",
      "Natuurlijk starten we met een warming up, gericht op hetgeen dat aan bod zal komen. Afhankelijk van de WOD, staan we kort stil bij enkele technieken die toegepast worden.",
      "Deze lessen zijn toegankelijk voor iedereen. Groepsgevoel is belangrijk, help elkaar en moedig elkaar aan. Ben je wat meer gevorderd, net begonnen of misschien wat minder mobiel, het geeft niks! Alle WODS kunnen afgeschaald worden naar iedereens eigen niveau, zodat iedereen die zin heeft om even lekker te knallen mee kan doen.",
    ],
  },
  {
    label: "Circuittraining",
    content: [
      "Het woord Circuittraining zegt het eigenlijk al: diverse functionele oefeningen komen aan bod die je achter elkaar uitvoert, meestal in meerdere rondes. Het is een fullbody work-out waarbij je van elke oefening meerdere herhalingen maakt (aantal herhalingen worden vooraf bepaald door de trainer). Afgewisseld met een adempauze en een slokje water, blijft je hartslag hoog.",
    ],
  },
  {
    label: "Cardioboksen",
    content: [
      "Cardioboksen is een HIIT-training waar diverse elementen van het boksen gecombineerd worden met elementen uit fitness en krachttraining om zo de algehele lichamelijke conditie te verbeteren. We zullen je technieken uit het boksen aanleren, flink aan je conditie werken en je motiveren door te zetten!",
    ],
  },
  {
    label: "Mobility",
    content: [
      "Tijdens onze Mobility-lessen besteden we aandacht aan beweegpatronen. We werken aan je flexibiliteit en het bewegingsbereik van jouw gewrichten en spieren. Dit bewegingsbereik wordt ook wel 'Range of Motion' (ROM) genoemd. Een volledige ROM houdt in dat een spier volledig wordt gestrekt of volledig wordt samengetrokken binnen de bewegingsbaan van de spier. Het beste is om hier met enige regelmaat aandacht aan te besteden. Een onvolledige ROM kan pijn en blessures veroorzaken. Door met enige regelmaat aandacht te besteden aan je mobiliteit kun je deze blessures voorkomen. Daarom vinden wij het belangrijk om deze manier van bewegen aandacht te geven.",
      "Bewust is gekozen om deze Mobility-lessen een half uurtje te laten duren. Op deze manier is deze les eenvoudiger te combineren met een andere training. Ook zul je merken dat een half uurtje meer dan voldoende is om je volledig te focussen op de beweegvormen.",
    ],
  },
  {
    label: "CrossMAX Teens",
    content: [
      "CrossMAX Teens zegt het eigenlijk al: diverse functionele oefeningen komen aan bod die je achter elkaar uitvoert, meestal in meerdere rondes voor jongeren t/m 16 jaar. Insteek is kinderen te leren om functioneel te bewegen.",
    ],
  },
];

export default function Crossbox() {
  const [active, setActive] = useState(0);

  return (
    <main>
      {/* Hero */}
      <section style={{ position: "relative", height: 380, display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/images/Hero.jpg)", backgroundSize: "cover", backgroundPosition: "center 20%", filter: "brightness(0.25)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,11,10,1) 0%, rgba(12,11,10,0) 60%)" }} />
        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "0 24px 56px", width: "100%" }}>
          <p style={{ color: "#b79d3e", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 12px" }}>Wat bieden wij</p>
          <h1 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(40px, 6vw, 80px)", textTransform: "uppercase", color: "#f4efe6", margin: "0 0 16px", lineHeight: 1 }}>
            CrossBox
          </h1>
          <p style={{ color: "#cfc9bd", fontSize: 17, lineHeight: 1.7, maxWidth: 620, margin: 0 }}>
            CrossBox is een uitstekende manier om tegelijkertijd aan je kracht en conditie te werken en vet te verbranden.
            Een effectieve 2-in-1-work-out, waarmee je ook nog &apos;s tijd bespaart.
          </p>
        </div>
      </section>

      {/* Tab section */}
      <section style={{ background: "#0c0b0a", padding: "64px 24px 80px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Reveal>
            <p style={{ color: "#a39d92", fontSize: 15, textAlign: "center", marginBottom: 40, lineHeight: 1.6 }}>
              Alle onderstaande lessen zijn te volgen, afzonderlijk van het functioneel trainen in ons Trainingscentrum:
            </p>
          </Reveal>

          {/* Tab bar */}
          <Reveal>
            <div style={{ display: "flex", borderBottom: "2px solid #2a2720", marginBottom: 0, overflowX: "auto", scrollbarWidth: "none" }}>
              {tabs.map((tab, i) => (
                <button key={tab.label} onClick={() => setActive(i)}
                  style={{
                    background: "none", border: "none", cursor: "pointer", padding: "14px 24px",
                    fontSize: 13, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase",
                    whiteSpace: "nowrap", flexShrink: 0, position: "relative",
                    color: active === i ? "#b79d3e" : "#6f6a60",
                    transition: "color 0.2s",
                  }}>
                  {tab.label}
                  {active === i && (
                    <span style={{ position: "absolute", bottom: -2, left: 0, right: 0, height: 2, background: "#b79d3e" }} />
                  )}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Tab content */}
          <div style={{ background: "#131211", border: "1px solid #2a2720", borderTop: "none", padding: "36px 40px", minHeight: 180 }}>
            {tabs[active].content.map((para, i) => (
              <p key={i} style={{ color: "#a39d92", fontSize: 15, lineHeight: 1.9, margin: i < tabs[active].content.length - 1 ? "0 0 20px" : 0 }}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#131211", padding: "80px 24px", textAlign: "center" }}>
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
            <a href="mailto:info@fit-partners.nl?subject=Aanvraag intake CrossBox"
              style={{ display: "inline-block", background: "#b79d3e", color: "#0c0b0a", padding: "16px 40px", fontWeight: 700, fontSize: 14, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", transition: "opacity 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
              Aanvraag intake
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
