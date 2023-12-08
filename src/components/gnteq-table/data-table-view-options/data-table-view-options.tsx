
import * as React from 'react'
import { Table } from "@tanstack/react-table";
import Button from "../../gnteq-ui/Button/button";

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>;
}

export default function DataTableViewOptions<TData>({
  table,
}: DataTableViewOptionsProps<TData>) {
  return (
    <div className="flex gap-2 justify-start">
      {/* {options.selectOptions?.map((g) => {
        if (
          (table.getFilteredSelectedRowModel().rows.length > 0 &&
            g.requireSelections) ||
          !g.requireSelections
        )
          return (
            <>
              {g.action ? (
                <Button
                  variant="outline"
                  size="sm"
                  className=" h-8  border-dashed"
                  key={g.title}
                  onClick={() => modal[g.action!]()}
                >
                  {g.title}
                </Button>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  className=" h-8  border-dashed"
                  asChild
                  key={g.title}
                >
                  <Link href={g.link}>{g.title}</Link>
                </Button>
              )}
            </>
          );
      })} */}
    </div>
  );
}
