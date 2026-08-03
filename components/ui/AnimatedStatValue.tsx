"use client";
import React, { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

/**
 * Animates a numeric stat counting up from 0 to its target value once it
 * scrolls into view. Values that aren't purely numeric (e.g. "3+", "26+",
 * "0") are parsed for their leading integer and the original suffix/prefix
 * is preserved in the render, so "26+" counts 0 → 26 then displays "26+".
 */
const parseValue = (raw: string) => {
  const match = raw.match(/-?\d+/);
  if (!match) return { number: null, prefix: "", suffix: raw };
  const number = parseInt(match[0], 10);
  const index = match.index ?? 0;
  return {
    number,
    prefix: raw.slice(0, index),
    suffix: raw.slice(index + match[0].length),
  };
};

export const AnimatedStatValue = ({ value }: { value: string }) => {
  const { number, prefix, suffix } = parseValue(value);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(number === null ? value : 0);

  useEffect(() => {
    if (!inView || number === null) return;
    const durationMs = 900;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setDisplay(Math.round(eased * number));
      if (progress < 1) requestAnimationFrame(tick);
    };

    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, number]);

  return (
    <motion.div ref={ref} className="font-pixel text-2xl md:text-3xl text-amber">
      {prefix}
      {display}
      {suffix}
    </motion.div>
  );
};

export default AnimatedStatValue;
