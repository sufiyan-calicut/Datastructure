function mergeSort(array) {
  if (array.length <= 1) return array;

  let middle = Math.floor(array.length / 2);
  let leftHalf = mergeSort(array.slice(0, middle));
  let rightHalf = mergeSort(array.slice(middle));

  return merge(leftHalf, rightHalf);
}
function merge(leftArray, rightArray) {
  let merged = [];
  let left = 0;
  let right = 0;

  while (left < leftArray.length && right < rightArray.length) {
    if (leftArray[left] < rightArray[right]) {
      merged.push(leftArray[left]);
      left++;
    } else {
      merged.push(rightArray[right]);
      right++;
    }
  }

  while (left < leftArray.length) {
    merged.push(leftArray[left]);
    left++;
  }
  while (right < rightArray.length) {
    merged.push(rightArray[right]);
    right++;
  }

  return merged;
}

let unsotedArray = [5,3,8,2,8,4,3,2,4,7,8,2]
let sorted = mergeSort(unsotedArray);
console.log(sorted)