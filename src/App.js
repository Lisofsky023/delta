import Table from "./components/Table";
import useTableData from "./hooks/useTableData";
import React, { useRef } from "react";
import useOutsideClickHandler from "./hooks/useOutsideClickHandler";

import "./App.css";

function App() {

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

  const containerRef = useRef();

  useOutsideClickHandler(containerRef, resetSelection);

  return (
    <div className="App">
      <div className="container" ref={containerRef}>
      <Table
        getTableProps={getTableProps}
        headerGroups={headerGroups}
        rows={rows}
        prepareRow={prepareRow}
        onRowClick={handleRowClick}
        selectedRowIndex={selectedRowIndex}
        chartData={selectedRowData}
      />
      </div>
    </div>
  );
}

export default App;
