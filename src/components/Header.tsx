"use client";
import { useState, useRef } from "react";
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
        style={{ color: "#b8b3aa", textDecoration: "none", fontSize: 13, letterSpacing: "0.05em", textTransform: "uppercase", fontWeight: 500, whiteSpace: "nowrap" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#BC9C22")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#b8b3aa")}>
        {item.label}
      </Link>
    );
  }

  return (
    <div style={{ position: "relative" }} onMouseEnter={show} onMouseLeave={hide}>
      <button style={{ background: "none", border: "none", cursor: "pointer", color: open ? "#BC9C22" : "#b8b3aa", fontSize: 13, letterSpacing: "0.05em", textTransform: "uppercase", fontWeight: 500, display: "flex", alignItems: "center", gap: 5, padding: 0, whiteSpace: "nowrap" }}>
        {item.label}
        <span style={{ fontSize: 9, transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s", display: "inline-block" }}>▼</span>
      </button>
      {open && (
        <div style={{ position: "absolute", top: "calc(100% + 12px)", left: "50%", transform: "translateX(-50%)", background: "#131211", border: "1px solid #2a2720", borderTop: "2px solid #BC9C22", minWidth: 200, zIndex: 100, padding: "8px 0" }}>
          {item.children.map((c) => (
            <Link key={c.href} href={c.href}
              style={{ display: "block", color: "#b8b3aa", textDecoration: "none", fontSize: 13, padding: "10px 20px", whiteSpace: "nowrap", transition: "color 0.15s, background 0.15s" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#f4efe6"; e.currentTarget.style.background = "#1e1d1b"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#b8b3aa"; e.currentTarget.style.background = "transparent"; }}>
              {c.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header({ logo }: { logo: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50 }}>
      {/* Topbar */}
      <div style={{ background: "#BC9C22" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 36, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <a href="tel:06-14634488" style={{ color: "#0c0b0a", textDecoration: "none", fontSize: 12, letterSpacing: "0.03em", display: "flex", alignItems: "center", gap: 6, opacity: 0.75, transition: "opacity 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.75")}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.4a16 16 0 0 0 5.28 5.28l.95-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 15.87z"/></svg>
              06-14634488
            </a>
            <span style={{ color: "rgba(0,0,0,0.2)" }}>|</span>
            <a href="mailto:info@fit-partners.nl" style={{ color: "#0c0b0a", textDecoration: "none", fontSize: 12, letterSpacing: "0.03em", display: "flex", alignItems: "center", gap: 6, opacity: 0.75, transition: "opacity 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.75")}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg>
              INFO@FIT-PARTNERS.NL
            </a>
          </div>
          <div style={{ display: "flex", gap: 20, alignItems: "center" }} className="topbar-right">
            <a href="https://fitpartners.sportbitapp.nl/web/nl/" target="_blank" rel="noopener noreferrer"
              style={{ color: "#0c0b0a", textDecoration: "none", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 800, transition: "opacity 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.65")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
              Leden login
            </a>
            <span style={{ color: "rgba(0,0,0,0.2)" }}>|</span>
            <Link href="/contact"
              style={{ color: "#0c0b0a", textDecoration: "none", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, opacity: 0.75, transition: "opacity 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.75")}>
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div style={{ background: "#0c0b0a", borderBottom: "1px solid #2a2720" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        {logo}

        {/* Desktop nav */}
        <nav style={{ display: "flex", gap: 28, alignItems: "center" }} className="desktop-nav">
          {nav.map((item) => <DropdownItem key={item.label} item={item} />)}
          <button onClick={() => window.dispatchEvent(new Event("openIntakeModal"))}
            style={{ background: "#BC9C22", color: "#0c0b0a", padding: "9px 22px", fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", border: "none", cursor: "pointer", whiteSpace: "nowrap", transition: "opacity 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
            Gratis intake
          </button>
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
                    style={{ width: "100%", background: "none", border: "none", textAlign: "left", color: "#b8b3aa", padding: "13px 24px", fontSize: 13, letterSpacing: "0.05em", textTransform: "uppercase", cursor: "pointer", display: "flex", justifyContent: "space-between", borderBottom: "1px solid #2a2720" }}>
                    {item.label} <span>{mobileExpanded === item.label ? "−" : "+"}</span>
                  </button>
                  {mobileExpanded === item.label && item.children.map((c) => (
                    <Link key={c.href} href={c.href} onClick={() => setMobileOpen(false)}
                      style={{ display: "block", color: "#8c8780", textDecoration: "none", padding: "11px 36px", fontSize: 13, borderBottom: "1px solid #1a1917" }}>
                      {c.label}
                    </Link>
                  ))}
                </>
              ) : (
                <Link href={item.href!} onClick={() => setMobileOpen(false)}
                  style={{ display: "block", color: "#b8b3aa", textDecoration: "none", padding: "13px 24px", fontSize: 13, letterSpacing: "0.05em", textTransform: "uppercase", borderBottom: "1px solid #2a2720" }}>
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <div style={{ padding: "16px 24px 0" }}>
            <button onClick={() => { setMobileOpen(false); window.dispatchEvent(new Event("openIntakeModal")); }}
              style={{ display: "block", width: "100%", background: "#BC9C22", color: "#0c0b0a", padding: "12px 24px", fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", border: "none", cursor: "pointer", textAlign: "center" }}>
              Gratis intake
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .topbar-right { display: none !important; }
        }
      `}</style>
      </div>
    </header>
  );
}
