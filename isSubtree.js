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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

/* 
    Logic:
        - traverse the main tree until same node found as subtree root
        - check 
            if root.val == subroot.val
                then traverse whole subtree and given subtree and match each node
*/
var isSubtree = function (root, subRoot) {
  let ans;
  if (root === null) return null;
  if (root.val === subRoot.val) {
    ans = isIdentical(root, subRoot);
  }
  return (
    ans ||
    Boolean(isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot))
  );
};

const isIdentical = (root, subRoot) => {
  if (root === null && subRoot === null) return true;
  if (root === null || subRoot === null) return false;
  if (root.val !== subRoot.val) return false;
  return (
    isIdentical(root.left, subRoot.left) &&
    isIdentical(root.right, subRoot.right)
  );
};
