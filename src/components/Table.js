import React, { useRef } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import Chart from "../highcharts/Chart";
import { useTableContext } from "../context/TableContext";
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
  } = useTableContext();

  useOutsideClickHandler(containerRef, resetSelection);

  return (
    <div className="container chart" ref={containerRef}>
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
                  <tr className="chart">
                    <td colSpan="100%" >
                      <Chart chartData={selectedRowData} />
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;