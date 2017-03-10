/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var ide = '',
    length, res;

  if (x > 0x80000000) {
    return 0;
  }

  x = x.toString().split('');
  length = x.length;

  if (isNaN(parseInt(x[0]))) {
    ide = x[0];
    x = x.slice(1);
    length -= 1;
  }

  for (var i = 0; i < parseInt(length / 2); i++) {
    var start = x[i],
      end = x[length - i - 1];
    x[i] = end;
    x[length - i - 1] = start;
  }

  res = parseInt(ide + x.join(''));

  if (res > 0x80000000 || res < -0x80000000) {
    return 0;
  } else {
    return res;
  }
};

console.log(reverse(-123))