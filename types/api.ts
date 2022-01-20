export type TResponse<T = {}> =
  | { error: true; message: string }
  | { error: false; data: T };
