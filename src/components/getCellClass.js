const getCellClass = (cell) => {
  if (cell.column.id === "index") {
    return "index-cell";
  } else if (cell.column.id === "This_day") {
    return "this-day-cell";
  }
  return "";
};

export default getCellClass;