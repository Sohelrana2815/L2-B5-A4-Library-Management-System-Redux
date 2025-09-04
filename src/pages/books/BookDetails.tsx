import { useGetBookByIdQuery } from "@/redux/api/baseApi";
import { useParams } from "react-router";

const BookDetails = () => {
  const { bookId } = useParams<{ bookId: string }>();

  const {
    data: book,
    isLoading,
    isError,
    error,
  } = useGetBookByIdQuery(bookId!, {
    skip: !bookId,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div>Loading book details...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-red-500">
          Error loading book details: {error?.toString()}
        </div>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="flex justify-center items-center h-64">
        <div>Book not found</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Book Details</h1>

      <div className="shadow-lg shadow-green-500 rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-primary p-4 rounded-xl">
            <h2 className="text-2xl font-semibold mb-4">{book.title}</h2>

            <div className="space-y-3">
              <div>
                <span className="font-medium ">Author:</span>
                <span className="ml-2">{book.author}</span>
              </div>

              <div>
                <span className="font-medium ">Genre:</span>
                <span className="ml-2">{book.genre}</span>
              </div>

              <div>
                <span className="font-medium ">ISBN:</span>
                <span className="ml-2">{book.isbn}</span>
              </div>

              {book.description && (
                <div>
                  <span className="font-medium ">Description:</span>
                  <p className="ml-2 mt-1">{book.description}</p>
                </div>
              )}

              <div>
                <span className="font-medium ">Total Copies:</span>
                <span className="ml-2">{book.copies}</span>
              </div>

              <div>
                <span className="font-medium ">Availability:</span>
                <span
                  className={`ml-2 px-2 py-1 rounded text-sm ${
                    book.available
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {book.available ? "Available" : "Not Available"}
                </span>
              </div>

              <div>
                <span className="font-medium ">Created:</span>
                <span className="ml-2">
                  {new Date(book.createdAt).toLocaleDateString()}
                </span>
              </div>

              <div>
                <span className="font-medium ">Last Updated:</span>
                <span className="ml-2">
                  {new Date(book.updatedAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center border border-primary rounded-lg">
            <div className="text-gray-500 text-center p-8">
              <div className="text-4xl mb-2">📚</div>
              <div>Book Cover</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
