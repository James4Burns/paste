import { TExpiration } from "types/expiration";

export const toExpiration = (val: unknown): TExpiration | undefined => {
  if (typeof val === "string") {
    if (
      val === "Never" ||
      val === "10 minutes" ||
      val === "1 hour" ||
      val === "1 day" ||
      val === "1 week" ||
      val === "2 weeks" ||
      val === "1 month" ||
      val === "6 months" ||
      val === "1 year"
    ) {
      return val;
    }
  }

  return undefined;
};

export const defaultExpiration: TExpiration = "Never";
export const expirations: TExpiration[] = [
  "Never",
  "10 minutes",
  "1 hour",
  "1 day",
  "1 week",
  "2 weeks",
  "1 month",
  "6 months",
  "1 year",
];
