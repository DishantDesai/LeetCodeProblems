/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  return traverse(nums, 0, nums.length - 1);
};
const traverse = (nums, start, end) => {
  if (start > end) return null;
  let mid = Math.floor((start + end) / 2);
  let node = new TreeNode(nums[mid]);
  node.left = traverse(nums, start, mid - 1);
  node.right = traverse(nums, mid + 1, end);
  return node;
};

console.log(sortedArrayToBST([[-10, -3, 0, 5, 9]]));

//Output
//         0
//    -10      5
//       -3      9
