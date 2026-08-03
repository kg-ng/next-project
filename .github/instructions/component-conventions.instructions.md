---
applyTo: "components/**,app/**"
---

# Portfolio — Component & Style Rules

## Structure

```
app/                  ← App Router entry (page.tsx, layout.tsx, globals.css)
components/           ← page-level/section components (Hero, Grid, Experience, Footer, ...)
components/ui/        ← reusable UI primitives (PixelWindow, ...)
data/index.ts         ← all content data (workExperience, gridItems, navItems, socialMedia, leftList/rightList)
lib/utils.ts          ← cn() helper (clsx + tailwind-merge) — the only class-merging utility, don't reinvent it
```

Content-only changes belong in `data/index.ts`, not hardcoded inside components.

## Naming

- Component files: `PascalCase.tsx` matching the exported component name (`Hero.tsx` → `Hero`)
- Section components (`components/*.tsx`): default export
- Reusable UI primitives (`components/ui/*.tsx`): named export
- Data arrays/objects in `data/index.ts`: `camelCase`

## Component Conventions

- Functional components only, no class components
- `"use client"` at the top of any component using hooks, browser APIs, refs, or animation libraries (Framer Motion, react-lottie, three.js)
- Prop typing: prefer inline `{ prop }: { prop: Type }` (matches existing style) over a separate `interface` block, unless the props object is large or reused across files
- Use `cn()` from `lib/utils.ts` whenever combining conditional Tailwind classes — never string-concatenate classes manually

## Styling

- Tailwind utility classes only — no CSS modules, no styled-components
- Reuse the central color tokens in `tailwind.config.ts` (`black.100/200/300`, `white.100/200`, `purple`, `blue.100`) instead of hardcoding hex values or default Tailwind palette colors (`sky-*`, `cyan-*`, `emerald-*`, `fuchsia-*`) — see the Retro Cozy Pixel direction and `retro-pixel-design` skill for the current palette
- Favor generously rounded corners (`rounded-xl`/`2xl`/`3xl`) and soft shadows over sharp edges
- New global styles/gradients go in `app/globals.css`; new reusable tokens go in `tailwind.config.ts` — don't invent a third place for theme values

## SSR / Hydration Safety (non-negotiable)

- Any import that touches `document`/`window` at module or render time must be lazy-loaded via `next/dynamic(() => import(...), { ssr: false })` — `"use client"` alone does not prevent Next's initial SSR pass
- Never call `Math.random()`, `Date.now()`, or `new Date()` directly inside JSX during render — derive deterministic values instead (e.g. from an `id` prop) or move randomness into a client-only `useEffect`
- Never nest `<a>`/`next/link` tags — one real anchor per interactive element
- Full details and examples: `.github/skills/nextjs-hydration-safety/SKILL.md`

## Dead Code

- Exported symbol with zero callers → delete entirely, don't just remove the `export`
- Commented-out code → delete it, git has history
- `console.log` left after debugging → remove before committing (an intentional `console.error` in an error boundary is fine)

## Type Safety

- Avoid `any` — use the actual data shape from `data/index.ts` or `unknown`
- `JSON.parse` (if ever used) → always wrap in try/catch
