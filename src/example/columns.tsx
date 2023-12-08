
import React from "react";
import { format } from "date-fns";
import { ColumnDef, Table } from "@tanstack/react-table";
import { Shipment } from "./type";
import DataTableHeader from "../components/gnteq-table/data-table-header/data-table-header";


export const columns: ColumnDef<Shipment>[] = [
 
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableHeader column={column} title="Id" />
    ),
    cell: ({ row }) => {
      return <span>{row.getValue("id")}</span>;
    },
  },
  {
    accessorKey: "awb",
    header: ({ column }) => (
      <DataTableHeader column={column} title="Awb" />
    ),
    cell: ({ row }) => {
      return <span>{row.getValue("awb")}</span>;
    },
  },
  {
    accessorKey: "action_date",
    header: ({ column }) => (
      <DataTableHeader column={column} title="Action Date" />
    ),
    cell: ({ row }) => {
      return <span>{row.getValue("action_date")}</span>;
    },
  },
  {
    accessorKey: "customer_id",
    header: ({ column }) => (
      <DataTableHeader column={column} title="Customer Id" />
    ),
    cell: ({ row }) => {
      return <span>{row.getValue("customer_id")}</span>;
    },
  },

  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      return <span>{row.getValue("status")}</span>;
    },
  },
 

 
];

// export const filterOptions: Filters[] = [
//   {
//     renderFilter: (table: Table<Tour>) => {
//       return (
//         <DataTableSearchInput
//           column={table?.getColumn("name")}
//           placeholder="Search by tour name"
//           title="Search tour"
//         />
//       );
//     },
//   },
//   {
//     renderFilter: (table: Table<Tour>) => {
//       return (
//         <DataTableDateFilter
//           column={table?.getColumn("created_at")}
//           title={"Created Date"}
//         />
//       );
//     },
//   },
//   {
//     renderFilter: (table: Table<Tour>) => {
//       return (
//         <DataTableFacetedFilter
//           column={table?.getColumn("tour_type")}
//           title={"Types"}
//           multi={true}
//         />
//       );
//     },
//   },
//   {
//     renderFilter: (table: Table<Tour>) => {
//       return (
//         <DataTableFacetedFilter
//           column={table?.getColumn("start_day")}
//           title={"Days"}
//           multi={true}
//           customOptions={DAYS}
//         />
//       );
//     },
//   },

//   {
//     renderFilter: (table: Table<Tour>) => {
//       return (
//         <DataTableFacetedFilter
//           column={table?.getColumn("is_active")}
//           title={"Status"}
//           multi={false}
//           customOptions={["Published", "Draft"]}
//         />
//       );
//     },
//   },
// ];
// export const selectOptions: SelectOptionsProps[] = [
//   {
//     requireSelections: false,
//     title: "Create New Tour",
//     link: "/admin/dashboard/tour/create-new",
//   },
// ];
