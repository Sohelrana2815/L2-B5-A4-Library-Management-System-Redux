import type { ColumnDef } from "@tanstack/react-table";
import { formatRelativeTime } from "@/lib/date-utils";
interface BorrowSummary {
  totalQuantity: number;
  book: {
    title: string;
    isbn: string;
  };
  dueDate: Date;
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
  {
    accessorKey: "dueDate",
    header: "Due Date",
    cell: ({ row }) => {
      const dueDate = row.getValue("dueDate") as string;
      return formatRelativeTime(dueDate);
    },
  },
];
