/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
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

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  var res = [],
    has = false;

  while (head) {
    if (!hasNext(head, n) && !has) {
      head = head.next;
      has = true;

      continue;
    }

    res.push(head.val);
    head = head.next;
  }

  return res;
};

function hasNext(head, n) {
  while (n) {
    head = head.next;

    if (!head) {
      return false;
    }
    n--;
  }

  return true;
}

console.log(removeNthFromEnd(new nodeList([1, 2, 3, 4, 5]), 2))