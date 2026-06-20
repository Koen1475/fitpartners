"use client";
import { useState } from "react";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ background: "#0c0b0a", padding: "96px 24px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <p style={{ color: "#dbca91", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>Vragen</p>
        <h2 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(36px, 5vw, 64px)", textTransform: "uppercase", color: "#f4efe6", margin: "0 0 64px", lineHeight: 1 }}>
          Veelgestelde vragen
        </h2>

        {faqs.map((f, i) => (
          <div key={i} style={{ borderTop: "1px solid #2a2720" }}>
            <button onClick={() => setOpen(open === i ? null : i)}
              style={{ width: "100%", background: "none", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 0", cursor: "pointer", textAlign: "left" }}>
              <span style={{ color: "#f4efe6", fontSize: 16, fontWeight: 500, lineHeight: 1.4 }}>{f.q}</span>
              <span style={{ color: "#dbca91", fontSize: 24, marginLeft: 16, flexShrink: 0, transform: open === i ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>+</span>
            </button>
            {open === i && (
              <p style={{ color: "#a39d92", fontSize: 15, lineHeight: 1.8, margin: "0 0 24px", paddingRight: 48 }}>{f.a}</p>
            )}
          </div>
        ))}
        <div style={{ borderTop: "1px solid #2a2720" }} />
      </div>
    </section>
  );
}
