/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */

/* 
    Logic:
        - if digit is found
            then concate substring of 0 to i and i+1 to length of string
            and check if it is greater than previous 'max'
*/
var removeDigit = function (number, digit) {
  let max = "0";
  for (let i = 0; i < number.length; i++) {
    if (number[i] === digit) {
      let temp = number.substring(0, i) + number.substring(i + 1);
      if (temp > max) max = temp;
    }
  }
  return max;
};
