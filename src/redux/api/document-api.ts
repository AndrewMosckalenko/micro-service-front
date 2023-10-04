import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BACKEND_URL } from "../../config";

export const apiDocument = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BACKEND_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth?.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getDocuments: builder.query({
      query: () => "document",
    }),
    postDocument: builder.mutation({
      query: (body) => ({
        url: `document/${body.id}`,
        method: "POST",
        body: body.data,
        formData: true,
      }),
    }),
    getDocumentWithParapgraphs: builder.mutation({
      query: (body) => ({
        url: `document/${body.id}/paragraphs`,
        method: "GET",
      }),
    }),
    deleteDocument: builder.mutation({
      query: (body) => ({
        url: `/document/${body.id}`,
        method: "DELETE",
      }),
    }),
    createTag: builder.mutation({
      query: (body) => ({
        url: `/document/${body.id}/tag`,
        method: "POST",
        body,
      }),
    }),
    deleteTag: builder.mutation({
      query: (body) => ({
        url: `/document/${body.id}/tag`,
        method: "DELETE",
      }),
    }),
    patchDocument: builder.mutation({
      query: (body) => ({
        url: `/document/${body.id}`,
        method: "PATCH",
        body,
      }),
    }),
    copyDocument: builder.mutation({
      query: (body) => ({
        url: `/document/${body.id}/copy`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useGetDocumentsQuery,
  usePostDocumentMutation,
  useGetDocumentWithParapgraphsMutation,
  useDeleteDocumentMutation,
  useCreateTagMutation,
  useDeleteTagMutation,
  usePatchDocumentMutation,
  useCopyDocumentMutation,
} = apiDocument;
