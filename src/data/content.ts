// All editable site copy lives here. Change text/numbers below — no need to touch any component.

export const site = {
  name: "Cristian Constantin",
  role: "Physical Therapist",
  locations: "Bucharest · Romania",
  phone: "+40 700 000 000",
  phoneHref: "tel:+40700000000",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Bucharest · In-clinic & home visits",
  tagline: "Restore your movement",
  titleLine1: "PHYSICAL THERAPY &",
  titleLine2: "REHABILITATION",
  subtitle: "Personalized, hands-on treatment to help you move without pain and return to the activities you love.",
  imageSrc: "/images/hero.jpg",
  imageAlt: "Cristian Constantin, Physical Therapist",
  footNoteLeft: "DPT · Licensed Physical Therapist",
  footNoteRight: "Orthopedic & Sports Rehab",
};

export const about = {
  eyebrow: "About Me",
  title: "Care built around you.",
  quote: "Recovery isn't just about reducing pain — it's about rebuilding confidence in your own body.",
  body: "I work with patients recovering from injury, surgery, or chronic pain, combining manual therapy with guided exercise programs tailored to each person's goals. Every session is focused on long-term results, not just short-term relief.",
  stats: [
    { value: "8+", label: "Years in Practice" },
    { value: "1,000+", label: "Patients Treated" },
    { value: "100%", label: "Personalized Care" },
  ],
};

export const services = {
  eyebrow: "What I Offer",
  title: "Services",
  imageSrc: "/images/services.jpg",
  imageAlt: "Physical therapy treatment session",
  imageCaption: "In-clinic sessions · Bucharest",
  list: [
    {
      number: "01",
      tag: "Assessment",
      title: "Initial Evaluation & Movement Assessment",
      duration: "60 min",
    },
    {
      number: "02",
      tag: "Hands-On",
      title: "Manual Therapy & Joint Mobilization",
      duration: "45 min",
    },
    {
      number: "03",
      tag: "Recovery",
      title: "Post-Surgical & Injury Rehabilitation",
      duration: "45 min",
    },
    {
      number: "04",
      tag: "Performance",
      title: "Sports Injury & Return-to-Play Training",
      duration: "Ongoing",
    },
  ],
};

export const philosophy = {
  eyebrow: "Principles",
  title: "Philosophy",
  subtitle: "Three principles that guide every treatment plan.",
  pillars: [
    {
      level: "01",
      title: "Listen First",
      points: [
        "Full movement & history assessment",
        "Understanding your goals",
        "Finding the root cause",
      ],
      featured: false,
    },
    {
      level: "02",
      title: "Treat with Precision",
      points: [
        "Hands-on manual therapy",
        "Targeted, progressive exercise",
        "Evidence-based technique",
      ],
      featured: true,
    },
    {
      level: "03",
      title: "Build Lasting Strength",
      points: [
        "Injury-prevention focus",
        "Long-term mobility",
        "Confidence in movement",
      ],
      featured: false,
    },
  ],
};

export const contact = {
  eyebrow: "Get in Touch",
  title: "Book a Session",
  subtitle: "Call or message to schedule an evaluation, in-clinic or at home.",
  phoneLabel: "Phone",
  locationLabel: "Location",
};

export const footer = {
  text: `© ${new Date().getFullYear()} ${site.name}. All rights reserved.`,
};
