import { plans } from "@/lib/data";

export default function Tarieven() {
  return (
    <section id="tarieven" style={{ background: "#131211", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p style={{ color: "#dbca91", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>Investering</p>
        <h2 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(36px, 5vw, 64px)", textTransform: "uppercase", color: "#f4efe6", margin: "0 0 64px", lineHeight: 1 }}>
          Tarieven
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
          {plans.map((p) => (
            <div key={p.name} style={{
              background: p.featured ? "#dbca91" : "#0c0b0a",
              padding: 40,
              position: "relative",
              border: p.featured ? "none" : "1px solid #2a2720"
            }}>
              {p.badge && (
                <div style={{ position: "absolute", top: -1, right: 24, background: "#0c0b0a", color: "#dbca91", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", padding: "6px 14px", fontWeight: 700 }}>
                  {p.badge}
                </div>
              )}
              <h3 style={{ fontFamily: "var(--font-anton)", fontSize: 22, textTransform: "uppercase", color: p.featured ? "#0c0b0a" : "#f4efe6", margin: "0 0 24px" }}>{p.name}</h3>
              <div style={{ marginBottom: 32 }}>
                <span style={{ fontFamily: "var(--font-anton)", fontSize: 48, color: p.featured ? "#0c0b0a" : "#f4efe6" }}>{p.price}</span>
                <span style={{ color: p.featured ? "#6f6a60" : "#a39d92", fontSize: 14, marginLeft: 4 }}>{p.period}</span>
              </div>
              <ul style={{ listStyle: "none", margin: "0 0 36px", padding: 0 }}>
                {p.features.map((f) => (
                  <li key={f} style={{ color: p.featured ? "#131211" : "#a39d92", fontSize: 14, padding: "8px 0", borderBottom: `1px solid ${p.featured ? "rgba(12,11,10,0.15)" : "#2a2720"}`, display: "flex", gap: 10 }}>
                    <span style={{ color: p.featured ? "#0c0b0a" : "#dbca91" }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" style={{
                display: "block", textAlign: "center", padding: "14px 24px", fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none",
                background: p.featured ? "#0c0b0a" : "#dbca91", color: p.featured ? "#dbca91" : "#0c0b0a"
              }}>
                Aanmelden
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
