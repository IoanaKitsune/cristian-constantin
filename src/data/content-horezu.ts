// All editable site copy lives here. Change text/numbers below — no need to touch any component.

export const site = {
  name: "Cristian Constantin",
  role: "Ștrampă de lux & Fost Fuckboy",
  locations: "București · România",
  phone: "+40 700 000 000",
  phoneHref: "tel:+40700000000",
};

export const nav = [
  { label: "Despre mine", href: "#about" },
  { label: "Servicii", href: "#services" },
  { label: "Filosofie", href: "#philosophy" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  tagline: "Fuck their pussies",
  titleLine1: "Specialist în sex mult &",
  titleLine2: "ANAL",
  subtitle: "In, on and near the PUSSY.",
  imageSrc: "/assets/images/cristi1.jfif",
  imageAlt: "Cristian Constantin, Whorehouse",
  footNoteLeft: "WHR · Ștrampeta licențiată",
  footNoteRight: "Ofer \"vizite\" la domiciliu",
};

export const about = {
  eyebrow: "Despre mine",
  title: "Fupa lover.",
  quote: "Fuck their pussies, slice their pussies, burn their pussies.",
  body: "",
  stats: [
    { value: "20+", label: "Ani de experiență" },
    { value: "1,000+", label: "Foste gagici (și pacienți)" },
    { value: "100%", label: "Devotament de băiat cuminte" },
  ],
  educationImageSrc: "/assets/images/cristi4.jpeg",
  educationImageAlt: "Cristian Constantin, Whorehourse",
  education: {
    title: "Studii & Calificări",
    items: [
      "Facultatea de Educație Târfică, specializarea roșcate",
      "Licență în Vrăjeală și Motricitate Specială",
      "Master în \"Consolare de gagici\""
    ],
  },
  specializations: {
    title: "Specializări",
    items: [
      "Recuperare vaginală și spirituală",
      "Masaj erotic",
      "Sex în cluburi și mașini",
    ],
  },
};

export const services = {
  eyebrow: "Ce ofer",
  title: "Servicii",
  imageSrc: "/assets/images/cristi3.jpeg",
  imageAlt: "Ședință de strampificare",
  imageCaption: "Ședințe la domiciliu · București",
  list: [
    {
      number: "01",
      tag: "Evaluare",
      title: "Prima întâlnire (sex inclus)",
      duration: "60 min",
    },
    {
      number: "02",
      tag: "Mobilizare",
      title: "Redăm flexibilitatea (sex inclus)",
      duration: "30 min",
    },
    {
      number: "03",
      tag: "Reabilitare",
      title: "Plan serios de recuperare (sex inclus)",
      duration: "45 min",
    },
    {
      number: "04",
      tag: "Performanță",
      title: "Revenire după accidentări și condiție fizică (sex inclus)",
      duration: "60 min",
    },
  ],
};

export const philosophy = {
  eyebrow: "Principii",
  title: "Filozofie",
  subtitle: "Sex mult și cu oricine.",
  pillars: [
    {
      level: "01",
      title: "Ascult",
      points: [
        "Evaluarea meticuloasă a dorințelor",
        "Analiza istoricului",
        "Găsirea cauzei exacte a durerii",
      ],
      featured: false,
    },
    {
      level: "02",
      title: "Acționez",
      points: [
        "Plan de tratament 100% personalizat",
        "Tehnici moderne bazate pe experiență hands-on",
        "Exerciții clare pentru acasă",
      ],
      featured: false,
    },
    {
      level: "03",
      title: "Ajustez",
      points: [
        "Analizez progresul și feedback-ul",
        "Adaptez strategia pe parcurs",
        "Stau la dispoziție 24/7",
      ],
      featured: false,
    },
  ],
};

export const contact = {
  eyebrow: "Hai să ne auzim",
  title: "Primul pas spre recuperare",
  subtitle: "Sună sau lasă-mi un mesaj",
  phoneLabel: "Telefon",
  locationLabel: "Locație",
};

export const gagiciMap = {
  eyebrow: "Statistica oficială",
  title: "Harta cuceririlor",
  subtitle: "Plimbă mouse-ul peste un județ pentru raportul complet.",
  countyCounts: {
    AB: 182, AR: 105, AG: 44, BC: 126, BH: 81, BN: 154, BT: 122, BV: 183, BR: 124, B: 70,
    BZ: 41, CS: 118, CL: 26, CJ: 171, CT: 25, CV: 169, DB: 116, DJ: 55, GL: 38, GR: 120,
    GJ: 167, HR: 148, HD: 173, IL: 124, IS: 71, IF: 41, MM: 161, MH: 65, MS: 46, NT: 121,
    OT: 47, PH: 155, SM: 59, SJ: 194, SB: 162, SV: 41, TR: 27, TM: 99, TL: 116, VS: 18,
    VL: 51, VN: 19,
  } as Record<string, number>,
};

export const footer = {
  text: `© ${new Date().getFullYear()} ${site.name}. All rights reserved.`,
};