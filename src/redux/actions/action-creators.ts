import { IDocument, IUser } from "../../interfaces";
import {
  REQUEST_GET_ALL_DOCUMENTS_ACTION,
  REQUEST_GET_SIGN_IN_ACTION,
  REQUEST_GET_WHO_AM_I_ACTION,
  REQUEST_POST_DOCUMENT_ACTION,
  REQUEST_POST_SIGN_UP_ACTION,
  SET_DOCUMENTS_TO_DOCUMENTS_REDUCER_ACTION,
  SET_ERROR_MESSAGE_TO_ERROR_REDUCER_ACTION,
  SET_USER_TO_USER_REDUCER_ACTION,
} from "./actions";

export const requestSignInAction = (email: string, password: string) => ({
  type: REQUEST_GET_SIGN_IN_ACTION,
  email,
  password,
});

export const requestDocumentsAction = () => ({
  type: REQUEST_GET_ALL_DOCUMENTS_ACTION,
});

export const requestWhoAmIAction = () => ({
  type: REQUEST_GET_WHO_AM_I_ACTION,
});

export const requestSignUpAction = (
  email: string,
  name: string,
  password: string,
) => ({
  type: REQUEST_POST_SIGN_UP_ACTION,
  name,
  password,
  email,
});

export const requestPostDocumentAction = (name: string) => ({
  type: REQUEST_POST_DOCUMENT_ACTION,
  name,
})

export const setDocumentsToDocumentsReducerAction = (
  documents: IDocument[],
) => {
  return <const>{
    type: SET_DOCUMENTS_TO_DOCUMENTS_REDUCER_ACTION,
    payload: documents,
  };
};

export const setUserToUserReducerAction = (user: IUser | null) => {
  return <const>{
    type: SET_USER_TO_USER_REDUCER_ACTION,
    payload: user,
  };
};

export const setErrorMessageToErrorReducerAction = (
  errorMessage: string | null,
) => {
  return <const>{
    type: SET_ERROR_MESSAGE_TO_ERROR_REDUCER_ACTION,
    payload: errorMessage,
  };
};

export type DocumentsReducerPayload = ReturnType<
  typeof setDocumentsToDocumentsReducerAction
>;

export type UserReducerPayload = ReturnType<typeof setUserToUserReducerAction>;

export type ErrorReducerPayload = ReturnType<
  typeof setErrorMessageToErrorReducerAction
>;
