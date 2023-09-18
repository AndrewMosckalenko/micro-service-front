import { IDocument } from "../../interfaces";
import {
  DocumentsReducerPayload,
  SET_DOCUMENTS_TO_DOCUMENTS_REDUCER_ACTION,
} from "../actions";

export interface IDocumentsReducer {
  documents: IDocument[] | null;
}

const initialState: IDocumentsReducer = {
  documents: null,
};

export function documentsReducer(
  state: IDocumentsReducer = initialState,
  { type, payload }: DocumentsReducerPayload,
) {
  switch (type) {
    case SET_DOCUMENTS_TO_DOCUMENTS_REDUCER_ACTION:
      return { ...state, documents: payload };

    default:
      return state;
  }
}
