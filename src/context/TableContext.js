import React, { createContext, useContext, useState, useMemo } from "react";
import { useTable } from 'react-table';
import fakeData from '../data/data.json';
import columnsConfig from '../data/columns';

const TableContext = createContext(null);

export const useTableContext = () => useContext(TableContext);

const transformChartData = (rowData) => {
  return [
    parseInt(rowData.This_day.replace(/\s/g, ''), 10),
    parseInt(rowData.yesterday.replace(/\s/g, ''), 10),
    parseInt(rowData.sameDayLastWeek.replace(/\s/g, ''), 10),
  ];
};

export const TableProvider = ({ children }) => {
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  
  const data = useMemo(() => fakeData, []);
  const columns = useMemo(() => columnsConfig, []);

  const handleRowClick = (row, rowIndex) => {
    if (selectedRowIndex === rowIndex) {
      resetSelection();
    } else {
      const chartData = transformChartData(row.original);
      setSelectedRowData(chartData);
      setSelectedRowIndex(rowIndex);
    }
  };

  const resetSelection = () => {
    setSelectedRowData(null);
    setSelectedRowIndex(null);
  };

  const tableInstance = useTable({
    columns,
    data,
  });

  return (
    <TableContext.Provider value={{
      ...tableInstance, 
      selectedRowData, 
      setSelectedRowData, 
      selectedRowIndex, 
      setSelectedRowIndex,
      data, columns,
      handleRowClick,
      resetSelection
    }}>
      {children}
    </TableContext.Provider>
  );
};
