import { call } from "redux-saga/effects";
import { getSignInRequest } from "../../../api"
import { IGetSignInRequestAction } from "../../../api/requests/get/get-sign-up"
import { addTokenToLocalStorage } from "../../../utils";


export function* workerSignInSaga(action: IGetSignInRequestAction): Generator {
    try {
        const response = (yield call(getSignInRequest, action)) as any;
        addTokenToLocalStorage(response.data.access_token);
    }
    catch(e) {
        console.log(e)
    }    
}