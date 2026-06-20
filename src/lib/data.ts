export const diensten = [
  { title: "Personal Training", img: "/images/SportTest.jpg", desc: "1-op-1 begeleiding, volledig op jouw doelen en lichaam afgestemd." },
  { title: "Duo Training", img: "/images/Hero.jpg", desc: "Samen trainen met een partner of vriend tegen een scherper tarief." },
  { title: "Small Group", img: "/images/Hero.jpg", desc: "Train in een groep van maximaal 4 met persoonlijke aandacht." },
  { title: "Sportonderzoek", img: "/images/DataLab.jpg", desc: "We brengen je conditie en belastbaarheid in kaart met meetbare data." },
  { title: "Inspanningstest", img: "/images/SportTest.jpg", desc: "Een VO2-test in ons sportlab als nulmeting en ijkpunt." },
  { title: "Voedingscoaching", img: "/images/DataLab.jpg", desc: "Begeleiding op voeding en leefstijl naast je training." },
];

export const team = [
  { name: "Niek", role: "Eigenaar, trainer", img: "/images/Niek.jpg", specs: ["Sportonderzoek & bespreking", "Functional Training", "CrossBox: CrossMAX", "Cardioboksen", "Circuittraining"] },
  { name: "Maartje", role: "Trainer", img: "/images/Maartje.jpg", specs: ["CrossBox: CrossMAX", "Mobility", "Circuittraining"] },
  { name: "Georgio", role: "Trainer", img: "/images/Georgio.jpg", specs: ["Functional Training", "CrossBox: CrossMAX", "Circuittraining"] },
  { name: "Robin", role: "Voedingsexpert, trainer", img: "/images/Robin.jpg", specs: ["Support & community", "Functional Training", "CrossBox: circuittraining & mobility"] },
  { name: "Lindy", role: "Backoffice, planning", img: "/images/Lindy.jpg", specs: ["Trainer in opleiding"] },
];

export const reviews = [
  { initial: "M", name: "Mark, 34", text: "Voor het eerst train ik met een plan dat klopt. De tussenmetingen houden me echt scherp." },
  { initial: "E", name: "Esther, 51", text: "Geen anoniem sportschool-gevoel maar echte begeleiding. Ik zie elke maand vooruitgang." },
  { initial: "J", name: "Joost, 28", text: "De rust en aandacht in de studio zijn top. Ik ga met plezier en haal mijn doelen." },
];

export const plans = [
  {
    name: "Small Group",
    price: "€29",
    period: "/maand",
    featured: false,
    features: ["Max 4 personen", "Vaste trainingstijden", "Schema op maat", "Metingen"],
  },
  {
    name: "Personal Training",
    price: "€119",
    period: "/maand",
    featured: true,
    badge: "Meest gekozen",
    features: ["Wekelijkse 1-op-1 sessies", "Persoonlijk schema", "Voedings- & leefstijladvies", "Alle metingen"],
  },
  {
    name: "Duo Training",
    price: "€39",
    period: "/p.p./maand",
    featured: false,
    features: ["Samen trainen", "Schema per persoon", "Tussenmetingen", "Flexibel"],
  },
];

export const faqs = [
  { q: "Wat kost een proeftraining?", a: "De proeftraining is gratis en vrijblijvend. Je maakt kennis met onze aanpak en de studio." },
  { q: "Moet ik al fit zijn?", a: "Nee. We starten met een nulmeting en passen alles aan op jouw niveau. We werken met mensen van 18 tot 60+." },
  { q: "Hoe vaak train ik?", a: "Dat bepalen we samen, meestal 1 tot 3 keer per week, afhankelijk van jouw doel en schema." },
  { q: "Wat betekent 'meten = weten'?", a: "We werken met sportonderzoek en tussenmetingen zodat je op basis van data traint, niet op gevoel." },
  { q: "Kan ik samen trainen?", a: "Ja, via duo-training of small group train je met een partner of in een kleine groep." },
  { q: "Hoe zit het met opzeggen?", a: "Maandelijks opzegbaar na een minimale termijn. Geen verborgen kosten." },
];
