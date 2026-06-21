import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pagina niet gevonden",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main style={{ background: "#0c0b0a", minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 24px" }}>
      <div style={{ textAlign: "center", maxWidth: 520 }}>
        <p style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(96px, 18vw, 180px)", color: "#131211", lineHeight: 1, margin: "0 0 -16px", userSelect: "none" }}>
          404
        </p>
        <div style={{ width: 48, height: 2, background: "#b79d3e", margin: "0 auto 32px" }} />
        <h1 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(28px, 4vw, 48px)", textTransform: "uppercase", color: "#f4efe6", margin: "0 0 16px", lineHeight: 1 }}>
          Pagina niet gevonden
        </h1>
        <p style={{ color: "#b8b3aa", fontSize: 16, lineHeight: 1.8, margin: "0 0 40px" }}>
          De pagina die je zoekt bestaat niet of is verplaatst. Ga terug naar de homepage of neem contact met ons op.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" style={{ background: "#b79d3e", color: "#0c0b0a", padding: "14px 32px", fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}>
            Terug naar home
          </Link>
          <a href="tel:06-14634488" style={{ background: "transparent", color: "#b8b3aa", padding: "14px 32px", fontWeight: 600, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", border: "1px solid #2a2720" }}>
            Bel ons
          </a>
        </div>
      </div>
    </main>
  );
}
