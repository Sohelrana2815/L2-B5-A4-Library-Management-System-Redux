import { columns } from "@/components/books-table/columns";

import {
  useDeleteBooksMutation,
  useGetBooksQuery,
} from "../../redux/api/baseApi";
import { DataTable } from "@/components/books-table/data-table";
import Toolbar from "@/components/toolbar/Toolbar";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import SectionTitle from "@/components/sections/sectionTitle/SectionTitle";
import EmailForm from "@/components/sections/emailForm/EmailForm";
import { Button } from "@/components/ui/button";
import Categories from "@/components/sections/bookCategory/Categories";
import BannerCarousel from "@/components/sections/banner/BannerCarousel";
import ReadDown from "@/components/sections/ReadDown/ReadDown";
const Books = () => {
  const { data: response, isError, isLoading } = useGetBooksQuery(undefined);
  const books = response?.data || [];
  const [selectedBooks, setSelectedBooks] = useState<string[]>([]);

  const [deleteBooks] = useDeleteBooksMutation();

  const handleDelete = async () => {
    try {
      await deleteBooks(selectedBooks).unwrap();
      setSelectedBooks([]);
      toast.success(`${selectedBooks.length} Book deleted successfully`);
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
      <BannerCarousel />
      <div className="mt-56 mb-10">
        <SectionTitle title="Discover Your Next Book" />
      </div>
      <Toolbar selectedCount={selectedBooks.length} onDelete={handleDelete} />
      <DataTable
        selectedBooks={selectedBooks}
        setSelectedBooks={setSelectedBooks}
        columns={columns}
        data={books}
      />

      <div className="w-full flex my-20">
        <Button
          className="bg-black dark:bg-green-900 mx-auto text-white rounded-none "
          size={"lg"}
        >
          Discover More Books
        </Button>
      </div>

      <EmailForm />

      <div className="mt-20">
        <SectionTitle title="Choose Your Book!" />
      </div>

      <Categories />
      <ReadDown />
      <Toaster />
    </>
  );
};

export default Books;
