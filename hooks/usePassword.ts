import { Dispatch, SetStateAction, useState } from "react";

import { defaultPassword } from "library/password";

const usePassword = (): [string, Dispatch<SetStateAction<string>>] => {
  const [password, setPassword] = useState(defaultPassword);

  return [password, setPassword];
};

export default usePassword;
