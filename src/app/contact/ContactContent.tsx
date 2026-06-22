"use client";
import { useState } from "react";
import Reveal from "@/components/Reveal";

const info = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: "Adres",
    value: "dr. Huub van Doorneweg 8d\n5753 PM Deurne",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.4a16 16 0 0 0 5.28 5.28l.95-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 15.87z"/>
      </svg>
    ),
    label: "Telefoon",
    value: "06-14634488",
    href: "tel:06-14634488",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/>
      </svg>
    ),
    label: "E-mail",
    value: "info@fit-partners.nl",
    href: "mailto:info@fit-partners.nl",
  },
];

export default function ContactContent() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ naam: "", email: "", onderwerp: "", bericht: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.onderwerp || "Contactformulier");
    const body = encodeURIComponent(
      `Naam: ${form.naam}\nE-mail: ${form.email}\n\n${form.bericht}`
    );
    window.location.href = `mailto:info@fit-partners.nl?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#0c0b0a",
    border: "1px solid #2a2720",
    color: "#f4efe6",
    padding: "14px 16px",
    fontSize: 14,
    outline: "none",
    fontFamily: "inherit",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

  return (
    <main>
      {/* Hero */}
      <section style={{ position: "relative", height: 320, display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/images/Hero.jpg)", backgroundSize: "cover", backgroundPosition: "center 25%", filter: "brightness(0.18)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,11,10,1) 0%, rgba(12,11,10,0) 60%)" }} />
        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "0 24px 56px", width: "100%" }}>
          <p style={{ color: "#b79d3e", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 12px" }}>FIT Partners</p>
          <h1 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(40px, 6vw, 80px)", textTransform: "uppercase", color: "#f4efe6", margin: 0, lineHeight: 1 }}>
            Contact
          </h1>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: "#0c0b0a", padding: "72px 24px 96px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, alignItems: "start" }} className="contact-grid">

          {/* Left – info */}
          <Reveal>
            <div>
              <p style={{ color: "#b8b3aa", fontSize: 16, lineHeight: 1.8, margin: "0 0 48px" }}>
                Heb je een vraag of opmerking? We helpen je graag. Stuur een bericht via het formulier of neem direct contact op.
              </p>

              {info.map((item) => (
                <div key={item.label} style={{ display: "flex", gap: 20, marginBottom: 32 }}>
                  <div style={{ width: 44, height: 44, border: "1px solid #2a2720", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#b79d3e" }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ color: "#6f6a60", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700, margin: "0 0 4px" }}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} style={{ color: "#f4efe6", fontSize: 15, textDecoration: "none", lineHeight: 1.6, display: "block", transition: "color 0.2s" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#b79d3e")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#f4efe6")}>
                        {item.value}
                      </a>
                    ) : (
                      <p style={{ color: "#f4efe6", fontSize: 15, margin: 0, lineHeight: 1.6, whiteSpace: "pre-line" }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div style={{ marginTop: 48, paddingTop: 40, borderTop: "1px solid #2a2720" }}>
                <p style={{ color: "#6f6a60", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700, margin: "0 0 16px" }}>Direct inloggen</p>
                <a href="https://fitpartners.sportbitapp.nl/web/nl/" target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#b79d3e", fontSize: 14, fontWeight: 700, textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase", transition: "opacity 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
                  Leden login →
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right – form */}
          <Reveal delay={1}>
            <div style={{ background: "#131211", border: "1px solid #2a2720", padding: "48px 44px" }} className="contact-form-box">
              {sent ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ width: 56, height: 56, border: "2px solid #b79d3e", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", color: "#b79d3e" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h2 style={{ fontFamily: "var(--font-anton)", fontSize: 28, textTransform: "uppercase", color: "#f4efe6", margin: "0 0 12px" }}>Verstuurd</h2>
                  <p style={{ color: "#b8b3aa", fontSize: 15, lineHeight: 1.7 }}>Je e-mailclient is geopend. We nemen zo snel mogelijk contact met je op.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <h2 style={{ fontFamily: "var(--font-anton)", fontSize: 22, textTransform: "uppercase", color: "#f4efe6", margin: "0 0 8px", lineHeight: 1 }}>Stuur een bericht</h2>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-2col">
                    <div>
                      <label style={{ display: "block", color: "#6f6a60", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Naam *</label>
                      <input required type="text" value={form.naam} onChange={(e) => setForm({ ...form, naam: e.target.value })}
                        style={inputStyle}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "#b79d3e")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "#2a2720")} />
                    </div>
                    <div>
                      <label style={{ display: "block", color: "#6f6a60", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>E-mailadres *</label>
                      <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        style={inputStyle}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "#b79d3e")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "#2a2720")} />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: "block", color: "#6f6a60", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Onderwerp *</label>
                    <input required type="text" value={form.onderwerp} onChange={(e) => setForm({ ...form, onderwerp: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#b79d3e")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#2a2720")} />
                  </div>
                  <div>
                    <label style={{ display: "block", color: "#6f6a60", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Bericht *</label>
                    <textarea required rows={6} value={form.bericht} onChange={(e) => setForm({ ...form, bericht: e.target.value })}
                      style={{ ...inputStyle, resize: "vertical" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#b79d3e")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#2a2720")} />
                  </div>
                  <button type="submit"
                    style={{ background: "#b79d3e", color: "#0c0b0a", padding: "15px 36px", fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", border: "none", cursor: "pointer", alignSelf: "flex-start", transition: "opacity 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
                    Versturen
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .contact-form-box { padding: 32px 24px !important; }
          .form-2col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
