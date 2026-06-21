"use client";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" style={{ background: "#131211", padding: "120px 24px", textAlign: "center" }}>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <Reveal>
          <p style={{ color: "#b79d3e", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 24 }}>Stap 1</p>
          <h2 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(40px, 6vw, 72px)", textTransform: "uppercase", color: "#f4efe6", margin: "0 0 24px", lineHeight: 1 }}>
            Gratis intake
          </h2>
          <p style={{ color: "#b8b3aa", fontSize: 17, lineHeight: 1.8, marginBottom: 48 }}>
            Maak een afspraak voor een vrijblijvende kennismaking. We bespreken jouw doelen en laten je de studio zien.
          </p>
          <a href="mailto:info@fit-partners.nl?subject=Gratis intake aanvragen"
            style={{ display: "inline-block", background: "#b79d3e", color: "#0c0b0a", padding: "18px 48px", fontWeight: 700, fontSize: 14, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", transition: "background 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#c9b87e")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#b79d3e")}>
            Stuur een bericht
          </a>
          <p style={{ color: "#6f6a60", fontSize: 13, marginTop: 24 }}>Of bel: +31 (0)00 000 00 00</p>
        </Reveal>
      </div>
    </section>
  );
}
