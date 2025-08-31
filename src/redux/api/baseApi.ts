import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["books"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["books"],
    }),
    deleteBooks: builder.mutation({
      query: (ids: string[]) => ({
        url: "/books",
        method: "DELETE",
        body: { ids },
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const { useGetBooksQuery, useDeleteBooksMutation } = baseApi;
