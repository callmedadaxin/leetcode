/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var nums1 = [2],
  nums2 = [1, 3, 4];

var findMedianSortedArrays = function(nums1, nums2) {
  var m = nums1.length,
    n = nums2.length;

  //如果某一数组为空
  if (m === 0) {
    return findResult(nums2, n);
  } else if (n === 0) {
    return findResult(nums1, m);
  }

  //如果数组长度都为1
  if (m === 1 && n === 1) {
    return (nums1[0] + nums2[0]) / 2;
  }

  //如果第一个数全小于第二个数
  if (nums1[m - 1] < nums2[0]) {
    return findResult(nums1.concat(nums2), m + n);
  } else if (nums2[n - 1] < nums1[0]) {
    return findResult(nums2.concat(nums1), m + n);
  }

  if (m > n) {
    var num3 = nums1;
    nums1 = nums2;
    nums2 = num3;
  }

  var start = nums2.shift(),
    res = [];

  nums1.forEach(function(elem, index) {
    if (elem < start) {
      res.push(elem);
    } else {
      res.push(start);

      while (nums2.length) {
        start = nums2.shift();

        if (elem >= start) {
          res.push(start);
        } else {
          break;
        }
      }

      res.push(elem);
    }
  });

  res = res.concat([start], nums2);

  return findResult(res, m + n);
}

function findResult(res, l) {
  var center = l / 2;

  if (l % 2 === 0) {
    center = center - 1;
    var nums = res.splice(center, 2);
    return (nums[0] + nums[1]) / 2
  } else {
    center = parseInt(center);
    return res.splice(center, 1)[0];
  }
}

console.log(findMedianSortedArrays)