import { describe, it, expect } from "vitest";
import { WORK_STATUS, SECTION_ID, PIXEL_TAG_CLASS } from "@/constants";

describe("constants", () => {
  it("exposes stable work status labels", () => {
    expect(WORK_STATUS.CURRENT).toBe("Current");
    expect(WORK_STATUS.PRIOR).toBe("Prior");
  });

  it("exposes section ids without leading #", () => {
    Object.values(SECTION_ID).forEach((id) => {
      expect(id.startsWith("#")).toBe(false);
    });
  });

  it("keeps a single definition for the shared pixel tag class", () => {
    expect(PIXEL_TAG_CLASS).toContain("pixel-corners-sm");
  });
});
