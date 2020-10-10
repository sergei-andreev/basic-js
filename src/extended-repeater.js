const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;

  const additionArr = [];
  for (let i = 0; i < additionRepeatTimes; i += 1) {
    additionArr.push(String(addition));
  }
  const resultAddition = additionArr.join(additionSeparator);

  const strArr = [];
  for (let i = 0; i < repeatTimes; i += 1) {
    strArr.push(String(str) + resultAddition)
  }
  const resultStr = strArr.join(separator);

  return resultStr;
};
