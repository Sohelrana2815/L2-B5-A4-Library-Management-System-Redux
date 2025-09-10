import type { Book } from "@/types/books";
import type { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import EditBookModal from "../dialogs/EditBookModal";
import BorrowBookModal from "../dialogs/BorrowBookModal";
import { useNavigate } from "react-router";



export const columns: ColumnDef<Book>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        className="border"
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "author",
    header: "Author",
  },
  {
    accessorKey: "genre",
    header: "Genre",
  },
  {
    accessorKey: "isbn",
    header: "ISBN",
  },
  {
    accessorKey: "copies",
    header: "Copies",
  },
  {
    accessorKey: "available",
    header: "Available",
    cell: ({ row }) => {
      const isAvailable = row.getValue("available");
      return <div>{isAvailable ? "Available" : "Unavailable"}</div>;
    },
  },

  {
    header: "Edit",
    cell: ({ row }) => {
      const book = row.original;

      return (
        <EditBookModal
          book={book}
          trigger={<Button variant={"outline"}>Edit</Button>}
        />
      );
    },
  },

  
  {
    header: "Borrow",
    cell: ({ row }) => {
      const book = row.original;

      return (
        <BorrowBookModal
          book={book}
          trigger={<Button variant={"outline"}>Borrow</Button>}
        />
      );
    },
  },

  {
    header: "Details",
    cell: ({ row }) => {
      const book = row.original;

      const DetailsButton = () => {
        const navigate = useNavigate();

        const handleDetailsClick = () => {
          navigate(`/book-details/${book._id}`); // Use _id instead of id
        };

        return (
          <Button variant={"outline"} onClick={handleDetailsClick}>
            Details
          </Button>
        );
      };

      return <DetailsButton />;
    },
  },
];
