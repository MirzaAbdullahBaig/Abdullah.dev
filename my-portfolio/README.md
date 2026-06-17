# Abdullah.dev — Portfolio (Next.js)

Production rebuild of the Claude Design portfolio (`../Portfolio.html`) as a
component-driven Next.js app. The desktop design is reproduced **pixel-for-pixel**;
tablet/mobile responsiveness is layered on without touching the desktop look.

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript** (strict)
- Self-hosted fonts via `next/font` (Space Grotesk, Inter, JetBrains Mono)
- Design CSS ported verbatim from the source (`styles/design/*.css`)
- Devicon brand-icon font (CDN)

> The scaffold shipped with Chakra UI / Untitled UI / Tailwind installed. They are
> a gray corporate token system that does not map to this bespoke amber/glass/dark
> design, so they are intentionally unused. Styling is the original CSS, ported.

## Scripts

```bash
npm run dev      # dev server  → http://localhost:3000
npm run build    # production build (static)
npm run start    # serve the build
npm run lint     # eslint
```

## Architecture

```
app/
  layout.tsx        # fonts, SEO metadata/viewport, devicon link, theme-FOUC script,
                    # composes Background · CustomCursor · Navbar · main · Footer · Interactions
  page.tsx          # section composition (Hero → Contact)
  globals.css       # imports the design CSS layers in source order
components/
  layout/           # navbar (client), footer
  effects/          # background, custom-cursor (client), interactions (client)
  sections/         # hero, tech-marquee, about, stats, services, skills, experience,
                    # projects, github-activity, process, testimonials, blog, education, contact
  ui/               # section, section-heading, rich-text, social-links, brand-logo, icons
data/
  site.ts           # all content, fully typed — edit copy here, never in markup
styles/design/      # base.css · nav-hero.css · sections.css · editorial.css (verbatim)
                    # + enhancements.css (additive, mobile/tablet only)
```

### How interactivity is structured

Sections are declarative (mostly server components). All imperative behavior from
the original `js/app.js` lives in one client island, **`components/effects/interactions.tsx`**
(reveals, count-up, timeline draw, numeral parallax, watermark, Karachi clock,
GitHub heatmap, magnetic buttons, smooth-scroll, copy-to-clipboard, form demos,
hero boot sequence). The navbar (scroll-spy / hide-on-scroll / theme toggle /
mobile menu) and the custom cursor are their own client components.

Theme (dark default / light) is persisted to `localStorage` and applied pre-paint
by a tiny inline script in `layout.tsx` to avoid a flash; the navbar reads it via
`useSyncExternalStore`.

## Notes

- Portrait lives in `public/portrait.png`, served through `next/image`.
- The live "Tweaks" dev panel from the source is intentionally dropped; the
  dark/light toggle is kept as a real feature.
