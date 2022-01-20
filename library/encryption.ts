import CryptoJS from "crypto-js";

export const decrypt = (value: string, password: string): string => {
  return CryptoJS.AES.decrypt(value, password).toString(CryptoJS.enc.Utf8);
};

export const encrypt = (value: string, password: string): string => {
  return CryptoJS.AES.encrypt(value, password).toString();
};
