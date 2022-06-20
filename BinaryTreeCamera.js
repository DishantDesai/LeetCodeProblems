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
// -1: NOT MONITORED
//  0: MONITORED
//  1: HAS CAMERA
var minCameraCover = function (root) {
  let count = 0;
  return dfs(root) === -1 ? count + 1 : count;
  function dfs(root) {
    if (!root) return 0;
    let left = dfs(root.left);
    let right = dfs(root.right);

    if (left === -1 || right === -1) {
      count++;
      return 1;
    }
    if (left === 1 || right === 1) {
      return 0;
    }
    return -1;
  }
};
