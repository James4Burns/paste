import { useEffect, useState } from "react";

import { defaultPaste } from "library/paste";
import { TResponse } from "types/api";

const useEncryptedPaste = (
  response: TResponse<{ paste: string; encrypted: boolean } | {}> | undefined
): string => {
  const [paste, setPaste] = useState(defaultPaste);

  useEffect(() => {
    if (
      response &&
      !response.error &&
      "paste" in response.data &&
      "encrypted" in response.data
    ) {
      setPaste(response.data.paste);
    }
  }, [response]);

  return paste;
};

export default useEncryptedPaste;
