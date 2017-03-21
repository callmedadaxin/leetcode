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
    result = dictionary[parseInt(digits[0]) + 1];

  if (digits.indexOf('0') >= 0) {
    return [];
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

  for (var i = 0; i < la / 2; i++) {
    for (var j = 0; j < lb / 2; j++) {
      res.push(a[i] + b[j], a[i] + b[lb - j - 1], a[la - i - 1] + b[j], a[la - i - 1] + b[lb - j - 1]);
    }
  }

  return res.filter(function(elem, index) {
    return res.indexOf(elem) === index;
  });;
}
console.log(letterCombinations('234'))
  // combine(['g', 'h', 'i'], ['w', 'x', 'y', 'z'])