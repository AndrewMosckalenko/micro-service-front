import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BACKEND_URL } from "../../config";

export const apiParagraph = createApi({
  reducerPath: "paragraphApi",
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
    postParagraph: builder.mutation({
      query: (body) => ({
        url: `paragraph/${body.id}`,
        method: "POST",
        body,
      }),
    }),
    patchParagraph: builder.mutation({
      query: (body) => ({
        url: `paragraph/${body.id}`,
        method: "PATCH",
        body,
      }),
    }),
    deleteParagraph: builder.mutation({
      query: (body) => ({
        url: `paragraph/${body.id}`,
        method: "DELETE",
      }),
    }),
    postTagToParagraph: builder.mutation({
      query: (body) => ({
        url: `paragraph/${body.id}/tag/${body.tagId}`,
        method: "POST",
      }),
    }),
    deleteTagFromParagraph: builder.mutation({
      query: (body) => ({
        url: `paragraph/tag/${body.id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useDeleteParagraphMutation,
  useDeleteTagFromParagraphMutation,
  usePatchParagraphMutation,
  usePostParagraphMutation,
  usePostTagToParagraphMutation,
} = apiParagraph;
