const CustomError = require("../extensions/custom-error");

module.exports = function countCats(data) {
  return data
    .flat()
    .reduce((count, el) => {
      return (el === '^^') ? count += 1 : count += 0;
    }, 0);
};
