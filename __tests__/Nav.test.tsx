import { afterEach, describe, it, expect, vi } from "vitest";
import { act, screen } from "@testing-library/react";
import Nav from "@/components/Nav";
import { navItems } from "@/data";
import { renderWithProviders as render } from "./test-utils";

const brandLink = () => screen.getAllByRole("link").find((a) => a.getAttribute("href") === "#hero");

describe("Nav", () => {
  afterEach(() => vi.useRealTimers());

  it("renders every nav item as a link to its section anchor", () => {
    render(<Nav />);
    navItems.forEach((item) => {
      const link = screen.getByRole("link", { name: item.name });
      expect(link).toHaveAttribute("href", item.link);
    });
  });

  it("renders the brand link pointing at #hero", () => {
    // The brand text is typed out by useTypewriter and is empty on first render (avoids a hydration
    // mismatch), so find the link by its href rather than by its name.
    render(<Nav />);
    expect(brandLink()).toBeDefined();
  });

  it("types the brand name into the link", () => {
    vi.useFakeTimers();
    render(<Nav />);
    act(() => {
      vi.advanceTimersByTime(2000); // 17 characters at 100ms each
    });
    expect(screen.getByRole("link", { name: /Keith_Geoffrey_Ng/i })).toHaveAttribute("href", "#hero");
  });
});
