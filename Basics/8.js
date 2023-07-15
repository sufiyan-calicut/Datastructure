// 8.  Implement a function to find the average of an array of numbers.
function findAverage(array) {
  let sum = array.reduce((acc, curr) => (acc += curr), 0);
  let count = array.length;
  let average = sum / count;
  console.log(sum, count, average);
  return average;
}

findAverage([1,2,3,4,5,6,7,8,9,10]);