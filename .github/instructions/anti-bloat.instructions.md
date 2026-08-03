---
applyTo: "components/**,app/**,lib/**,data/**"
---

# Portfolio — Anti-Bloat Rules

## Code Size

- Functions > 40 lines → too much, split it
- Files > 200 lines → question splitting (large `ui/` primitives like `PixelWindow.tsx` are allowed exceptions if the logic is inherently a single cohesive component)

## Additions

- No new helper unless called from 2+ places in the changeset
- No new prop/type added "for future use" — add it when a real caller needs it
- No wrapper component around a single expression
- No new dependency unless it solves something Tailwind/Framer Motion/existing utils can't already do

## Scope

- Only modify files in scope for the task
- Do not refactor unrelated components while implementing a feature or fixing a bug
- Visual/theme changes (`portfolio-designer` scope) and content changes (`portfolio-content-editor` scope) stay in separate commits — don't mix them
