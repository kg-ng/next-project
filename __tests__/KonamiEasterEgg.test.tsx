import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import KonamiEasterEgg from "@/components/KonamiEasterEgg";

const KONAMI_KEYS = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

describe("KonamiEasterEgg", () => {
  it("stays hidden until the full Konami sequence is entered", () => {
    render(<KonamiEasterEgg />);
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });

  it("shows the banner once the Konami code is entered", async () => {
    const user = userEvent.setup();
    render(<KonamiEasterEgg />);
    for (const key of KONAMI_KEYS) {
      await user.keyboard(`{${key}}`);
    }
    await waitFor(() =>
      expect(screen.getByRole("status")).toBeInTheDocument(),
    );
  });
});
