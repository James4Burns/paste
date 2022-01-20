export const toString = (val: unknown): string | undefined => {
  if (typeof val === "string") {
    return val;
  }

  return undefined;
};
