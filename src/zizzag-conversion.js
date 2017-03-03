/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  var center = numRows - 2,
    res = [],
    result = [];

  s = s.split('');

  while (s.length) {
    res.push(getLine(s, numRows));

    if (s.length) {
      res.push(getCenterLine(s, center));
    }
  }

  var i = 0

  while (i < numRows) {
    res.forEach(function(elem) {
      elem[i] !== 0 && result.push(elem[i])
    });

    i++;
  }

  return result.join('');
};

function getLine(arr, numRows) {
  return arr.splice(0, numRows);
}

function getCenterLine(arr, numRows) {
  var newArr = [];
  var i = 0;

  while (i < numRows) {
    newArr.unshift(arr.shift());
    i++;
  }

  newArr.unshift(0);
  newArr.push(0);

  return newArr;
}


console.log(convert('PAYPALISHIRING', 5))