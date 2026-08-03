import { describe, it, expect } from "vitest";
import {
  navItems,
  profile,
  impactStats,
  skillGroups,
  workExperience,
  projects,
  socialMedia,
  certifications,
  education,
  highlights,
} from "@/data";
import { SECTION_ID, WORK_STATUS } from "@/constants";

describe("data/index content", () => {
  it("navItems all point at a real SECTION_ID anchor", () => {
    const validAnchors = new Set(Object.values(SECTION_ID).map((id) => `#${id}`));
    navItems.forEach((item) => {
      expect(validAnchors.has(item.link)).toBe(true);
    });
  });

  it("profile has the required contact fields non-empty", () => {
    expect(profile.name).toBeTruthy();
    expect(profile.email).toMatch(/@/);
    expect(profile.resumeHref).toBeTruthy();
    expect(profile.githubHref).toContain("github.com");
  });

  it("impactStats each have a value and label", () => {
    expect(impactStats.length).toBeGreaterThan(0);
    impactStats.forEach((stat) => {
      expect(stat.value).toBeTruthy();
      expect(stat.label).toBeTruthy();
    });
  });

  it("skillGroups each have at least one item", () => {
    expect(skillGroups.length).toBeGreaterThan(0);
    skillGroups.forEach((group) => {
      expect(group.items.length).toBeGreaterThan(0);
    });
  });

  it("workExperience periods are only known WORK_STATUS values", () => {
    const known = new Set(Object.values(WORK_STATUS));
    workExperience.forEach((job) => {
      expect(known.has(job.period as (typeof WORK_STATUS)[keyof typeof WORK_STATUS])).toBe(
        true
      );
    });
  });

  it("exactly one workExperience entry is marked Current", () => {
    const currentCount = workExperience.filter(
      (job) => job.period === WORK_STATUS.CURRENT
    ).length;
    expect(currentCount).toBe(1);
  });

  it("projects each have a title, description, and icon list", () => {
    expect(projects.length).toBeGreaterThan(0);
    projects.forEach((project) => {
      expect(project.title).toBeTruthy();
      expect(project.des).toBeTruthy();
      expect(project.iconLists.length).toBeGreaterThan(0);
    });
  });

  it("socialMedia entries all have an href", () => {
    socialMedia.forEach((entry) => {
      expect(entry.href).toBeTruthy();
    });
  });

  it("certifications and education are non-empty", () => {
    expect(certifications.length).toBeGreaterThan(0);
    expect(education.length).toBeGreaterThan(0);
  });

  it("highlights has domains and capabilities lists", () => {
    expect(highlights.domains.length).toBeGreaterThan(0);
    expect(highlights.capabilities.length).toBeGreaterThan(0);
  });
});
