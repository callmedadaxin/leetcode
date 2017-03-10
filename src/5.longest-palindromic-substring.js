/**
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function(s) {
//   var obj = {},
//     res = '',
//     maxL = 0;

//   //长度小于2，返回本身
//   if (s.length < 2) {
//     return s;
//   }

//   s.split('').forEach(function(elem, index) {
//     var arr = obj[elem];
//     if (arr) {
//       arr.forEach(function(e) {
//         var str = s.slice(e, index + 1);

//         if (checkPalindromis(str) && str.length > maxL) {
//           res = str;
//           maxL = str.length;
//         }
//       });

//       arr.push(index);
//     } else {
//       obj[elem] = [index];
//     }
//   });

//   //如果每个都不一样
//   if (!res) {
//     return s[0]
//   }

//   return res;
// };

var longestPalindrome = function(s) {
  //长度小于2，返回本身
  if (s.length < 2) {
    return s;
  }

  var ok = false;

  function find(arr) {
    var res = '',
      newArr = [];

    for (var i = 0; i < arr.length; i++) {
      var s = arr[i];

      if (checkPalindromis(s)) {
        res = s;
        break;
      } else {

        newArr = newArr.concat(getsubArray(s));
      }
    }

    if (!!res) {
      return res;
    } else {
      return find(newArr);
    }
  }

  return find([s]);
}

function getsubArray(s) {
  return [s.slice(1), s.slice(0, s.length - 1)]
}

function checkPalindromis(s) {
  var l = s.length;

  for (var i = 0; i < parseInt(l / 2); i++) {
    if (s[i] !== s[l - i - 1]) {
      return false;
    }
  }

  return true;
}

console.log(longestPalindrome("abcdasdfghjkldcba"))