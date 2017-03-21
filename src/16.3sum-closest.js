/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  var min = {};

  //边界
  if (nums.length < 3) {
    return 0;
  }

  //只有三个数
  if (nums.length === 3) {
    return nums[0] + nums[1] + nums[2] - target;
  }

  nums = nums.sort(function(a, b) {
    return a - b;
  })

  for (var i = 0; i < nums.length; i++) {
    var num = nums[i];

    if (num === nums[i - 1]) {
      continue;
    }

    var left = i + 1,
      right = nums.length - 1;

    while (left < right) {
      var newTarget = num + nums[left] + nums[right],
        newMin = Math.abs(newTarget - target);

      //初始值
      if (!min.value || newMin < min.value) {
        min = {
          value: newMin,
          target: newTarget
        };
      }

      if (num + nums[left] + nums[right] < target) {
        left++;
      } else if (num + nums[left] + nums[right] > target) {
        right--;
      } else {
        return newTarget;
      }
    }
  }

  return min.target;
};

console.log(threeSumClosest([-1, 2, 1, -4, 5, 8], 4))