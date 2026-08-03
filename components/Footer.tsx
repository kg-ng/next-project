import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { profile, socialMedia } from "@/data";
import PixelButton from "./PixelButton";
import PixelWindow from "./ui/PixelWindow";

const Footer = () => {
  return (
    <footer className="w-full py-16" id="contact">
      <div className="mx-auto max-w-3xl px-4">
        <PixelWindow title="contact_me.sh">
          <div className="flex flex-col items-center text-center">
            <h2 className="heading lg:max-w-[36rem]">
              Got an idea? <span className="text-terracotta">Let's ship it.</span>
            </h2>
            <p className="text-white-200 mt-4 mb-8 text-sm md:text-base">
              I'm always down to talk cloud architecture, DevSecOps
              automation, or your next side project. No forms, no
              gatekeeping — just reach out.
            </p>
            <PixelButton
              title="Email Me"
              icon={<FaLocationArrow />}
              position="right"
              href={`mailto:${profile.email}`}
            />
          </div>
        </PixelWindow>

        <div className="flex mt-10 flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono-pixel text-xs md:text-sm text-white-200">
            {`// built by ${profile.name} — © ${new Date().getFullYear()}`}
          </p>
          <div className="flex items-center gap-3">
            {socialMedia.map((info) => (
              <a
                key={info.id}
                href={info.href}
                target="_blank"
                rel="noreferrer"
                aria-label={info.label}
                className="w-10 h-10 flex items-center justify-center bg-black-200 pixel-corners-sm pixel-shadow-sm pixel-shadow-hover border-2 border-espresso"
              >
                <img
                  src={info.img}
                  alt=""
                  width={18}
                  height={18}
                  className="invert dark:invert-0"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
