import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Onze Partners – Sport Assistance & Sportlab Zuid",
  description:
    "FIT Partners werkt samen met Sport Assistance en Sportlab Zuid voor een effectieve, integrale aanpak van training, onderzoek en begeleiding.",
  alternates: { canonical: "https://fit-partners.nl/partners" },
};

const partners = [
  {
    logo: "/images/Logo_Sport-Assistance-250x100.jpg",
    logoWidth: 220,
    logoHeight: 88,
    name: "Sport Assistance",
    tag: "Franchise & netwerk",
    desc: "Overkoepelend en ondersteunend franchise orgaan. Sport Assistance verbindt personal training studios in Nederland en biedt gedeelde kennis, kwaliteitsborging en netwerkkracht aan haar leden.",
    bg: "#fff",
    logoPad: true,
  },
  {
    logo: "/images/logo_Sportlab@5x.png",
    logoWidth: 260,
    logoHeight: 72,
    name: "Sportlab Zuid",
    tag: "Test- & begeleidingscentrum",
    desc: "Het test- en duursportbegeleidingscentrum en dochteronderneming van FIT Partners. Alle functionele sportonderzoeken van het trainingscentrum worden afgenomen door Sportlab Zuid. Van VO2max-meting tot spierkrachtonderzoek: wetenschap in dienst van jouw prestaties.",
    bg: "transparent",
    logoPad: false,
  },
];

export default function Partners() {
  return (
    <main>
      {/* Hero */}
      <section style={{ position: "relative", height: 360, display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/images/Hero.jpg)", backgroundSize: "cover", backgroundPosition: "center 30%", filter: "brightness(0.18)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,11,10,1) 0%, rgba(12,11,10,0) 55%)" }} />
        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "0 24px 64px", width: "100%" }}>
          <p style={{ color: "#b79d3e", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 12px" }}>FIT Partners</p>
          <h1 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(40px, 6vw, 80px)", textTransform: "uppercase", color: "#f4efe6", margin: 0, lineHeight: 1 }}>
            Onze partners
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background: "#0c0b0a", padding: "72px 24px 64px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <Reveal>
            <p style={{ fontSize: 20, color: "#cfc9bd", lineHeight: 1.7, fontWeight: 300, margin: "0 0 16px" }}>
              Wij geloven in een effectieve, efficiënte en integrale aanpak.
            </p>
            <p style={{ fontSize: 16, color: "#b8b3aa", lineHeight: 1.8, margin: 0 }}>
              Daarom werken we samen met partners, zodat we jou kunnen helpen met wat je écht nodig hebt.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Partners grid */}
      <section style={{ background: "#0c0b0a", padding: "0 24px 96px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: 2 }} className="partners-grid">
          {partners.map((p, i) => (
            <Reveal key={p.name} delay={(i + 1) as 1 | 2}>
              <div style={{
                background: "#131211",
                border: "1px solid #2a2720",
                padding: "52px 44px",
                display: "flex", flexDirection: "column", gap: 28,
                height: "100%",
              }}>
                {/* Logo */}
                <div style={{
                  background: p.logoPad ? "#fff" : "transparent",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  padding: p.logoPad ? "16px 24px" : 0,
                  alignSelf: "flex-start",
                  border: p.logoPad ? "none" : "none",
                }}>
                  <Image
                    src={p.logo}
                    alt={p.name}
                    width={p.logoWidth}
                    height={p.logoHeight}
                    style={{ objectFit: "contain" }}
                  />
                </div>

                {/* Content */}
                <div>
                  <p style={{ color: "#b79d3e", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700, margin: "0 0 10px" }}>{p.tag}</p>
                  <h2 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(24px, 3vw, 36px)", textTransform: "uppercase", color: "#f4efe6", margin: "0 0 16px", lineHeight: 1.1 }}>
                    {p.name}
                  </h2>
                  <p style={{ color: "#b8b3aa", fontSize: 15, lineHeight: 1.85, margin: 0 }}>{p.desc}</p>
                </div>

                <div style={{ width: 36, height: 2, background: "#b79d3e", marginTop: "auto" }} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .partners-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
