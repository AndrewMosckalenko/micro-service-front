import { call, put } from "redux-saga/effects";

import { getSignInRequest, IGetSignInRequestAction } from "../../../api";
import { addTokenToLocalStorage } from "../../../utils";
import { requestWhoAmIAction } from "../../actions";

export function* workerSignInSaga(action: IGetSignInRequestAction): Generator {
  try {
    const response = (yield call(getSignInRequest, action)) as any;
    addTokenToLocalStorage(response.data.access_token);
    yield put(requestWhoAmIAction());
  } catch (e) {
    console.log(e);
  }
}
