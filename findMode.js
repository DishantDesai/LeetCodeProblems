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
 * The mode(s) (i.e., the most frequently occurred element) in it.
 */

/*
    Logic:
        - create map with {maxVal:maxCount} by traversing through tree
        - convert it to Array and sort the Array
        - push maxCount to res[] and check if any other element has same maxCount in sorted Array
*/
var findMode = function (root) {
  let map = dfs(root, new Map());
  let res = [];
  //sort the map in descending order
  const pairs = Array.from(map, ([name, value]) => [name, value]);
  const sorted = pairs.sort((a, b) => b[1] - a[1]);
  let maxCount = sorted[0][1];
  let maxVal = sorted[0][0];
  res.push(maxVal);

  sorted.forEach((ele) => {
    if (ele[1] === maxCount && ele[0] !== maxVal) {
      res.push(ele[0]);
    }
  });
  return res;
};

const dfs = (root, map) => {
  if (!root) return map;
  if (map.has(root.val)) {
    map.set(root.val, map.get(root.val) + 1);
  } else {
    map.set(root.val, 1);
  }
  if (root.left) dfs(root.left, map);
  if (root.right) dfs(root.right, map);
  return map;
};

console.log([1, null, 2, 2]);

//Output:[2]
