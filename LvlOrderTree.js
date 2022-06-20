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
 * @return {number[][]}
 */

/*  
    Logic:
        - keep track of level
        - if level >= array create new array inside main array
        - increment level by 1 when call recursion
*/

var levelOrder = function (root) {
  let result = [];
  bfs(root, 0);
  return result;
  function bfs(root, lvl) {
    if (root) {
      if (lvl >= result.length) {
        result.push([]);
      }
      result[lvl].push(root.val);
      bfs(root.left, lvl + 1);
      bfs(root.right, lvl + 1);
    }
  }
};

console.log([3, 9, 20, null, null, 15, 7]);

//Output:[[3],[9,20],[15,7]]
