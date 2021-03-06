/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  var center = numRows - 2,
    res = [],
    result = [];

  if (typeof(s) != 'string') {
    throw 'not string'
  }

  //小于2 相当于没转换
  if (numRows < 2 || !s.length) {
    return s;
  }

  s = s.split('');

  //拆分原数组
  while (s.length) {
    res.push(getLine(s, numRows));

    if (s.length) {
      res.push(getCenterLine(s, center));
    }
  }

  var i = 0

  //拼合结果
  while (i < numRows) {
    res.forEach(function(elem) {
      elem[i] !== 0 && result.push(elem[i])
    });

    i++;
  }

  return result.join('');
};

//画竖线
function getLine(arr, numRows) {
  return arr.splice(0, numRows);
}

//画中间线，以0替代两边
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