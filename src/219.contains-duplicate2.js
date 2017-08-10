/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  let has = {}

  if (k < 1) {
    return false
  }

  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (has[num] || has[num] === 0) {
      if (i - has[num] <= k) {
        return true
      } else {
        has[num] = i
      }
    } else {
      has[num] = i
    }
  }

  return false
};

console.log(containsNearbyDuplicate([-1,-1], 1))