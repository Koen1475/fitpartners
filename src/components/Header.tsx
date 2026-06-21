"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

type NavChild = { label: string; href: string };
type NavItem = { label: string; href?: string; children?: NavChild[] };

const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Wat bieden wij",
    children: [
      { label: "Functional Training", href: "/wat-bieden-wij/functional-training" },
      { label: "Crossbox", href: "/wat-bieden-wij/crossbox" },
      { label: "Voedingsadvies", href: "/wat-bieden-wij/voedingsadvies" },
      { label: "Sportonderzoeken", href: "/wat-bieden-wij/sportonderzoeken" },
    ],
  },
  {
    label: "Rooster",
    children: [
      { label: "Functional Training", href: "/rooster/functional-training" },
      { label: "Crossbox", href: "/rooster/crossbox" },
    ],
  },
  { label: "Partners", href: "/partners" },
  {
    label: "Over ons",
    children: [
      { label: "Wie zijn we", href: "/over-ons/wie-zijn-we" },
      { label: "Team", href: "/over-ons/team" },
      { label: "Missie & Visie", href: "/over-ons/missie-visie" },
    ],
  },
];

function DropdownItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = () => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(true);
  };
  const hide = () => {
    timer.current = setTimeout(() => setOpen(false), 120);
  };

  if (!item.children) {
    return (
      <Link href={item.href!}
        style={{ color: "#a39d92", textDecoration: "none", fontSize: 13, letterSpacing: "0.05em", textTransform: "uppercase", fontWeight: 500, whiteSpace: "nowrap" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#b79d3e")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#a39d92")}>
        {item.label}
      </Link>
    );
  }

  return (
    <div style={{ position: "relative" }} onMouseEnter={show} onMouseLeave={hide}>
      <button style={{ background: "none", border: "none", cursor: "pointer", color: open ? "#b79d3e" : "#a39d92", fontSize: 13, letterSpacing: "0.05em", textTransform: "uppercase", fontWeight: 500, display: "flex", alignItems: "center", gap: 5, padding: 0, whiteSpace: "nowrap" }}>
        {item.label}
        <span style={{ fontSize: 9, transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s", display: "inline-block" }}>▼</span>
      </button>
      {open && (
        <div style={{ position: "absolute", top: "calc(100% + 12px)", left: "50%", transform: "translateX(-50%)", background: "#131211", border: "1px solid #2a2720", borderTop: "2px solid #b79d3e", minWidth: 200, zIndex: 100, padding: "8px 0" }}>
          {item.children.map((c) => (
            <Link key={c.href} href={c.href}
              style={{ display: "block", color: "#a39d92", textDecoration: "none", fontSize: 13, padding: "10px 20px", whiteSpace: "nowrap", transition: "color 0.15s, background 0.15s" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#f4efe6"; e.currentTarget.style.background = "#1e1d1b"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#a39d92"; e.currentTarget.style.background = "transparent"; }}>
              {c.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <header style={{ background: "#0c0b0a", borderBottom: "1px solid #2a2720", position: "sticky", top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        <Link href="/" style={{ flexShrink: 0 }}>
          <Image src="/images/FIT-Partners-Logo-Witte-Letters-450X150.png" alt="FIT Partners" width={160} height={54} style={{ objectFit: "contain" }} priority />
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", gap: 28, alignItems: "center" }} className="desktop-nav">
          {nav.map((item) => <DropdownItem key={item.label} item={item} />)}
          <a href="#contact" style={{ background: "#b79d3e", color: "#0c0b0a", padding: "9px 22px", fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", whiteSpace: "nowrap", transition: "opacity 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
            Gratis intake
          </a>
        </nav>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="mobile-menu-btn"
          style={{ display: "none", background: "none", border: "none", color: "#f4efe6", cursor: "pointer", fontSize: 22 }}>
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div style={{ background: "#131211", padding: "8px 0 20px" }}>
          {nav.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    style={{ width: "100%", background: "none", border: "none", textAlign: "left", color: "#a39d92", padding: "13px 24px", fontSize: 13, letterSpacing: "0.05em", textTransform: "uppercase", cursor: "pointer", display: "flex", justifyContent: "space-between", borderBottom: "1px solid #2a2720" }}>
                    {item.label} <span>{mobileExpanded === item.label ? "−" : "+"}</span>
                  </button>
                  {mobileExpanded === item.label && item.children.map((c) => (
                    <Link key={c.href} href={c.href} onClick={() => setMobileOpen(false)}
                      style={{ display: "block", color: "#6f6a60", textDecoration: "none", padding: "11px 36px", fontSize: 13, borderBottom: "1px solid #1a1917" }}>
                      {c.label}
                    </Link>
                  ))}
                </>
              ) : (
                <Link href={item.href!} onClick={() => setMobileOpen(false)}
                  style={{ display: "block", color: "#a39d92", textDecoration: "none", padding: "13px 24px", fontSize: 13, letterSpacing: "0.05em", textTransform: "uppercase", borderBottom: "1px solid #2a2720" }}>
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <div style={{ padding: "16px 24px 0" }}>
            <a href="#contact" onClick={() => setMobileOpen(false)}
              style={{ display: "block", background: "#b79d3e", color: "#0c0b0a", padding: "12px 24px", fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", textAlign: "center" }}>
              Gratis intake
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
