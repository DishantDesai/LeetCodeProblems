let stack = [];
var isValid = function (s) {
  let isValid = false;
  s.split("").forEach((ele) => {
    if (ele === "(" || ele === "[" || ele === "{") {
      stack.push(ele);
    } else if (isComplement(ele)) {
      stack.pop();
    } else {
      stack.push(ele);
    }
  });
  if (stack.length === 0) isValid = true;
  stack = [];
  return isValid;
};
var isComplement = (ele) => {
  return (
    (stack[stack.length - 1] === "(" && ele === ")") ||
    (stack[stack.length - 1] === "[" && ele === "]") ||
    (stack[stack.length - 1] === "{" && ele === "}")
  );
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
