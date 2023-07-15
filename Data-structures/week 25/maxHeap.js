class MaxHeap {
    constructor() {
      this.heap = [];
    }
  
    insert(value) {
      this.heap.push(value);
      this.heapifyUp(this.heap.length - 1);
    }
  
    extractMax() {
      if (this.heap.length === 0) {
        return null;
      }
      if (this.heap.length === 1) {
        return this.heap.pop();
      }
      const maxValue = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown(0);
      return maxValue;
    }
  
    heapifyUp(index) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (index > 0 && this.heap[index] > this.heap[parentIndex]) {
        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
        this.heapifyUp(parentIndex);
      }  
    }
  
    heapifyDown(index) {
      const leftIndex = 2 * index + 1;
      const rightIndex = 2 * index + 2;
      let largestIndex = index;
      if (leftIndex < this.heap.length && this.heap[leftIndex] > this.heap[largestIndex]) {
        largestIndex = leftIndex;
      }
      if (rightIndex < this.heap.length && this.heap[rightIndex] > this.heap[largestIndex]) {
        largestIndex = rightIndex;
      }
      if (largestIndex !== index) {
        [this.heap[index], this.heap[largestIndex]] = [this.heap[largestIndex], this.heap[index]];
        this.heapifyDown(largestIndex);
      }
    }
  
    heapSort() {
      const sortedArray = [];
      while (this.heap.length > 0) {
        sortedArray.push(this.extractMax());
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
  
    //code to make an array to heap;

    buildHeap() {
      const heapSize = Math.floor(this.heap.length / 2);
      for (let i = heapSize - 1; i >= 0; i--) {
        this.heapifyDown(i);
      }
    }
  }
  
  let maxHeap = new MaxHeap();
  // maxHeap.heap = [10,20, 8, 12, 22,11];
  // maxHeap.buildHeap();
  // maxHeap.printHeap(); 
  maxHeap.insert(10)
  maxHeap.insert(20)
  maxHeap.insert(8)
  maxHeap.insert(12)
  maxHeap.insert(22)
  maxHeap.insert(11)
  // maxHeap.deleteValue(20)
  // maxHeap.extractMax()
  // console.log(maxHeap)
  console.log(maxHeap.heapSort())
  