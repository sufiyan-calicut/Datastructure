// 9.  Write a function to find the second smallest element in an array.

function findSecondSmallest (array){
    let smallest = Infinity;
    let secondSmallest ;

    for(let i = 0; i < array.length; i++){
        if(array[i] < smallest){
            secondSmallest = smallest
            smallest = array[i];
        }

        if(array[i] > smallest && array[i] < secondSmallest){
            secondSmallest = array[i];
        }
    }
    console.log(secondSmallest,'secondSmallest',smallest,'smallest')
}
let array = [1,5,7,9,8,6,4];
findSecondSmallest(array)