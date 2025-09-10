// import { useEffect } from "react";
// import { borrowColumns } from "@/components/borrow-summery/borrow-columns";
// import { BorrowDataTable } from "@/components/borrow-summery/borrow-data-table";
// import { useGetBorrowSummeryQuery } from "@/redux/api/baseApi";

// const Test = () => {
//   const {
//     data: borrowData,
//     isLoading,
//     isError,
//     refetch,
//   } = useGetBorrowSummeryQuery(undefined, {
//     refetchOnMountOrArgChange: true,
//     refetchOnFocus: true,
//   });

//   const borrowSummaryData = borrowData?.data || [];

//   // Optional: Force refetch when component mounts
//   useEffect(() => {
//     refetch();
//   }, [refetch]);

//   if (isLoading) {
//     return <div className="p-6">Loading borrow summary...</div>;
//   }

//   if (isError) {
//     return <div className="p-6">Error loading borrow summary</div>;
//   }

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6">Borrow Summary</h1>
//       <BorrowDataTable columns={borrowColumns} data={borrowSummaryData} />
//     </div>
//   );
// };

// export default Test;
