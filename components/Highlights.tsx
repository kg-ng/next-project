import React from "react";
import PixelWindow from "./ui/PixelWindow";
import { highlights } from "@/data";

/**
 * Tech-stack + professional-highlights showcase, styled as a pixel-terminal
 * code block. Inspired by (not copied from) github.com/kg-ng/kg-ng's
 * profile README — reimagined here with the site's own retro-pixel motif
 * (const-object syntax, capability list, badge-style domain pills) instead
 * of the original's shields.io badges.
 */
const Highlights = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-4">
        <PixelWindow title="~/keith-ng/highlights.ts">
          <p className="font-mono-pixel text-terracotta text-sm">
            const keith = {"{"}
          </p>
          <div className="pl-4 md:pl-6 border-l-2 border-espresso ml-2 mt-2 space-y-2">
            <p className="font-mono-pixel text-xs md:text-sm text-white-200">
              title: <span className="text-amber">"{highlights.title}"</span>,
            </p>
            <p className="font-mono-pixel text-xs md:text-sm text-white-200">
              currentFocus: <span className="text-amber">"{highlights.focus}"</span>,
            </p>
            <p className="font-mono-pixel text-xs md:text-sm text-white-200">
              infraStyle: <span className="text-amber">"{highlights.infraStyle}"</span>,
            </p>
            <p className="font-mono-pixel text-xs md:text-sm text-white-200">
              philosophy: <span className="text-amber">"{highlights.philosophy}"</span>,
            </p>
            <p className="font-mono-pixel text-xs md:text-sm text-white-200">domains: [</p>
            <div className="flex flex-wrap gap-2 pl-4">
              {highlights.domains.map((d) => (
                <span
                  key={d}
                  className="font-mono-pixel text-xs px-2.5 py-1 pixel-corners-sm border border-espresso bg-black-100 text-terracotta"
                >
                  {d}
                </span>
              ))}
            </div>
            <p className="font-mono-pixel text-xs md:text-sm text-white-200">],</p>
            <p className="font-mono-pixel text-xs md:text-sm text-white-200">capabilities: [</p>
            <ul className="pl-4 space-y-1.5">
              {highlights.capabilities.map((c) => (
                <li
                  key={c}
                  className="font-mono-pixel text-xs md:text-sm text-white-100 flex gap-2"
                >
                  <span className="text-amber">▸</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <p className="font-mono-pixel text-xs md:text-sm text-white-200">],</p>
          </div>
          <p className="font-mono-pixel text-terracotta text-sm mt-2">{"}"};</p>
        </PixelWindow>
      </div>
    </section>
  );
};

export default Highlights;
