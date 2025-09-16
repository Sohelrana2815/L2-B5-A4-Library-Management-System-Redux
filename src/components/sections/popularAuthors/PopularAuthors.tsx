import { Button } from "@/components/ui/button";
import SectionTitle from "../sectionTitle/SectionTitle";

const authors = [
  {
    id: 1,
    name: "Amy Stevens",
    image: "/authors/author1.webp",
    title: "author",
  },
  {
    id: 2,
    name: "Steven Moore",
    image: "/authors/author2.webp",
    title: "author",
  },
  {
    id: 3,
    name: "Jenny Sanders",
    image: "/authors/author3.webp",
    title: "author",
  },
  {
    id: 4,
    name: "Andrew Woods",
    image: "/authors/author4.webp",
    title: "editor",
  },
];

const PopularAuthors = () => {
  return (
    <>
      <SectionTitle title="Most Popular Authors" />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-10/12 mx-auto">
        {authors.map((author) => (
          <div
            key={author.id}
            className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-[#1E5128] dark:border-gray-700"
          >
            <div className="flex justify-end px-4 pt-4"></div>
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={author.image}
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Bonnie Green
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Visual Designer
              </span>
              <div className="flex mt-4 md:mt-6">
                <a className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#1E5128] rounded-lg hover:bg-[#191A19] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#4E9F3D] dark:hover:bg-[#191A19] dark:focus:ring-blue-800 ">
                  Add friend
                </a>
                <a className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                  Message
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-20">
        <Button className="rounded-none bg-[#1E5128] hover:bg-[#4E9F3D] text-white hover:text-white dark:bg-[#1E5128] dark:text-white py-7 px-10">
          View more
        </Button>
      </div>
    </>
  );
};

export default PopularAuthors;
