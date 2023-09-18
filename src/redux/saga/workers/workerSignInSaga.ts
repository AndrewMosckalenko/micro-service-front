import { call } from "redux-saga/effects";

import { getSignInRequest, IGetSignInRequestAction } from "../../../api";
import { addTokenToLocalStorage } from "../../../utils";

export function* workerSignInSaga(action: IGetSignInRequestAction): Generator {
  try {
    const response = (yield call(getSignInRequest, action)) as any;
    addTokenToLocalStorage(response.data.access_token);
  } catch (e) {
    console.log(e);
  }
}
