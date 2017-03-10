var nums = [2, 7, 11, 15];

//最简单的，遍历所有
function getIndex1(arr, target) {
  var length = arr.length;

  for (var i = 0; i < length; i++) {
    for (var j = i + 1; j < length; j++) {
      if (arr[i] + arr[j] == target) {
        return [i, j];
      }
    }
  }
}

//通过object 进行一次遍历
function getIndex2(arr, target) {
  var length = arr.length,
    i = 0,
    dict = {};

  for (; i < length; i++) {
    var num = arr[i];

    if (dict[num] !== undefined) {
      return [dict[num], i];
    } else {
      dict[target - num] = i;
    }
  }

  return [];
}

console.log(getIndex2(nums, 9));