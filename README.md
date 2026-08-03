# Keith Ng — Portfolio

A retro-cozy, pixel-art themed portfolio built with Next.js 16 (App Router) and Turbopack. All content is data-driven and synced against my CV, so the site, terminal, and résumé stay in step with each other.

**Live features:**
- Retro pixel-window UI (title bars, hard corners, offset shadows) instead of soft glassmorphism
- Light / dark theme toggle (persisted, no flash-of-wrong-theme)
- Interactive terminal in the Hero section — type `help` to explore my CV via commands (`whoami`, `skills`, `experience`, `projects`, `stats`, `contact`, `sudo hire-me`)
- Konami code easter egg (↑↑↓↓←→←→BA)
- Scroll-triggered reveal animations and animated stat counters
- Retro 8-bit sound effects (synthesized via Web Audio API, muted by default — toggle in the nav)
- Draggable, click-to-front Hero and Projects windows
- Copy-to-clipboard contact email

## Tech stack

- **Framework:** Next.js 16 (App Router, Turbopack) + React 19 + TypeScript
- **Styling:** Tailwind CSS with a custom pixel-art design system (CSS variables for theme-aware colors)
- **Animation:** Framer Motion (reveal-on-scroll, drag, count-up, transitions)
- **Theming:** next-themes (class-based light/dark)
- **Testing:** Vitest + React Testing Library + jsdom

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command             | Description                              |
| -------------------- | ----------------------------------------- |
| `npm run dev`         | Start the dev server (Turbopack)          |
| `npm run build`       | Production build                          |
| `npm run start`       | Serve the production build                |
| `npm run lint`        | Run ESLint                                |
| `npm run test`        | Run the Vitest suite once                 |
| `npm run test:watch`  | Run Vitest in watch mode                  |

## Project structure

```
app/                  # App Router entry (layout, page, global styles)
components/           # Section components (Hero, Stack, Experience, Projects, Footer, Nav, ...)
components/ui/        # Reusable primitives (PixelWindow, PixelTag, Reveal, Terminal, CopyButton, ...)
constants/            # Shared literals (section ids, work status, reused class names)
data/                  # All copy/content, read by components — edit here, not in JSX
hooks/                 # Custom hooks (useKonamiCode)
__tests__/             # Vitest + Testing Library suite
public/                # Static assets, incl. Keith_Ng_CV.pdf
```

## Content & CV sync

All copy (profile, work experience, projects, skills, stats) lives in `data/index.ts`, decoupled from the components that render it. The Hero terminal's command output reads from the same file, so it can never drift out of sync with the rest of the site.

The résumé PDF at `public/Keith_Ng_CV.pdf` is the source of truth for career details. Whenever it's updated (e.g. edited in Canva and re-exported), `data/index.ts` is manually re-synced to match — ask to "sync the CV" to re-run that pass.

## Testing

```bash
npm run test
```

Covers constants, data integrity (e.g. exactly one "Current" role, every stat has a value/label), and component behavior (theme toggle, sound toggle, nav links, stats rendering, the interactive terminal's command handling, and the Konami easter egg).
