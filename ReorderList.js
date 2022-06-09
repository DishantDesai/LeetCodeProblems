const reorderList = (head) => {
  // get middle of LL
  const middleNode = (head) => {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  };

  // reverse LL
  const reverse = (head) => {
    let prev = null;
    let current = head;

    while (current) {
      const temp = current.next;

      current.next = prev;
      prev = current;
      current = temp;
    }

    return prev;
  };

  const sentinel = new ListNode(null);
  let tail = sentinel;

  let l1 = head;
  let l2 = reverse(middleNode(head));

  let odd = true;

  // add one by one on to sentinel node
  while (l1 && l2) {
    if (odd) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }

    tail = tail.next;
    odd = !odd;
  }

  return sentinel.next;
};

// var reorderList = function(head) {
//     var joinLists = (l1,l2) => {
//         let dummy = new ListNode(-101)
//         let head = dummy;
//         while(l1 && l2){
//             let newNode = new ListNode(l1.val);
//             let newNode2 = new ListNode(l2.val);
//             dummy.next = newNode;
//             dummy.next.next = newNode2
//             l1 = l1.next;
//             l2 = l2.next;
//             dummy = dummy.next.next
//         }
//         if(l1) dummy.next = l1;
//         if(l2) dummy.next = l2;
//         return head.next
//     }
//     var reverseList = (l2) => {
//         let prev = null;
//         let curr = l2;
//         while(curr){
//             let temp = curr.next;
//             curr.next = prev;
//             prev = curr;
//             curr = temp;
//         }
//         return prev;
//     }
//     var middle = (head) => {
//     let slow = head;
//     let fast = head;
//     while(fast.next && fast.next.next){
//         slow = slow.next;
//         fast = fast.next.next;
//     }
//     return slow
// }
//     if(!head && !head.next) return head
//     let mid = middle(head);
//     let l2 = mid.next;
//     let reverseL2 = reverseList(l2);
//     console.log(head,reverseL2)
//     head = joinLists(head,reverseL2)
//     return head
// };
