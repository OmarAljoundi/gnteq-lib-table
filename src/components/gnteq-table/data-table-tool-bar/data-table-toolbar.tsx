
import * as React from 'react'
import { Table } from '@tanstack/react-table'
import DataTableViewOptions from '../data-table-view-options/data-table-view-options'

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export default function DataTableToolbar<TData>({ table }: DataTableToolbarProps<TData>) {
  return (
    <div className="grid gap-y-4">
      <div className="flex flex-1 items-center flex-wrap gap-y-2"></div>

      <DataTableViewOptions table={table} />
    </div>
  )
}
