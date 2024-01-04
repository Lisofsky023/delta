import React from "react";

const TableCell = ({ cell }) => (
  <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
);

export default TableCell;