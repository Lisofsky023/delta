import { useState, useMemo } from 'react';
import { useTable } from 'react-table';
import fakeData from '../data/data.json';
import columnsConfig from '../data/columns';

const useTableData = () => {

  const data = useMemo(() => fakeData, []);
  const columns = useMemo(() => columnsConfig, []);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);

  const handleRowClick = (row, rowIndex) => {
    const chartData = transformChartData(row.original);
    setSelectedRowData(chartData);
    setSelectedRowIndex(rowIndex);
  };

  const resetSelection = () => {
    setSelectedRowData(null);
    setSelectedRowIndex(null);
  };

  const transformChartData = (rowData) => {
    return [
      parseInt(rowData.This_day.replace(/\s/g, ''), 10),
      parseInt(rowData.yesterday.replace(/\s/g, ''), 10),
      parseInt(rowData.this_day_of_the_week.replace(/\s/g, ''), 10),
    ];
  };

  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return {
    getTableProps,
    headerGroups,
    handleRowClick,
    rows,
    prepareRow,
    selectedRowData,
    setSelectedRowData,
    selectedRowIndex,
    setSelectedRowIndex,
    resetSelection,
  };
};

export default useTableData;