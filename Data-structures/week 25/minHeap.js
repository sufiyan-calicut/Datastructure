class MinHeap {
  constructor() {
    this.heap = [];
  }

  buildHeap() {
    const heapSize = Math.floor(this.heap.length / 2);
    for (let i = heapSize - 1; i >= 0; i--) {
      this.heapifyDown(i);
    }
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  extractMin() {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return minValue;
  }

  heapifyUp(index) {
    const parentIndex = Math.floor((index - 1) / 2);
    if (index > 0 && this.heap[index] < this.heap[parentIndex]) {
      [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
      this.heapifyUp(parentIndex);
    }
  }

  heapifyDown(index) {
    const leftIndex = 2 * index + 1;
    const rightIndex = 2 * index + 2;
    let smallestIndex = index;
    if (leftIndex < this.heap.length && this.heap[leftIndex] < this.heap[smallestIndex]) {
      smallestIndex = leftIndex;
    }
    if (rightIndex < this.heap.length && this.heap[rightIndex] < this.heap[smallestIndex]) {
      smallestIndex = rightIndex;
    }
    if (smallestIndex !== index) {
      [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
      this.heapifyDown(smallestIndex);
    }
  }

  heapSort() {
    const sortedArray = [];
    while (this.heap.length > 0) {
      sortedArray.push(this.extractMin());
    }
    return sortedArray;
  } 

  deleteValue(value) {
    const index = this.heap.indexOf(value);
    if (index === -1) {
      return; 
    }
    this.swap(index, this.heap.length - 1);
    this.heap.pop();
    this.heapifyUp(index);
    this.heapifyDown(index);
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  printHeap() {
    console.log(this.heap);
  }

}

let minHeap = new MinHeap();
minHeap.insert(9)
minHeap.insert(5)
minHeap.insert(2)
minHeap.insert(7)
minHeap.insert(1)
minHeap.insert(6)
// minHeap.heap = [9, 5, 2, 7, 1, 6];
// minHeap.buildHeap();
// minHeap.insert(18)
minHeap.printHeap(); 

