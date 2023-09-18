import { Action } from "@redux-saga/types";
import { api } from "../../api";
import { USER_SIGN_UP_PATH } from "../../paths";

export interface IPostSignUpRequestAction extends Action {
    name: string;
    email: string;
    password: string;
}

export function postSignUpRequest(action: IPostSignUpRequestAction) {
    return api.post(USER_SIGN_UP_PATH, action);
}