import "./App.css";

import React, { useState } from "react";
import { useTable } from "react-table";

import Table from "./components/Table";
import columnsConfig from "./data/columns";
import fakeData from "./data/data.json";

function App() {
  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(() => columnsConfig, []);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);

  const handleRowClick = (row, rowIndex) => {
    const chartData = transformChartData(row.original);
    setSelectedRowData(chartData);
    setSelectedRowIndex(rowIndex);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.clickable-row')) {
      setSelectedRowData(null);
      setSelectedRowIndex(null);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  const transformChartData = (rowData) => {
    return [
      parseInt(rowData.This_day.replace(/\s/g, ''), 10),
      parseInt(rowData.yesterday.replace(/\s/g, ''), 10),
      parseInt(rowData.this_day_of_the_week.replace(/\s/g, ''), 10),
    ];
  };

  return (
    <div className="App">
      <div className="container">
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
