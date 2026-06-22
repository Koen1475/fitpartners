"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { X, Send, CheckCircle } from "lucide-react";

const inputStyle = {
  width: "100%",
  background: "#1a1815",
  border: "1px solid #2a2720",
  color: "#f4efe6",
  fontSize: 14,
  padding: "13px 16px",
  outline: "none",
  fontFamily: "inherit",
  transition: "border-color 0.2s",
  boxSizing: "border-box" as const,
};

export default function IntakeModal() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ naam: "", telefoon: "", email: "", bericht: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const firstInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("openIntakeModal", handler);
    return () => window.removeEventListener("openIntakeModal", handler);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setTimeout(() => firstInput.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => { setOpen(false); setSent(false); setForm({ naam: "", telefoon: "", email: "", bericht: "" }); };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:info@fit-partners.nl?subject=Aanvraag gratis intake – ${form.naam}&body=Naam: ${form.naam}%0ATelefoon: ${form.telefoon}%0AEmail: ${form.email}%0A%0ABericht:%0A${form.bericht}`;
    setSent(true);
  };

  if (!open) return null;

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
      style={{
        position: "fixed", inset: 0, zIndex: 999,
        background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 24,
        animation: "fadeIn 0.2s ease",
      }}
    >
      <div style={{
        background: "#0c0b0a",
        maxWidth: 900, width: "100%",
        maxHeight: "90vh",
        display: "flex",
        overflow: "hidden",
        border: "1px solid #2a2720",
        position: "relative",
        animation: "slideUp 0.25s ease",
      }}>
        {/* Close */}
        <button onClick={close} style={{
          position: "absolute", top: 16, right: 16, zIndex: 10,
          background: "rgba(12,11,10,0.8)", border: "1px solid #2a2720",
          color: "#b8b3aa", cursor: "pointer", width: 36, height: 36,
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "color 0.2s, border-color 0.2s",
        }}
          onMouseEnter={e => { e.currentTarget.style.color = "#f4efe6"; e.currentTarget.style.borderColor = "#ffd53b"; }}
          onMouseLeave={e => { e.currentTarget.style.color = "#b8b3aa"; e.currentTarget.style.borderColor = "#2a2720"; }}
        >
          <X size={16} />
        </button>

        {/* Left: photo */}
        <div style={{ width: "42%", flexShrink: 0, position: "relative", minHeight: 480 }} className="modal-photo">
          <Image src="/images/Niek.jpg" alt="FIT Partners" fill
            style={{ objectFit: "cover", objectPosition: "center 20%", filter: "brightness(0.6) grayscale(20%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent 60%, #0c0b0a)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,11,10,0.7) 0%, transparent 50%)" }} />
          <div style={{ position: "absolute", bottom: 36, left: 28, right: 28 }}>
            <p style={{ color: "#ffd53b", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", margin: "0 0 8px", fontWeight: 700 }}>Gratis en vrijblijvend</p>
            <p style={{ color: "#f4efe6", fontSize: 20, fontFamily: "var(--font-anton)", textTransform: "uppercase", margin: "0 0 6px", lineHeight: 1.1 }}>
              Kom kennismaken
            </p>
            <p style={{ color: "#cfc9bd", fontSize: 13, margin: 0, lineHeight: 1.6 }}>
              Wij nemen zo snel mogelijk contact met je op.
            </p>
          </div>
        </div>

        {/* Right: form */}
        <div style={{ flex: 1, padding: "48px 40px 40px", overflowY: "auto", display: "flex", flexDirection: "column" }}>
          {sent ? (
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 20 }}>
              <CheckCircle size={48} color="#ffd53b" strokeWidth={1.5} />
              <h2 style={{ fontFamily: "var(--font-anton)", fontSize: 28, textTransform: "uppercase", color: "#f4efe6", margin: 0 }}>
                Aanvraag verstuurd!
              </h2>
              <p style={{ color: "#b8b3aa", fontSize: 15, lineHeight: 1.7, margin: 0, maxWidth: 300 }}>
                Je e-mailclient opent zich om de aanvraag te versturen. We nemen snel contact op.
              </p>
              <button onClick={close} style={{ marginTop: 8, background: "#ffd53b", color: "#0c0b0a", border: "none", padding: "13px 32px", fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer" }}>
                Sluiten
              </button>
            </div>
          ) : (
            <>
              <div style={{ marginBottom: 36 }}>
                <p style={{ color: "#ffd53b", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", margin: "0 0 10px", fontWeight: 700 }}>FIT Partners</p>
                <h2 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(28px, 4vw, 40px)", textTransform: "uppercase", color: "#f4efe6", margin: 0, lineHeight: 1 }}>
                  Aanvraag intake
                </h2>
                <div style={{ width: 36, height: 2, background: "#ffd53b", marginTop: 14 }} />
              </div>

              <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                <input
                  ref={firstInput}
                  required
                  placeholder="Naam *"
                  value={form.naam}
                  onChange={e => setForm(f => ({ ...f, naam: e.target.value }))}
                  onFocus={() => setFocused("naam")}
                  onBlur={() => setFocused(null)}
                  style={{ ...inputStyle, borderColor: focused === "naam" ? "#ffd53b" : "#2a2720" }}
                />
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <input
                    required
                    type="tel"
                    placeholder="Telefoon *"
                    value={form.telefoon}
                    onChange={e => setForm(f => ({ ...f, telefoon: e.target.value }))}
                    onFocus={() => setFocused("tel")}
                    onBlur={() => setFocused(null)}
                    style={{ ...inputStyle, borderColor: focused === "tel" ? "#ffd53b" : "#2a2720" }}
                  />
                  <input
                    required
                    type="email"
                    placeholder="E-mailadres *"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    style={{ ...inputStyle, borderColor: focused === "email" ? "#ffd53b" : "#2a2720" }}
                  />
                </div>
                <textarea
                  placeholder="Vertel ons over jouw doel of vraag..."
                  rows={5}
                  value={form.bericht}
                  onChange={e => setForm(f => ({ ...f, bericht: e.target.value }))}
                  onFocus={() => setFocused("msg")}
                  onBlur={() => setFocused(null)}
                  style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6, borderColor: focused === "msg" ? "#ffd53b" : "#2a2720" }}
                />

                <div style={{ marginTop: 8, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
                  <p style={{ color: "#6f6a60", fontSize: 12, margin: 0, lineHeight: 1.5 }}>
                    Of bel direct: <a href="tel:06-14634488" style={{ color: "#ffd53b", textDecoration: "none" }}>06-14634488</a>
                  </p>
                  <button type="submit" style={{
                    background: "#ffd53b", color: "#0c0b0a", border: "none",
                    padding: "14px 28px", fontWeight: 700, fontSize: 13,
                    letterSpacing: "0.08em", textTransform: "uppercase",
                    cursor: "pointer", display: "flex", alignItems: "center", gap: 10,
                    flexShrink: 0, transition: "opacity 0.2s",
                  }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                    onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                  >
                    <Send size={14} />
                    Versturen
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px) } to { opacity: 1; transform: translateY(0) } }
        input::placeholder, textarea::placeholder { color: #6f6a60; }
        @media (max-width: 640px) {
          .modal-photo { display: none !important; }
        }
      `}</style>
    </div>
  );
}
