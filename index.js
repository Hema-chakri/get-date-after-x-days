const addDays = require("date-fns/addDays");

function displayDays(days) {
  let date1 = addDays(new Date(22, 07, 2020), days);
  return `${date1.getDate()}-${date1.getMonth() + 1}-${date1.getFullYear()}`;
}

module.exports = displayDays;
