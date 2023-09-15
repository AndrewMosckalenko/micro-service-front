import { all, takeEvery } from "redux-saga/effects";
import { REQUEST_GET_SIGN_IN_ACTION } from "../actions/actions";
import { workerSignInSaga } from "./workers/workerSignInSaga";

export function* saga() {
    yield all([
        takeEvery(REQUEST_GET_SIGN_IN_ACTION, workerSignInSaga),
    ])
}