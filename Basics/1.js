
// find the average of even numbers between zero to ten using do while loop;

let element = 1;
let count = 0;
let average = 0;
let sum = 0;

do {
  if (element % 2 == 0) {
    sum += element;
    count++;
  }
  element++;
} while (element <= 10);

average = sum / count;
console.log(average)