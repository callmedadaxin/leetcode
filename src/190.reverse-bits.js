/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  var num = n.toString(2)
  var sign = ''  
  var ret = ''
  // 符号检测
  if (!(num[0] >= 0)) {
    sign = num[0]
    num = num.slice(1)  
  }
  // 补全
  num = '0'.repeat(32 - num.length) + num
  // 反转
  for(var i = num.length - 1; i >= 0; i--) {
    ret += num[i]
  }
  // 加符号
  ret = sign + ret
  return parseInt(ret, 2)
}

console.log(reverseBits(1))