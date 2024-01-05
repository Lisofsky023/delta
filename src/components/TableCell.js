import React from "react";
import getCellClass from './getCellClass';

const TableCell = ({ cell }) => {
  const cellClass = getCellClass(cell);

  return (
    <td {...cell.getCellProps({ className: cellClass })}>
      {cell.render("Cell")}
    </td>
  );
};

export default TableCell;
