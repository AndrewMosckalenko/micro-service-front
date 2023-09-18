import { combineReducers } from 'redux';
import { IDocumentsReducer, documentsReducer } from './doucments-reducer';
import { IUserReducer, userReducer } from './user-reducer';

export interface IReducerState {
    documentsReducer: IDocumentsReducer;
    userReducer: IUserReducer;
}

export const reducer = combineReducers({
    documentsReducer,
    userReducer,
})
