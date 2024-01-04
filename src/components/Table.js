import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import Chart from "../highcharts/Chart";

const Table = ({ headerGroups, rows, prepareRow, onRowClick, selectedRowIndex, chartData }) => (
  <table>
    <thead>
      {headerGroups.map((headerGroup, index) => (
        <TableHeader key={`header-${index}`} headerGroup={headerGroup} />
      ))}
    </thead>
    <tbody>
      {rows.map((row, rowIndex) => {
        prepareRow(row);
        const isRowSelected = selectedRowIndex === rowIndex;
        return (
          <>
            <TableRow 
              key={rowIndex} 
              row={row}  
              rowIndex={rowIndex}
              onRowClick={() => onRowClick(row, rowIndex)}
            />
            {isRowSelected && (
              <tr>
                <td colSpan="100%">
                  <Chart chartData={chartData} />
                </td>
              </tr>
            )}
          </>
        );
      })}
    </tbody>
  </table>
);

export default Table;