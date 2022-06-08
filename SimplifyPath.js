/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let arr = [];
  path.split("/").forEach((ele) => {
    if (ele !== "") {
      if (ele !== ".." && ele !== ".") {
        arr.push(ele);
      } else if (ele === ".." && arr.length) {
        arr.pop();
      }
    }
  });
  let res = arr.join("/");
  return "/" + res;
};
console.log(simplifyPath("/home//foo/../../"));
