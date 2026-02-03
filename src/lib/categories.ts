export const CATEGORIES = [
  "FURNITURE",
  "HOUSEHOLD",
  "INDUSTRIAL",
  "GARDENING",
  "BABY & KIDS",
  "BOTTLES & LUNCH BOXES",
  "POULTRIES",
] as const;

export type Category = typeof CATEGORIES[number];

export const toSlug = (name: string) => name.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-");
