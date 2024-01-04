import React from "react";

const TableHeader = ({ headerGroup }) => (
  <tr {...headerGroup.getHeaderGroupProps()}>
    {headerGroup.headers.map((column) => (
      <th key={column.id} {...column.getHeaderProps()}>
        {column.render("Header")}
      </th>
    ))}
  </tr>
);

export default TableHeader;