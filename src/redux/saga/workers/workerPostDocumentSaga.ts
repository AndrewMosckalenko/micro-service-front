import { call, put } from "redux-saga/effects";
import { IPostDocumentRequest, postDocumentRequest } from "../../../api/requests";
import { requestDocumentsAction, setErrorMessageToErrorReducerAction } from "../../actions";
import { POST_DOCUMENT_ERROR_MESSAGE } from "../../../constants";

export function* workerPostDocumentSaga(action: IPostDocumentRequest): Generator {
    try {
        yield call(postDocumentRequest, action);
        yield put(requestDocumentsAction())
    }
    catch(e) {
        yield put(requestDocumentsAction())
        yield put(setErrorMessageToErrorReducerAction(POST_DOCUMENT_ERROR_MESSAGE))
    }
}