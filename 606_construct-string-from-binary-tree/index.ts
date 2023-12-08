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
function tree2str(root: TreeNode | null): string {
  const h = (node: TreeNode): string => {
    if (node.right !== null)
      return node.left === null
        ? `${node.val}()(${h(node.right)})`
        : `${node.val}(${h(node.left)})(${h(node.right)})`;
    else if (node.left !== null) return `${node.val}(${h(node.left)})`;

    return `${node.val}`;
  };

  return h(root!);
}
