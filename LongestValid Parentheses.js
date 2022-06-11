/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let left = 0;
  let right = 0;
  let maxLen = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      left++;
    } else {
      right++;
    }
    if (left === right) {
      maxLen = Math.max(maxLen, left * 2);
    } else if (left < right) {
      left = 0;
      right = 0;
    }
  }
  left = 0;
  right = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ")") {
      right++;
    } else {
      left++;
    }
    if (left === right) {
      maxLen = Math.max(maxLen, right * 2);
    } else if (left > right) {
      left = 0;
      right = 0;
    }
  }
  return maxLen;
};

console.log(longestValidParentheses("())"));
console.log(longestValidParentheses("()()((())"));
