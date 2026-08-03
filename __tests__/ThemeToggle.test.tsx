import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "@/components/ThemeToggle";

const renderWithTheme = () =>
  render(
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <ThemeToggle />
    </ThemeProvider>
  );

describe("ThemeToggle", () => {
  it("shows a sun icon in dark mode (to switch to light) once mounted", async () => {
    renderWithTheme();
    await waitFor(() => {
      expect(screen.getByRole("button")).toHaveAccessibleName(
        "Switch to light mode"
      );
    });
  });

  it("toggles the label after a click", async () => {
    renderWithTheme();
    const button = await screen.findByRole("button");
    await waitFor(() => expect(button).toHaveAccessibleName("Switch to light mode"));

    fireEvent.click(button);

    await waitFor(() =>
      expect(button).toHaveAccessibleName("Switch to dark mode")
    );
  });
});
