const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1) {
    for (let el of arr) {
      if (el instanceof Array) {
        return this.calculateDepth(arr.flat(), depth + 1);
      }
    }

    return depth;
  } 
};