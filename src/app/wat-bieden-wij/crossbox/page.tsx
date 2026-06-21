"use client";
import { useState, useEffect, useRef } from "react";
import Reveal from "@/components/Reveal";

const tabs = [
  {
    label: "CrossMAX",
    num: "01",
    content: [
      "CrossMAX is een trainingsmethode waarbij wordt gewerkt aan kracht, flexibiliteit en het uithoudingsvermogen. We werken hierbij met workouts of the day (WODS). Dat betekent elke dag een andere workout waarbij je veel verschillende, functionele bewegingen maakt. Een WOD is vaak een mix van conditie en kracht. Denk aan bewegingsvormen als sprinten, springen, tillen, klimmen en duwen. Daarbij gebruik makend van diverse materialen: gewichten, kettlebels, halterstangen, boxen, roeiers, airbikes en ga zo maar door.",
      "Natuurlijk starten we met een warming up, gericht op hetgeen dat aan bod zal komen. Afhankelijk van de WOD, staan we kort stil bij enkele technieken die toegepast worden.",
      "Deze lessen zijn toegankelijk voor iedereen. Groepsgevoel is belangrijk, help elkaar en moedig elkaar aan. Ben je wat meer gevorderd, net begonnen of misschien wat minder mobiel, het geeft niks! Alle WODS kunnen afgeschaald worden naar iedereens eigen niveau, zodat iedereen die zin heeft om even lekker te knallen mee kan doen.",
    ],
  },
  {
    label: "Circuittraining",
    num: "02",
    content: [
      "Het woord Circuittraining zegt het eigenlijk al: diverse functionele oefeningen komen aan bod die je achter elkaar uitvoert, meestal in meerdere rondes. Het is een fullbody work-out waarbij je van elke oefening meerdere herhalingen maakt (aantal herhalingen worden vooraf bepaald door de trainer). Afgewisseld met een adempauze en een slokje water, blijft je hartslag hoog.",
    ],
  },
  {
    label: "Cardioboksen",
    num: "03",
    content: [
      "Cardioboksen is een HIIT-training waar diverse elementen van het boksen gecombineerd worden met elementen uit fitness en krachttraining om zo de algehele lichamelijke conditie te verbeteren. We zullen je technieken uit het boksen aanleren, flink aan je conditie werken en je motiveren door te zetten!",
    ],
  },
  {
    label: "Mobility",
    num: "04",
    content: [
      "Tijdens onze Mobility-lessen besteden we aandacht aan beweegpatronen. We werken aan je flexibiliteit en het bewegingsbereik van jouw gewrichten en spieren. Dit bewegingsbereik wordt ook wel 'Range of Motion' (ROM) genoemd. Een volledige ROM houdt in dat een spier volledig wordt gestrekt of volledig wordt samengetrokken binnen de bewegingsbaan van de spier. Het beste is om hier met enige regelmaat aandacht aan te besteden. Een onvolledige ROM kan pijn en blessures veroorzaken. Door met enige regelmaat aandacht te besteden aan je mobiliteit kun je deze blessures voorkomen. Daarom vinden wij het belangrijk om deze manier van bewegen aandacht te geven.",
      "Bewust is gekozen om deze Mobility-lessen een half uurtje te laten duren. Op deze manier is deze les eenvoudiger te combineren met een andere training. Ook zul je merken dat een half uurtje meer dan voldoende is om je volledig te focussen op de beweegvormen.",
    ],
  },
  {
    label: "CrossMAX Teens",
    num: "05",
    content: [
      "CrossMAX Teens zegt het eigenlijk al: diverse functionele oefeningen komen aan bod die je achter elkaar uitvoert, meestal in meerdere rondes voor jongeren t/m 16 jaar. Insteek is kinderen te leren om functioneel te bewegen.",
    ],
  },
];

export default function Crossbox() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);
  const [scrollHint, setScrollHint] = useState(true);
  const prev = useRef(0);
  const tabsRef = useRef<HTMLDivElement>(null);

  const switchTab = (i: number) => {
    if (i === active) return;
    setVisible(false);
    setTimeout(() => {
      setActive(i);
      prev.current = i;
      setVisible(true);
      // Auto-scroll active tab into view on mobile
      if (tabsRef.current) {
        const btns = tabsRef.current.querySelectorAll("button");
        btns[i]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }, 200);
  };

  return (
    <main>
      {/* Hero */}
      <section style={{ position: "relative", height: 400, display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/images/Hero.jpg)", backgroundSize: "cover", backgroundPosition: "center 20%", filter: "brightness(0.22)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,11,10,1) 0%, rgba(12,11,10,0) 55%)" }} />
        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "0 24px 64px", width: "100%" }}>
          <p style={{ color: "#b79d3e", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 12px" }}>Wat bieden wij</p>
          <h1 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(40px, 6vw, 80px)", textTransform: "uppercase", color: "#f4efe6", margin: "0 0 20px", lineHeight: 1 }}>
            CrossBox
          </h1>
          <p style={{ color: "#cfc9bd", fontSize: 17, lineHeight: 1.7, maxWidth: 600, margin: 0 }}>
            CrossBox is een uitstekende manier om tegelijkertijd aan je kracht en conditie te werken en vet te verbranden.
            Een effectieve 2-in-1-work-out, waarmee je ook nog &apos;s tijd bespaart.
          </p>
        </div>
      </section>

      {/* Lessen sectie */}
      <section style={{ background: "#0c0b0a", padding: "80px 24px 96px", overflowX: "hidden" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <p style={{ color: "#b8b3aa", fontSize: 14, marginBottom: 56, lineHeight: 1.7, maxWidth: 680 }}>
              Alle onderstaande lessen zijn te volgen, afzonderlijk van het functioneel trainen in ons Trainingscentrum:
            </p>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 0 }} className="crossbox-grid">

            {/* Sidebar tabs */}
            <div style={{ borderRight: "1px solid #2a2720", position: "relative" }}>
              {/* Mobile scroll hint — fades out after first scroll */}
              <div className="scroll-hint" style={{
                position: "absolute", right: 0, top: 0, bottom: 0, width: 56, zIndex: 2, pointerEvents: "none",
                background: "linear-gradient(to right, transparent, #0c0b0a)",
                opacity: scrollHint ? 1 : 0, transition: "opacity 0.4s ease",
              }}>
                <div style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", color: "#b79d3e", fontSize: 18 }}
                  className="hint-arrow">›</div>
              </div>

              <div ref={tabsRef} className="tabs-inner" onScroll={() => setScrollHint(false)}>
              {tabs.map((tab, i) => (
                <button key={tab.label} onClick={() => switchTab(i)}
                  style={{
                    width: "100%", border: "none", cursor: "pointer",
                    padding: "20px 28px", textAlign: "left", display: "flex", alignItems: "center", gap: 18,
                    borderLeft: `3px solid ${active === i ? "#b79d3e" : "transparent"}`,
                    borderBottom: "1px solid #1e1d1b",
                    transition: "border-color 0.25s, background 0.2s",
                    background: active === i ? "rgba(183,157,62,0.06)" : "transparent",
                  }}
                  onMouseEnter={(e) => { if (active !== i) e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
                  onMouseLeave={(e) => { if (active !== i) e.currentTarget.style.background = active === i ? "rgba(183,157,62,0.06)" : "transparent"; }}>
                  <span style={{
                    fontFamily: "var(--font-anton)", fontSize: 13, color: active === i ? "#b79d3e" : "#2e2c29",
                    letterSpacing: "0.05em", transition: "color 0.25s", lineHeight: 1, flexShrink: 0,
                  }}>
                    {tab.num}
                  </span>
                  <span style={{
                    fontFamily: "var(--font-anton)", fontSize: 16, textTransform: "uppercase",
                    letterSpacing: "0.06em", lineHeight: 1.2,
                    color: active === i ? "#f4efe6" : "#6f6a60",
                    transition: "color 0.25s",
                  }}>
                    {tab.label}
                  </span>
                </button>
              ))}
              </div>
            </div>

            {/* Content panel */}
            <div style={{ padding: "40px 48px", minHeight: 320, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(8px)", transition: "opacity 0.25s ease, transform 0.25s ease" }}>
                <h2 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(24px, 3vw, 36px)", textTransform: "uppercase", color: "#f4efe6", margin: "0 0 28px", lineHeight: 1 }}>
                  {tabs[active].label}
                </h2>
                {tabs[active].content.map((para, i) => (
                  <p key={i} style={{ color: "#b8b3aa", fontSize: 15, lineHeight: 1.9, margin: i < tabs[active].content.length - 1 ? "0 0 18px" : 0 }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>

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
            <p style={{ color: "#b8b3aa", fontSize: 16, lineHeight: 1.8, marginBottom: 40 }}>
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

      <style>{`
        @keyframes hintBounce {
          0%, 100% { transform: translateY(-50%) translateX(0); }
          50% { transform: translateY(-50%) translateX(5px); }
        }
        .hint-arrow {
          animation: hintBounce 1s ease-in-out infinite;
        }
        .tabs-inner { display: block; width: 100%; }
        .scroll-hint { display: none; }

        @media (max-width: 720px) {
          .crossbox-grid {
            grid-template-columns: 1fr !important;
          }
          .crossbox-grid > div:first-child {
            border-right: none !important;
            border-bottom: 1px solid #2a2720;
            overflow: hidden;
          }
          .tabs-inner {
            display: flex !important;
            overflow-x: auto !important;
            scrollbar-width: none !important;
            width: 100% !important;
          }
          .tabs-inner::-webkit-scrollbar { display: none; }
          .tabs-inner button {
            width: auto !important;
            border-left: none !important;
            border-bottom: 3px solid transparent !important;
            padding: 14px 20px !important;
            flex-shrink: 0 !important;
            white-space: nowrap !important;
          }
          .tabs-inner button[style*="rgba(183,157,62,0.06)"] {
            border-bottom-color: #b79d3e !important;
          }
          .scroll-hint { display: block; }
        }
      `}</style>
    </main>
  );
}
