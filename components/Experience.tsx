import React from "react";
import { workExperience, education, certifications } from "@/data";
import PixelWindow from "./ui/PixelWindow";
import PixelTag from "./ui/PixelTag";
import WorkStatusBadge from "./ui/WorkStatusBadge";
import { SECTION_ID } from "@/constants";

const Experience = () => {
  return (
    <section id={SECTION_ID.EXPERIENCE} className="py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="heading mb-10">
          Work <span className="text-terracotta">Experience</span>
        </h2>
        <div className="flex flex-col gap-6">
          {workExperience.map((job) => (
            <PixelWindow key={job.id} title={`${job.company}.log`}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div>
                  <h3 className="font-pixel text-base md:text-lg text-white">
                    {job.role}
                  </h3>
                  <p className="font-mono-pixel text-sm text-amber mt-1">
                    {job.company}
                  </p>
                </div>
                <WorkStatusBadge period={job.period} />
              </div>
              <p className="text-white-200 text-sm mt-4 leading-relaxed">
                {job.desc}
              </p>
              <ul className="mt-4 space-y-1.5">
                {job.highlights.map((h) => (
                  <li
                    key={h}
                    className="font-mono-pixel text-xs md:text-sm text-white-100 flex gap-2"
                  >
                    <span className="text-amber">▸</span>
                    {h}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {job.stack.map((tech) => (
                  <PixelTag
                    key={tech}
                    className="text-[11px] px-2 py-1 text-white-200"
                  >
                    {tech}
                  </PixelTag>
                ))}
              </div>
            </PixelWindow>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mt-10">
          <PixelWindow title="education.log">
            {education.map((e) => (
              <div key={e.id}>
                <h3 className="font-pixel text-sm md:text-base text-white">
                  {e.school}
                </h3>
                <p className="font-mono-pixel text-sm text-amber mt-1">
                  {e.degree}
                </p>
                <p className="font-mono-pixel text-xs text-terracotta mt-1">
                  {e.period}
                </p>
              </div>
            ))}
          </PixelWindow>
          <PixelWindow title="certifications.log">
            <ul className="space-y-2">
              {certifications.map((c) => (
                <li key={c.id} className="flex gap-2">
                  <span className="text-amber">🏅</span>
                  <div>
                    <p className="font-pixel text-sm md:text-base text-white">
                      {c.name}
                    </p>
                    <p className="font-mono-pixel text-xs text-terracotta">
                      {c.issuer}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </PixelWindow>
        </div>
      </div>
    </section>
  );
};

export default Experience;
