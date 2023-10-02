import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { apiUser, apiDocument } from "./api";
import authSlice from "./auth-slice";
import documentSlice from "./document-slice";

const reducer = combineReducers({
  [apiUser.reducerPath]: apiUser.reducer,
  [apiDocument.reducerPath]: apiDocument.reducer,
  auth: authSlice,
  document: documentSlice,
});

const store = configureStore({
  reducer,
  middleware: (defaultMiddlewares) =>
    defaultMiddlewares().concat([apiUser.middleware, apiDocument.middleware]),
});

export default store;
