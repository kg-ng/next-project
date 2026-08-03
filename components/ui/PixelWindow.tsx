import React from "react";
import { cn } from "@/lib/utils";

/**
 * A retro "OS window" style card shell — title bar with pixel dots + label,
 * hard pixel-corners, and an offset drop shadow. Used across the site as the
 * primary content container instead of soft rounded glassmorphic cards.
 */
export const PixelWindow = ({
  title,
  children,
  className,
  bodyClassName,
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "pixel-corners pixel-shadow border-2 border-espresso bg-black-200",
        className
      )}
    >
      {title && (
        <div className="pixel-window-bar">
          <span className="pixel-dot bg-terracotta-solid" />
          <span className="pixel-dot bg-amber-solid" />
          <span className="pixel-dot bg-amber-solid/70" />
          <span className="ml-2 font-mono-pixel text-sm tracking-wide text-white-200">
            {title}
          </span>
        </div>
      )}
      <div className={cn("p-4 md:p-6", bodyClassName)}>{children}</div>
    </div>
  );
};

export default PixelWindow;
