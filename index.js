const addDays = require("date-fns/addDays");
const getAfterXDays = (days) => {
  const result = addDays(new Date(2020, 07, 22), days);
  return `${result.getDate()}-${result.getMonth() + 1}-${result.getFullYear()}`;
};

module.exports = getAfterXDays;
