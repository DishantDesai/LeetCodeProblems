var lengthLongestPath = function (input) {
  let maxLength = 0;
  let pathLength = { 0: 0 };
  let lines = input.split("\n");
  for (let i = 0; i < lines.length; i++) {
    let name = lines[i].replace(/\t/g, "");
    let depth = lines[i].length - name.length;
    if (name.includes(".")) {
      maxLength = Math.max(maxLength, pathLength[depth] + name.length);
    } else {
      pathLength[depth + 1] = pathLength[depth] + name.length + 1;
    }
  }

  return maxLength;
};

console.log(lengthLongestPath("dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext"));
