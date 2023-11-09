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

function largestValues(root: TreeNode | null): number[] {
  if (root === null) return [];

  const largestPerLevel: number[] = [];
  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    let currLevelMax = -Infinity;

    for (let i = 0; i < levelSize; i += 1) {
      const node = queue.shift()!;
      currLevelMax = Math.max(currLevelMax, node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    largestPerLevel.push(currLevelMax);
  }

  return largestPerLevel;
}
