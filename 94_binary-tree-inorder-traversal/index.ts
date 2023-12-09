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

function inorderTraversal(root: TreeNode | null): number[] {
  const h = (inorder: number[], node: TreeNode): number[] => {
    if (node.left !== null) h(inorder, node.left);

    inorder.push(node.val);

    if (node.right !== null) h(inorder, node.right);

    return inorder;
  };

  return root === null ? [] : h([], root);
}
