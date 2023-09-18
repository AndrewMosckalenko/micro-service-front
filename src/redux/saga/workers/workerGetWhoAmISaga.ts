import { call, put } from "redux-saga/effects";
import { getWhoAmIRequest } from "../../../api/requests";
import { setUserToUserReducerAction } from "../../actions";
import { removeTokenFromLocalStorage } from "../../../utils";

export function* workerGetWhoAmISaga(): Generator {
    try {
        const user = yield call(getWhoAmIRequest)
        yield put(setUserToUserReducerAction((user as any).data))
    }
    catch(e: any) {
        console.log(e)
        if(e.response.status === 401) {
            removeTokenFromLocalStorage();
        }
    }
}