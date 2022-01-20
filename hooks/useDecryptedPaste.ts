import { useEffect, useState } from "react";

import { decrypt } from "library/encryption";
import { defaultPassword } from "library/password";
import { defaultPaste } from "library/paste";

const useDecryptedPaste = (
  encryptedPaste: string,
  password: string
): string => {
  const [paste, setPaste] = useState(defaultPaste);

  useEffect(() => {
    if (password !== defaultPassword) {
      try {
        const decryptedPaste = decrypt(encryptedPaste, password);

        setPaste(decryptedPaste);
      } catch (error: unknown) {}
    }
  }, [encryptedPaste, password]);

  return paste;
};

export default useDecryptedPaste;
