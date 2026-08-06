"use client";
import { useEffect, useRef, useState } from "react";

type UseTypewriterOptions = {
  /** Delay in ms between each typed character. */
  typingSpeed?: number;
  /** Delay in ms the fully-typed text stays visible before retyping. */
  pauseDuration?: number;
};

/**
 * Types out `text` one character at a time, then pauses once fully typed
 * and restarts the cycle. All timing lives in a client-only `useEffect` so
 * the initial SSR/hydration pass always renders an empty string first,
 * avoiding server/client markup mismatches.
 */
export const useTypewriter = (
  text: string,
  { typingSpeed = 100, pauseDuration = 5000 }: UseTypewriterOptions = {}
) => {
  const [displayedText, setDisplayedText] = useState("");
  const indexRef = useRef(0);

  useEffect(() => {
    indexRef.current = 0;
    setDisplayedText("");

    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (indexRef.current < text.length) {
        indexRef.current += 1;
        setDisplayedText(text.slice(0, indexRef.current));
        timeoutId = setTimeout(tick, typingSpeed);
      } else {
        timeoutId = setTimeout(() => {
          indexRef.current = 0;
          setDisplayedText("");
          timeoutId = setTimeout(tick, typingSpeed);
        }, pauseDuration);
      }
    };

    timeoutId = setTimeout(tick, typingSpeed);

    return () => clearTimeout(timeoutId);
  }, [text, typingSpeed, pauseDuration]);

  return displayedText;
};
