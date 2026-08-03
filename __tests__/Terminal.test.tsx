import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Terminal from "@/components/ui/Terminal";
import { profile } from "@/data";
import { renderWithProviders as render } from "./test-utils";

describe("Terminal", () => {
  it("starts blank with no command history", () => {
    render(<Terminal />);
    expect(screen.queryByText(/Available commands:/)).not.toBeInTheDocument();
  });

  it("runs the help command and shows the command list", async () => {
    const user = userEvent.setup();
    render(<Terminal />);
    const input = screen.getByLabelText("Terminal command input");
    await user.type(input, "help{Enter}");
    expect(await screen.findByText(/Available commands:/)).toBeInTheDocument();
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
    await user.type(input, "help{Enter}");
    expect(await screen.findByText(/Available commands:/)).toBeInTheDocument();
    await user.type(input, "clear{Enter}");
    expect(screen.queryByText(/Available commands:/)).not.toBeInTheDocument();
  });
});
