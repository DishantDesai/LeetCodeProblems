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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  return rangeSum(root, low, high, 0);
};
const rangeSum = (root, low, high, sum) => {
  if (!root) return 0;
  if (root.val >= low && root.val <= high) {
    sum += root.val;
  }
  if (root.left) sum = rangeSum(root.left, low, high, sum);
  if (root.right) sum = rangeSum(root.right, low, high, sum);
  return sum;
};

console.log(rangeSumBST([10, 5, 15, 3, 7, null, 18], 7, 15));

//Output: 32
