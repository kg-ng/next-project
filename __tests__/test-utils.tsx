import React from "react";
import { render, type RenderOptions } from "@testing-library/react";
import { SoundProvider } from "@/components/sound-provider";

/**
 * Renders a component wrapped in the app's global providers that components
 * commonly depend on via context (currently just SoundProvider). Use this
 * instead of RTL's raw `render` for any component that calls `useSound()`,
 * directly or through a child.
 */
export const renderWithProviders = (
  ui: React.ReactElement,
  options?: RenderOptions,
) => render(<SoundProvider>{ui}</SoundProvider>, options);

export * from "@testing-library/react";
