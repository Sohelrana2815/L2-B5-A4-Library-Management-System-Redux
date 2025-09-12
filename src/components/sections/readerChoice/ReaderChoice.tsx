import { useGetBorrowSummeryQuery } from "@/redux/api/baseApi";
import SectionTitle from "../sectionTitle/SectionTitle";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ReaderChoice = () => {
  const {
    data: response,
    isLoading,
    isError,
  } = useGetBorrowSummeryQuery(undefined);

  const borrowedBooks = response?.data || [];

  console.log(borrowedBooks);
  return (
    <>
      <SectionTitle title="Picked by Readers" />
      <div className="max-w-7xl p-4 grid grid-cols-1 md:grid-cols-3 mx-auto">
        {borrowedBooks.map((borrowedBook) => (
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src="/book_cover.png" alt="" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {borrowedBook.book.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <span className="font-bold"> ISBN:</span>{" "}
                {borrowedBook.book.isbn}
              </p>

              <h2>
                <span>Total sold:</span> {borrowedBook.totalQuantity}
              </h2>
              <Button>
                Read more
                <ArrowRight />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ReaderChoice;
