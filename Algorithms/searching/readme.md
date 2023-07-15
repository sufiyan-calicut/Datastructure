## Binary search

Binary search is an efficient search algorithm used to find a specific target value within a sorted array or list. It follows a divide-and-conquer approach, repeatedly dividing the search space in half until the target value is found or determined to be absent.

Here's how the binary search algorithm works:

Start with a sorted array. If the array is not sorted, binary search cannot be applied, and the array must be sorted beforehand.

Set two pointers, left and right, to the start and end indices of the array, respectively.

Calculate the middle index mid as the average of left and right, rounding down if necessary.

Compare the value at the middle index arr[mid] with the target value:

If arr[mid] is equal to the target value, the search is successful, and the algorithm can return the index mid where the target was found.
If arr[mid] is less than the target value, the target value must be in the right half of the array. Update left = mid + 1 to narrow down the search space to the right half.
If arr[mid] is greater than the target value, the target value must be in the left half of the array. Update right = mid - 1 to narrow down the search space to the left half.
Repeat steps 3 and 4 until the target value is found or the search space is empty (i.e., left > right).

If the target value is not found after the entire search space has been eliminated, return a sentinel value (e.g., -1) to indicate that the target value is not present in the array.

Binary search has a time complexity of O(log n), where n is the number of elements in the array. This makes it significantly faster than linear search algorithms, especially for large datasets. However, it requires the array to be sorted initially, and any changes to the array's order would invalidate the binary search results.
