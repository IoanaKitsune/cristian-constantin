import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function initHero() {
  gsap.from(".hero-fade", {
    opacity: 0,
    y: 24,
    duration: 0.9,
    ease: "power2.out",
    stagger: 0.12,
  });

  gsap.to(".hero-bg-word", {
    yPercent: 30,
    ease: "none",
    scrollTrigger: {
      trigger: "#top",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(".hero-image", {
    yPercent: -15,
    ease: "none",
    scrollTrigger: {
      trigger: "#top",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
}

function initReveals() {
  const groups = new Map<Element, Element[]>();

  document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
    const section = el.closest("section") ?? document.body;
    const list = groups.get(section) ?? [];
    list.push(el);
    groups.set(section, list);
  });

  groups.forEach((elements, section) => {
    gsap.from(elements, {
      opacity: 0,
      y: 32,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.08,
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
      },
    });
  });
}

function init() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) return;

  initHero();
  initReveals();
}

if (document.readyState === "complete" || document.readyState === "interactive") {
  init();
} else {
  document.addEventListener("DOMContentLoaded", init);
}
