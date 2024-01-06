import React, { useRef } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import Chart from "../highcharts/Chart";
import useTableData from "../hooks/useTableData";
import useOutsideClickHandler from "../hooks/useOutsideClickHandler";

const Table = () => {
  const containerRef = useRef();
  const {
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
    selectedRowData,
    selectedRowIndex,
    handleRowClick,
    resetSelection,
  } = useTableData();

  useOutsideClickHandler(containerRef, resetSelection);

  return (
    <table {...getTableProps()}>
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
            <React.Fragment key={rowIndex}>
              <TableRow 
                row={row}  
                rowIndex={rowIndex}
                onRowClick={() => handleRowClick(row, rowIndex)}
              />
              {isRowSelected && (
                <tr>
                  <td colSpan="100%">
                    <Chart chartData={selectedRowData} />
                  </td>
                </tr>
              )}
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;