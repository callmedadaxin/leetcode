/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs || !strs.length) {
    return '';
  }

  var shortedStr = strs[0],
    index = 1,
    res = shortedStr.substring(0, index);

  //查询最短str,同时做边界输出
  for (var i = 1; i < strs.length; i++) {
    if (strs[i].length < shortedStr.length) {
      shortedStr = strs[i];
    }

    if (strs[i].indexOf(res) !== 0) {
      return '';
    }
  }

  for (var i = 2; i <= shortedStr.length; i++) {
    res = shortedStr.substring(0, i);
    if (!isPrefix(strs, res)) {
      return shortedStr.substring(0, i - 1);
    }
  }

  return shortedStr;
};

function isPrefix(strs, str) {
  for (var i = 0; i < strs.length; i++) {
    if (strs[i].indexOf(str) !== 0) {
      return false;
    }
  }

  return true;
}

console.log(longestCommonPrefix([]))