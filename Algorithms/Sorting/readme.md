## Popular sorting algorithms
Here, we discuss about 5 popular sorting algorithms which are :-

1. Bubble Sort
2. Insertion Sort
3. Selection Sort
4. Quick Sort
5. Merge Sort

## Bubble Sort

- It is a simple sorting algorithm easy to learn
- It repeatedly itrate given array
- Compares adjacent elements
- Swap elements if they are in wrong order
- The pass through the list repeated untill the list is sorted
- Time complexity of bubble sort is O(n^2)

* Space complexity is O(1)

- It is not an efficient algorithm for large lists

## Insertion Sort

- It works by dividing the array into sorted and unsorted part
- Initially, the sorted part only contains the second element (1st index) of the array, and the unsorted part contains the remaining elements
- Compare the taken element (initially the second element) with the elements in the sorted part of the array from right to left untill find the correct position
- Shift all the larger elements one position to righ to make space for the new element
- Insert the into it's correct position in the sorted part
- The algorithm then repeatedly takes the next element from the unsorted part repeats the 2 to 4 steps
- The time complextiy of insertion sort is O(n^2);
- Insertion sort performs well for small input sizes or partially sorted array;
- Space complexity is O(1)

## Selection Sort

- It works by dividing the array into sorted an unsorted part
- This algorithm repeatedly selects the smalles (or largest) element from the unsorted portion
- Swaps it with the first unsorted elements
- Time complexity is O(n^2);

## Quick Sort

- It follows divide-and-conquer approach
- Select a pivot (a central point) element from the array
- Partitioning the other elements in to two sub-arrays according to whether they are less than or greater than to pivot
- The sub-arrays are then recursively sorted using the same process untill entire array is sorted
- The two recursive calls work on diffrent parts of the array, and they are not invoked simoultaniously or in parellel. Each call is completed before the one starts

## Merge Sort

- It follows divide-and-conquer approach
- Recursively dividing the input array into two halves untill each halves contains only one element or is empty
- Once the array divided into single elements(which are already sorted by defintion) the mergin process begins. The merge operation combines the two sorted sub-arrays into a single sorted sub array
- The merging process involves comparing the elements from both sub-arrays and placing them in the correct order in a new auxilary array.
- The comparison starts with the smallest element from both sub-arrays and proceeds to the largest
- The process continous untill all the elements are merged into the auxilory array
