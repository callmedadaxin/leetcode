/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  var sum = 0,
    res = [];

  //长度小于3
  if (nums.length < 3) {
    return [];
  }

  // 长度等于3
  if (nums.length === 3) {
    if (nums.reduce(function(a, b) {
        return a + b;
      }) === sum) {
      return [nums];
    } else {
      return [];
    }
  }

  for (var i = 0; i < nums.length; i++) {
    var num = nums[i],
      newNum = nums.slice(0);
    newRes = [];

    newNum.splice(i, 1);
    newRes = getIndex2(newNum, sum - num)

    if (newRes.length) {
      res.push([num].concat(newRes).sort())
    }
  }

  console.log(res)

  //去重
  res = filter(res);

  return res;
};

//通过object 进行一次遍历
function getIndex2(arr, target) {
  var length = arr.length,
    i = 0,
    dict = {};

  for (; i < length; i++) {
    var num = arr[i];

    console.log(dict, num);
    if (dict[num] !== undefined) {
      return [dict[num], num];
    } else {
      dict[(target - num).toString()] = num;
    }
  }



  return [];
}

//去重
function filter(arr) {
  var hash = {};
  var result = [];
  for (var i = 0, len = arr.length; i < len; i++) {
    if (!hash[arr[i]]) {
      result.push(arr[i]);
      hash[arr[i]] = true;
    }
  }

  return result;
}
console.log(getIndex2([2, 0, 0], -2))
  // console.log(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]));