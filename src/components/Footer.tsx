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

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073C24 5.404 18.628 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.026 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
    </svg>
  );
}

const social = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/fitpartners_/",
    Icon: InstagramIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/FITPartners/",
    Icon: FacebookIcon,
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0c0b0a", borderTop: "2px solid #b79d3e", padding: "64px 24px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 48, paddingBottom: 56 }}>

          {/* Kolom 1 – Contact */}
          <div>
            <Image src="/images/FIT-Partners-Logo-Witte-Letters-450X150.png" alt="FIT Partners" width={160} height={54} style={{ objectFit: "contain", marginBottom: 20 }} />
            <p style={{ color: "#b8b3aa", fontSize: 14, lineHeight: 2, margin: 0 }}>
              dr. Huub van Doorneweg 8d<br />
              5753 PM Deurne<br />
              <a href="tel:06-14634488" style={{ color: "#b8b3aa", textDecoration: "none" }}>T: 06-14634488</a><br />
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
                    <td style={{ color: "#b8b3aa", fontSize: 13, paddingBottom: 7, paddingRight: 16, whiteSpace: "nowrap", verticalAlign: "top" }}>{day}:</td>
                    <td style={{ color: "#6f6a60", fontSize: 13, paddingBottom: 7, verticalAlign: "top" }}>{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Kolom 3 – Social + App */}
          <div>
            <h4 style={{ color: "#f4efe6", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 20px", fontWeight: 700 }}>Volg ons op</h4>
            {social.map(({ label, href, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 12, color: "#b8b3aa", textDecoration: "none", fontSize: 14, marginBottom: 12, transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#b79d3e")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#b8b3aa")}>
                <span style={{
                  width: 32, height: 32, border: "1px solid #2a2720",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, transition: "border-color 0.2s",
                }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#b79d3e")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#2a2720")}
                >
                  <Icon />
                </span>
                {label}
              </a>
            ))}

            <h4 style={{ color: "#f4efe6", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", margin: "28px 0 16px", fontWeight: 700 }}>FIT Partners App</h4>
            {[
              { label: "Google Play", href: "#" },
              { label: "App Store", href: "#" },
            ].map((app) => (
              <a key={app.label} href={app.href}
                style={{ display: "block", border: "1px solid #2a2720", color: "#b8b3aa", textDecoration: "none", fontSize: 13, padding: "10px 16px", marginBottom: 10, transition: "border-color 0.2s, color 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#b79d3e"; e.currentTarget.style.color = "#f4efe6"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#2a2720"; e.currentTarget.style.color = "#b8b3aa"; }}>
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
            onMouseEnter={(e) => (e.currentTarget.style.color = "#b8b3aa")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6f6a60")}>
            Privacyverklaring
          </a>
        </div>
      </div>
    </footer>
  );
}
