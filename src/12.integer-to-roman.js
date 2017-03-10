/**
 * I(1)，V(5)，X(10)，L(50)，C(100)，D(500)，M(1000)
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  var M = ["", "M", "MM", "MMM"];
  var C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  var X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  var I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

  return M[parseInt(num / 1000)] + C[parseInt((num % 1000) / 100)] + X[parseInt((num % 100) / 10)] + I[parseInt(num % 10)]
};

console.log(intToRoman(3999));