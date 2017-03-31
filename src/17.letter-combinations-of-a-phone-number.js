/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  var dictionary = {
      1: ['*'],
      2: ['a', 'b', 'c'],
      3: ['d', 'e', 'f'],
      4: ['g', 'h', 'i'],
      5: ['j', 'k', 'l'],
      6: ['m', 'n', 'o'],
      7: ['p', 'q', 'r', 's'],
      8: ['t', 'u', 'v'],
      9: ['w', 'x', 'y', 'z']
    },
    result = dictionary[parseInt(digits[0])];

  if (digits.indexOf('0') >= 0) {
    return [];
  }

  if (!digits) {
    return []
  }

  for (var i = 1; i < digits.length; i++) {
    var letters = dictionary[parseInt(digits[i]) + 1];

    result = combine(result, letters)
  }

  return result;
};

function combine(a, b) {
  var res = [],
    la = a.length,
    lb = b.length;

  for (var i = 0; i < la; i++) {
    for (var j = 0; j < lb; j++) {
      res.push(a[i] + b[j]);
    }
  }

  return res;
}
console.log(letterCombinations('234'))
  // combine(['g', 'h', 'i'], ['w', 'x', 'y', 'z'])