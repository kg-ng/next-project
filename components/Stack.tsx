import React from "react";
import PixelWindow from "./ui/PixelWindow";
import PixelTag from "./ui/PixelTag";
import { skillGroups } from "@/data";
import { SECTION_ID } from "@/constants";

const Stack = () => {
  return (
    <section id={SECTION_ID.STACK} className="py-16">
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
                    <PixelTag key={item}>{item}</PixelTag>
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
