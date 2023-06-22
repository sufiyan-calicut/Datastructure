function quickSort(array) {
  if (array.length <= 1) return array;

  let pivot = array[array.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < array.length - 1 ; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

let unsotedArray = [5,3,8,2,8,4,3,2,4,7,8,2]
let sorted = quickSort(unsotedArray);
console.log(sorted)