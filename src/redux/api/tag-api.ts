import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BACKEND_URL } from "../../config";

export const apiTag = createApi({
  reducerPath: "tagApi",
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
    postTag: builder.mutation({
      query: (body) => ({
        url: `tag/${body.projectId}`,
        method: "POST",
        body,
      }),
    }),
    deleteTag: builder.mutation({
      query: (body) => ({
        url: `tag/${body.id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useDeleteTagMutation, usePostTagMutation } = apiTag;
