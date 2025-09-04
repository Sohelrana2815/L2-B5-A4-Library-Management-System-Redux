import { borrowColumns } from "@/components/borrow-summery/borrow-columns";
import { BorrowDataTable } from "@/components/borrow-summery/borrow-data-table";
import { useGetBorrowSummeryQuery } from "@/redux/api/baseApi";

const Summery = () => {
  const {
    data: borrowData,
    isLoading,
    isError,
  } = useGetBorrowSummeryQuery(undefined);

  const borrowSummaryData = borrowData?.data || [];

  if (isLoading) {
    return <div className="p-6">Loading borrow summary...</div>;
  }

  if (isError) {
    return <div className="p-6">Error loading borrow summary</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Borrow Summary</h1>
      <BorrowDataTable columns={borrowColumns} data={borrowSummaryData} />
    </div>
  );
};

export default Summery;
