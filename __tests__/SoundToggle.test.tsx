import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import SoundToggle from "@/components/SoundToggle";
import { renderWithProviders as render, screen } from "./test-utils";

describe("SoundToggle", () => {
  it("defaults to muted and toggles on click", async () => {
    const user = userEvent.setup();
    render(<SoundToggle />);
    const button = screen.getByRole("button", { name: "Unmute sound effects" });
    await user.click(button);
    expect(
      screen.getByRole("button", { name: "Mute sound effects" }),
    ).toBeInTheDocument();
  });
});
