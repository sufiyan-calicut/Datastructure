## Popular sorting algorithms
Here, we discuss 5 popular sorting algorithms which are:-

1. Bubble Sort
2. Insertion Sort
3. Selection Sort
4. Quick Sort
5. Merge Sort

## Bubble Sort

- It is a simple sorting algorithm easy to learn
- It repeatedly iterates a given array
- Compares adjacent elements
- Swap elements if they are in the wrong order
- The pass through the list is repeated until the list is sorted
- Time complexity of bubble sort is O(n^2)

* Space complexity is O(1)

- It is not an efficient algorithm for large lists

## Insertion Sort

- It works by dividing the array into sorted and unsorted part
- Initially, the sorted part only contains the second element (1st index) of the array, and the unsorted part contains the remaining elements
- Compare the taken element (initially the second element) with the elements in the sorted part of the array from right to left until find the correct position
- Shift all the larger elements from one position to the right to make space for the new element
- Insert the into its correct position in the sorted part
- The algorithm then repeatedly takes the next element from the unsorted part and repeats the 2 to 4 steps
- The time complexity of insertion sort is O(n^2);
- Insertion sort performs well for small input sizes or partially sorted arrays;
- Space complexity is O(1)

## Selection Sort

- It works by dividing the array into sorted and unsorted part
- This algorithm repeatedly selects the smallest (or largest) element from the unsorted portion
- Swaps it with the first unsorted elements
- Time complexity is O(n^2);

## Quick Sort

- It follows the divide-and-conquer approach
- Select a pivot (a central point) element from the array
- Partitioning the other elements into two sub-arrays according to whether they are less than or greater than to pivot
- The sub-arrays are then recursively sorted using the same process until the entire array is sorted
- The two recursive calls work on different parts of the array, and they are not invoked simultaneously or in parallel. Each call is completed before the one starts

## Merge Sort

- It follows the divide-and-conquer approach
- Recursively dividing the input array into two halves until each half contains only one element or is empty
- Once the array is divided into single elements(which are already sorted by definition) the Mergin process begins. The merge operation combines the two sorted sub-arrays into a single sorted sub array
- The merging process involves comparing the elements from both sub-arrays and placing them in the correct order in a new auxiliary array.
- The comparison starts with the smallest element from both sub-arrays and proceeds to the largest
- The process continues until all the elements are merged into the auxiliary array
