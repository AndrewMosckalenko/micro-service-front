import { call } from "redux-saga/effects";
import { getDocumentsRequest } from "../../../api/requests/get/get-documents";
import { IDocument } from "../../../interfaces";


export function* workerGetDocumentsSaga(): Generator {
    try {
        const documents = (yield call(getDocumentsRequest)) as IDocument[];
    }
    catch(e) {

    }
}