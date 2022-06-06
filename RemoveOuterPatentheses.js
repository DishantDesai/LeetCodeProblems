/**
 * @param {string} s
 * @return {string}
 */
//My solution
var removeOuterParentheses = function (s) {
  let tempStack = [];
  let primDecomStack = [];
  let openinBracketCnt = 0;
  let closinBracketCnt = 0;
  s.split("").forEach((ele) => {
    if (ele === "(") {
      openinBracketCnt += 1;
    } else {
      closinBracketCnt += 1;
    }
    tempStack.push(ele);
    if (openinBracketCnt === closinBracketCnt) {
      primDecomStack.push(tempStack.slice(1, tempStack.length - 1).join(""));
      tempStack = [];
    }
  });
  return primDecomStack.join("");
};

// Submission solution
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses2 = function (s) {
  let result = "";
  let paran = 0;
  for (i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      if (paran > 0) {
        result = result + "(";
      }
      paran++;
    } else if (s[i] === ")") {
      if (paran > 1) {
        result = result + ")";
      }
      paran--;
    }
  }
  return result;
};

console.log(removeOuterParentheses("(()())(())"));
console.log(removeOuterParentheses("(()())(())(()(()))"));
console.log(removeOuterParentheses("()()"));
