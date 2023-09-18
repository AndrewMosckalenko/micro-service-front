import { call, put } from "redux-saga/effects";

import { getDocumentsRequest } from "../../../api/requests";
import { setDocumentsToDocumentsReducerAction } from "../../actions";


export function* workerGetDocumentsSaga(): Generator {
    try {
        const documents = (yield call(getDocumentsRequest)) as any;
        yield put(setDocumentsToDocumentsReducerAction(documents.data));
    }
    catch(e) {
        console.log(e)
    }
}