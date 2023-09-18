import { IUser } from "../../interfaces";
import {
  SET_USER_TO_USER_REDUCER_ACTION,
  UserReducerPayload,
} from "../actions";

export interface IUserReducer {
  user?: IUser;
}

const initialState: IUserReducer = {};

export function userReducer(
  state: IUserReducer = initialState,
  { type, payload }: UserReducerPayload,
) {
  switch (type) {
    case SET_USER_TO_USER_REDUCER_ACTION:
      return { ...state, user: payload };

    default:
      return state;
  }
}
