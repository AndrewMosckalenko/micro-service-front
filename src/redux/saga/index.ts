import { all, takeEvery } from "redux-saga/effects";
import { 
    REQUEST_GET_ALL_DOCUMENTS_ACTION, 
    REQUEST_GET_SIGN_IN_ACTION,
    REQUEST_GET_WHO_AM_I_ACTION, 
} from "../actions/actions";
import { 
    workerSignInSaga,
    workerGetDocumentsSaga,
    workerGetWhoAmISaga,
} from "./workers";

export function* saga() {
    yield all([
        takeEvery(REQUEST_GET_SIGN_IN_ACTION, workerSignInSaga),
        takeEvery(REQUEST_GET_ALL_DOCUMENTS_ACTION, workerGetDocumentsSaga),
        takeEvery(REQUEST_GET_WHO_AM_I_ACTION, workerGetWhoAmISaga),
    ])
}