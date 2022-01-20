import { Dispatch, SetStateAction, useState } from "react";

import { defaultPaste } from "library/paste";

const usePaste = (): [string, Dispatch<SetStateAction<string>>] => {
  const [paste, setPaste] = useState(defaultPaste);

  return [paste, setPaste];
};

export default usePaste;
