class MinHeap{
    constructor(){
        this.heap = []
    }

    buildHeap(){
        let heapSize = Math.floor(this.heap.length/2)
        for(let i =heapSize-1;i>=0;i--){
            this.heapifyDown(i)
        }
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length -1)
    }

    extractMin(){
        if(this.heap.length === 0){
            return null
        }
        if(this.heap.length === 1){
            return this.heap.pop()
        }
        let minValue = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return minValue
    }

    heapifyUp(index){
        let parentIndex = Math.floor((index-1)/2)
        if(index > 0 && this.heap[index] < this.heap[parentIndex]){
            [this.heap[index],this.heap[parentIndex]] = [this.heap[parentIndex],this.heap[index]]
            this.heapifyUp(parentIndex)
        }
    }

    heapifyDown(index){
        let smallestIndex = index
        let left = 2*index + 1
        let right = 2*index + 2
        if(left < this.heap.length && this.heap[left] < this.heap[smallestIndex]){
            smallestIndex = left
        }
        if(right < this.heap.length && this.heap[right] < this.heap[smallestIndex]){
            smallestIndex = right
        }
        if(smallestIndex !== index){
            [this.heap[index],this.heap[smallestIndex]] = [this.heap[smallestIndex],this.heap[index]]
            this.heapifyDown(smallestIndex)
        }
    }

    print(){
        console.log(this.heap);
    }
}

let minHeap = new MinHeap()
minHeap.heap = [2,1,3,6,9,8,4,7,5]
minHeap.buildHeap()
minHeap.print()