const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw Error('Not array');

  const resultArr = [];

  const operations = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev'
  ];

  for (let i = 0; i < arr.length; i += 1) {
    switch (arr[i]) {
      case '--discard-next':
        i += 1;
        break;

      case '--discard-prev':
        if (resultArr.length !== 0
          && arr[i - 2] !== '--discard-next') {
          resultArr.pop();
        }
        break;

      case '--double-next':
        resultArr.push(arr[i + 1]);
        break;

      case '--double-prev':
        if (i !== 0 && arr[i - 2] !== '--discard-next') {
          resultArr.push(arr[i - 1]);
        }
        break;

      default:
        resultArr.push(arr[i]);
        break;
    }
  }

  return resultArr.filter((element) => element !== undefined);
};
