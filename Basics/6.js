// 6. Write a function to remove duplicates from an array.
// 1st approach, create a new array and push the non repeated elemnts i wish to do this method,
// 2nd approach create another loop to shift elements

function findDuplicates(array) {
  let length = array.length;
  console.log(length);
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (i != j && array[i] == array[j]) {
        for (let k = j; k < length; k++) {
          array[k] = array[k + 1];
        }
        length--;
      }
    }
  }
  console.log(length);
  console.log(array);
  return array;
}
let numbers = [1, 2, 3, 5, 2, 5, 3];
findDuplicates(numbers);
