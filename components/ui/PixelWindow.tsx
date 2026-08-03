"use client";
import React, { useState } from "react";
import { motion, useDragControls } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * A retro "OS window" style card shell — title bar with pixel dots + label,
 * hard pixel-corners, and an offset drop shadow. Used across the site as the
 * primary content container instead of soft rounded glassmorphic cards.
 *
 * Passing `draggable` turns the title bar into a drag handle (desktop-window
 * style, constrained to the viewport) and brings the window to the front
 * (z-index bump) on interaction — opt-in per usage since most instances
 * (stack, experience, etc.) should stay static/in-flow.
 */
export const PixelWindow = ({
  title,
  children,
  className,
  bodyClassName,
  draggable = false,
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
  draggable?: boolean;
}) => {
  const [front, setFront] = useState(false);
  const dragControls = useDragControls();

  const content = (
    <>
      {title && (
        <div
          onPointerDown={(e) => {
            if (draggable) {
              setFront(true);
              dragControls.start(e);
            }
          }}
          className={cn(
            "pixel-window-bar",
            draggable && "cursor-grab active:cursor-grabbing select-none",
          )}
        >
          <span className="pixel-dot bg-terracotta-solid" />
          <span className="pixel-dot bg-amber-solid" />
          <span className="pixel-dot bg-amber-solid/70" />
          <span className="ml-2 font-mono-pixel text-sm tracking-wide text-white-200">
            {title}
          </span>
        </div>
      )}
      <div className={cn("p-4 md:p-6", bodyClassName)}>{children}</div>
    </>
  );

  const baseClassName = cn(
    "pixel-corners pixel-shadow border-2 border-espresso bg-black-200",
    className,
  );

  if (!draggable) {
    return <div className={baseClassName}>{content}</div>;
  }

  return (
    <motion.div
      drag
      dragListener={false}
      dragControls={dragControls}
      dragMomentum={false}
      dragElastic={0.1}
      whileDrag={{ scale: 1.02 }}
      style={{ zIndex: front ? 30 : "auto", position: "relative" }}
      className={baseClassName}
    >
      {content}
    </motion.div>
  );
};

export default PixelWindow;
