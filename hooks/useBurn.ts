import { Dispatch, SetStateAction, useState } from "react";

const useBurn = (): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [burn, setBurn] = useState(false);

  return [burn, setBurn];
};

export default useBurn;
