// var longestPalindrome = function(s) {
//   var res = {},
//     maxL = 0;

//   //c
//   if (s.length < 2) {
//     return s;
//   }

//   s.split('').forEach(function(item, curIndex) {
//     var index = s.indexOf(item),
//       length = curIndex - index;

//     if (length > maxL) {
//       maxL = length;
//     }

//     res[item] = {
//       length: curIndex - index,
//       pos: [index, curIndex]
//     };
//   });

//   if (maxL === 0) {
//     return '';
//   }

//   for (var key in res) {
//     var item = res[key];
//     if (item.length === maxL) {
//       return s.substring(item.pos[0], item.pos[1] + 1);
//     }
//   }
// };

// var longestPalindrome = function(s) {
//   var res = {},
//     maxL = 0;

//   //c
//   if (s.length < 2) {
//     return s;
//   }

//   s.split('').forEach(function(item, curIndex) {
//     var index = s.indexOf(item),
//       length = curIndex - index;

//     if (length > maxL) {
//       maxL = length;
//     }

//     res[item] = {
//       length: curIndex - index,
//       pos: [index, curIndex]
//     };
//   });

//   if (maxL === 0) {
//     return '';
//   }

//   for (var key in res) {
//     var item = res[key];
//     if (item.length === maxL) {
//       return s.substring(item.pos[0], item.pos[1] + 1);
//     }
//   }
// };

// var s = 'babad',
//   s1 = 'cbbd',
//   s2 = 'c',
//   s3 = 'ccc',
//   s4 = 'abc',
//   s5 = 'abca',
//   s6 = 'abacdefb',
//   s7 = 'cbccccc';

// console.log(longestPalindrome(s7))