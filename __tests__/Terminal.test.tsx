import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Terminal from "@/components/ui/Terminal";
import { profile } from "@/data";

describe("Terminal", () => {
  it("shows the help output by default", () => {
    render(<Terminal />);
    expect(screen.getByText(/Available commands:/)).toBeInTheDocument();
  });

  it("runs a recognized command and prints CV-sourced output", async () => {
    const user = userEvent.setup();
    render(<Terminal />);
    const input = screen.getByLabelText("Terminal command input");
    await user.type(input, "whoami{Enter}");
    expect(await screen.findByText(profile.role)).toBeInTheDocument();
  });

  it("shows a not-found message for an unrecognized command", async () => {
    const user = userEvent.setup();
    render(<Terminal />);
    const input = screen.getByLabelText("Terminal command input");
    await user.type(input, "not-a-real-command{Enter}");
    expect(
      await screen.findByText(/command not found: not-a-real-command/),
    ).toBeInTheDocument();
  });

  it("clears history when the clear command is run", async () => {
    const user = userEvent.setup();
    render(<Terminal />);
    const input = screen.getByLabelText("Terminal command input");
    await user.type(input, "clear{Enter}");
    expect(screen.queryByText(/Available commands:/)).not.toBeInTheDocument();
  });
});
