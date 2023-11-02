import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { apiDocument, apiParagraph, apiProject, apiUser } from "./api";
import authSlice from "./auth-slice";
import documentSlice from "./document-slice";
import summaryTableSlice from "./summary-page-slice";
import { apiTag } from "./api/tag-api";

const reducer = combineReducers({
  [apiUser.reducerPath]: apiUser.reducer,
  [apiDocument.reducerPath]: apiDocument.reducer,
  [apiProject.reducerPath]: apiProject.reducer,
  [apiParagraph.reducerPath]: apiParagraph.reducer,
  [apiTag.reducerPath]: apiTag.reducer,
  auth: authSlice,
  document: documentSlice,
  summaryTable: summaryTableSlice,
});

const store = configureStore({
  reducer,
  middleware: (defaultMiddlewares) =>
    defaultMiddlewares().concat([
      apiUser.middleware,
      apiDocument.middleware,
      apiParagraph.middleware,
      apiProject.middleware,
      apiTag.middleware,
    ]),
});

export default store;
