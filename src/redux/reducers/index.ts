import { combineReducers } from "redux";
import { IDocumentsReducer, documentsReducer } from "./doucments-reducer";
import { IUserReducer, userReducer } from "./user-reducer";
import { IErrorReducer, errorReducer } from "./error-reducer";

export interface IReducerState {
  documentsReducer: IDocumentsReducer;
  userReducer: IUserReducer;
  errorReducer: IErrorReducer;
}

export const reducer = combineReducers({
  documentsReducer,
  userReducer,
  errorReducer,
});
