import { useEffect } from "react";

export function useTokenWatcher(token: string | null, onExpire: () => void) {
  useEffect(() => {
    if (!token) return;

    if (expirationTime <= 0) {
      onExpire();
      return;
    }

    // set a timer until token expires
    const timer = setTimeout(() => {
      onExpire();
    }, expirationTime);

    return () => clearTimeout(timer);
  }, [token, onExpire]);
}
