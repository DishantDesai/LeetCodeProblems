/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  let stack = [];
  let addStack = [];
  ops.forEach((ele) => {
    let lastEleStack = stack.length ? stack[stack.length - 1] : 0;
    let lastEleAddStack = addStack.length ? addStack[addStack.length - 1] : 0;
    if (ele === "C") {
      addStack.push(lastEleAddStack - lastEleStack);
      stack.pop();
    } else if (ele === "D") {
      stack.push(lastEleStack * 2);
      addStack.push(lastEleAddStack + lastEleStack * 2);
    } else if (ele === "+") {
      let sum = lastEleStack + stack[stack.length - 2];
      stack.push(sum);
      addStack.push(lastEleAddStack + sum);
    } else {
      stack.push(parseInt(ele));
      addStack.push(lastEleAddStack + parseInt(ele));
    }
  });
  return addStack[addStack.length - 1];
};

calPoints(["5", "2", "C", "D", "+"]);
