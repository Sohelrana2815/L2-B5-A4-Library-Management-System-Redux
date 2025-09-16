import { Button } from "@/components/ui/button";
import { genres } from "@/constant/genre";
import { useGetBooksQuery } from "@/redux/api/baseApi";

const bookImages = [
  {
    id: 1,
    image: "/genres_icons/fiction.png",
    name: "Fiction", // Added name for matching
  },
  {
    id: 2,
    image: "/genres_icons/non-fiction.png",
    name: "Non_Fiction",
  },
  {
    id: 3,
    image: "/genres_icons/science.png",
    name: "Science",
  },
  {
    id: 4,
    image: "/genres_icons/history.png",
    name: "History",
  },
  {
    id: 5,
    image: "/genres_icons/biography.png",
    name: "Biography",
  },
  {
    id: 6,
    image: "/genres_icons/fantasy.png",
    name: "Fantasy",
  },
  // Add more genre-image mappings if needed
];

const Categories = () => {
  const { data: response, isError, isLoading } = useGetBooksQuery(undefined);
  const books = response?.data || [];

  return (
    <>
      <div className="xl:max-w-4/5 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {genres.map((genre) => {
            // Find the corresponding image for the current genre
            const genreImage = bookImages.find(
              (img) => img.name.toLowerCase() === genre.toLowerCase()
            );

            return (
              <div
                key={genre}
                className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-[#1E5128] dark:border-gray-700 flex flex-col justify-between"
              >
                {/* Display the icon if found */}
                {genreImage && (
                  <img
                    src={genreImage.image}
                    alt={`${genre} icon`}
                    className="w-16 h-16 mb-4 object-cover rounded-full" // Example styling for the image
                  />
                )}

                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-[#191A19] dark:text-[#D3DAD9]">
                  {genre}
                </h5>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center my-20">
          <Button className="rounded-none bg-[#1E5128] hover:bg-[#4E9F3D] text-white hover:text-white dark:bg-[#1E5128] dark:text-white py-7">
            DISCOVER MORE CATEGORIES
          </Button>
        </div>
      </div>
    </>
  );
};

export default Categories;
