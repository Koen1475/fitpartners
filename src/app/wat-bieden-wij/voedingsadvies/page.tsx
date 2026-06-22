import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Voedingsadvies – FIT Partners",
  description: "Weet wat je eet. Persoonlijk voedingsadvies gericht op duurzame resultaten en een levensstijl die past bij jou.",
};

export default function Voedingsadvies() {
  return (
    <main>
      {/* Hero */}
      <section style={{ position: "relative", height: 400, display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/images/DataLab.jpg)", backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.22)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,11,10,1) 0%, rgba(12,11,10,0) 55%)" }} />
        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "0 24px 64px", width: "100%" }}>
          <p style={{ color: "#ffd53b", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 12px" }}>Wat bieden wij</p>
          <h1 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(40px, 6vw, 80px)", textTransform: "uppercase", color: "#f4efe6", margin: "0 0 16px", lineHeight: 1 }}>
            Voedingsadvies
          </h1>
          <p style={{ color: "#ffd53b", fontSize: 20, fontStyle: "italic", margin: 0 }}>
            &lsquo;Weet wat je eet!&rsquo;
          </p>
        </div>
      </section>

      {/* Intro quote */}
      <section style={{ background: "#131211", padding: "72px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <Reveal>
            <div style={{ borderLeft: "3px solid #ffd53b", paddingLeft: 28, marginBottom: 48 }}>
              <p style={{ fontSize: 13, color: "#ffd53b", letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 12px", fontWeight: 700 }}>Ons motto</p>
              <p style={{ fontSize: 21, color: "#cfc9bd", lineHeight: 1.7, margin: 0, fontWeight: 300 }}>
                Naast ons motto: &lsquo;weet wat je beweegt&rsquo;, maken we ons hard voor &lsquo;weet wat je eet&rsquo;.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <p style={{ fontSize: 16, color: "#b8b3aa", lineHeight: 1.9, margin: "0 0 24px" }}>
              En let op, daarmee doelen we vooral niet op een strenge of hele gekke dieetcultuur, zoals je deze wellicht wel kent.
              Wanneer je het hebt over voeding, schrikt het vaak af want: je mag dit niet en dat niet. De focus wordt vaak gelegd op
              wat NIET. Het zijn vaak kort vol te houden trajecten met korte termijn resultaten die je niet langdurig in je leven
              gepast krijgt.
            </p>
            <p style={{ fontSize: 16, color: "#b8b3aa", lineHeight: 1.9, margin: 0 }}>
              Wij willen ons maar al te graag focussen op wat WEL. Het moet goed vol te houden zijn en passen in jouw leven,
              daarmee creëren we een levensstijl die past bij jou. Dat hoeft niet á la minute, daar groei je in. Ieder individu
              is anders, beweegt anders, heeft andere voedingsstoffen nodig die passen in zijn of haar levensstijl.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Two pillars */}
      <section style={{ background: "#0c0b0a", padding: "72px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 2 }}>

            <Reveal delay={1}>
              <div style={{ background: "#131211", padding: "44px 40px", borderTop: "2px solid #ffd53b", height: "100%" }}>
                <div style={{ fontFamily: "var(--font-anton)", fontSize: 48, color: "#ffd53b", opacity: 0.2, lineHeight: 1, marginBottom: 20 }}>01</div>
                <h2 style={{ fontFamily: "var(--font-anton)", fontSize: 22, textTransform: "uppercase", color: "#f4efe6", margin: "0 0 20px" }}>
                  Persoonlijk plan
                </h2>
                <p style={{ color: "#b8b3aa", fontSize: 15, lineHeight: 1.9, margin: 0 }}>
                  Met intensieve begeleiding gaan we aan de slag. Dat houdt in dat we starten met een intakegesprek waarin jouw
                  eigen waardes worden bepaald. We bespreken jouw doel en verwachtingen voor de komende maanden en maken samen
                  een persoonlijk en gericht plan. Hoe is jouw leefstijl nu, waar kunnen we al in meedenken, en dat allemaal
                  met het oog op een duurzaam resultaat.
                </p>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div style={{ background: "#131211", padding: "44px 40px", borderTop: "2px solid #ffd53b", height: "100%" }}>
                <div style={{ fontFamily: "var(--font-anton)", fontSize: 48, color: "#ffd53b", opacity: 0.2, lineHeight: 1, marginBottom: 20 }}>02</div>
                <h2 style={{ fontFamily: "var(--font-anton)", fontSize: 22, textTransform: "uppercase", color: "#f4efe6", margin: "0 0 20px" }}>
                  Alles onder één dak
                </h2>
                <p style={{ color: "#b8b3aa", fontSize: 15, lineHeight: 1.9, margin: 0 }}>
                  We maken tussentijdse afspraken en werken met een gebruiksvriendelijke voedingsapp waarin we jouw waarden goed
                  kunnen bijhouden. Je wordt jezelf bewust van hetgeen wat je eet. Het voordeel is dat we dit kunnen aanbieden
                  onder één dak. Sport jij bij ons? Dan hebben we ook het beste zicht op jouw energieverbruik, zo blijven we
                  goed op de hoogte en kunnen we alles optimaal op elkaar afstemmen.
                </p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#131211", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <Reveal>
            <h2 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(28px, 4vw, 48px)", textTransform: "uppercase", color: "#f4efe6", margin: "0 0 20px", lineHeight: 1 }}>
              Direct een afspraak maken?
            </h2>
            <p style={{ color: "#b8b3aa", fontSize: 16, lineHeight: 1.8, marginBottom: 40 }}>
              Bel ons op{" "}
              <a href="tel:06-14634488" style={{ color: "#ffd53b", textDecoration: "none", fontWeight: 600 }}>06-14634488</a>
              {" "}of stuur een bericht via onderstaande knop.
            </p>
            <a href="mailto:info@fit-partners.nl?subject=Aanvraag intake Voedingsadvies"
              style={{ display: "inline-block", background: "#ffd53b", color: "#0c0b0a", padding: "16px 40px", fontWeight: 700, fontSize: 14, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}>
              Aanvraag intake
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
