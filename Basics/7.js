// 7. Implement a function to check if a given number is a palindrome.

function isPalindrome(number) {
  let value = "" + number;
  let end = value.length - 1;
  for (let i = 0; i < Math.round(value.length / 2); i++) {
    if (value[i] == value[end]) {
      end--;
      continue;
    } else {
      return "its not palindrom";
    }
  }
  return "its palindrom";
}
console.log(isPalindrome(78987));
