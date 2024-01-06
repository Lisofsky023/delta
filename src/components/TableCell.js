import React from "react";
import getCellClass from './getCellClass';

const TableCell = ({ cell, row }) => {
  const cellClass = getCellClass(cell, row.original);

  return (
    <td {...cell.getCellProps({ className: cellClass })}>
      {cell.render("Cell")}
    </td>
  );
};
export default TableCell;