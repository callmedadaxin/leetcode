function quickSort(arr) {
  let len = arr.length;

  if (len <= 1) {
    return arr;
  }

  let center = Math.floor(len / 2),
    centerNum = arr.splice(center, 1)[0],
    left = [],
    right = [];

  for (let i = 0; i < len - 1; i++) {
    let elem = arr[i]

    if (elem < centerNum) {
      left.push(elem);
    } else {
      right.push(elem);
    }
  }

  return quickSort(left).concat([centerNum], quickSort(right))
}

module.exports = quickSort