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
 * @return {number[]}
 */

/* 
    Logic:
        - keep track of tree level 
        - push right node to list if level is not visited

*/
var rightSideView = function (root) {
  if (!root) return [];
  return inOrderdfs(root, [], 0);
};
const inOrderdfs = (root, list, lvl) => {
  if (!root) return null;
  if (!list[lvl]) {
    list.push(root.val);
  }
  inOrderdfs(root.right, list, lvl + 1);
  inOrderdfs(root.left, list, lvl + 1);
  return list;
};
