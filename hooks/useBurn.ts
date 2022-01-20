import { Dispatch, SetStateAction, useState } from "react";

import { defaultBurn } from "library/burn";

const useBurn = (): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [burn, setBurn] = useState(defaultBurn);

  return [burn, setBurn];
};

export default useBurn;
