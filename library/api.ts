import { TResponse } from "types/api";

export const createError = (message: string): TResponse => {
  return { error: true, message };
};

export const createSuccess = <T>(data: T): TResponse<T> => {
  return { error: false, data };
};
