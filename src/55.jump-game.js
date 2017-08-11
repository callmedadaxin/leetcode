/**
 * @param {number[]} nums
 * @return {boolean}
 */
var can = function (arr) {
  console.log(arr)
  const len = arr.length
  for(let i = len - 1; i >= 0; i--) {
    console.log(arr[i], len - i + 1)
    if (arr[i] >= len - i + 1) {
      return true
    }
  }

  return false
}

var canJump = function(nums) {
  let cache = []

  // 一个值，肯定能到达
  if (nums.length === 1) {
    return true
  }

  // 没有值
  if (!nums.length) {
    return false
  }

  for(let i = 0; i < nums.length - 1; i++) {
    if(nums[i] === 0) {
      if (can(cache, i)) {
        cache.push(nums[i])
        continue
      } else {
        return false
      }
    }

    cache.push(nums[i])
  }

  return true
};

// console.log(canJump([5,9,3,2,1,0,2,3,3,1,0,0]))
console.log(canJump([5,4,0,2,0,1,0,1,0]))
// console.log(canJump([]))