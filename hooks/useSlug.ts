import { Dispatch, SetStateAction, useState } from "react";

import { defaultSlug } from "library/slug";

const useSlug = (): [string, Dispatch<SetStateAction<string>>] => {
  const [slug, setSlug] = useState(defaultSlug);

  return [slug, setSlug];
};

export default useSlug;
