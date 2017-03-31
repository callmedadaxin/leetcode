/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  var res = [];

  if (nums.length < 4) {
    return [];
  };

  // 长度等于4
  if (nums.length === 4) {
    if (nums.reduce(function(a, b) {
        return a + b;
      }) === target) {
      return [nums];
    } else {
      return [];
    }
  }

  //排序
  nums.sort(function(a, b) {
    return a - b;
  });

  for (var i = 0; i < nums.length - 3; i++) {
    var num = nums[i];

    //去重
    if (num === nums[i - 1]) {
      continue;
    }

    res = res.concat(threeSum(nums.slice(i + 1), num, target - num));
  }

  return res;
};

var threeSum = function(nums, firstNum, sum, hasFound) {
  var res = [];

  for (var i = 0, l = nums.length; i < l; i++) {
    var num = nums[i];

    //去重
    if (num === nums[i - 1]) {
      continue;
    }

    var front = i + 1,
      end = l - 1;

    while (front < end) {
      //去重复
      if (end < nums.length - 1 && nums[end] == nums[end + 1]) {
        end--;
        continue;
      }
      if (front > i + 1 && nums[front] == nums[front - 1]) {
        front++;
        continue;
      }

      if (nums[front] + num + nums[end] === sum) {
        res.push([firstNum, num, nums[front], nums[end]]);
        front++;
        end--;
      } else if (nums[front] + num + nums[end] < sum) {
        front++;
      } else {
        end--;
      }
    }
  }

  return res;
};

console.log(fourSum([0, 0, 0, 0, 0], 0))