/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let step = false;
  let first: ListNode | null = null;
  let node: ListNode | null = null;

  while (l1 !== null || l2 !== null || step) {
    const d1 = l1 ? l1.val : 0;
    const d2 = l2 ? l2.val : 0;
    const sum: number = d1 + d2 + (step ? 1 : 0);
    step = sum > 9;
    const next = new ListNode(sum % 10);
    if (node) node.next = next;
    else first = next;
    node = next;
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  return first ?? new ListNode();
}
