import React from "react";
import { cn } from "@/lib/utils";
import { WORK_STATUS } from "@/constants";

/**
 * Status pill for a work-experience entry's `period` field. Isolated so the
 * "is this the current role?" styling decision lives in exactly one place
 * (single-responsibility) instead of being re-derived with a ternary inline
 * inside Experience.tsx.
 */
export const WorkStatusBadge = ({ period }: { period: string }) => {
  const isCurrent = period === WORK_STATUS.CURRENT;

  return (
    <span
      className={cn(
        "font-mono-pixel text-sm md:text-base font-bold px-3 py-1.5 pixel-corners-sm border-2 shrink-0 uppercase tracking-wider",
        isCurrent
          ? "border-amber-solid bg-amber-solid text-espresso-solid"
          : "border-espresso bg-black-100 text-terracotta"
      )}
    >
      {period}
    </span>
  );
};

export default WorkStatusBadge;
