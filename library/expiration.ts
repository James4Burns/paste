import { add as addDate, isAfter } from "date-fns";

import { TExpiration } from "types/expiration";

export const hasExpired = (
  expiration: TExpiration,
  past: Date,
  current: Date
): boolean => {
  switch (expiration) {
    case "Never":
      return false;
    case "10 minutes":
      return isAfter(current, addDate(past, { minutes: 10 }));
    case "1 hour":
      return isAfter(current, addDate(past, { hours: 1 }));
    case "1 day":
      return isAfter(current, addDate(past, { days: 1 }));
    case "1 week":
      return isAfter(current, addDate(past, { weeks: 1 }));
    case "2 weeks":
      return isAfter(current, addDate(past, { weeks: 2 }));
    case "1 month":
      return isAfter(current, addDate(past, { months: 1 }));
    case "6 months":
      return isAfter(current, addDate(past, { months: 6 }));
    case "1 year":
      return isAfter(current, addDate(past, { years: 1 }));
  }
};

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
