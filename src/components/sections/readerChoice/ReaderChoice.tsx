import { useGetBorrowSummeryQuery } from "@/redux/api/baseApi";
import SectionTitle from "../sectionTitle/SectionTitle";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import "./book-cover.css";
import type { Borrow } from "@/types/borrow";
const bookCoverImages = [
  "/book-covers/book-cover1.webp",
  "/book-covers/book-cover2.webp",
  "/book-covers/book-cover3.webp",
];
const ReaderChoice = () => {
  const {
    data: response,
    isLoading,
    isError,
  } = useGetBorrowSummeryQuery(undefined);

  const borrowedBooks = response?.data || [];

  console.log(borrowedBooks);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading reader's choices.</div>;
  }
  return (
    <>
      <SectionTitle title="Picked by Readers" />
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 p-3 max-w-4/5 mx-auto">
        {borrowedBooks.map((borrowedBook: Borrow, index: number) => {
          // Use the modulo operator (%) to cycle through the available book covers.
          // This ensures that each book gets a different cover from the array,
          // and if there are more books than covers, it will start reusing them.
          const coverImage = bookCoverImages[index % bookCoverImages.length];

          return (
            <div
              key={borrowedBook.book.isbn}
              className="bg-[#1E5128]  border-gray-200 rounded-lg shadow-sm dark:bg-[#D8E9A8]   dark:border-gray-700"
            >
              {coverImage && (
                <img
                  className="rounded-t-lg book-cover-image"
                  src={coverImage}
                  alt={`Cover of ${borrowedBook.book.title}`}
                />
              )}
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#D8E9A8] dark:text-[#191A19]">
                  {borrowedBook.book.title}
                </h5>
                <p className="mb-3 font-normal text-[#D8E9A8] dark:text-[#191A19]">
                  <span className="font-bold"> ISBN:</span>{" "}
                  {borrowedBook.book.isbn}
                </p>

                <div className="space-y-2">
                  <h2 className="dark:text-[#191A19] text-[#D8E9A8]">
                    <span>Total sold:</span> {borrowedBook.totalQuantity}
                  </h2>
                  <Button className="dark:bg-[#1E5128] bg-[#191A19] text-[#D8E9A8] w-full hover:bg-[D8E9A8] dark:text-white dark:hover:text-gray-300">
                    Read more
                    <ArrowRight />
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ReaderChoice;
