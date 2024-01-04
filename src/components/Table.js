import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table = ({ headerGroups, rows, prepareRow, onRowClick }) => (
  <table>
    <thead>
      {headerGroups.map((headerGroup, index) => (
        <TableHeader key={`header-${index}`} headerGroup={headerGroup} />
      ))}
    </thead>
    <tbody>
      {rows.map((row, rowIndex) => {
        prepareRow(row);
        return <TableRow 
        key={rowIndex} 
        row={row}  
        rowIndex={rowIndex}
        onRowClick={onRowClick} />;
      })}
    </tbody>
  </table>
);

export default Table;