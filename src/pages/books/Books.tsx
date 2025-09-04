import { columns } from "@/components/books-table/columns";
import {
  useDeleteBooksMutation,
  useGetBooksQuery,
} from "../../redux/api/baseApi";
import { DataTable } from "@/components/books-table/data-table";
import Toolbar from "@/components/toolbar/Toolbar";
import { useState } from "react";

const Books = () => {
  const { data: response, isError, isLoading } = useGetBooksQuery(undefined);
  const books = response?.data || [];
  const [selectedBooks, setSelectedBooks] = useState<string[]>([]);

  const [deleteBooks] = useDeleteBooksMutation();

  const handleDelete = async () => {
    try {
      await deleteBooks(selectedBooks).unwrap();
      setSelectedBooks([]);
      console.log("Book deleted successfully");
    } catch (error) {
      console.error("Failed to delete book", error);
    }
  };

  // console.log({ books, isError, isLoading });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error fetching books</div>;
  }

  return (
    <>
      <div>
        <Toolbar selectedCount={selectedBooks.length} onDelete={handleDelete} />
        <DataTable
          selectedBooks={selectedBooks}
          setSelectedBooks={setSelectedBooks}
          columns={columns}
          data={books}
        />
      </div>
    </>
  );
};

export default Books;
