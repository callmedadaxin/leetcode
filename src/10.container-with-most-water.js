/**
 * 寻找两条线段与x轴组成的木桶，可容纳最多的水
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  var left = 0,
    right = height.length - 1,
    max = 0;

  if (height.length < 2) {
    return 0;
  }

  while (left < right) {
    max = Math.max(max, (right - left) * Math.min(height[left], height[right]));

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
}

console.log(maxArea([1, 2]))