"use client";
import Image from "next/image";

const hours = [
  { day: "Maandag",   time: "7:00–12:00 & 16:00–21:30" },
  { day: "Dinsdag",   time: "7:00–12:00 & 16:00–21:30" },
  { day: "Woensdag",  time: "7:00–12:00 & 16:00–21:30" },
  { day: "Donderdag", time: "7:00–12:00 & 16:00–21:30" },
  { day: "Vrijdag",   time: "7:00–12:00 & 17:00–20:30" },
  { day: "Zaterdag",  time: "7:30–12:00" },
  { day: "Zondag",    time: "8:30–12:00" },
];

const charities = ["Alpe d'HuZes", "KiKa", "Fieke"];

export default function Footer() {
  return (
    <footer style={{ background: "#0c0b0a", borderTop: "2px solid #b79d3e", padding: "64px 24px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 48, paddingBottom: 56 }}>

          {/* Kolom 1 – Contact */}
          <div>
            <Image src="/images/FIT-Partners-Logo-Witte-Letters-450X150.png" alt="FIT Partners" width={160} height={54} style={{ objectFit: "contain", marginBottom: 20 }} />
            <p style={{ color: "#a39d92", fontSize: 14, lineHeight: 2, margin: 0 }}>
              dr. Huub van Doorneweg 8d<br />
              5753 PM Deurne<br />
              <a href="tel:06-14634488" style={{ color: "#a39d92", textDecoration: "none" }}>T: 06-14634488</a><br />
              <a href="mailto:info@fit-partners.nl" style={{ color: "#b79d3e", textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
                E: info@fit-partners.nl
              </a>
            </p>
          </div>

          {/* Kolom 2 – Openingstijden */}
          <div>
            <h4 style={{ color: "#f4efe6", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 20px", fontWeight: 700 }}>Openingstijden</h4>
            <table style={{ borderCollapse: "collapse", width: "100%" }}>
              <tbody>
                {hours.map(({ day, time }) => (
                  <tr key={day}>
                    <td style={{ color: "#a39d92", fontSize: 13, paddingBottom: 7, paddingRight: 16, whiteSpace: "nowrap", verticalAlign: "top" }}>{day}:</td>
                    <td style={{ color: "#6f6a60", fontSize: 13, paddingBottom: 7, verticalAlign: "top" }}>{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Kolom 3 – Social + App */}
          <div>
            <h4 style={{ color: "#f4efe6", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 20px", fontWeight: 700 }}>Volg ons op</h4>
            {[
              { label: "Facebook", href: "https://facebook.com", icon: "f" },
              { label: "Instagram", href: "https://instagram.com", icon: "◎" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 10, color: "#a39d92", textDecoration: "none", fontSize: 14, marginBottom: 12, transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#b79d3e")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#a39d92")}>
                <span style={{ width: 28, height: 28, border: "1px solid #2a2720", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, flexShrink: 0 }}>{s.icon}</span>
                {s.label}
              </a>
            ))}

            <h4 style={{ color: "#f4efe6", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", margin: "28px 0 16px", fontWeight: 700 }}>FIT Partners App</h4>
            {[
              { label: "Google Play", href: "#" },
              { label: "App Store", href: "#" },
            ].map((app) => (
              <a key={app.label} href={app.href}
                style={{ display: "block", border: "1px solid #2a2720", color: "#a39d92", textDecoration: "none", fontSize: 13, padding: "10px 16px", marginBottom: 10, transition: "border-color 0.2s, color 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#b79d3e"; e.currentTarget.style.color = "#f4efe6"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#2a2720"; e.currentTarget.style.color = "#a39d92"; }}>
                ↓ {app.label}
              </a>
            ))}
          </div>

          {/* Kolom 4 – Steunt */}
          <div>
            <h4 style={{ color: "#f4efe6", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 20px", fontWeight: 700 }}>FIT Partners steunt</h4>
            {charities.map((c) => (
              <div key={c} style={{ borderTop: "1px solid #2a2720", padding: "14px 0", color: "#6f6a60", fontSize: 14 }}>{c}</div>
            ))}
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid #2a2720", padding: "20px 0", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <p style={{ color: "#6f6a60", fontSize: 13, margin: 0 }}>© 2026 FIT Partners</p>
          <a href="/privacy" style={{ color: "#6f6a60", fontSize: 13, textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#a39d92")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6f6a60")}>
            Privacyverklaring
          </a>
        </div>
      </div>
    </footer>
  );
}
