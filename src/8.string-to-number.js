/**
 * 非Number 0
 * 溢出 最大
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  var res = parseInt(str);

  if (isNaN(res)) {
    return 0;
  }

  //溢出
  if (res > 2147483647) {
    return 2147483647;
  } else if (res < -2147483648) {
    return -2147483648;
  }
};