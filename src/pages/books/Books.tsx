import { Button } from "@/components/ui/button";
import { useGetBooksQuery } from "../../redux/api/baseApi";

const Books = () => {
  const { data, isError, isLoading } = useGetBooksQuery(undefined);

  console.log({ data, isError, isLoading });

  return (
    <div>
      <h3>Available Books</h3>
      <p>{data?.data?.length}</p>
      <Button>I am button</Button>
    </div>
  );
};

export default Books;
