/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  var l = 0,
    r = nums.length - 1

  var res = [-1, -1]

  while(l <= r) {
    // 最左边的比target大或者右边比target小
    if (target - nums[l] < 0 || nums[r] - target < 0) {
      return res
    }

    if (res[0] >= 0 && res[1] >= 0) {
      return res
    }

    // 相等时记录坐标
    if (target === nums[l]) {
      if (res[0] < 0) {
        res[0] = l
      }

      l--
      continue
    }

    if (nums[r] === target) {
      if (res[1] < 0) {
        res[1] = r
      }
      l++
      continue
    }

    l++
    r--
  }

  return res
};

console.log(searchRange([10], 10))