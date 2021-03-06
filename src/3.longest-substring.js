var str1 = 'abcabcbb',
  str2 = 'bbbbb',
  str3 = 'pwwkew',
  str4 = 'dvdf',
  str5 = 'dvfgdve';

// var lengthOfLongestSubstring = function(s) {
//   var arr = [],
//     l = 0;

//   s.split('').forEach( function(elem) {
//     var index = arr.indexOf(elem);
//     if(index >= 0) {
//       arr = arr.splice(index + 1);
//       arr.push(elem);
//     }else{
//       arr.push(elem);
//       if(arr.length > l) {
//         l = arr.length;
//       }
//     }
//   });

//   return l;
// };

var lengthOfLongestSubstring = function(s) {
  var arr = [],
    newArr = [],
    l = 0;

  s.split('').forEach(function(elem) {
    var index = arr.indexOf(elem);
    if (index >= 0) {
      newArr.push(arr.join(''));
      arr = arr.slice(index + 1);
      arr.push(elem);
      newArr.push(arr.join(''));
    } else {
      arr.push(elem);
      if (arr.length >= l) {
        l = arr.length;
        newArr.push(arr.join(''));
      }
    }
  });

  newArr = newArr.filter(function(elem, index) {
    return elem.length == l && newArr.indexOf(elem) == index;
  });

  return {
    arr: newArr,
    length: l
  }
};

console.log(lengthOfLongestSubstring(str1));