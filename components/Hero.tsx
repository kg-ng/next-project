"use client";
import React from "react";
import { motion } from "framer-motion";
import PixelWindow from "./ui/PixelWindow";
import PixelButton from "./PixelButton";
import Terminal from "./ui/Terminal";
import { profile } from "@/data";
import { SECTION_ID } from "@/constants";

const Hero = () => {
  return (
    <section id={SECTION_ID.HERO} className="pt-10 pb-20">
      <div className="mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <PixelWindow title="~/keith-ng/README.md" draggable>
            <p className="font-mono-pixel text-amber text-base md:text-lg">
              $ whoami
            </p>
            <h1 className="font-pixel text-2xl md:text-4xl mt-3 mb-4 leading-relaxed text-white">
              {profile.role}
            </h1>
            <p className="text-white-200 text-sm md:text-base leading-relaxed max-w-2xl">
              {profile.bio}
            </p>
            <p className="font-mono-pixel text-xs md:text-sm text-terracotta mt-4">
              📍 {profile.location}
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <PixelButton title="View my work" href="#projects" />
              <PixelButton
                title="Download résumé"
                href={profile.resumeHref}
                otherClasses="!bg-black-200 !text-amber"
              />
            </div>
            <div className="mt-6">
              <Terminal />
            </div>
          </PixelWindow>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
