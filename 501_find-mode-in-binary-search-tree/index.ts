/* eslint-disable @typescript-eslint/no-non-null-assertion */
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function findMode(root: TreeNode | null): number[] {
  const nodeStack: (TreeNode | null)[] = [];
  let currentNode = root;
  let modes: number[] = [];
  let modalFrequency = 0;
  let previousNodeValue: number | null = null;
  let occurrenceCount = 1;

  while (currentNode !== null || nodeStack.length > 0) {
    while (currentNode !== null) {
      nodeStack.push(currentNode);
      currentNode = currentNode.left;
    }

    currentNode = nodeStack.pop()!;

    if (previousNodeValue === currentNode.val) occurrenceCount += 1;
    else occurrenceCount = 1;

    if (occurrenceCount > modalFrequency) {
      modalFrequency = occurrenceCount;
      modes = [currentNode.val];
    } else if (occurrenceCount === modalFrequency) {
      modes.push(currentNode.val);
    }

    previousNodeValue = currentNode.val;

    currentNode = currentNode.right;
  }

  return modes;
}
