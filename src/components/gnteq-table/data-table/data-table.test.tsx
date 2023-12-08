import React from "react";
import { render } from "@testing-library/react";
import DataTable from "./data-table";
import { columns } from "../../../example/columns";
import { shipments } from "../../../example/data";

describe("Data Table", () => {
  test("renders the Data Table component", () => {
    render(<DataTable  columns={columns} data={shipments}  />);
  });
});