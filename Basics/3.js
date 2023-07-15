// function to reverse a given string and return the reversed string.

// 1. using built-in functions
function reverseString(str) {
  let reversed = str.split("").reverse().join("");
  console.log(typeof reversed);
  return reversed;
}
console.log(reverseString("gogd"));

0// 2.use normal method
function reversestring(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

let sample = "stright";
console.log(reversestring(sample));
