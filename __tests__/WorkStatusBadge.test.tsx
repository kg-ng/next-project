import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import WorkStatusBadge from "@/components/ui/WorkStatusBadge";
import { WORK_STATUS } from "@/constants";

describe("WorkStatusBadge", () => {
  it("highlights a Current role with the amber-solid treatment", () => {
    render(<WorkStatusBadge period={WORK_STATUS.CURRENT} />);
    const badge = screen.getByText(WORK_STATUS.CURRENT);
    expect(badge.className).toContain("bg-amber-solid");
  });

  it("renders a Prior role with the muted terracotta treatment", () => {
    render(<WorkStatusBadge period={WORK_STATUS.PRIOR} />);
    const badge = screen.getByText(WORK_STATUS.PRIOR);
    expect(badge.className).not.toContain("bg-amber-solid");
    expect(badge.className).toContain("text-terracotta");
  });
});
