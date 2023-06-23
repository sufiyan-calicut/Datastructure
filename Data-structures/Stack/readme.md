## explantion of STACK data structure

1. stack is a linear data structure which is followed Last - In - First - Out ( LIFO ) principle

2. it is named so because it resembeles a stack of objects, where you can only access the top most item

3. In stack data structure, you can only access the top most item (last inserted element).the other  
   elements are in-accesseble untill the topmost element is removed

## common stack operations are :-

1. push() : push() method used to add an element to the top of the stack (any existing elemens
   pushed down)
2. pop() : pop() method is used to remove and return the top most item(last inserted element);

3. peek() / top() : these methods are used to return the topmost element without remove from stack

4. isEmpty() : checks whether the stack is empty

## applications of stack data structure :-

1. function callstack : in programming, the stack is used to manage function calls and their
   curresponding variables. Each time a function is called, its state is pushed on to the stack and when the function retruns, its state is popped from the stack

2. Back tracking : stacks are useful in algorithms that involve backtracking, such as
   Depth-first-search(DFS), they store the path or the state to backtrack previous actions

3. Undo/Redo functionality : stack can be employed to implement the undo and redo operations in
   various applications allowing users to revert or redo previous actions

4. Browser History : Stacks are used to implement the back button functionality in web
   browsers. Each visited webpage is pushed onto the stack, allowing users to navigate back through the history by popping pages off the stack.
