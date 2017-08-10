/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let has = {}

  for(let i = 0; i < nums.length; i++) {
    if (has[nums[i]]) {
      return true
    }

    has[nums[i]] = true
  }

  return false
};

console.log(containsDuplicate([3, 3]))