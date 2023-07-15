class HeapSort{
  heapify(arr,n,i){
    let largest = i
    let left = 2*i + 1
    let right = 2*i + 2
    if(left < n && arr[i] < arr[left]){
      largest = left
    }
    if(right < n && arr[largest] < arr[right]){
      largest = right
    }
    if(largest != i){ 
      [arr[i],arr[largest]] = [arr[largest],arr[i]]
      this.heapify(arr,n,largest)
    }
  }

  sort(arr){
    let n= arr.length
    for(let i = Math.floor(n/2)-1;i>=0;i--){
      this.heapify(arr,n,i)
    }
    for(let i =n-1;i>0;i--){
      [arr[0],arr[i]] = [arr[i],arr[0]]
      this.heapify(arr,i,0)
    }
  }
}

let arr = [6,3,6,7,4,1,2,8,2,0,9]
let heapSort = new HeapSort()
heapSort.sort(arr)
console.log(arr);