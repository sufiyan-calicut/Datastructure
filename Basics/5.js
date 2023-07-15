// Write a function to find the largest element in an array.
function findLargest(array) {
  let largest = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  return largest;
}
let numbers = [8, 2, 3, 4, 7, 9, 6, 0, 10, 75, 24, 8];
console.log(findLargest(numbers));
