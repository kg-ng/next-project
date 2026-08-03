"use client";
import { useEffect, useState } from "react";

const KONAMI_SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

/**
 * Listens for the classic Konami code (↑↑↓↓←→←→BA) anywhere on the page and
 * flips `triggered` to true once the full sequence is entered in order.
 * Wrong keys reset progress rather than requiring an exact restart from
 * scratch, matching how the original cheat code behaves.
 */
export const useKonamiCode = () => {
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    let progress = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      const expected = KONAMI_SEQUENCE[progress];
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;

      if (key === expected) {
        progress += 1;
        if (progress === KONAMI_SEQUENCE.length) {
          setTriggered(true);
          progress = 0;
        }
      } else {
        progress = key === KONAMI_SEQUENCE[0] ? 1 : 0;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const reset = () => setTriggered(false);

  return { triggered, reset };
};

export default useKonamiCode;
