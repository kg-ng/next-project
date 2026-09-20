import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
/**
 * Computes elapsed years since a given career start year, rounded down.
 * Used to keep "X+ years" copy accurate without manual edits each year.
 */
export function getYearsOfExperience(startYear: number, startMonth = 0): number {
  const start = new Date(startYear, startMonth, 1);
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  const hasHadAnniversaryThisYear =
    now.getMonth() > start.getMonth() ||
    (now.getMonth() === start.getMonth() && now.getDate() >= start.getDate());
  if (!hasHadAnniversaryThisYear) years -= 1;
  return Math.max(years, 0);
}
