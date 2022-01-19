import { defaultTheme } from "./theme";
import type { TSettings } from "types/settings";
import type { TTheme } from "types/theme";

export const createSettings = (theme: TTheme, title: string): TSettings => {
  return { theme, title };
};

export const defaultSettings = createSettings(defaultTheme, "Paste");
