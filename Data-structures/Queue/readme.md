## Queue Data Structure :-

- Queue is an linear data structure which is followed First - In - First - Out ( FIFO) principle.
- It resembles a real life queue or line, where the first person to join is the first to be served
- In Queue data structure elements are added at one end called 'rear' and removed from the other end called 'front'

* The element which was inserted first comes out first

## Main operations are :-

- enqueue() : this method is used to add an element to the 'rear' of the queue
- dequeue() : this method is used to remove an element from the 'front' of the queue
- front() : this method is used to return the topmost element (front element / first inserted element)
  without removing from queue
- isEmpty() : checks if the queue is empty
- size() : this method returns the number of elements currently present in queue

## Complexities of operations :-

- Enqueue, Dequeue and front operations have a time complexity of O(1) since they directly access the front and rear elements
- isEmpty and size operations also have a time complexity of O(1) because they involve checking the size of presence of element

## Applications of Queue Data Structure :-

1 ) process sheduling : Queues are widely used in operating systems(os) for scheduling process. Each
process is enqueued based on its priority and the cpu serves them in the order they were enqueued

2 ) print spooling : print jobs are often enqueued in a queue. and the printer serves them one by one
in the order they were added

3 ) Breadth-first-search : Queues are crucial in BFS algorithms for traversing and exploring graphs or
trees level by level

4 ) Request Handling: In web servers or service-oriented architectures, queues are used to handle incoming requests. Requests are added to the queue and processed by workers or processes, ensuring fairness and efficient resource utilization.

5 ) Event Handling: Queues are utilized in event-driven programming to manage and process events. Events are added to the queue as they occur, and event handlers consume the events from the queue in the order they were received.
