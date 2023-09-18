import { call, put } from "redux-saga/effects";

import { getSignInRequest, IGetSignInRequestAction } from "../../../api";
import { addTokenToLocalStorage } from "../../../utils";
import {
  requestWhoAmIAction,
  setErrorMessageToErrorReducerAction,
} from "../../actions";
import { SIGN_IN_ERROR_MESSAGE } from "../../../constants";

export function* workerSignInSaga(action: IGetSignInRequestAction): Generator {
  try {
    const response = (yield call(getSignInRequest, action)) as any;
    addTokenToLocalStorage(response.data.access_token);
    yield put(requestWhoAmIAction());
  } catch (e) {
    yield put(setErrorMessageToErrorReducerAction(SIGN_IN_ERROR_MESSAGE));
  }
}
