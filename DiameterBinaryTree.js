/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var diameterOfBinaryTree = function (root) {
  let max = 0;
  maxDepth(root);
  return max;
  function maxDepth(root) {
    if (!root) return 0;
    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);
    let myDiameter = leftDepth + rightDepth;
    max = Math.max(max, myDiameter);
    return Math.max(leftDepth, rightDepth) + 1;
  }
};
