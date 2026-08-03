"use client";
import React from "react";
import { navItems } from "@/data";
import ThemeToggle from "./ThemeToggle";

export const Nav = () => {
  return (
    <header className="sticky top-0 z-[100] w-full">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <nav className="flex items-center justify-between pixel-corners-sm pixel-shadow border-2 border-espresso bg-black-200 px-5 py-3">
          <a
            href="#hero"
            className="font-pixel text-xs md:text-sm tracking-wider text-amber"
          >
            KG_NG.exe
          </a>
          <ul className="hidden sm:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.link}>
                <a
                  href={item.link}
                  className="font-mono-pixel text-sm tracking-wide text-white-200 hover:text-amber transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <span className="font-mono-pixel text-xs text-terracotta hidden sm:inline">
              <span className="animate-blink">●</span> online
            </span>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
