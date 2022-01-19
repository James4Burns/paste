import type { TTheme } from "types/theme";

const createTheme = (bg: string, border: string, text: string): TTheme => {
  return { bg, border, text };
};

export const blankTheme = createTheme("", "", "");
export const defaultTheme = createTheme(
  "bg-light dark:bg-dark",
  "border-black dark:border-white",
  "text-black dark:text-white"
);
