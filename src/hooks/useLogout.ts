import { useDispatch } from "react-redux";
import { useCallback } from "react";

import { setUserToUserReducerAction } from "../redux/actions";
import { removeTokenFromLocalStorage } from "../utils";

export function useLogout() {
  const dispatch = useDispatch();

  return useCallback(() => {
    dispatch(setUserToUserReducerAction(null));
    removeTokenFromLocalStorage();
  }, [dispatch]);
}
