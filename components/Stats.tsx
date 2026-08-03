import React from "react";
import { impactStats } from "@/data";

const Stats = () => {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {impactStats.map((stat) => (
            <div
              key={stat.id}
              className="pixel-corners-sm pixel-shadow-sm border-2 border-espresso bg-black-200 p-4 text-center"
            >
              <div className="font-pixel text-2xl md:text-3xl text-amber">
                {stat.value}
              </div>
              <div className="font-mono-pixel text-xs md:text-sm text-white-200 mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
