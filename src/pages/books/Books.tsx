import { columns } from "@/components/books-table/columns";

import {
  useDeleteBooksMutation,
  useGetBooksQuery,
} from "../../redux/api/baseApi";
import { DataTable } from "@/components/books-table/data-table";
import Toolbar from "@/components/toolbar/Toolbar";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import EmailForm from "@/components/sections/emailForm/EmailForm";
import { Button } from "@/components/ui/button";
import Categories from "@/components/sections/bookCategory/Categories";
import ReadDown from "@/components/sections/ReadDown/ReadDown";
import ReaderChoice from "@/components/sections/readerChoice/ReaderChoice";
import PopularAuthors from "@/components/sections/popularAuthors/PopularAuthors";
import Offer from "@/components/sections/offers/Offer";
import Banner1 from "@/components/sections/banners/Banner1";
import Banner2 from "@/components/sections/banners/Banner2";
import Banner3 from "@/components/sections/banners/Banner3";
import SectionTitle from "@/components/sections/sectionTitle/SectionTitle";

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

  if (books.length === 0) {
    <div>No Books Available</div>;
  }

  if (isError) {
    <div>Error fetching books</div>;
  }

  return (
    <>
      <Banner1 />
      <div className="mt-56">
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
          className="rounded-none bg-[#1E5128] hover:bg-[#4E9F3D] text-white hover:text-white dark:bg-[#1E5128] dark:text-white py-7 mx-auto px-10 text-base"
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
      <ReaderChoice />
      <Banner2 />
      <PopularAuthors />
      <Banner3 />
      <Offer />
      <Toaster />
    </>
  );
};

export default Books;
