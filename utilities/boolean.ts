export const toBoolean = (val: unknown): boolean | undefined => {
  if (typeof val === "boolean") {
    return val;
  }

  return undefined;
};
