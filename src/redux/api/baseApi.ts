import type { Book } from "@/types/books";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://library-management-api-flame.vercel.app/api",
  }),
  tagTypes: ["books", "borrow"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["books"],
    }),

    // Add this new endpoint for single book with proper response handling
    getBookById: builder.query<Book, string>({
      query: (id) => `/books/${id}`,
      transformResponse: (response: ApiResponse<Book>) => response.data,
      providesTags: (result, error, id) => [{ type: "books", id }],
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

    borrowBook: builder.mutation({
      query: (borrowData) => ({
        url: "/borrow",
        method: "POST",
        body: borrowData,
      }),
      invalidatesTags: ["books", "borrow"],
    }),

    getBorrowSummery: builder.query({
      query: () => "/borrow",
      providesTags: ["borrow"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useDeleteBooksMutation,
  useCreateBookMutation,
  useUpdateBookMutation,
  useBorrowBookMutation,
  useGetBorrowSummeryQuery,
  useGetBookByIdQuery,
} = baseApi;
