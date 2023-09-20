import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { removeTokenFromLocalStorage } from "../utils";
import { setToken } from "../redux/auth-slice";

export function useLogout() {
  const dispatch = useDispatch();

  return useCallback(() => {
    removeTokenFromLocalStorage();
    dispatch(setToken(null));
  }, [dispatch]);
}
