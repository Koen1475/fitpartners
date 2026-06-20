import { reviews } from "@/lib/data";

export default function Reviews() {
  return (
    <section style={{ background: "#0c0b0a", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p style={{ color: "#dbca91", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>Resultaten</p>
        <h2 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(36px, 5vw, 64px)", textTransform: "uppercase", color: "#f4efe6", margin: "0 0 64px", lineHeight: 1 }}>
          Wat klanten zeggen
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32 }}>
          {reviews.map((r) => (
            <div key={r.name} style={{ background: "#131211", padding: 36, borderTop: "2px solid #dbca91" }}>
              <p style={{ color: "#f4efe6", fontSize: 16, lineHeight: 1.8, margin: "0 0 24px" }}>"{r.text}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 44, height: 44, background: "#dbca91", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-anton)", fontSize: 20, color: "#0c0b0a", flexShrink: 0 }}>
                  {r.initial}
                </div>
                <div>
                  <p style={{ color: "#f4efe6", fontWeight: 600, fontSize: 14, margin: 0 }}>{r.name}</p>
                  <p style={{ color: "#dbca91", fontSize: 13, margin: 0 }}>★★★★★</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
