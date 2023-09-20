import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import authSlice from "./auth-slice";

const reducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authSlice,
});

const store = configureStore({
  reducer,
  middleware: (defaultMiddlewares) =>
    defaultMiddlewares().concat([api.middleware]),
});

export default store;
