import type { ColumnDef } from "@tanstack/react-table";

interface BorrowSummary {
  totalQuantity: number;
  book: {
    title: string;
    isbn: string;
  };
}

export const borrowColumns: ColumnDef<BorrowSummary>[] = [
  {
    accessorKey: "book.title",
    header: "Book Title",
  },
  {
    accessorKey: "book.isbn",
    header: "ISBN",
  },
  {
    accessorKey: "totalQuantity",
    header: "Total Quantity Borrowed",
  },
];
