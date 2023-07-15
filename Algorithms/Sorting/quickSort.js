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

let unsotedArray = [9,8,7,6,5,4,3,2,1]
let sorted = quickSort(unsotedArray);
console.log(sorted)