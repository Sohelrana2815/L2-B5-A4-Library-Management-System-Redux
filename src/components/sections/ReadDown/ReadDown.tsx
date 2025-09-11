import { ArrowRight } from "lucide-react";
import SectionTitle from "../sectionTitle/SectionTitle";
import { Button } from "@/components/ui/button";

const cardsData = [
  {
    id: 1,
    booksCount: 20,
    text: "to Help You Bring Up a Child",
  },
  {
    id: 2,
    booksCount: 15,
    text: "to Help You Learn Cooking",
  },
  {
    id: 3,
    booksCount: 50,
    text: "to Help You Stay Positive",
  },
];

const ReadDown = () => {
  return (
    <>
      <SectionTitle title="The ReadDown" />
      <div className="p-6 max-w-7xl flex gap-x-3 mx-auto">
        {cardsData.map((book) => (
          <div
            key={book.id}
            className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              {book.booksCount}
            </h5>
            <p className="mb-3 font-normal text-gray-700 text-center dark:text-gray-400">
              {book.text}
            </p>
            <div className="justify-center flex">
              <Button>
                Read more
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ReadDown;
