import { Action } from '@redux-saga/types';

import { api } from "../../api";
import { DOCUMENT_PATH } from "../../paths";

export interface IPostDocumentRequest extends Action {
    name: string;
}

export function postDocumentRequest(action: IPostDocumentRequest) {
    return api.post(DOCUMENT_PATH, action)
}