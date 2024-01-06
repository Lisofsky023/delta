const getCellClass = (columnOrCell, rowData) => {
  const id = columnOrCell.column ? columnOrCell.column.id : columnOrCell.id;
  const thisDayValue = parseFloat(rowData["This_day"].replace(/[^\d.]/g, ''));
  const yesterdayValue = parseFloat(rowData["yesterday"].replace(/[^\d.]/g, ''));
  const thisDayOfWeekValue = parseFloat(rowData["sameDayLastWeek"].replace(/[^\d.]/g, ''));

  switch (id) {
    case "yesterdayPercent":
      return rowData.yesterdayPercent >= 0 ? "green-text" : "red-text";
    case "index":
      return "index-cell";
    case "This_day":
      return "this-day-cell";
    case "yesterday":
      return thisDayValue > yesterdayValue ? "green-cell" : thisDayValue < yesterdayValue ? "red-cell" : "gray-cell";
    case "sameDayLastWeek":
      return thisDayOfWeekValue > Math.max(thisDayValue, yesterdayValue) ? "green-cell" : thisDayOfWeekValue < Math.min(thisDayValue, yesterdayValue) ? "red-cell" : "gray-cell";
    default:
      return "";
  }
};

export default getCellClass;
