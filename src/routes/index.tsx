import AddBook from "@/pages/books/AddBook";
import Books from "@/pages/books/Books";
import Summery from "@/pages/books/Summery";
import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
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
    ],
  },
]);
