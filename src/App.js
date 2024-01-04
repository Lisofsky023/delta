import React from "react";
import { useTable } from "react-table";
import Table from "./components/Table";
import columnsConfig from "./data/columns";
import "./App.css";
import fakeData from "./data/data.json";

function App() {
  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(() => columnsConfig, []);

  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <div className="App">
      <div className="container">
        <Table
          getTableProps={getTableProps}
          headerGroups={headerGroups}
          rows={rows}
          prepareRow={prepareRow}
        />
      </div>
    </div>
  );
}

export default App;
