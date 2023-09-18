import { call, put } from "redux-saga/effects";

import { getDocumentsRequest } from "../../../api";
import {
  setDocumentsToDocumentsReducerAction,
  setErrorMessageToErrorReducerAction,
} from "../../actions";
import { GET_DOCUMENT_ERROR_MESSAGE } from "../../../constants";

export function* workerGetDocumentsSaga(): Generator {
  try {
    const documents = (yield call(getDocumentsRequest)) as any;
    yield put(setDocumentsToDocumentsReducerAction(documents.data));
  } catch (e) {
    yield put(setErrorMessageToErrorReducerAction(GET_DOCUMENT_ERROR_MESSAGE));
  }
}
