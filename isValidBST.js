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
 * @return {boolean}
 */

var isValidBST = function (root) {
  let order = [];
  function traverse(node) {
    if (node.left) traverse(node.left);
    order.push(node.val);
    if (node.right) traverse(node.right);
  }
  traverse(root);
  for (let i = 1; i < order.length; i++) {
    if (order[i] <= order[i - 1]) return false;
  }
  return true;
};
