import React from "react";
import TableCell from "./TableCell";

const TableRow = ({ row, rowIndex }) => (
  <tr key={rowIndex} {...row.getRowProps()}>
    {row.cells.map((cell) => (
      <TableCell key={cell.column.id} cell={cell} />
    ))}
  </tr>
);

export default TableRow;
