function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i; // Return the index of the found element
      }
    }
    return -1; // Return -1 if the element is not found
  }
  
  // Example usage:
  const array = [10, 25, 5, 8, 15];
  const targetElement = 8;
  const resultIndex = linearSearch(array, targetElement);
  
  if (resultIndex !== -1) {
    console.log(`Element found at index ${resultIndex}.`);
  } else {
    console.log("Element not found in the array.");
  }
  