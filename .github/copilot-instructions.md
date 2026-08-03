# Copilot Instructions — Keith Ng Portfolio

## Overview
This is Keith Ng's personal portfolio: a single-page **Next.js 16 (App Router)** site built with **TypeScript**, **Tailwind CSS**, and **Framer Motion**, styled as a **retro, pixel-art, cozy** experience (terminal/OS-window motifs, not glassmorphism or 3D). It showcases profile info, impact stats, tech stack, work experience, projects, and contact links, driven almost entirely by static data in `data/index.ts`.

- Package manager: `npm` (lockfile: `package-lock.json`). A `yarn.lock` also exists but is not the primary flow — prefer `npm install` / `npm run <script>` unless asked otherwise.
- Entry point: `app/page.tsx` composes section components in order: `Nav → Hero → Stats → Stack → Experience → Projects → Footer`.
- Content-only changes (bio, jobs, skills, projects, social links, impact stats) almost always belong in **`data/index.ts`**, not inside components.
- The site was rebuilt from scratch (no Three.js/globe, no lottie confetti, no bento-grid — those were removed entirely) around the reusable `components/ui/PixelWindow.tsx` shell and `components/PixelButton.tsx`.

## Tech Stack
- Next.js 16 App Router, React 19, TypeScript
- Tailwind CSS (custom theme in `tailwind.config.ts`, CSS vars + pixel-design utilities in `app/globals.css`)
- Framer Motion for light entrance animation only (no heavy 3D/canvas libraries)
- `next-themes` for dark mode (site is dark-mode-only in practice)
- Google Fonts via `next/font/google`: `Inter` (body), `Silkscreen` (pixel display/headings), `VT323` (mono-pixel labels/tags) — see `app/layout.tsx`

## Design System — "Retro Cozy Pixel"
See `.github/skills/retro-pixel-design/SKILL.md` for the full palette/typography/shape reference. Summary: warm espresso backgrounds, amber/terracotta accents, pixel-art display type (`font-pixel`/`font-mono-pixel`), **no smooth border-radius** (use `.pixel-corners`/`.pixel-corners-sm` stepped-corner clip-paths instead), **no soft blurred shadows** (use `.pixel-shadow`/`.pixel-shadow-sm` hard offset shadows instead). Frame new content sections as retro "OS windows" using `PixelWindow`, not ad-hoc rounded/blurred cards.

## Code Style & Conventions
- Functional React components, default exports for page-level/section components (e.g. `Hero`, `Footer`), named exports for reusable UI primitives (e.g. `PixelWindow`).
- TypeScript: prefer explicit prop typing with inline `{ prop }: { prop: Type }` (matches existing style) over separate `interface` blocks, unless the props object is large/reused.
- Client components must include `"use client"` at the top when using hooks, browser APIs, or animation libraries.
- Tailwind utility classes only — no CSS modules or styled-components. Use `cn()` from `lib/utils.ts` (clsx + tailwind-merge) when conditionally combining classes.

## Known Gotchas (already fixed once — don't reintroduce)
1. **SSR-unsafe libraries**: any library touching `document`/`window` at import or render time must be loaded via `next/dynamic(() => import(...), { ssr: false })`, never imported directly into a server-rendered tree. (The prior Three.js/Globe and `react-lottie` code that needed this has since been removed entirely — keep this pattern in mind if new client-only libraries are added.)
2. **Hydration mismatches from non-deterministic render**: never call `Math.random()`, `Date.now()`, or similar directly inside JSX during render — it will differ between server and client output. Precompute values deterministically (e.g. derive from an `id`) or move randomness into a `useEffect` + state that only runs client-side.
3. **No nested `<a>` tags**: never render an anchor/`next/link` inside another anchor's DOM subtree — invalid HTML causes browser reparenting and hydration mismatches.

## Testing & Validation
There is no test suite configured. Before considering a change complete:
```bash
npm install        # only if dependencies/lockfile changed or node_modules missing
npm run build       # must complete without errors (validates types + SSR/prerendering)
npm run dev         # for visual/manual verification; check browser console for hydration warnings
```
`npm run lint` exists (`next lint`) — run it for larger refactors, but it's not required for small content tweaks.

## Content Updates
Keith's resume/CV data lives in `data/index.ts` (`profile`, `impactStats`, `skillGroups`, `workExperience`, `projects`, `socialMedia`) and `public/Keith_Ng_CV.pdf` (downloadable résumé, linked from `profile.resumeHref`/`socialMedia`). When the CV changes, update both the data file and the PDF together so the site stays in sync with the actual resume.

## Agents & Skills
Custom Copilot agents (`.github/agents/*.agent.md`) and reusable skills (`.github/skills/*/SKILL.md`) codify project-specific and general engineering conventions. Invoke the relevant one instead of re-deriving the process each time.

## Agents & Skills
Custom Copilot agents (`.github/agents/*.agent.md`) and reusable skills (`.github/skills/*/SKILL.md`) codify project-specific and general engineering conventions. Invoke the relevant one instead of re-deriving the process each time. Path-scoped rules that apply automatically (no invocation needed) live in `.github/instructions/*.instructions.md`:
- `anti-bloat.instructions.md` — applies to `components/**,app/**,lib/**,data/**` — size/scope discipline
- `component-conventions.instructions.md` — applies to `components/**,app/**` — structure, naming, styling, hydration-safety rules

**Start here:** `portfolio-planner` — orchestrator entry point. Understands intent, presents plan options, delegates to the right agents below in order, gates commits/pushes behind explicit user approval. Use it whenever a task spans multiple agents or you're unsure which one to invoke.

**Project-specific agents:**
- `portfolio-designer` — Retro Cozy Pixel visual/styling work (palette, shape/shadow language, typography, motion polish). No content changes.
- `portfolio-content-editor` — syncs CV/resume content into `data/index.ts` (`profile`, `impactStats`, `skillGroups`, `workExperience`, `projects`) and the CV PDF. No styling changes.
- `nextjs-qa-reviewer` — read-only pre-ship QA checklist covering all known hydration/SSR gotchas.
- `portfolio-commit` — groups and commits approved changes with Conventional Commits messages; runs a build gate first; never pushes.
- `portfolio-pr-preparer` — runs all pre-PR gates (build, lint, hydration-safety scan, smoke test) and drafts the PR description; read-only.
- `portfolio-docs-writer` — keeps `README.md`, `copilot-instructions.md`, and agent/skill docs in sync with actual changes.
- `rubber-duck` — generic adversarial logic reviewer (correctness, edge cases, design flaws) with no domain bias.

**Project-specific skills:**
- `retro-pixel-design` — palette, typography, shape/shadow utility classes, and the reusable component inventory (`PixelWindow`, `PixelButton`) for the current design system.
- `nextjs-hydration-safety` — the known SSR/hydration bug patterns (with symptom/cause/fix) plus a pre-ship checklist.
- `resume-content-sync` — step-by-step process for syncing a new CV into the site.

**General engineering skills** (adapted from community best-practice collections, not portfolio-specific):
- `test-driven-development`, `debugging-and-error-recovery`, `incremental-implementation`, `code-review-and-quality`, `git-workflow-and-versioning`, `documentation-and-adrs`, `planning-and-task-breakdown`, `doubt-driven-development`, `security-and-hardening`, `shipping-and-launch`, `caveman` (ultra-terse response mode). See `.github/skills/references/` for supporting testing-patterns and security-checklist detail docs.

When starting non-trivial work, check whether an existing agent/skill already covers it before improvising a new approach.
