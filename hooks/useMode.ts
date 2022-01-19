import { DispatchWithoutAction, useEffect, useReducer } from "react";

import {
  applyMode,
  defaultMode,
  loadMode,
  saveMode,
  switchMode,
} from "library/mode";

import { TMode } from "types/mode";

const useMode = (): [TMode, DispatchWithoutAction] => {
  const [mode, dispatch] = useReducer(modeReducer, defaultMode);

  useEffect(() => {
    const newMode = loadMode();

    if (newMode !== defaultMode) {
      dispatch();
    }
  }, []);

  useEffect(() => {
    applyMode(mode);
    saveMode(mode);
  }, [mode]);

  return [mode, dispatch];
};

const modeReducer = (mode: TMode): TMode => {
  return switchMode(mode);
};

export default useMode;
