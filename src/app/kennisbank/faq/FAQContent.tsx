"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import IntakeTriggerButton from "@/components/IntakeTriggerButton";
import { faqs } from "./faqData";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid #2a2720" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "20px 0", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, textAlign: "left" }}
      >
        <span style={{ color: "#f4efe6", fontSize: 16, lineHeight: 1.4, fontWeight: 500 }}>{q}</span>
        <ChevronDown size={18} color="#ffd53b" style={{ flexShrink: 0, transition: "transform 0.25s", transform: open ? "rotate(180deg)" : "rotate(0)" }} />
      </button>
      {open && (
        <p style={{ color: "#b8b3aa", fontSize: 15, lineHeight: 1.8, margin: "0 0 20px", paddingRight: 32 }}>{a}</p>
      )}
    </div>
  );
}

export default function FAQContent() {
  return (
    <main>
      <section style={{ background: "#131211", padding: "100px 24px 64px", borderBottom: "1px solid #2a2720" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <Link href="/kennisbank" style={{ color: "#ffd53b", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", display: "inline-block", marginBottom: 20 }}>
            ← Kennisbank
          </Link>
          <h1 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(40px, 6vw, 80px)", textTransform: "uppercase", color: "#f4efe6", margin: "0 0 20px", lineHeight: 1 }}>
            Veelgestelde vragen
          </h1>
          <p style={{ color: "#b8b3aa", fontSize: 16, lineHeight: 1.8, margin: 0 }}>
            Antwoorden op de vragen die wij het meest krijgen. Staat jouw vraag er niet bij? Bel ons op{" "}
            <a href="tel:06-14634488" style={{ color: "#ffd53b", textDecoration: "none" }}>06-14634488</a>.
          </p>
        </div>
      </section>

      <section style={{ background: "#0c0b0a", padding: "72px 24px 96px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 56 }}>
          {faqs.map(cat => (
            <div key={cat.cat}>
              <h2 style={{ fontFamily: "var(--font-anton)", fontSize: 20, textTransform: "uppercase", color: "#ffd53b", margin: "0 0 8px", letterSpacing: "0.08em" }}>{cat.cat}</h2>
              <div style={{ borderTop: "1px solid #2a2720" }}>
                {cat.items.map(item => <FAQItem key={item.q} q={item.q} a={item.a} />)}
              </div>
            </div>
          ))}
        </div>
        <div style={{ maxWidth: 760, margin: "64px auto 0", background: "#131211", border: "1px solid #2a2720", padding: "40px", textAlign: "center" }}>
          <p style={{ color: "#ffd53b", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700, margin: "0 0 12px" }}>Nog vragen?</p>
          <h2 style={{ fontFamily: "var(--font-anton)", fontSize: 28, textTransform: "uppercase", color: "#f4efe6", margin: "0 0 24px" }}>Kom kennismaken</h2>
          <IntakeTriggerButton />
        </div>
      </section>
    </main>
  );
}
