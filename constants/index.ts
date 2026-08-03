/**
 * Shared literal values used across multiple components. Centralizing these
 * avoids "magic strings" scattered through JSX and keeps behavior consistent
 * (DRY) — e.g. every "is this job current?" check reads from the same
 * WORK_STATUS.CURRENT constant instead of a hardcoded "Current" string.
 */

// Work experience period labels (see data/index.ts `workExperience[].period`).
export const WORK_STATUS = {
  CURRENT: "Current",
  PRIOR: "Prior",
} as const;

// Section anchor ids, shared between navItems (data/index.ts) and the
// <section id="..."> targets that render them, so a rename only happens once.
export const SECTION_ID = {
  HERO: "hero",
  ABOUT: "about",
  STACK: "stack",
  EXPERIENCE: "experience",
  PROJECTS: "projects",
  CONTACT: "contact",
} as const;

// Reused Tailwind class fragments for the small "pixel pill" tags that show
// up in Stack, Experience, Highlights, and Projects (skills, stack badges,
// domain tags). Keeping one definition means a visual tweak updates every
// usage instead of four near-identical copies.
export const PIXEL_TAG_CLASS =
  "font-mono-pixel text-xs md:text-sm px-3 py-1.5 pixel-corners-sm border border-espresso bg-black-100 text-white-100";

export const PIXEL_TAG_ACCENT_CLASS =
  "font-mono-pixel text-xs px-2.5 py-1 pixel-corners-sm border border-espresso bg-black-100 text-terracotta";
