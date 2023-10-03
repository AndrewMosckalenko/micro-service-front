import { useEffect } from "react";

export function useComponentMount(callback: () => void) {
  useEffect(callback, []);
}
