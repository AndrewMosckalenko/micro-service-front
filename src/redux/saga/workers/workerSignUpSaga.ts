import { call, put } from "redux-saga/effects";

import { IPostSignUpRequestAction, postSignUpRequest } from "../../../api";
import { addTokenToLocalStorage } from "../../../utils";
import {
  requestWhoAmIAction,
  setErrorMessageToErrorReducerAction,
} from "../../actions";
import { SIGN_UP_ERROR_MESSAGE } from "../../../constants";

export function* workerSignUpSaga(action: IPostSignUpRequestAction): Generator {
  try {
    const response = (yield call(postSignUpRequest, action)) as any;
    addTokenToLocalStorage(response.data.access_token);
    yield put(requestWhoAmIAction());
  } catch (e) {
    yield put(setErrorMessageToErrorReducerAction(SIGN_UP_ERROR_MESSAGE));
  }
}
