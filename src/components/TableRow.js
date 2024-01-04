import React from "react";
import TableCell from "./TableCell";

const TableRow = ({ row, rowIndex, onRowClick }) => (
  <tr className="clickable-row" key={rowIndex} onClick={() => onRowClick(row)} {...row.getRowProps()}>
    {row.cells.map((cell) => (
      <TableCell key={cell.column.id} cell={cell} />
    ))}
  </tr>
);

export default TableRow;
