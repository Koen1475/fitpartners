"use client";
import { useState } from "react";
import { faqs } from "@/lib/data";
import Reveal from "./Reveal";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ background: "#0c0b0a", padding: "96px 24px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <Reveal>
          <p style={{ color: "#b79d3e", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>Vragen</p>
          <h2 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(36px, 5vw, 64px)", textTransform: "uppercase", color: "#f4efe6", margin: "0 0 64px", lineHeight: 1 }}>
            Veelgestelde vragen
          </h2>
        </Reveal>

        {faqs.map((f, i) => (
          <Reveal key={i} delay={1}>
            <div style={{ borderTop: "1px solid #2a2720" }}>
              <button onClick={() => setOpen(open === i ? null : i)}
                style={{ width: "100%", background: "none", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 0", cursor: "pointer", textAlign: "left" }}>
                <span style={{ color: "#f4efe6", fontSize: 16, fontWeight: 500, lineHeight: 1.4 }}>{f.q}</span>
                <span style={{ color: "#b79d3e", fontSize: 24, marginLeft: 16, flexShrink: 0, transform: open === i ? "rotate(45deg)" : "none", transition: "transform 0.25s ease", display: "inline-block" }}>+</span>
              </button>
              <div style={{
                overflow: "hidden", maxHeight: open === i ? 200 : 0, opacity: open === i ? 1 : 0,
                transition: "max-height 0.35s ease, opacity 0.3s ease",
              }}>
                <p style={{ color: "#b8b3aa", fontSize: 15, lineHeight: 1.8, margin: "0 0 24px", paddingRight: 48 }}>{f.a}</p>
              </div>
            </div>
          </Reveal>
        ))}
        <div style={{ borderTop: "1px solid #2a2720" }} />
      </div>
    </section>
  );
}
