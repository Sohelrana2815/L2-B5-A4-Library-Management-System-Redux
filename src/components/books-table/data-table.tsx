// components/data-table.tsx
"use client";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  selectedBooks: string[];
  setSelectedBooks: (ids: string[]) => void;
}

export function DataTable<TData extends { _id: string }, TValue>({
  columns,
  data,
  selectedBooks,
  setSelectedBooks,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    enableRowSelection: true,
    onRowSelectionChange: (updater) => {
      let selectionObj;
      if (typeof updater === "function") {
        // updater is a function, call it with current state
        selectionObj = updater(table.getState().rowSelection);
      } else {
        // updater is the selection object
        selectionObj = updater;
      }
      const selectedIds = Object.keys(selectionObj)
        .filter((key) => selectionObj[key])
        .map((key) => data[parseInt(key)]._id);
      setSelectedBooks(selectedIds);
    },
    state: {
      rowSelection: data.reduce((acc, row, idx) => {
        if (selectedBooks.includes(row._id)) acc[idx] = true;
        return acc;
      }, {} as Record<number, boolean>),
    },
  });
  

  return (
    <div className="overflow-hidden rounded-md border max-w-4/5 mx-auto">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
