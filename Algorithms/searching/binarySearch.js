function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (array[middle] == target) {
      return middle;
    } else if (target < array[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
}
const sortedArray = [2, 4, 7, 10, 13, 18, 21, 27];
const targetValue = 4;

const result = binarySearch(sortedArray, targetValue);
if (result !== -1) {
  console.log(`Target found at index ${result}`);
} else {
  console.log("Target not found");
}
