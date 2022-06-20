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
 * @param {number} k
 * @return {number}
 */

/*
    Logic:
        - conert tree to inorder list
        - increase count until k === count
*/
var kthSmallest = function (root, k) {
  let inOrderList = dfs(root, []);
  let count = 0;
  for (let i = 0; i < inOrderList.length; i++) {
    count++;
    if (count === k) {
      return inOrderList[i];
    }
  }
};
const dfs = (root, list) => {
  if (!root) return null;
  dfs(root.left, list);
  list.push(root.val);
  dfs(root.right, list);
  return list;
};
