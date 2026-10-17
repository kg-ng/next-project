---
name: nextjs-hydration-safety
description: Checklist and fixes for the SSR/hydration bugs already encountered in this repo (react-lottie, Three.js globe, Math.random in render, nested anchors). Use this skill before shipping any change touching client-rendered/animated components.
license: MIT
---

# Next.js SSR & Hydration Safety (Portfolio-specific)

This repo has already hit three distinct hydration/SSR bugs during setup. This skill documents each one, why it happened, and the fix pattern, so they aren't reintroduced. **Note:** the specific `react-lottie` and Three.js globe components referenced below (`components/ui/BentoGrid.tsx`, `components/ui/GridGlobe.tsx`, `components/ui/Globe.tsx`, `components/ui/3d-pin.tsx`) were removed entirely during the from-scratch "Retro Cozy Pixel" rebuild — they're kept here as real historical examples of the *pattern*, which still applies to any future client-only library or interactive-nesting scenario.

## 1. Libraries that touch `document`/`window` at import or render time
**Symptom:** `ReferenceError: document is not defined` during `npm run build` or `npm run dev`, even though the component has `"use client"`.
**Cause:** `"use client"` only controls *where the component runs after hydration* — Next.js still does an initial SSR pass for client components. Libraries like `react-lottie` and Three.js-based globe code (`components/ui/Globe.tsx`) reference browser globals as soon as their module is evaluated, which breaks during that SSR pass.
**Fix:** Load the library via `next/dynamic` with `ssr: false` so it's excluded entirely from server rendering:
```ts
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });
```
This repo already does this for `Lottie` in `components/ui/BentoGrid.tsx` and for the `World` globe component in `components/ui/GridGlobe.tsx` — follow the same pattern for any new browser-only library.

## 2. Non-deterministic values computed during render
**Symptom:** `Error: Hydration failed because the initial UI does not match what was rendered on the server.`
**Cause:** `Math.random()`, `Date.now()`, `new Date()`, or any other non-deterministic call executed directly in a component's render/JSX produces a different value on the server (build/SSR time) than on the client (hydration time). React then finds a mismatch between the two.
**Real example fixed here:** `components/Experience.tsx` used to compute `duration={Math.floor(Math.random() * 10000) + 10000}` inline for each card.
**Fix pattern:** derive the value deterministically from stable data instead:
```ts
duration={10000 + card.id * 1500}
```
If true randomness is required (e.g. a randomized animation on every visit), generate it inside a `useEffect` + `useState`, so it only runs client-side after the initial hydration pass matches.

## 3. Nested interactive elements (`<a>` inside `<a>`, or `Link` inside `Link`)
**Symptom:** `Error: Hydration failed ... Expected server HTML to contain a matching <div> in <a>` (or similar structural mismatch), often pointing at unrelated-looking components.
**Cause:** HTML forbids nesting `<a>` tags. Browsers silently reparent/close the outer tag when parsing invalid nested anchors, so the DOM the browser builds differs from what React rendered — a mismatch React can't reconcile.
**Real example fixed here:** `components/ui/3d-pin.tsx`'s `PinContainer` wrapped its whole card in a Next.js `<Link>` (→ `<a>`), while its child `PinPerspective` independently rendered its own `<a href target="_blank">` for the "Check Live Site" badge.
**Fix pattern:** only one anchor per interactive card. Either make the outer wrapper a non-interactive `<div>` (with the real link living inside), or make the inner element a `<span>`/`<button>` instead of `<a>`. In this repo, `PinContainer` now uses a `<div>` wrapper, and `PinPerspective`'s inner `<a>` is the sole real link.

## 4. `react-lottie` unmount crash
**Symptom:** `TypeError: Cannot read properties of undefined (reading 'forEach')` at `Lottie.deRegisterEvents` / `componentWillUnmount`.
**Cause:** `react-lottie`'s `componentWillUnmount` unconditionally calls `this.props.eventListeners.forEach(...)`. If the `eventListeners` prop isn't passed, it's `undefined`.
**Fix:** always pass `eventListeners={[]}` (or a real array) when rendering `<Lottie>`.

## Pre-ship checklist
- [ ] `npm run build` completes with no prerender errors.
- [ ] No `Math.random()`/`Date.now()`/`new Date()` called directly in JSX render bodies.
- [ ] Any new animation/canvas/DOM-touching library is wrapped in `next/dynamic(..., { ssr: false })`.
- [ ] No `<a>`/`Link` nested inside another `<a>`/`Link`.
- [ ] `npm run dev`, open in browser, check console for hydration warnings.
