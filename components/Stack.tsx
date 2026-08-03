import React from "react";
import PixelWindow from "./ui/PixelWindow";
import { skillGroups } from "@/data";

const Stack = () => {
  return (
    <section id="stack" className="py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="heading mb-10">
          My <span className="text-terracotta">Tech Stack</span>
        </h2>
        <PixelWindow title="system_specs.yaml">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group) => (
              <div key={group.id}>
                <p className="font-pixel text-xs text-amber uppercase tracking-wider mb-3">
                  {group.title}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono-pixel text-xs md:text-sm px-3 py-1.5 pixel-corners-sm border border-espresso bg-black-100 text-white-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </PixelWindow>
      </div>
    </section>
  );
};

export default Stack;
