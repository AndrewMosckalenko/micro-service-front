import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BACKEND_URL } from "../../config";

export const apiProject = createApi({
  reducerPath: "projectApi",
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
    postProject: builder.mutation({
      query: (body) => ({
        url: `project/${body.projectId}`,
        method: "POST",
        body,
      }),
    }),
    deleteProject: builder.mutation({
      query: (body) => ({
        url: `project/${body.id}`,
        method: "DELETE",
      }),
    }),
    getProjects: builder.query({
      query: () => "project",
    }),
    getProject: builder.mutation({
      query: (body) => ({
        url: `project/${body.id}`,
        method: "GET",
      }),
    }),
    patchProject: builder.mutation({
      query: (body) => ({
        url: `project/${body.id}`,
        method: "PATCH",
        body,
      }),
    }),
  }),
});

export const {
  usePostProjectMutation,
  useDeleteProjectMutation,
  useGetProjectsQuery,
  useGetProjectMutation,
  usePatchProjectMutation,
} = apiProject;
