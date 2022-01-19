import type { TSettings } from "types/settings";
import type { TTheme } from "types/theme";
import { defaultTheme } from "./theme";

export const createSettings = (theme: TTheme, title: string): TSettings => {
  return { theme, title };
};

export const defaultSettings = createSettings(defaultTheme, "Next.js Starter");
