import { Dispatch, SetStateAction, useState } from "react";

const usePaste = (): [string, Dispatch<SetStateAction<string>>] => {
  const [paste, setPaste] = useState("");

  return [paste, setPaste];
};

export default usePaste;
