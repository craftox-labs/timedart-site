# timedart — marketing site

The marketing site for **[timedart](https://github.com/craftox-labs/timedart)**, a fast, local-first
time-tracker and invoicer. Live at **https://timedart.netlify.app**.

Static, token-driven, no framework runtime — just Astro emitting HTML/CSS.

## Stack

- **[Astro](https://astro.build)** static site (no client JS framework).
- **Vanilla CSS design tokens** — no Tailwind/Sass. Every design decision is a CSS custom property.
- Self-hosted fonts: **Mona Sans** (variable, in `public/fonts`), **Raleway** + **JetBrains Mono** (via
  `@fontsource-variable`).
- Node 22.

## Develop

```bash
npm install
npm run dev        # → http://localhost:4321  (hot-reloads)
npm run build      # → dist/  (what Netlify publishes)
npm run preview    # serve the built dist/ locally
```

## Deploy

Netlify project **`timedart`** builds `npm run build` and publishes `dist/`. It **auto-deploys on every
push to `main`** (config in `netlify.toml`). No manual step.

> Not to be confused with the **demo** site (`timedart-demo`, the Flutter web app), which is deployed
> manually.

## Two places to edit

Almost every change is one of these two files — components hold no hardcoded copy or literal design values.

| Edit… | to change… |
|-------|------------|
| **`src/config/site.ts`** | all copy/content — nav, hero, flow steps, pillars, showcase, keyboard rows, footer, links |
| **`src/styles/tokens.css`** | all design — colour palette (dark + light), type scale, spacing, radii, shadows, layout widths, transitions |

Change a token and it flows through the whole site. **Rule: component styles reference tokens only** — no
literal colours/sizes in `.astro` files.

## Structure

```
src/
  config/site.ts        content (single source of truth)
  styles/               tokens.css (design tokens) + global.css
  components/*.astro     one per section — Header, Hero, HowItWorks, Pillars,
                         Showcase, Keyboard, Narrative, UnderTheHood, Download, Footer
  layouts/               page shell (<head>, fonts, meta, theme script)
  pages/                 routes (index)
  assets/                inlined SVGs (logo, the duo-tone flow icons)
public/                  static files served as-is (fonts, logo, media)
```

### Conventions worth knowing

- **`.surface-dark`** — a class that re-declares the dark palette on an element, so cards/frames stay dark
  under the light theme (to match the app's dark screenshots).
- **Adaptive logo** — the header/footer logo is inlined and theme-aware: `"time"` uses `currentColor`, `"dart"`
  uses `--logo-dart`.
- **Flow icons** — the "How it works" steps use the same two-tone icons as the app's onboarding
  (`src/assets/icons/*.svg`), inlined via `?raw`; colours are baked in.
- Headings are Raleway italic; eyebrows/labels are Mona caps; external links open in a new tab.

## The product

This is just the marketing site. The app itself (MIT © Craftox) lives at
**[craftox-labs/timedart](https://github.com/craftox-labs/timedart)**.
