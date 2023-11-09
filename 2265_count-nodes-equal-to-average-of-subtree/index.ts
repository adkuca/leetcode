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

function averageOfSubtree(root: TreeNode | null): number {
  let countOfNodesMatchingAvg = 0;

  const calculateSubtree = (node: TreeNode | null): [number, number] => {
    if (node === null) return [0, 0];

    const [leftSubtreeSum, leftSubtreeNodeCount] = calculateSubtree(node.left);
    const [rightSubtreeSum, rightSubtreeNodeCount] = calculateSubtree(node.right);

    const subtreeSum = leftSubtreeSum + rightSubtreeSum + node.val;
    const subtreeNodeCount = leftSubtreeNodeCount + rightSubtreeNodeCount + 1;
    if (~~(subtreeSum / subtreeNodeCount) === node.val) countOfNodesMatchingAvg += 1;

    return [subtreeSum, subtreeNodeCount];
  };

  calculateSubtree(root);

  return countOfNodesMatchingAvg;
}
