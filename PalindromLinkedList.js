/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var midNode = (head) => {
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
var reverse = (head) => {
  let prev = null;
  let curr = head;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
};
var compare = (l1, l2) => {
  while (l1 && l2) {
    if (l1.val !== l2.val) return false;
    l1 = l1.next;
    l2 = l2.next;
  }
  return true;
};
var isPalindrome = function (head) {
  if (!head) return false;
  if (!head.next) return true;
  // find middle node
  let mid = midNode(head);
  let l2 = mid.next;
  // make seprate list
  mid.next = null;
  //reverse the list after middle node
  l2 = reverse(l2);
  return compare(head, l2);
};
