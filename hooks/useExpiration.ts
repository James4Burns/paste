import { Dispatch, SetStateAction, useState } from "react";

import { defaultExpiration, TExpiration, toExpiration } from "types/expiration";

export const useExpiration = (): {
  expiration: TExpiration;
  setExpiration: Dispatch<SetStateAction<TExpiration>>;
  changeExpiration: (val: string) => void;
} => {
  const [expiration, setExpiration] = useState(defaultExpiration);

  const changeExpiration = (val: string): void => {
    const newExpiration = toExpiration(val);

    if (newExpiration) {
      setExpiration(newExpiration);
    }
  };

  return { expiration, setExpiration, changeExpiration };
};

export default useExpiration;
