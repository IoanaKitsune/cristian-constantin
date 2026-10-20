// All editable site copy lives here. Change text/numbers below — no need to touch any component.

export const site = {
  name: "Cristian Constantin",
  role: "Kinetoterapeut",
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
  tagline: "Recucerește-ți libertatea de mișcare",
  titleLine1: "Puterea de a te mișca din nou &",
  titleLine2: "REABILITARE",
  subtitle: "Un plan de recuperare croit exact pe nevoile și ritmul tău.",
  imageSrc: "/assets/images/cristi1.jfif",
  imageAlt: "Cristian Constantin, Kinetoterapeut",
  footNoteLeft: "DPT · Kinetoterapeut licențiat",
  footNoteRight: "Neurologie și geriatrie",
};

export const about = {
  eyebrow: "Despre mine",
  title: "Menit să ajut.",
  quote: "Recuperarea e o luptă continuă între durerea de a fi confortabil și disconfortul de a fi în durere.",
  body: "Lucrez cu pacienți afectați neurologic de diverse traume, ajutându-i să își recâștige independența pas cu pas.",
  stats: [
    { value: "15+", label: "Ani de experiență" },
    { value: "1,000+", label: "Pacienți tratați" },
    { value: "100%", label: "Tratament personalizat" },
  ],
  educationImageSrc: "/assets/images/cristi4.jpeg",
  educationImageAlt: "Cristian Constantin, Kinetoterapeut",
  education: {
    title: "Studii",
    items: [
      "Facultatea de Educație Fizică și Sport, specializarea Kinetoterapie",
      "Licență în Kinetoterapie și Motricitate Specială",
    ],
  },
  specializations: {
    title: "Specializări",
    items: [
      "Recuperare neurologică",
      "Kinetoterapie geriatrică",
      "Recuperare post-traumatică și sportivă",
      "Terapie manuală și mobilizare articulară",
    ],
  },
};

export const services = {
  eyebrow: "Ce ofer",
  title: "Servicii",
  imageSrc: "/assets/images/cristi3.jpeg",
  imageAlt: "Ședință de kinetoterapie",
  imageCaption: "Ședințe la domiciliu · București",
  list: [
    {
      number: "01",
      tag: "Evaluare",
      title: "Prima întâlnire, prima strategie",
      duration: "60 min",
    },
    {
      number: "02",
      tag: "Mobilizare",
      title: "Redăm libertatea articulațiilor",
      duration: "30 min",
    },
    {
      number: "03",
      tag: "Reabilitare",
      title: "Un plan construit pentru progresul tău",
      duration: "45 min",
    },
    {
      number: "04",
      tag: "Performanță",
      title: "Revenire după accidentări sportive",
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
        "Evaluarea meticuloasă a capacității motorii și a istoricului medical",
        "Înțelegerea neajunsurilor",
        "Găsirea cauzei",
      ],
      featured: false,
    },
    {
      level: "02",
      title: "Acționez",
      points: [
        "Crearea unui plan de tratament mulat pe nevoi și potențial",
        "Tehnici bazate pe neuroplasticitate",
        "Exerciții de făcut individual acasă",
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
  eyebrow: "Hai să ne auzim",
  title: "Primul pas spre recuperare",
  subtitle: "Sună sau lasă-mi un mesaj și stabilim împreună o ședință de evaluare",
  phoneLabel: "Telefon",
  locationLabel: "Locație",
};

export const footer = {
  text: `© ${new Date().getFullYear()} ${site.name}. All rights reserved.`,
};
