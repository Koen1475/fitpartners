"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { team } from "@/lib/data";
import Reveal from "./Reveal";

export default function Team() {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const scroll = (dir: number) => ref.current?.scrollBy({ left: dir * 300, behavior: "smooth" });

  return (
    <section id="team" style={{ background: "#131211", padding: "96px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <Reveal>
          <p style={{ color: "#b79d3e", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>De mensen</p>
        </Reveal>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48 }}>
          <Reveal>
            <h2 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(36px, 5vw, 64px)", textTransform: "uppercase", color: "#f4efe6", margin: 0, lineHeight: 1 }}>Ons team</h2>
          </Reveal>
          <div style={{ display: "flex", gap: 8 }}>
            {[-1, 1].map((d) => (
              <button key={d} onClick={() => scroll(d)}
                style={{ width: 44, height: 44, border: "1px solid #2a2720", background: "none", color: "#f4efe6", cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {d === -1 ? "←" : "→"}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div ref={ref} style={{ display: "flex", gap: 24, overflowX: "auto", paddingLeft: "max(24px, calc((100vw - 1200px)/2 + 24px))", paddingRight: 24, scrollbarWidth: "none" }}>
        {team.map((t) => (
          <div key={t.name} onMouseEnter={() => setHovered(t.name)} onMouseLeave={() => setHovered(null)}
            style={{ flexShrink: 0, width: 340, position: "relative", cursor: "default" }}>
            <div style={{ position: "relative", height: 460, overflow: "hidden" }}>
              <Image src={t.img} alt={t.name} fill style={{ objectFit: "cover", objectPosition: "top", transition: "transform 0.4s ease", transform: hovered === t.name ? "scale(1.04)" : "scale(1)" }} />
              <div style={{
                position: "absolute", inset: 0,
                background: hovered === t.name
                  ? "linear-gradient(to top, rgba(12,11,10,0.97) 0%, rgba(12,11,10,0.7) 55%, rgba(12,11,10,0) 100%)"
                  : "linear-gradient(to top, rgba(12,11,10,0.5) 0%, rgba(12,11,10,0) 50%)",
                transition: "background 0.4s ease",
              }} />
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, padding: "24px 20px",
                opacity: hovered === t.name ? 1 : 0,
                transform: hovered === t.name ? "translateY(0)" : "translateY(10px)",
                transition: "opacity 0.35s ease, transform 0.35s ease",
              }}>
                <p style={{ color: "#b79d3e", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 10px", fontWeight: 700 }}>Specialisaties</p>
                {t.specs.map((s) => (
                  <div key={s} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 7 }}>
                    <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#b79d3e", flexShrink: 0, display: "inline-block" }} />
                    <span style={{ color: "#f4efe6", fontSize: 13, lineHeight: 1.4 }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: "16px 0" }}>
              <h3 style={{ fontFamily: "var(--font-anton)", fontSize: 20, textTransform: "uppercase", color: "#f4efe6", margin: "0 0 4px" }}>{t.name}</h3>
              <p style={{ color: "#a39d92", fontSize: 13, margin: 0 }}>{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
