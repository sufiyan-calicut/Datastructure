// reverse an array
// reverse an array method one
function reverseArray(array) {
    let end = array.length - 1;
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      let temp = array[i];
      array[i] = array[end];
      array[end] = temp;
      end--;
    }
    return array;
  }
  
  let array = [1, 2, 3, 4, 5, 6];
  console.log(reverseArray(array));
  
  // method 2
  
  function reversearray(array) {
    let end = array.length - 1;
    let start = 0;
    while (start < end) {
      [array[start], array[end]] = [array[end], array[start]];
      end--;
      start++;
    }
    return array;
  }
  
  let Array = [9, 8, 7, 6, 5, 4];
  console.log(reversearray(Array));
  