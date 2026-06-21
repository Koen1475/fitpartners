"use client";
export default function Hero() {
  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/images/Hero.jpg)", backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.35)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(12,11,10,0.4) 0%, rgba(12,11,10,0.8) 100%)" }} />

      <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "0 24px", width: "100%" }}>
        <div className="hero-line-1" style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 24 }}>
          <span style={{ color: "#b79d3e", fontSize: 18 }}>★★★★★</span>
          <span style={{ color: "#a39d92", fontSize: 14 }}>5.0 · 40+ beoordelingen</span>
        </div>

        <h1 className="hero-line-2" style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(48px, 8vw, 96px)", lineHeight: 1, textTransform: "uppercase", color: "#f4efe6", margin: "0 0 8px" }}>
          Train op maat.
        </h1>
        <h1 className="hero-line-3" style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(48px, 8vw, 96px)", lineHeight: 1, textTransform: "uppercase", color: "#b79d3e", margin: "0 0 32px" }}>
          Weet wat werkt.
        </h1>

        <p className="hero-line-4" style={{ fontSize: 18, color: "#cfc9bd", maxWidth: 520, lineHeight: 1.6, marginBottom: 40 }}>
          Persoonlijke begeleiding op basis van data. Geen giswerk, meetbare resultaten vanaf dag één.
        </p>

        <div className="hero-line-4" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href="#contact" style={{ background: "#b79d3e", color: "#0c0b0a", padding: "16px 36px", fontWeight: 700, fontSize: 14, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", transition: "background 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#c9b87e")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#b79d3e")}>
            Gratis intake aanvragen
          </a>
          <a href="#aanpak" style={{ border: "1px solid #a39d92", color: "#f4efe6", padding: "16px 36px", fontWeight: 600, fontSize: 14, letterSpacing: "0.05em", textTransform: "uppercase", textDecoration: "none", transition: "border-color 0.2s, color 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#b79d3e"; e.currentTarget.style.color = "#b79d3e"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#a39d92"; e.currentTarget.style.color = "#f4efe6"; }}>
            Onze aanpak
          </a>
        </div>
      </div>
    </section>
  );
}
