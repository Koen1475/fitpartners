"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#aanpak", label: "Aanpak" },
    { href: "#diensten", label: "Diensten" },
    { href: "#team", label: "Team" },
    { href: "#tarieven", label: "Tarieven" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header style={{ background: "#0c0b0a", borderBottom: "1px solid #2a2720", position: "sticky", top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        <Link href="/">
          <Image src="/images/FIT-Partners-Logo-Witte-Letters-450X150.png" alt="FIT Partners" width={180} height={60} style={{ objectFit: "contain" }} priority />
        </Link>

        <nav style={{ display: "flex", gap: 32, alignItems: "center" }} className="desktop-nav">
          {links.map((l) => (
            <a key={l.href} href={l.href} style={{ color: "#a39d92", textDecoration: "none", fontSize: 14, letterSpacing: "0.05em", textTransform: "uppercase", fontWeight: 500 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#b79d3e")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#a39d92")}>
              {l.label}
            </a>
          ))}
          <a href="#contact" style={{ background: "#b79d3e", color: "#0c0b0a", padding: "10px 24px", fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}>
            Gratis intake
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} style={{ display: "none", background: "none", border: "none", color: "#f4efe6", cursor: "pointer", fontSize: 24 }} className="mobile-menu-btn">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div style={{ background: "#131211", padding: "16px 24px 24px" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ display: "block", color: "#a39d92", textDecoration: "none", padding: "12px 0", fontSize: 14, letterSpacing: "0.05em", textTransform: "uppercase", borderBottom: "1px solid #2a2720" }}>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            style={{ display: "block", background: "#b79d3e", color: "#0c0b0a", padding: "12px 24px", fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", textAlign: "center", marginTop: 16 }}>
            Gratis intake
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
