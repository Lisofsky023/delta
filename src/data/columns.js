import getCellClass from "../components/getCellClass";

const columnsConfig = [
  {
    Header: "Показатель",
    accessor: "index",
    getHeaderProps: () => ({ className: getCellClass({ id: "index" }) }),
  },
  {
    Header: "Текущий день",
    accessor: "This_day",
    getHeaderProps: () => ({ style: { backgroundColor: 'rgba(192, 231, 236, 0.466)' } }),
  },
  {
    Header: "Вчера",
    accessor: "yesterday",
    Cell: ({ cell, row }) => {
      const pseudoColumnForPercentage = { column: { id: "yesterday_percent" }, row: row.original };
      const percentageClass = getCellClass(pseudoColumnForPercentage, row.original);
      const percentageValue = row.original.yesterday_percent !== undefined ? row.original.yesterday_percent : 0;
      
      return (
        <>
          {cell.value} <span className={percentageClass}>{percentageValue}%</span>
        </>
      );
    },
  },
  {
    Header: "Этот день недели",
    accessor: "this_day_of_the_week",
  },
];

export default columnsConfig;