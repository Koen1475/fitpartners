"use client";
import { useState } from "react";
import Image from "next/image";
import { team } from "@/lib/data";
import Reveal from "@/components/Reveal";

function TeamCard({ t, featured = false }: { t: typeof team[0]; featured?: boolean }) {
  const [hovered, setHovered] = useState(false);
  const h = featured ? 560 : 460;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: "relative", overflow: "hidden", height: h, cursor: "default" }}
    >
      <Image src={t.img} alt={t.name} fill style={{ objectFit: "cover", objectPosition: "top", transition: "transform 0.5s ease", transform: hovered ? "scale(1.05)" : "scale(1)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,11,10,0.85) 0%, rgba(12,11,10,0.1) 50%, transparent 100%)", transition: "opacity 0.4s ease", opacity: hovered ? 0 : 1 }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,11,10,0.97) 0%, rgba(12,11,10,0.75) 50%, rgba(12,11,10,0.1) 100%)", transition: "opacity 0.4s ease", opacity: hovered ? 1 : 0 }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "24px 24px 20px", transition: "transform 0.4s ease", transform: hovered ? "translateY(-120px)" : "translateY(0)" }}>
        <h3 style={{ fontFamily: "var(--font-anton)", fontSize: featured ? 28 : 22, textTransform: "uppercase", color: "#f4efe6", margin: "0 0 4px", lineHeight: 1 }}>{t.name}</h3>
        <p style={{ color: "#BC9C22", fontSize: 12, margin: 0, letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600 }}>{t.role}</p>
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 24px 24px", opacity: hovered ? 1 : 0, transform: hovered ? "translateY(0)" : "translateY(16px)", transition: "opacity 0.35s ease 0.05s, transform 0.35s ease 0.05s" }}>
        <p style={{ color: "#BC9C22", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", margin: "0 0 10px", fontWeight: 700 }}>Specialisaties</p>
        {t.specs.map((s) => (
          <div key={s} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 7 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#BC9C22", flexShrink: 0 }} />
            <span style={{ color: "#f4efe6", fontSize: 13, lineHeight: 1.4 }}>{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TeamContent() {
  const [niek, ...rest] = team;
  const [maartje, georgio, robin, lindy] = rest;

  return (
    <main>
      <section style={{ position: "relative", height: 360, display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/images/Hero.jpg)", backgroundSize: "cover", backgroundPosition: "center 25%", filter: "brightness(0.18)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,11,10,1) 0%, rgba(12,11,10,0) 55%)" }} />
        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "0 24px 64px", width: "100%" }}>
          <p style={{ color: "#BC9C22", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 12px" }}>Over ons</p>
          <h1 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(40px, 6vw, 80px)", textTransform: "uppercase", color: "#f4efe6", margin: "0 0 16px", lineHeight: 1 }}>Ons team</h1>
          <p style={{ color: "#cfc9bd", fontSize: 17, lineHeight: 1.7, maxWidth: 600, margin: 0 }}>
            Wij zijn zo goed in ons vak omdat er een essentiële factor meespeelt in alles wat we doen:{" "}
            <span style={{ color: "#BC9C22", fontWeight: 700 }}>passie</span>. Omdat we ons werk met zoveel passie en enthousiasme doen, gaan we net even verder waar anderen stoppen.
          </p>
        </div>
      </section>

      <section style={{ background: "#0c0b0a", padding: "72px 24px 96px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 8, marginBottom: 8 }} className="team-top">
              <TeamCard t={niek} featured />
              <TeamCard t={maartje} featured />
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }} className="team-bottom">
              <TeamCard t={georgio} />
              <TeamCard t={robin} />
              <TeamCard t={lindy} />
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) { .team-top, .team-bottom { grid-template-columns: 1fr !important; } }
        @media (max-width: 1024px) and (min-width: 769px) { .team-bottom { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </main>
  );
}
