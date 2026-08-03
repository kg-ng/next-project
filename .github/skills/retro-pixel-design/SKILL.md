---
name: retro-pixel-design
description: Design system reference for this portfolio's "Retro Cozy Pixel" aesthetic — palette, typography, shape language, shadows, and the component inventory. Use this skill whenever adding or restyling components so the whole site stays visually consistent.
license: MIT
---

# Retro Cozy Pixel Design System

This portfolio was rebuilt from scratch (not re-skinned) around a **retro, pixel-art, cozy** aesthetic: warm espresso backgrounds, amber/terracotta accents, pixel-art display type, hard offset "pixel shadows" instead of blur, and stepped/notched corners instead of smooth border-radius. Components are framed as retro "OS windows" / terminal panels rather than glassmorphic cards.

## Palette (`tailwind.config.ts`)
| Token | Value | Usage |
|---|---|---|
| `black.DEFAULT` | `#120b07` | rarely used directly |
| `black.100` | `#1a1410` | page background |
| `black.200` | `#261c14` | window/card backgrounds |
| `white.DEFAULT` | `#FFF4E6` | primary text |
| `white.100` / `white.200` | `#E8DFD3` / `#D8CFC0` | secondary/tertiary text |
| `amber.soft` / `amber.DEFAULT` | `#F5C99B` / `#E8A659` | accent highlights, pixel dots |
| `terracotta` | `#D97B4F` | primary CTA, links, headings accent |
| `espresso` | `#1a0f08` | borders, hard shadow color |

## Typography
- Body copy: `Inter` via `next/font/google`, CSS var `--font-body`, class `font-body` (also default `body` font).
- Pixel-art display font for headings/labels: `Silkscreen`, CSS var `--font-pixel`, utility class `font-pixel` (also used by the `.heading` utility).
- Terminal/monospace pixel font for tags, code-flavored bits, nav links: `VT323`, CSS var `--font-mono-pixel`, utility class `font-mono-pixel`.
- All three are loaded once in `app/layout.tsx` and exposed as CSS variables on `<body>`.

## Shape & shadow language
- No smooth `rounded-*` corners anywhere in the design. Use:
  - `.pixel-corners` — larger stepped/notched corner clip-path (windows, cards).
  - `.pixel-corners-sm` — smaller notch, for buttons/pills/tags.
- No blurred/soft box-shadows. Use:
  - `.pixel-shadow` — hard offset double shadow for windows/panels.
  - `.pixel-shadow-sm` — single hard offset shadow for small elements.
  - `.pixel-shadow-hover` — adds a pressed/lifted interaction (translate + shadow change) on hover/active; pair with `.pixel-shadow`/`.pixel-shadow-sm`.
- Borders are `border-2 border-espresso` (or `border border-espresso` for small elements), not soft `border-white/[0.1]`.
- `.pixel-bg` — faint pixel-grid backdrop applied to the page `<main>`.
- `.scanlines` — optional CRT scanline overlay utility (not applied by default; use sparingly, only where it won't hurt text legibility).

## Core reusable components
- `components/ui/PixelWindow.tsx` — the primary content shell: retro "OS window" with a title bar (three `.pixel-dot`s + mono-pixel label) and a `pixel-corners`/`pixel-shadow` body. Use this instead of ad-hoc `div`s for any card-like content (hero intro, stack, experience entries, projects, contact).
- `components/PixelButton.tsx` — the CTA button: `pixel-corners-sm`, `pixel-shadow` + `pixel-shadow-hover`, terracotta fill, pixel-art label. Supports `href` (renders `<a>`) or `handleClick` (renders `<button>`).
- `components/Nav.tsx` — sticky top nav styled as a pixel toolbar.

## Content/structure (all data-driven from `data/index.ts`)
- `profile` — name, role, tagline, bio, location, contact links, résumé path.
- `impactStats` — headline metrics rendered by `components/Stats.tsx` (senior-level "at a glance" signal).
- `skillGroups` — categorized tech stack rendered by `components/Stack.tsx`.
- `workExperience` — role, company, period, description, highlights, stack — rendered by `components/Experience.tsx` as a "commit log" style timeline.
- `projects` — rendered by `components/Projects.tsx`.
- `socialMedia` — rendered by `components/Footer.tsx`.

When adding a new section, add its content to `data/index.ts` first, then build the component using `PixelWindow` as the shell so styling stays consistent without duplicating pixel-corner/shadow CSS inline.

## Validation
- `npm run build` (clean `.next` if flaky — pre-existing environment quirk, see `nextjs-hydration-safety` skill) then `npm run start` + `curl localhost:3000` for a smoke test.
- Grep for regressions: no `rounded-` (except intentionally on 3rd-party icon wrappers), no `backdrop-blur`/`shadow-[0_..blur..]` soft glows, no leftover imports of deleted components (`BentoGrid`, `3d-pin`, `GridGlobe`, `CanvasRevealEffect`, `MovingBorder`, `Spotlight`, `TextGenerateEffect`, `FloatingNav`, `MagicButton`, `BackgroundGradientAnimation` — all removed in the from-scratch rebuild).
