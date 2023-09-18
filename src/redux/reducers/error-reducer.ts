import {
  ErrorReducerPayload,
  SET_ERROR_MESSAGE_TO_ERROR_REDUCER_ACTION,
} from "../actions";

export interface IErrorReducer {
  error?: string;
}

const initialState = {};

export function errorReducer(
  state: IErrorReducer = initialState,
  { type, payload }: ErrorReducerPayload,
) {
  switch (type) {
    case SET_ERROR_MESSAGE_TO_ERROR_REDUCER_ACTION:
      return { ...state, error: payload };

    default:
      return state;
  }
}
