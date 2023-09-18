import { Action } from "@redux-saga/types";

import { api } from "../../api";
import { userSignInQueryCreator } from "../../query-creator";

export interface IGetSignInRequestAction extends Action {
  email: string;
  password: string;
}

export function getSignInRequest(action: IGetSignInRequestAction) {
  return api.get(userSignInQueryCreator(action));
}
