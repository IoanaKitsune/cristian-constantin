// All editable site copy lives here. Change text/numbers below — no need to touch any component.

export const site = {
  name: "Cristian Constantin",
  role: "Kinetoterapeut",
  locations: "Bucuresti · Romania",
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
  tagline: "Recucereste-ti libertatea de miscare",
  titleLine1: "Puterea de a te misca din nou &",
  titleLine2: "REABILITARE",
  subtitle: "Un plan de recuperare croit exact pe nevoile si ritmul tau.",
  imageSrc: "/assets/images/cristi1.jfif",
  imageAlt: "Cristian Constantin, Kinetoterapeut",
  footNoteLeft: "DPT · Kinetoterapeut licentiat",
  footNoteRight: "Neurologie si geriatrie",
};

export const about = {
  eyebrow: "Despre mine",
  title: "Menit sa ajut.",
  quote: "Recuperarea e o lupta continua intre durerea de a fi confortabil si disconfortul de a fi in durere.",
  body: "Lucrez cu pacienti afectati neurologic de diverse traume, ajutandu-i sa isi recastige independenta pas cu pas.",
  stats: [
    { value: "15+", label: "Ani de experienta" },
    { value: "1,000+", label: "Pacienti tratati" },
    { value: "100%", label: "Tratament personalizat" },
  ],
  educationImageSrc: "/assets/images/cristi4.jpeg",
  educationImageAlt: "Cristian Constantin, Kinetoterapeut",
  education: {
    title: "Studii",
    items: [
      "Facultatea de Educatie Fizica si Sport, specializarea Kinetoterapie",
      "Licenta in Kinetoterapie si Motricitate Speciala",
    ],
  },
  specializations: {
    title: "Specializari",
    items: [
      "Recuperare neurologica",
      "Kinetoterapie geriatrica",
      "Recuperare post-traumatica si sportiva",
      "Terapie manuala si mobilizare articulara",
    ],
  },
};

export const services = {
  eyebrow: "Ce ofer",
  title: "Servicii",
  imageSrc: "/assets/images/cristi3.jpeg",
  imageAlt: "Sedinta de kinetoterapie",
  imageCaption: "Sedinte la domiciliu · Bucuresti",
  list: [
    {
      number: "01",
      tag: "Evaluare",
      title: "Prima intalnire, prima strategie",
      duration: "60 min",
    },
    {
      number: "02",
      tag: "Mobilizare",
      title: "Redam libertatea articulatiilor",
      duration: "30 min",
    },
    {
      number: "03",
      tag: "Reabilitare",
      title: "Un plan construit pentru progresul tau",
      duration: "45 min",
    },
    {
      number: "04",
      tag: "Performanta",
      title: "Revenire dupa accidentari sportive",
      duration: "60 min",
    },
  ],
};

export const philosophy = {
  eyebrow: "Principii",
  title: "Filozofie",
  subtitle: "Trei principii, un singur scop: recuperarea ta.",
  pillars: [
    {
      level: "01",
      title: "Ascult",
      points: [
        "Evaluarea meticuloasa a capacitatii motorii si a istoricului medical",
        "Intelegerea neajunsurilor",
        "Gasirea cauzei",
      ],
      featured: false,
    },
    {
      level: "02",
      title: "Actionez",
      points: [
        "Creearea unui plan de tratament mulat pe nevoi si potential",
        "Tehnici bazate pe neuroplasticitate",
        "Exercitii de facut individual acasa",
      ],
      featured: false,
    },
    {
      level: "03",
      title: "Ajustez",
      points: [
        "Analizez feedback-ul primit",
        "Schimb planul de atac",
        "Ofer suport constant",
      ],
      featured: false,
    },
  ],
};

export const contact = {
  eyebrow: "Hai sa ne auzim",
  title: "Primul pas spre recuperare",
  subtitle: "Suna sau lasa-mi un mesaj si stabilim impreuna o sedinta de evaluare",
  phoneLabel: "Telefon",
  locationLabel: "Locatie",
};

export const footer = {
  text: `© ${new Date().getFullYear()} ${site.name}. All rights reserved.`,
};
