import { profile, skillGroups, workExperience, projects, impactStats } from "@/data";
import { SECTION_ID } from "@/constants";

export type TerminalLine = { id: number; content: string };

/**
 * Command registry for the interactive Hero terminal. Each command returns
 * plain-text output lines derived from the same `data/index.ts` source the
 * rest of the site renders from, so the terminal never drifts out of sync
 * with the CV-derived content.
 */
export const TERMINAL_PROMPT = "keith@portfolio";

const line = (...lines: string[]) => lines;

export const TERMINAL_COMMANDS: Record<string, () => string[]> = {
  help: () =>
    line(
      "Available commands:",
      "  whoami       — who am I, in one line",
      "  bio          — a short summary",
      "  skills       — tech stack overview",
      "  experience   — recent roles",
      "  projects     — things I've shipped",
      "  stats        — impact at a glance",
      "  contact      — how to reach me",
      "  sudo hire-me — you already know",
      "  clear        — clear the terminal",
    ),
  whoami: () => line(profile.name, profile.role),
  bio: () => line(profile.bio),
  skills: () =>
    skillGroups.flatMap((group) => [
      `${group.title}:`,
      `  ${group.items.join(", ")}`,
    ]),
  experience: () =>
    workExperience.flatMap((job) => [
      `${job.role} @ ${job.company} (${job.period})`,
    ]),
  projects: () => projects.map((p) => `${p.title} — ${p.des}`),
  stats: () => impactStats.map((s) => `${s.value} ${s.label}`),
  contact: () =>
    line(`email: ${profile.email}`, `resume: ${profile.resumeHref}`),
  "sudo hire-me": () =>
    line(
      "Permission granted. ✅",
      `Scroll to #${SECTION_ID.CONTACT} or run 'contact' to reach out.`,
    ),
};
