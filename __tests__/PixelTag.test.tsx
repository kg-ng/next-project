import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import PixelTag from "@/components/ui/PixelTag";

describe("PixelTag", () => {
  it("renders its children", () => {
    render(<PixelTag>TypeScript</PixelTag>);
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });

  it("merges an extra className without dropping the base pixel styling", () => {
    render(<PixelTag className="text-white-200">Node.js</PixelTag>);
    const el = screen.getByText("Node.js");
    expect(el.className).toContain("pixel-corners-sm");
    expect(el.className).toContain("text-white-200");
  });
});
