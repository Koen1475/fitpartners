"use client";
import { useRef } from "react";
import Image from "next/image";
import { diensten } from "@/lib/data";
import Reveal from "./Reveal";

export default function Diensten() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => ref.current?.scrollBy({ left: dir * 340, behavior: "smooth" });

  return (
    <section id="diensten" style={{ background: "#0c0b0a", padding: "96px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <Reveal>
          <p style={{ color: "#ffd53b", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>Wat we bieden</p>
        </Reveal>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48 }}>
          <Reveal>
            <h2 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(36px, 5vw, 64px)", textTransform: "uppercase", color: "#f4efe6", margin: 0, lineHeight: 1 }}>Diensten</h2>
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
        {diensten.map((d) => (
          <div key={d.title} style={{ flexShrink: 0, width: 320, background: "#131211" }}>
            <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
              <Image src={d.img} alt={d.title} fill style={{ objectFit: "cover", filter: "brightness(0.7)" }} />
            </div>
            <div style={{ padding: 28 }}>
              <h3 style={{ fontFamily: "var(--font-anton)", fontSize: 22, textTransform: "uppercase", color: "#f4efe6", margin: "0 0 12px" }}>{d.title}</h3>
              <p style={{ color: "#b8b3aa", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{d.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
