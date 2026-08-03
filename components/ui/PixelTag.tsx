import React from "react";
import { cn } from "@/lib/utils";
import { PIXEL_TAG_CLASS } from "@/constants";

/**
 * Small pixel-cornered "tag" pill — used for skills, tech stack badges, and
 * domain labels. Extracted so Stack/Experience/Highlights/Projects share one
 * implementation instead of four copies of the same className string (DRY).
 */
export const PixelTag = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <span className={cn(PIXEL_TAG_CLASS, className)}>{children}</span>;

export default PixelTag;
