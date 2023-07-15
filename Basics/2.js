// write a function to check if given string is a palindrome and return true or false

function palindrome(str) {
  let length = Math.round(str.length / 2);
  let end = str.length - 1;
  for (let i = 0; i < length; i++) {
    if (str[i] == str[end]) {
      end--;
      continue;
    } else {
      return false;
    }
  }
  return true;
}

let str = "malayalam";
console.log(palindrome(str));
