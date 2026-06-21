"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import IntakeTriggerButton from "@/components/IntakeTriggerButton";

const faqs = [
  {
    cat: "Algemeen",
    items: [
      {
        q: "Wat is FIT Partners precies?",
        a: "FIT Partners is een personal training studio in Deurne. We bieden functional training op maat, CrossBox groepslessen, wetenschappelijke sportonderzoeken en voedingsadvies. Alles onder één dak, met persoonlijke aandacht.",
      },
      {
        q: "Hoe werkt een gratis intake bij FIT Partners?",
        a: "Tijdens de gratis intake leren we jou kennen. We bespreken jouw doelen, je huidige conditie en hoe je leven eruitziet. Daarna laten we je het centrum zien en doen we een eerste, eenvoudige kennismakingstraining. Helemaal vrijblijvend.",
      },
      {
        q: "Moet ik al ervaring hebben met sporten om bij FIT Partners te starten?",
        a: "Nee. We begeleiden mensen op elk niveau: van compleet beginner tot gevorderde sporter die een nieuw plateau wil doorbreken. Het trainingsplan wordt altijd afgestemd op jouw startpunt.",
      },
      {
        q: "Waar is FIT Partners gevestigd?",
        a: "We zijn gevestigd aan de dr. Huub van Doorneweg 8d in Deurne (5753 PM). Goed bereikbaar met de auto, voldoende parkeergelegenheid aanwezig.",
      },
    ],
  },
  {
    cat: "Functional Training",
    items: [
      {
        q: "Wat houdt functional training in?",
        a: "Functional training richt zich op bewegingen die aansluiten bij het dagelijkse leven en sportprestaties. Denk aan squat-patronen, duw- en trekbewegingen en rotaties. Het versterkt je lichaam als geheel, niet spiertje voor spiertje.",
      },
      {
        q: "Hoe vaak per week moet ik trainen voor resultaat?",
        a: "Voor de meeste mensen geldt dat 2 tot 3 keer per week trainen al aantoonbaar resultaat geeft, mits de trainingen goed zijn afgestemd en de voeding klopt. We bepalen samen wat realistisch is voor jouw schema.",
      },
      {
        q: "Hoe verschilt personal training van zelf sporten?",
        a: "Bij personal training wordt elk schema op maat gemaakt op basis van jouw lichaam en doelen. Je trainer bewaakt je techniek, past de intensiteit aan en houdt je scherp. Dat levert gemiddeld twee keer zo snel resultaat als zelf sporten zonder begeleiding.",
      },
      {
        q: "Hoe lang duurt een trainingssessie?",
        a: "Een standaard trainingssessie duurt 60 minuten. Inclusief warming-up, de kerntraining en cooling-down.",
      },
      {
        q: "Hoe snel zie ik resultaat?",
        a: "De meeste leden voelen al na 4 tot 6 weken verschil in energie en kracht. Zichtbare lichaamsveranderingen volgen doorgaans na 8 tot 12 weken, afhankelijk van trainingsdoel, frequentie en voeding.",
      },
    ],
  },
  {
    cat: "CrossBox",
    items: [
      {
        q: "Wat is CrossBox?",
        a: "CrossBox is een groepsles van 60 minuten met hoge intensiteit. Je traint samen met anderen aan kracht, conditie en snelheid. De workouts wisselen dagelijks en worden altijd begeleid door een trainer.",
      },
      {
        q: "Is CrossBox geschikt voor beginners?",
        a: "Ja. Elke workout kan worden aangepast aan jouw niveau. Onze trainers zorgen ervoor dat je altijd veilig en effectief traint, ook als je net begint.",
      },
      {
        q: "Hoe schrijf ik me in voor een CrossBox les?",
        a: "Via ons rooster op de website. Selecteer een tijdslot dat uitkomt en schrijf je in via SportBit. Je ontvangt een bevestiging per e-mail.",
      },
    ],
  },
  {
    cat: "Sportonderzoek",
    items: [
      {
        q: "Wat meet een sportonderzoek precies?",
        a: "Tijdens een sportonderzoek meten we onder andere je VO2max, anaerobe drempel, vetverbrandingszones, herstelcapaciteit en lichaamssamenstelling. Via ademgasanalyse en lactaatmetingen brengen we jouw fysiologisch profiel in kaart.",
      },
      {
        q: "Voor wie is een sportonderzoek interessant?",
        a: "Voor iedereen die resultaatgericht wil trainen. Zowel recreatieve sporters als competitieatleten profiteren van de inzichten. Het sportonderzoek vormt de basis voor elk persoonlijk trainingsplan bij FIT Partners.",
      },
      {
        q: "Hoe lang duurt een sportonderzoek?",
        a: "Een volledig sportonderzoek inclusief bespreking duurt ongeveer 2 tot 2,5 uur. De resultaten worden direct na het onderzoek uitvoerig met je doorgenomen.",
      },
      {
        q: "Hoe vaak moet ik een sportonderzoek doen?",
        a: "Leden in ons functioneel trainingscentrum worden jaarlijks uitgenodigd voor een sportonderzoek. Wil je tussentijds meten, dan kunnen losse meetmomenten ingepland worden.",
      },
    ],
  },
  {
    cat: "Voeding",
    items: [
      {
        q: "Bieden jullie ook voedingsadvies aan?",
        a: "Ja. Onze trainers geven persoonlijk voedingsadvies afgestemd op jouw doelen en leefstijl. Voeding en training gaan hand in hand. We werken met een praktisch plan dat past bij jouw dagelijkse leven.",
      },
      {
        q: "Moet ik een dieet volgen om resultaat te zien?",
        a: "Geen streng dieet, wel bewuste keuzes. We leren je hoe je eet om te presteren en te herstellen, zonder alles te verbieden. Kleine aanpassingen met grote impact.",
      },
    ],
  },
  {
    cat: "Tarieven & inschrijving",
    items: [
      {
        q: "Wat kost een personal training abonnement?",
        a: "We bieden verschillende pakketten aan, afhankelijk van het aantal sessies per week. Bekijk onze actuele tarieven op de homepagina of vraag ernaar tijdens de gratis intake.",
      },
      {
        q: "Zit ik vast aan een lang contract?",
        a: "We werken met maandelijkse pakketten zonder langlopende verplichtingen. Je bent flexibel maar wij helpen je om consistent te blijven.",
      },
      {
        q: "Hoe start ik?",
        a: "Plan een gratis intake via de website of bel ons op 06-14634488. Tijdens de intake bespreken we jouw doelen en welk pakket het beste bij je past.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid #2a2720" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", background: "none", border: "none", cursor: "pointer",
          padding: "20px 0", display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: 16, textAlign: "left",
        }}
      >
        <span style={{ color: "#f4efe6", fontSize: 16, lineHeight: 1.4, fontWeight: 500 }}>{q}</span>
        <ChevronDown
          size={18}
          color="#b79d3e"
          style={{ flexShrink: 0, transition: "transform 0.25s", transform: open ? "rotate(180deg)" : "rotate(0)" }}
        />
      </button>
      {open && (
        <p style={{ color: "#b8b3aa", fontSize: 15, lineHeight: 1.8, margin: "0 0 20px", paddingRight: 32 }}>
          {a}
        </p>
      )}
    </div>
  );
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.flatMap(cat =>
    cat.items.map(item => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    }))
  ),
};

export default function FAQ() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section style={{ background: "#131211", padding: "100px 24px 64px", borderBottom: "1px solid #2a2720" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <Link href="/kennisbank" style={{ color: "#b79d3e", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", display: "inline-block", marginBottom: 20 }}>
            ← Kennisbank
          </Link>
          <h1 style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(40px, 6vw, 80px)", textTransform: "uppercase", color: "#f4efe6", margin: "0 0 20px", lineHeight: 1 }}>
            Veelgestelde vragen
          </h1>
          <p style={{ color: "#b8b3aa", fontSize: 16, lineHeight: 1.8, margin: 0 }}>
            Antwoorden op de vragen die wij het meest krijgen. Staat jouw vraag er niet bij? Bel ons op{" "}
            <a href="tel:06-14634488" style={{ color: "#b79d3e", textDecoration: "none" }}>06-14634488</a>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#0c0b0a", padding: "72px 24px 96px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 56 }}>
          {faqs.map(cat => (
            <div key={cat.cat}>
              <h2 style={{ fontFamily: "var(--font-anton)", fontSize: 20, textTransform: "uppercase", color: "#b79d3e", margin: "0 0 8px", letterSpacing: "0.08em" }}>
                {cat.cat}
              </h2>
              <div style={{ borderTop: "1px solid #2a2720" }}>
                {cat.items.map(item => (
                  <FAQItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ maxWidth: 760, margin: "64px auto 0", background: "#131211", border: "1px solid #2a2720", padding: "40px", textAlign: "center" }}>
          <p style={{ color: "#b79d3e", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700, margin: "0 0 12px" }}>Nog vragen?</p>
          <h2 style={{ fontFamily: "var(--font-anton)", fontSize: 28, textTransform: "uppercase", color: "#f4efe6", margin: "0 0 24px" }}>Kom kennismaken</h2>
          <IntakeTriggerButton />
        </div>
      </section>
    </main>
  );
}
