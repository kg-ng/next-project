"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import useKonamiCode from "@/hooks/useKonamiCode";

/**
 * Global easter egg: entering the Konami code (↑↑↓↓←→←→BA) anywhere on the
 * page overlays a celebratory "retro god mode" pixel banner for a few
 * seconds. Purely decorative — no gameplay effect, just a fun surprise for
 * visitors who know the cheat code.
 */
export const KonamiEasterEgg = () => {
  const { triggered, reset } = useKonamiCode();

  React.useEffect(() => {
    if (!triggered) return;
    const timer = setTimeout(reset, 3200);
    return () => clearTimeout(timer);
  }, [triggered, reset]);

  return (
    <AnimatePresence>
      {triggered && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] pointer-events-none"
          role="status"
        >
          <div className="font-pixel text-sm md:text-base px-5 py-3 bg-black-200 border-2 border-amber pixel-corners-sm pixel-shadow-sm text-amber text-center">
            🕹️ RETRO GOD MODE UNLOCKED
            <p className="font-mono-pixel text-xs md:text-sm text-terracotta mt-1">
              +30 dev cred · thanks for the nostalgia
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default KonamiEasterEgg;
