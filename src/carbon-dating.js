const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    typeof sampleActivity !== 'string'
    || isNaN(parseInt(sampleActivity))
    || parseInt(sampleActivity) >= MODERN_ACTIVITY
    || parseInt(sampleActivity) < 1
  ) {
    return false;
  }

  const k = 0.693 / HALF_LIFE_PERIOD;
  const activity = MODERN_ACTIVITY / parseFloat(sampleActivity)

  return Math.ceil(Math.log(activity) / k);
};
