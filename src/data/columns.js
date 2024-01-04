const columnsConfig = [
  {
    Header: "Показатель",
    accessor: "index",
  },
  {
    Header: "Текущий день",
    accessor: "This_day",
  },
  {
    Header: "Вчера",
    accessor: "yesterday",
    Cell: ({ value, row }) => (
      <>{value} {`${row.original.yesterday_percent !== undefined ? row.original.yesterday_percent : 0}%`}</>
    ),
  },
  {
    Header: "Этот день недели",
    accessor: "this_day_of_the_week",
  },
];

export default columnsConfig;