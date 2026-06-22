import Image from "next/image";

export default function Hero() {
  return (
    <section style={{ position: "relative", minHeight: "calc(100vh - 108px)", display: "flex", alignItems: "center", overflow: "hidden" }}>
      <Image
        src="/images/Hero.jpg"
        alt=""
        fill
        priority
        quality={80}
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center", filter: "brightness(0.35)" }}
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(12,11,10,0.4) 0%, rgba(12,11,10,0.8) 100%)" }} />

      <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "0 24px", width: "100%" }}>
        <div className="hero-line-1" style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 24 }}>
          <span style={{ color: "#ffd53b", fontSize: 18 }}>★★★★★</span>
          <span style={{ color: "#b8b3aa", fontSize: 14 }}>5.0 · 40+ beoordelingen</span>
        </div>

        <h1 className="hero-line-2" style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(48px, 8vw, 96px)", lineHeight: 1, textTransform: "uppercase", color: "#f4efe6", margin: "0 0 8px" }}>
          Train op maat.
        </h1>
        <p className="hero-line-3" style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(48px, 8vw, 96px)", lineHeight: 1, textTransform: "uppercase", color: "#ffd53b", margin: "0 0 32px" }}>
          Weet wat werkt.
        </p>

        <p className="hero-line-4" style={{ fontSize: 18, color: "#cfc9bd", maxWidth: 520, lineHeight: 1.6, marginBottom: 40 }}>
          Persoonlijke begeleiding op basis van data. Geen giswerk, meetbare resultaten vanaf dag één.
        </p>

        <div className="hero-line-4" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href="#contact" className="hero-btn-gold">Gratis intake aanvragen</a>
          <a href="#aanpak" className="hero-btn-outline">Onze aanpak</a>
        </div>
      </div>
    </section>
  );
}
