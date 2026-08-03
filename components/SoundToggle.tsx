"use client";
import React from "react";
import { useSound } from "./sound-provider";

/**
 * Mute/unmute toggle for the site's retro 8-bit sound effects, styled to
 * match ThemeToggle. Sound defaults to muted so nothing plays unexpectedly
 * on load — visitors opt in.
 */
export const SoundToggle = () => {
  const { muted, toggleMuted } = useSound();

  return (
    <button
      type="button"
      aria-label={muted ? "Unmute sound effects" : "Mute sound effects"}
      onClick={toggleMuted}
      className="w-8 h-8 flex items-center justify-center pixel-corners-sm border-2 border-pixel-border bg-pixel-panel-2 pixel-shadow-sm pixel-shadow-hover text-pixel-accent"
    >
      <span className="font-mono-pixel text-base leading-none select-none">
        {muted ? "🔇" : "🔊"}
      </span>
    </button>
  );
};

export default SoundToggle;
