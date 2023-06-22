function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > key) {
      [array[j], array[j + 1]] = [array[j + 1], array[j]];
      j--;
    }
    array[j+1] = key;
  }
  return array;
}

let unsotedArray = [5,3,8,2,8,4,3,2,4,7,8,2]
let sorted = insertionSort(unsotedArray);
console.log(sorted)
