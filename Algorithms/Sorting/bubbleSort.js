function bubbleSort(array) {
  let swapped = false;
  let length = array.length;

  do {
    swapped = false;
    for (let j = 0; j < length; j++) {
      if (array[j + 1] < array[j]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}

let array = [9,8,7,6,5,4,3,2,1]
console.log(bubbleSort(array))