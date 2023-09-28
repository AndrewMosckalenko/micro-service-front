import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BACKEND_URL } from "../../config";

export const apiUser = createApi({
  reducerPath: "userApi",
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
  }),
});

export const { useGetUserQuery, useSignInMutation, useSignUpMutation } =
  apiUser;
