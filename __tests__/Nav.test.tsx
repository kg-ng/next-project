import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Nav from "@/components/Nav";
import { navItems } from "@/data";

describe("Nav", () => {
  it("renders every nav item as a link to its section anchor", () => {
    render(<Nav />);
    navItems.forEach((item) => {
      const link = screen.getByRole("link", { name: item.name });
      expect(link).toHaveAttribute("href", item.link);
    });
  });

  it("renders the brand link pointing at #hero", () => {
    render(<Nav />);
    const brand = screen.getByRole("link", { name: /Keith_Geoffrey_NG\.exe/i });
    expect(brand).toHaveAttribute("href", "#hero");
  });
});
