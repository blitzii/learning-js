/*
Write a function min that takes two arguments and returns their minimum.
*/

// Your code here.
function min(i,j) {
  if (i < j)
    return i;
  else {
    return j;
  }
}

console.log(min(0, 10)); // → 0
console.log(min(0, -10)); // → -10


/*
Recursive function to check if something is even.
- Zero is even
- One is odd
- N has same evenness as N-2
*/

function isEven(number) {
  if (number < 0)
    number *= -1;
  if (number == 1)
    return false;
  else if (number == 0)
    return true;
  else {
    return isEven(number - 2)
  }
}

console.log(isEven(50)); // > true
console.log(isEven(75)); // > false


/*
Bean Counting Boyyyyyyy
*/

function countBs(str) {
  var count = 0;
  for (i=0; i <= str.length; i++) {
    if (str.charAt(i) == "B")
      count++;
  }

  return count;
}
console.log(countBs("BOBBY"));
console.log(countBs("nob"));

function countChars(str,char) {
  var count = 0;
  for (i=0; i<= str.length; i++) {
    if (str.charAt(i) == char)
      count++;
  }
  return count;
}
console.log(countChars("rar","a"));
console.log(countChars("rar","r"));

function countBs(str) {
  return countChars(str, "B");
}
console.log(countBs("BOBBY"));
