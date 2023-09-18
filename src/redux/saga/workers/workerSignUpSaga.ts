import { call } from "redux-saga/effects";
import { IPostSignUpRequestAction, postSignUpRequest } from "../../../api";
import { addTokenToLocalStorage } from "../../../utils";


export function* workerSignUpSaga(action: IPostSignUpRequestAction): Generator {
    try {
        const response = (yield call(postSignUpRequest, action)) as any;
        addTokenToLocalStorage(response.data.access_token);
    }
    catch(e) {

    }
}