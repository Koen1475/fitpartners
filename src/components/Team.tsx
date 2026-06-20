"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { team } from "@/lib/data";

export default function Team() {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const scroll = (dir: number) => ref.current?.scrollBy({ left: dir * 300, behavior: "smooth" });

  return (
    <section id="team" style={{ background: "#131211", padding: "96px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <p style={{ color: "#dbca91", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>De mensen</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48 }}>
          <h2 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(36px, 5vw, 64px)", textTransform: "uppercase", color: "#f4efe6", margin: 0, lineHeight: 1 }}>Ons team</h2>
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
            style={{ flexShrink: 0, width: 260, position: "relative", cursor: "default" }}>
            <div style={{ position: "relative", height: 360, overflow: "hidden" }}>
              <Image src={t.img} alt={t.name} fill style={{ objectFit: "cover", objectPosition: "top" }} />
              <div style={{
                position: "absolute", inset: 0, background: "rgba(12,11,10,0.92)", display: "flex", flexDirection: "column", justifyContent: "center", padding: 24,
                opacity: hovered === t.name ? 1 : 0, transition: "opacity 0.3s"
              }}>
                <p style={{ color: "#dbca91", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Specialisaties</p>
                {t.specs.map((s) => (
                  <p key={s} style={{ color: "#f4efe6", fontSize: 14, margin: "0 0 8px", lineHeight: 1.5 }}>— {s}</p>
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
