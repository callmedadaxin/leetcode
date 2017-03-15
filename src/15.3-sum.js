/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function(nums) {
//   var sum = 0,
//     res = [],
//     has = {};

//   //长度小于3
//   if (nums.length < 3) {
//     return [];
//   }

//   // 长度等于3
//   if (nums.length === 3) {
//     if (nums.reduce(function(a, b) {
//         return a + b;
//       }) === sum) {
//       return [nums];
//     } else {
//       return [];
//     }
//   }

//   for (var i = 0; i < nums.length; i++) {
//     var num = nums[i],
//       newNum = nums.slice(0),
//       newRes = [];

//     //去重
//     if (!has[num]) {
//       newNum.splice(i, 1);
//       newRes = getIndex2(newNum, sum - num, num)
//       has[num] = true;
//     }


//     if (newRes.length) {
//       res = res.concat(newRes);
//     }
//   }

//   //去重
//   res = filter(res);

//   return res;
// };

// //通过object 进行一次遍历
// function getIndex2(arr, target, n) {
//   var length = arr.length,
//     i = 0,
//     dict = {},
//     res = [];

//   for (; i < length; i++) {
//     var num = arr[i];

//     if (dict[num] !== undefined) {
//       res.push([n, dict[num], num].sort());
//     } else {
//       dict[(target - num).toString()] = num;
//     }
//   }

//   return res;
// }

// //去重
// function filter(arr) {
//   var hash = {};
//   var result = [];
//   for (var i = 0, len = arr.length; i < len; i++) {
//     if (!hash[arr[i]]) {
//       result.push(arr[i]);
//       hash[arr[i]] = true;
//     }
//   }

//   return result;
// }

var threeSum = function(nums) {
  var sum = 0,
    res = [],
    has = {};

  //长度小于3
  if (nums.length < 3) {
    return [];
  }

  nums.sort(function(a, b) {
    return a - b;
  });

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
        res.push([num, nums[front], nums[end]]);
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

// console.log(getIndex2([-4, 0], -4))
console.log(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]));