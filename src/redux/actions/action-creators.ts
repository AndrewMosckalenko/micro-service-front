import { REQUEST_GET_SIGN_IN_ACTION } from "./actions";


export const requestSignInAction = (email: string, password: string) => ({
        type: REQUEST_GET_SIGN_IN_ACTION,
        email,
        password
})