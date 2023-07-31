import { useRef } from "react";

export function useRootRef<T extends HTMLElement>(): React.RefObject<T> {
  const rootRef = useRef<T>(null);

  return rootRef;
}
