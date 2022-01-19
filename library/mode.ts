import type { TMode } from "types/mode";

export const applyMode = (mode: TMode): void => {
  switch (mode) {
    case "Dark":
      document.documentElement.classList.add("dark");
      break;
    case "Light":
      document.documentElement.classList.remove("dark");
      break;
  }
};

export const loadMode = (): TMode | undefined => {
  const mode = localStorage.getItem(modeKey);

  if (mode && (mode === "Dark" || mode === "Light")) {
    return mode;
  } else {
    return undefined;
  }
};

export const saveMode = (mode: TMode): void => {
  localStorage.setItem(modeKey, mode);
};

export const switchMode = (mode: TMode): TMode => {
  switch (mode) {
    case "Dark":
      return "Light";
    case "Light":
      return "Dark";
  }
};

export const defaultMode: TMode = "Light";
const modeKey = "Mode";
