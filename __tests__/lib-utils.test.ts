import { describe, it, expect } from "vitest";
import { cn } from "@/lib/utils";

describe("cn", () => {
  it("joins simple class strings", () => {
    expect(cn("a", "b")).toBe("a b");
  });

  it("drops falsy values", () => {
    expect(cn("a", false, undefined, null, "b")).toBe("a b");
  });

  it("resolves conflicting tailwind classes, keeping the last one", () => {
    // tailwind-merge should keep only the last conflicting px-* utility
    expect(cn("px-2 py-1", "px-4")).toBe("py-1 px-4");
  });
});
