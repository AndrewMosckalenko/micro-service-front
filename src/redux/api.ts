import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BACKEND_URL } from "../config";

export const api = createApi({
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
    getUser: builder.query({
      query: () => "user/whoami",
    }),
    getDocuments: builder.query({
      query: () => "document",
    }),
    signIn: builder.mutation({
      query: (body) => ({
        url: "user/sign-in",
        method: "POST",
        body,
      }),
    }),
    signUp: builder.mutation({
      query: (body) => ({
        url: "user/sign-up",
        method: "POST",
        body,
      }),
    }),
    postDocument: builder.mutation({
      query: (body) => ({
        url: "document",
        method: "POST",
        body,
      }),
    }),
    getDocumentWithParapgraphs: builder.mutation({
      query: (body) => ({
        url: `document/${body.id}/paragraphs`,
        method: "GET",
      })
    }),
    postParagraph: builder.mutation({
      query: (body) => ({
        url: `document/${body.id}`,
        method: 'POST',
        body,
      })
    })
  }),
});

export const {
  useGetDocumentsQuery,
  useGetUserQuery,
  usePostDocumentMutation,
  useSignInMutation,
  useSignUpMutation,
  useGetDocumentWithParapgraphsMutation,
  usePostParagraphMutation,
} = api;
