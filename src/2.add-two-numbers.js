var nodeList = function(arr) {
  this.val = arr[0];

  arr = arr.slice(1);

  Object.defineProperties(this, {
    next: {
      get: function() {
        if (arr.length) {
          return new nodeList(arr)
        } else {
          return null;
        }
      }
    }
  })
}
var l1 = new nodeList([1, 4]);
var l2 = new nodeList([2, 6]);

/**
 * [1,3,2] + [2,3,1] = [3, 6, 3]
 * [1,3,2] + [2,3] = [3, 6, 2]
 * [1] + [9] = [0, 1]
 */

//使用数字相加，不考虑溢出
// function changeListToNum (list) {
//   var num = [];

//   if(!list) {
//     return 0;
//   }

//   while(list) {
//     num.unshift(list.val);
//     list = list.next;
//   }

//   return parseInt( num.join('') );
// }

// function addTwoNumbers (l1, l2) {
//   var result = [];
//   var res = changeListToNum(l1) + changeListToNum(l2);

//   res.toString().split('').forEach( function(elem) {
//     result.unshift(parseInt(elem));
//   });

//   return result;
// }

//基本顺序写法
function addTwoNumbers(l1, l2) {
  var result = [],
    addOne = 0;

  if (!l1) {
    return l2;
  }

  if (!l2) {
    return l1;
  }

  while (l1 || l2) {
    var val;

    //两数组不等长
    if (l1 === null || l2 === null) {
      var l = l1 || l2;

      val = l.val + addOne;

      l1 = l.next;
      l2 = null;
    } else {
      val = l1.val + l2.val + addOne;
      l1 = l1.next;
      l2 = l2.next;
    }

    if (val >= 10) {
      val = val % 10;
      addOne = 1;
    } else {
      addOne = 0;
    }

    result.push(val);
  }

  if (addOne === 1) {
    result.push(1);
  }

  return result;
}

console.log(addTwoNumbers(l1, l2));