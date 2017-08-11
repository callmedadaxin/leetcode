/**
 * @param {number[]} nums
 * @return {number}
 */
var cal = function (arr) {
  return arr.reduce((all, num) => {
    return all * num
  }) 
}
var maximumProduct = function(nums) {
  if (nums.length < 3 || nums.length > Math.pow(10, 4)) {
    return 0
  }

  nums = nums.sort((a, b) => a - b)
  let r = nums.slice(-3)

  // 有两个以上的负数
  // 存在两种情况可行，两个负数，或者三个正数
  // 只要比较两个负数的乘积 和 前两个整数的乘积大小即可
  if (nums[1] < 0) {
    const lc = nums[0] * nums[1]
    const rc = r[0] * r[1]

    return lc >= rc ? lc * r[2] : rc * r[2]
  }

  return cal(r)
};

console.log(maximumProduct([-1,-3,1,2,3]))

