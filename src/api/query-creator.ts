import { USER_SIGN_IN_PATH } from "./paths";
import { IGetSignInRequestAction } from "./requests/get/get-sign-up";


export const userSignInQueryCreator = ({email, password}: IGetSignInRequestAction) => `${USER_SIGN_IN_PATH}?email=${email}&password=${password}`;
