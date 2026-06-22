"use client";

export default function IntakeTriggerButton({ label = "Gratis intake aanvragen" }: { label?: string }) {
  return (
    <button
      onClick={() => window.dispatchEvent(new Event("openIntakeModal"))}
      style={{
        background: "#BC9C22", color: "#0c0b0a", border: "none",
        padding: "14px 32px", fontWeight: 700, fontSize: 13,
        letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
}
