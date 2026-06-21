"use client";
import Script from "next/script";
import { useEffect } from "react";

export default function RoosterCrossbox() {
  useEffect(() => {
    const tryInit = () => {
      if (typeof (window as any).embed_rooster !== "undefined") {
        (window as any).embed_rooster.init("https://fitpartners.sportbitapp.nl/", 1);
      } else {
        setTimeout(tryInit, 100);
      }
    };
    tryInit();
  }, []);

  return (
    <main>
      {/* Hero */}
      <section style={{ position: "relative", height: 320, display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/images/DataLab.jpg)", backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.2)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,11,10,1) 0%, rgba(12,11,10,0) 55%)" }} />
        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "0 24px 56px", width: "100%" }}>
          <p style={{ color: "#b79d3e", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 12px" }}>Rooster</p>
          <h1 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(36px, 5vw, 72px)", textTransform: "uppercase", color: "#f4efe6", margin: 0, lineHeight: 1 }}>
            CrossBox
          </h1>
        </div>
      </section>

      {/* Schedule widget */}
      <section style={{ background: "#0c0b0a", padding: "56px 24px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <link rel="stylesheet" href="https://fitpartners.sportbitapp.nl/cbm/css/embed/rooster/rooster.css" />

          <div id="sportbit-rooster">
            <div className="embed-rooster Donker" />
          </div>

          <Script
            src="https://fitpartners.sportbitapp.nl/cbm/embed/rooster/cdn/"
            strategy="afterInteractive"
          />
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#131211", padding: "64px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 480, margin: "0 auto" }}>
          <p style={{ color: "#a39d92", fontSize: 15, lineHeight: 1.8, marginBottom: 28 }}>
            Vragen over het CrossBox rooster of inschrijven voor een les?
          </p>
          <a href="tel:06-14634488"
            style={{ display: "inline-block", background: "#b79d3e", color: "#0c0b0a", padding: "14px 36px", fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}>
            Bel 06-14634488
          </a>
        </div>
      </section>

      <style>{`
        /* ── Wrapper ── */
        #sportbit-rooster .embed-rooster {
          background: #0c0b0a !important;
          border: 1px solid #2a2720 !important;
          border-radius: 0 !important;
          font-family: 'Montserrat', sans-serif !important;
          color: #f4efe6 !important;
          overflow: hidden;
        }

        /* ── Top bar ── */
        #sportbit-rooster .embed-rooster .top {
          background: #131211 !important;
          border-bottom: 1px solid #2a2720 !important;
          padding: 14px 20px !important;
        }
        #sportbit-rooster .embed-rooster .top .today a,
        #sportbit-rooster .embed-rooster .top .week a {
          background: #b79d3e !important;
          color: #0c0b0a !important;
          border: none !important;
          border-radius: 0 !important;
          font-weight: 700 !important;
          font-size: 11px !important;
          letter-spacing: 0.06em !important;
          text-transform: uppercase !important;
          padding: 7px 14px !important;
        }
        #sportbit-rooster .embed-rooster .top .week a.inactive {
          background: #2a2720 !important;
          color: #4a4540 !important;
          cursor: default !important;
        }
        #sportbit-rooster .embed-rooster .top .period,
        #sportbit-rooster .embed-rooster .top #sportbit-periode {
          background: #1e1d1b !important;
          border: 1px solid #2a2720 !important;
          border-radius: 0 !important;
          padding: 6px 20px !important;
        }
        #sportbit-rooster .embed-rooster .top .period span {
          color: #f4efe6 !important;
          font-size: 13px !important;
          font-weight: 600 !important;
          letter-spacing: 0.06em !important;
          text-transform: uppercase !important;
        }
        #sportbit-rooster .embed-rooster .top .week span {
          color: #f4efe6 !important;
          font-size: 13px !important;
          font-weight: 600 !important;
        }

        /* ── Day headers ── */
        #sportbit-rooster .embed-rooster .days {
          background: #131211 !important;
          border-bottom: 2px solid #b79d3e !important;
        }
        #sportbit-rooster .embed-rooster .days > div {
          border-right: 1px solid #2a2720 !important;
        }
        #sportbit-rooster .embed-rooster .days .day-name {
          color: #f4efe6 !important;
          font-weight: 700 !important;
          font-size: 11px !important;
          text-transform: uppercase !important;
          letter-spacing: 0.08em !important;
        }
        #sportbit-rooster .embed-rooster .days .day-month {
          color: #a39d92 !important;
          font-size: 11px !important;
        }

        /* ── Calendar grid ── */
        #sportbit-rooster .embed-rooster .calendar {
          background: #0c0b0a !important;
        }
        #sportbit-rooster .embed-rooster .calendar .items-day {
          border-right: 1px solid #1e1d1b !important;
        }

        /* ── Separators ── */
        #sportbit-rooster .embed-rooster .calendar .sepparator {
          background: #0c0b0a !important;
          color: #b79d3e !important;
          font-size: 10px !important;
          font-weight: 700 !important;
          letter-spacing: 0.12em !important;
          text-transform: uppercase !important;
          border-right: 1px solid #2a2720 !important;
          border-top: 1px solid #2a2720 !important;
        }

        /* ── Event items ── */
        #sportbit-rooster .embed-rooster .calendar .items-day div.evtitem {
          background: #131211 !important;
          border: none !important;
          border-left: 4px solid #b79d3e !important;
          border-radius: 0 !important;
          margin: 3px 6px !important;
          padding: 7px 10px !important;
          cursor: pointer !important;
          transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease, border-left-color 0.2s ease !important;
        }
        #sportbit-rooster .embed-rooster .calendar .items-day div.evtitem:hover {
          background: #1a1815 !important;
          transform: translateX(3px) !important;
          box-shadow: -3px 0 12px rgba(183, 157, 62, 0.18) !important;
          border-left-color: #d4b84a !important;
        }
        #sportbit-rooster .embed-rooster .calendar .items-day div.evtitem:hover .time {
          color: #d4b84a !important;
        }
        #sportbit-rooster .embed-rooster .calendar .items-day div.evtitem:hover .trainer {
          color: #a39d92 !important;
        }
        #sportbit-rooster .embed-rooster .calendar .items-day div.evtitem.gepasseerd {
          background: #131211 !important;
          border-left-color: #b79d3e !important;
          opacity: 1 !important;
        }
        #sportbit-rooster .embed-rooster .calendar .items-day div.evtitem .title {
          color: #f4efe6 !important;
          font-size: 11px !important;
          font-weight: 700 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.04em !important;
          display: block !important;
        }
        #sportbit-rooster .embed-rooster .calendar .items-day div.evtitem .time {
          color: #b79d3e !important;
          font-size: 11px !important;
          font-weight: 600 !important;
          display: block !important;
          margin-top: 2px !important;
        }
        #sportbit-rooster .embed-rooster .calendar .items-day div.evtitem .trainer {
          color: #6f6a60 !important;
          font-size: 10px !important;
          display: block !important;
          margin-top: 1px !important;
        }

        /* ── Loading ── */
        #sportbit-rooster .embed-rooster .loading {
          background: #0c0b0a !important;
        }
        #sportbit-rooster .embed-rooster .loading span {
          color: #a39d92 !important;
          font-size: 13px !important;
        }
        #sportbit-rooster .embed-rooster .lds-dual-ring:after {
          border-color: #b79d3e transparent #b79d3e transparent !important;
        }

        /* ── Popup ── */
        #sportbit-rooster .embed-rooster .popup,
        #sportbit-rooster .embed-rooster .popup-overlay {
          background: #131211 !important;
          border: 1px solid #2a2720 !important;
          border-radius: 0 !important;
          color: #f4efe6 !important;
        }
        #sportbit-rooster .embed-rooster .popup .popup-close {
          color: #b79d3e !important;
        }
      `}</style>
    </main>
  );
}
