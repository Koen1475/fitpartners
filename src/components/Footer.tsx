"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: "#0c0b0a", borderTop: "1px solid #2a2720", padding: "64px 24px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 48, marginBottom: 64 }}>
          <div>
            <Image src="/images/FIT-Partners-Logo-Witte-Letters-450X150.png" alt="FIT Partners" width={160} height={54} style={{ objectFit: "contain", marginBottom: 16 }} />
            <p style={{ color: "#6f6a60", fontSize: 13, lineHeight: 1.7, margin: 0 }}>
              Persoonlijke training op basis van data en wetenschap.
            </p>
          </div>
          <div>
            <h4 style={{ color: "#f4efe6", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 20px", fontWeight: 700 }}>Navigatie</h4>
            {["#aanpak", "#diensten", "#team", "#tarieven", "#faq"].map((href) => (
              <a key={href} href={href} style={{ display: "block", color: "#6f6a60", textDecoration: "none", fontSize: 14, marginBottom: 10 }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#dbca91")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6f6a60")}>
                {href.replace("#", "").charAt(0).toUpperCase() + href.replace("#", "").slice(1)}
              </a>
            ))}
          </div>
          <div>
            <h4 style={{ color: "#f4efe6", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 20px", fontWeight: 700 }}>Contact</h4>
            <p style={{ color: "#6f6a60", fontSize: 14, lineHeight: 1.8, margin: 0 }}>
              info@fit-partners.nl<br />
              +31 (0)00 000 00 00<br />
              Straatnaam 00, Plaats
            </p>
          </div>
          <div>
            <h4 style={{ color: "#f4efe6", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 20px", fontWeight: 700 }}>Openingstijden</h4>
            <p style={{ color: "#6f6a60", fontSize: 14, lineHeight: 1.8, margin: 0 }}>
              Ma–Vr: 06:00–22:00<br />
              Za–Zo: 08:00–18:00
            </p>
          </div>
        </div>
        <div style={{ borderTop: "1px solid #2a2720", paddingTop: 32, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <p style={{ color: "#6f6a60", fontSize: 13, margin: 0 }}>© 2026 FIT Partners. Alle rechten voorbehouden.</p>
          <p style={{ color: "#6f6a60", fontSize: 13, margin: 0 }}>Meten = Weten</p>
        </div>
      </div>
    </footer>
  );
}
