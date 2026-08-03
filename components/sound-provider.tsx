"use client";
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type SoundContextValue = {
  muted: boolean;
  toggleMuted: () => void;
  playClick: () => void;
  playBlip: () => void;
};

const SoundContext = createContext<SoundContextValue | null>(null);

const STORAGE_KEY = "portfolio-sound-muted";

/**
 * Lightweight 8-bit-style sound effects synthesized with the Web Audio API
 * (no audio files to ship). Provides a small set of retro blips used for UI
 * interactions, gated behind a mute toggle whose preference persists in
 * localStorage across visits.
 */
export const SoundProvider = ({ children }: { children: React.ReactNode }) => {
  const [muted, setMuted] = useState(true);
  const [ctx, setCtx] = useState<AudioContext | null>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    setMuted(stored === null ? true : stored === "true");
  }, []);

  const toggleMuted = useCallback(() => {
    setMuted((prev) => {
      const next = !prev;
      window.localStorage.setItem(STORAGE_KEY, String(next));
      return next;
    });
  }, []);

  const getContext = useCallback(() => {
    if (ctx) return ctx;
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    const created = new AudioCtx();
    setCtx(created);
    return created;
  }, [ctx]);

  const beep = useCallback(
    (frequency: number, durationMs: number) => {
      if (muted) return;
      try {
        const audioCtx = getContext();
        const oscillator = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        oscillator.type = "square";
        oscillator.frequency.value = frequency;
        gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(
          0.0001,
          audioCtx.currentTime + durationMs / 1000,
        );
        oscillator.connect(gain).connect(audioCtx.destination);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + durationMs / 1000);
      } catch {
        // Web Audio unavailable/blocked — sound is decorative, fail silently.
      }
    },
    [muted, getContext],
  );

  const playClick = useCallback(() => beep(220, 90), [beep]);
  const playBlip = useCallback(() => beep(660, 60), [beep]);

  const value = useMemo(
    () => ({ muted, toggleMuted, playClick, playBlip }),
    [muted, toggleMuted, playClick, playBlip],
  );

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
};

export const useSound = () => {
  const ctx = useContext(SoundContext);
  if (!ctx) throw new Error("useSound must be used within a SoundProvider");
  return ctx;
};

export default SoundProvider;
