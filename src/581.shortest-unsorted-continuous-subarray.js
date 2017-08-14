/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  var sortedNums = nums.slice(0).sort((a, b) => a - b)
  var l = 0,
      r = nums.length - 1

  while(l < r) {
    var la = nums[l] === sortedNums[l]
    var lb = nums[r] === sortedNums[r]
    if (la) {
      l++
    }

    if (lb) {
      r--
    }

    if (!la && !lb) {
      break;
    }
  }

  return r - l ? r - l + 1 : r - l
};

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]))