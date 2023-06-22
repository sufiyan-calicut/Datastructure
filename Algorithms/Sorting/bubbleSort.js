function bubbleSort(array) {
  let swapped = false;
  let length = array.length;

  do {
    swapped = false;
    for (let i = 0; i < length; i++) {
      if (array[j + 1] < array[j]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
      }
    }
  } while (swapped);
}
