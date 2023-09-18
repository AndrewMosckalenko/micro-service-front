import { call, put } from "redux-saga/effects";
import { IPostSignUpRequestAction, postSignUpRequest } from "../../../api";
import { addTokenToLocalStorage } from "../../../utils";
import { requestWhoAmIAction } from "../../actions";


export function* workerSignUpSaga(action: IPostSignUpRequestAction): Generator {
    try {
        const response = (yield call(postSignUpRequest, action)) as any;
        addTokenToLocalStorage(response.data.access_token);
        yield put(requestWhoAmIAction());
    }
    catch(e) {

    }
}