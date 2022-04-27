const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let sortArr = arr.filter(function(v) {
    return v < 0;
  }).concat(arr.filter(function(v) {
    return v == 0;
  }), arr.filter(function(v) {
    return v > 0;
  }));
  return sortArr;
}

module.exports = {
  sortByHeight
};
