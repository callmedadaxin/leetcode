/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var hasItem = function (arr, item) {
  return arr.indexOf(item) >= 0
}

// var intersection = function(nums1, nums2) {
//   var res = [],
//       target,
//       eTarget

//   // 去重
//   nums1 = nums1.filter((item, index) => nums1.indexOf(item) === index)
//   nums2 = nums2.filter((item, index) => nums2.indexOf(item) === index)

//   if (nums1.length >= nums2.length) {
//     target = nums2,
//     eTarget = nums1
//   } else {
//     target = nums1,
//     eTarget = nums2
//   }

//   var l = 0,
//       r = target.length - 1

//   if (r <= 0) {
//     return hasItem(eTarget, target[l]) ? [target[l]] : []
//   }
  
//   while(l <= r) {
//     var a = target[l],
//         b = target[r]
//     if (hasItem(eTarget, a)) {
//       res.push(a)
//     }

//     if (a !== b && hasItem(eTarget, b)) {
//       res.push(b)
//     }

//     l++
//     r--
//   }

//   return res
// };

var each = function (arr, fn) {
  var l = 0,
      r = arr.length - 1

  while(l <= r ) {
    var a = arr[l],
      b = arr[r]

    fn(a)
    a!==b && fn(b)

    l++,
    r--
  }
}
var intersection = function(nums1, nums2) {
  var obj = {},
    res = []

  each(nums1, elem => obj[elem] = 1)
  each(nums2, elem => {
    if (obj[elem] === 1) {
      res.push(elem)
      obj[elem] = 2
    }
  })

  return res
}



// var testa = [1,2,2,1,3,4,2,7,8]
var testa = [4, 9, 5]
var testb = [9,4,9,8,4]

console.log(intersection(testa, testb))