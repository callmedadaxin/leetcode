/**
 * @param {string} s
 * A -> 1
 * B -> 2
 * AA -> 1 * 26 + 1
 * AB -> 1 * 26 + 2 -> 28
 * BA -> 2 * 26 + a -> 53
 * AAA -> 1 * 26 * 26 + AA
 * BAA -> 2 * 26 * 26 + AA
 * BBA -> 2 * 26 * 26 + BA
 * @return {number}
 */
var getLetterNumber = function (base, l, index) {
  if (!index) {
    return l.charCodeAt() - base
  }
  
  return (l.charCodeAt() - base) * Math.pow(26, index)
}
var titleToNumber = function(s) {
  var baseCode = 'A'.charCodeAt() - 1
  var length = s.length - 1
  var res = 0

  if (!s) {
    return res
  }

  for (var i = length; i >= 0; i--) {
    res += getLetterNumber(baseCode, s[i], length - i)
  }

  return res
};

console.log(titleToNumber('AA'))