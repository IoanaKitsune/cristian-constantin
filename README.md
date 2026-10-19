# Cristian Constantin — Physical Therapist

A simple, static one-page portfolio site with scroll/parallax animations.

**Stack:** [Astro](https://astro.build) (static site, no backend) · [Tailwind CSS](https://tailwindcss.com) (styling) · [GSAP](https://gsap.com) + ScrollTrigger (parallax/scroll animations) · deployed on [Netlify](https://netlify.com).

## Editing content

All text, the phone number, and the services/philosophy lists live in one file:

```
src/data/content.ts
```

Edit the values there — no need to touch any component. For example, to update the phone number, change `site.phone` and `site.phoneHref`.

To add real photos, drop image files into `public/images/` and point `hero.imageSrc` / `services.imageSrc` in `content.ts` to them, then swap the placeholder `<div>` panels in `src/components/Hero.astro` and `Services.astro` for an `<img>` tag.

## Development

```bash
npm install
npm run dev
```

Site runs at `http://localhost:4321`.

## Build

```bash
npm run build
```

Static output goes to `dist/`.

## Deploying

This repo includes a `netlify.toml` — connect the GitHub repo to Netlify and it will build and deploy automatically on every push to `main`.
