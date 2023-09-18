import { IReducerState } from ".";

export const documentReducerSelector = (state: IReducerState) =>
  state.documentsReducer;
export const userReducerSelector = (state: IReducerState) => state.userReducer;
export const errorReducerSelector = (state: IReducerState) =>
  state.errorReducer;

export const userFromUserReducerSelector = (state: IReducerState) =>
  userReducerSelector(state).user;
export const documentsFromDocumentsReducerSelector = (state: IReducerState) =>
  documentReducerSelector(state).documents;
export const errorFromErrorReducerSelector = (state: IReducerState) =>
  errorReducerSelector(state).error;
