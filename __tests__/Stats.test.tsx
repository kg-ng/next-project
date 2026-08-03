import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Stats from "@/components/Stats";
import { impactStats } from "@/data";

describe("Stats", () => {
  it("renders every impact stat's value and label", () => {
    render(<Stats />);
    impactStats.forEach((stat) => {
      expect(screen.getByText(stat.value)).toBeInTheDocument();
      expect(screen.getByText(stat.label)).toBeInTheDocument();
    });
  });
});
