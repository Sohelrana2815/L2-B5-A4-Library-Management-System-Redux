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
      <div className="p-6 grid max-w-4/5 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 mx-auto">
        {cardsData.map((book) => (
          <div
            key={book.id}
            className="w-full p-6 bg-[#1E5128] dark:bg-[#1E5128] border border-gray-200 rounded-lg shadow-sm  dark:border-gray-700 py-20"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white text-center">
              <span className="text-[#D8E9A8]">{book.booksCount}</span>{" "}
              <i>Books</i>
            </h5>
            <p className="mb-3 font-normal dark:text-[#D8E9A8] text-white text-center">
              {book.text}
            </p>
            <div className="justify-center flex">
              <Button className="dark:bg-[#191A19] dark:hover:text-[#4E9F3D] bg-[#4E9F3D] rounded-none dark:text-[#D8E9A8]">
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
