import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Missie & Visie – FIT Partners",
  description: "FIT Partners draagt bij aan het herstel en de verbetering van gezondheid en sportieve prestaties. Persoonlijk begeleid, wetenschappelijk onderbouwd.",
};

const pillars = [
  { num: "01", title: "Cardio & kracht", body: "Gerichte training gericht op herstel en verbetering van gezondheid en sportieve prestaties." },
  { num: "02", title: "Realistische doelen", body: "Duidelijke, persoonlijke trainingsdoelstellingen die aansluiten op jouw situatie en ambitie." },
  { num: "03", title: "Wetenschappelijk", body: "Doelstellingen op basis van wetenschappelijk onderbouwde metingen, niet op gevoel." },
  { num: "04", title: "Persoonlijke begeleiding", body: "Aandacht voor alle aspecten die de gezondheid van het lid beïnvloeden." },
];

export default function MissieVisie() {
  return (
    <main>
      {/* Hero */}
      <section style={{ position: "relative", height: 360, display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/images/DataLab.jpg)", backgroundSize: "cover", backgroundPosition: "center 40%", filter: "brightness(0.15)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,11,10,1) 0%, rgba(12,11,10,0) 55%)" }} />
        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "0 24px 64px", width: "100%" }}>
          <p style={{ color: "#BC9C22", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 12px" }}>Over ons</p>
          <h1 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(40px, 6vw, 80px)", textTransform: "uppercase", color: "#f4efe6", margin: 0, lineHeight: 1 }}>
            Missie <span style={{ color: "#BC9C22" }}>&</span> Visie
          </h1>
        </div>
      </section>

      {/* Missie */}
      <section style={{ background: "#0c0b0a", padding: "88px 24px 80px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64, alignItems: "start" }} className="mv-grid">
            <Reveal>
              <div>
                <span style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(72px, 10vw, 120px)", color: "#131211", lineHeight: 0.85, display: "block", userSelect: "none", letterSpacing: "-0.02em" }}>
                  01
                </span>
                <h2 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(36px, 4vw, 56px)", textTransform: "uppercase", color: "#f4efe6", margin: "16px 0 0", lineHeight: 1 }}>
                  Missie
                </h2>
                <div style={{ width: 40, height: 2, background: "#BC9C22", marginTop: 20 }} />
              </div>
            </Reveal>

            <Reveal delay={1}>
              <blockquote style={{ margin: 0, borderLeft: "3px solid #BC9C22", paddingLeft: 32 }}>
                <p style={{ fontSize: 18, color: "#cfc9bd", lineHeight: 1.85, margin: 0, fontWeight: 300 }}>
                  FIT Partners draagt door gerichte cardio- en krachttraining bij aan het herstel en de verbetering van de{" "}
                  <strong style={{ color: "#f4efe6", fontWeight: 600 }}>gezondheid en sportieve prestaties</strong>.
                  FIT Partners stelt duidelijke, realistische en{" "}
                  <strong style={{ color: "#f4efe6", fontWeight: 600 }}>persoonlijke trainingsdoelstellingen</strong>{" "}
                  op basis van wetenschappelijk onderbouwde metingen. De trainingssessies worden persoonlijk begeleid
                  en er is aandacht voor alle aspecten die de gezondheid van het lid beïnvloeden.
                </p>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section style={{ background: "#131211", padding: "72px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }} className="pillars-grid">
            {pillars.map((p, i) => (
              <Reveal key={i} delay={(i % 4 + 1) as 1 | 2 | 3 | 4}>
                <div style={{ padding: "32px 28px", borderTop: "2px solid #BC9C22", background: "#0c0b0a", height: "100%" }}>
                  <span style={{ fontFamily: "var(--font-anton)", fontSize: 36, color: "#BC9C22", opacity: 0.25, display: "block", lineHeight: 1, marginBottom: 16 }}>{p.num}</span>
                  <h3 style={{ fontFamily: "var(--font-anton)", fontSize: 16, textTransform: "uppercase", color: "#f4efe6", margin: "0 0 12px", letterSpacing: "0.04em" }}>{p.title}</h3>
                  <p style={{ color: "#8c8780", fontSize: 13, lineHeight: 1.8, margin: 0 }}>{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gold divider */}
      <div style={{ background: "#0c0b0a", padding: "0 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", height: 1, background: "linear-gradient(to right, transparent, #BC9C22 30%, #BC9C22 70%, transparent)" }} />
      </div>

      {/* Visie */}
      <section style={{ background: "#0c0b0a", padding: "80px 24px 96px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64, alignItems: "start" }} className="mv-grid">
            <Reveal>
              <div>
                <span style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(72px, 10vw, 120px)", color: "#131211", lineHeight: 0.85, display: "block", userSelect: "none", letterSpacing: "-0.02em" }}>
                  02
                </span>
                <h2 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(36px, 4vw, 56px)", textTransform: "uppercase", color: "#f4efe6", margin: "16px 0 0", lineHeight: 1 }}>
                  Visie
                </h2>
                <div style={{ width: 40, height: 2, background: "#BC9C22", marginTop: 20 }} />
              </div>
            </Reveal>

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <Reveal delay={1}>
                <div style={{ background: "#131211", padding: "32px 36px", borderLeft: "3px solid #BC9C22" }}>
                  <p style={{ fontSize: 20, color: "#f4efe6", lineHeight: 1.7, margin: 0, fontWeight: 300 }}>
                    FIT Partners wordt gezien als{" "}
                    <em style={{ color: "#BC9C22", fontStyle: "normal", fontWeight: 700 }}>hét</em>{" "}
                    sport- en trainingscentrum in de regio.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={2}>
                <div style={{ background: "#131211", padding: "32px 36px", borderLeft: "3px solid #2a2720" }}>
                  <p style={{ fontSize: 17, color: "#b8b3aa", lineHeight: 1.85, margin: 0, fontWeight: 300 }}>
                    FIT Partners is toonaangevend voor sport- en bewegingsbegeleiding, advisering en coaching
                    en is een onderdeel van de{" "}
                    <strong style={{ color: "#cfc9bd", fontWeight: 600 }}>preventieve gezondheidszorg van Nederland</strong>.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 720px) {
          .mv-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .pillars-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .pillars-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
