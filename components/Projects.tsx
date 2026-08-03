import React from "react";
import { projects } from "@/data";
import PixelWindow from "./ui/PixelWindow";
import { FaLocationArrow } from "react-icons/fa6";

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="heading mb-10">
          Selected <span className="text-terracotta">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <PixelWindow
              key={project.id}
              title={`${project.title.toLowerCase().replace(/\s+/g, "-")}.sh`}
              className="flex flex-col"
              bodyClassName="flex flex-col flex-1"
            >
              <h3 className="font-pixel text-base text-white mb-2">
                {project.title}
              </h3>
              <p className="text-white-200 text-sm leading-relaxed flex-1">
                {project.des}
              </p>
              <div className="flex items-center justify-between mt-5">
                <div className="flex gap-2">
                  {project.iconLists.map((icon) => (
                    <div
                      key={icon}
                      className="w-8 h-8 pixel-corners-sm border border-espresso bg-black-100 flex items-center justify-center"
                    >
                      <img src={icon} alt="" className="w-4 h-4" />
                    </div>
                  ))}
                </div>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 font-mono-pixel text-xs text-amber hover:text-terracotta transition-colors"
                  >
                    View <FaLocationArrow size={12} />
                  </a>
                ) : (
                  <span className="font-mono-pixel text-xs text-white-200/60">
                    private repo
                  </span>
                )}
              </div>
            </PixelWindow>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
