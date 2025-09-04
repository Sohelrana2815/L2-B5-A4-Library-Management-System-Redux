import Layout from "@/components/layout/Layout";
import AddBook from "@/pages/books/AddBook";
import BookDetails from "@/pages/books/BookDetails";
import Books from "@/pages/books/Books";
import Summery from "@/pages/books/Summery";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Books,
      },
      {
        path: "all-books",
        Component: Books,
      },
      {
        path: "add-book",
        Component: AddBook,
      },
      {
        path: "borrow-summery",
        Component: Summery,
      },
      {
        path: "book-details/:bookId",
        Component: BookDetails,
      },
    ],
  },
]);
