import { useEffect, useRef } from "react";

export function useComponentUpdate(callback: () => void, deps: Array<any>) {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      callback();
    } else {
      didMount.current = true;
    }
  }, deps);
}
