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

var maxPathSum = function (root) {
  let res = root.val;
  maxPathSum(root);
  return res;
  function maxPathSum(root) {
    if (!root) return 0;
    let leftMax = Math.max(0, maxPathSum(root.left));
    let rightMax = Math.max(0, maxPathSum(root.right));
    res = Math.max(res, leftMax + rightMax + root.val);
    return Math.max(leftMax, rightMax) + root.val;
  }
};
