import axios from "axios";

import { createError } from "./api";
import { encrypt } from "./encryption";
import { TResponse } from "types/api";
import { TExpiration } from "types/expiration";

export const getAPI = async (url: string) => {
  try {
    const request = await axios.get<
      TResponse<{ paste: string; encrypted: boolean }>
    >(url);

    return request.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      return createError(error.response.data);
    } else {
      return createError("Unknown error");
    }
  }
};

export const postAPI = async (
  paste: string,
  password: string,
  expiration: TExpiration,
  burn: boolean
): Promise<TResponse<string | {}>> => {
  const encrypted = password !== "";
  const finalPaste = encrypted ? encrypt(paste, password) : paste;

  try {
    const request = await axios.post<TResponse<string>>(apiRoute, {
      paste: finalPaste,
      expiration,
      burn,
      encrypted,
    });

    return request.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      return createError(error.response.data);
    } else {
      return createError("Unknown error");
    }
  }
};

export const apiRoute = "/api/paste";
