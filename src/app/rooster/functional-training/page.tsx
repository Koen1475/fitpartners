"use client";
import Script from "next/script";

export default function RoosterFunctionalTraining() {
  return (
    <main>
      {/* Hero */}
      <section style={{ position: "relative", height: 320, display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/images/Hero.jpg)", backgroundSize: "cover", backgroundPosition: "center 30%", filter: "brightness(0.2)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,11,10,1) 0%, rgba(12,11,10,0) 55%)" }} />
        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "0 24px 56px", width: "100%" }}>
          <p style={{ color: "#b79d3e", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 12px" }}>Rooster</p>
          <h1 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(36px, 5vw, 72px)", textTransform: "uppercase", color: "#f4efe6", margin: 0, lineHeight: 1 }}>
            Functional Training
          </h1>
        </div>
      </section>

      {/* Schedule widget */}
      <section style={{ background: "#0c0b0a", padding: "56px 24px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <link rel="stylesheet" href="https://fitpartners.sportbitapp.nl/cbm/css/embed/rooster/rooster.css" />

          <div id="sportbit-rooster">
            <div className="embed-rooster Donker" />
          </div>

          <Script
            src="https://fitpartners.sportbitapp.nl/cbm/embed/rooster/cdn/"
            strategy="afterInteractive"
            onLoad={() => {
              if (typeof (window as any).embed_rooster !== "undefined") {
                (window as any).embed_rooster.init("https://fitpartners.sportbitapp.nl/", 4);
              }
            }}
          />
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#131211", padding: "64px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 480, margin: "0 auto" }}>
          <p style={{ color: "#a39d92", fontSize: 15, lineHeight: 1.8, marginBottom: 28 }}>
            Wil je een afspraak inplannen of heb je vragen over het rooster?
          </p>
          <a href="tel:06-14634488"
            style={{ display: "inline-block", background: "#b79d3e", color: "#0c0b0a", padding: "14px 36px", fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}>
            Bel 06-14634488
          </a>
        </div>
      </section>
    </main>
  );
}
