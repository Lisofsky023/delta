const getCellClass = (columnOrCell, rowData) => {
  const id = columnOrCell.column ? columnOrCell.column.id : columnOrCell.id;
  const thisDayValue = parseFloat(rowData["This_day"].replace(/[^\d.]/g, ''));
  const yesterdayValue = parseFloat(rowData["yesterday"].replace(/[^\d.]/g, ''));
  const thisDayOfWeekValue = parseFloat(rowData["this_day_of_the_week"].replace(/[^\d.]/g, ''));

  if (id === "yesterday_percent") {
    const percent = rowData.yesterday_percent;
    if (percent >= 0) {
      return "green-text";
    } else {
      return "red-text";
    }
  }

  if (id === "index") {
    return "index-cell";
  } else if (id === "This_day") {
    return "this-day-cell";
  } else if (id === "yesterday") {
    const percent = rowData.yesterday_percent;
    if (thisDayValue > yesterdayValue || percent > 0) {
      return "green-cell";
    } else if (thisDayValue < yesterdayValue || percent < 0) {
      return "red-cell";
    } else {
      return "gray-cell";
    }
  } else if (id === "this_day_of_the_week") {
    if (thisDayOfWeekValue > thisDayValue && thisDayOfWeekValue > yesterdayValue) {
      return "green-cell";
    } else if (thisDayOfWeekValue < thisDayValue && thisDayOfWeekValue < yesterdayValue) {
      return "red-cell";
    } else {
      return "gray-cell";
    }
  }
  return "";
  
};



export default getCellClass;
