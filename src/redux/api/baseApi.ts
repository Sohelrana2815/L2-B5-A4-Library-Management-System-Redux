import type { Book } from "@/types/books";
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
    createBook: builder.mutation({
      query: (taskData) => ({
        url: "/books",
        method: "POST",
        body: taskData,
      }),
      invalidatesTags: ["books"],
    }),

    updateBook: builder.mutation({
      query: ({ bookId, bookData }: { bookId: string; bookData: Book }) => ({
        url: `/books/${bookId}`,
        method: "PUT",
        body: bookData,
      }),
      invalidatesTags: ["books"],
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

export const {
  useGetBooksQuery,
  useDeleteBooksMutation,
  useCreateBookMutation,
  useUpdateBookMutation,
} = baseApi;
