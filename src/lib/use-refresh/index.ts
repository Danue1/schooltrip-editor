import { useState } from "react";

export const useRefresh = (): readonly [number, () => void] => {
  const [token, setToken] = useState(0);
  const refresh = () => setToken(token => token + 1);
  return [token, refresh] as const;
};
