/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  var has = {},
    l = nums.length

  for(let i = 0; i < l; i++) {
    let num = nums[i]

    if (has[num]) {
      return true
    }

    has[num] = true
  }

  return false
};

console.log(containsDuplicate([3, 3]))