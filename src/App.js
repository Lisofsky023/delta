import Table from "./components/Table";
import useTableData from "./hooks/useTableData";
import React, {useEffect} from "react";

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

  useEffect(() => {
    const handleClickOutside = (event) => {
    const tableElement = document.querySelector('.container');


    if (tableElement && !tableElement.contains(event.target)) {
        resetSelection();
      }
    };

  document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [resetSelection]);

  return (
    <div className="App">
      <div className="container">
      <Table
        // className="table"
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
