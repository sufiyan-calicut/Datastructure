## Q1: What is a hash table?

A1: A hash table, also known as a hash map, is a data structure that allows for efficient insertion, deletion, and retrieval of key-value pairs. It uses a hash function to map keys to indexes in an array, where the corresponding values are stored.

## Q2: How does a hash table handle collisions?

A2: Collisions occur when two different keys map to the same index in the array. Hash tables handle collisions through techniques like separate chaining or open addressing. In separate chaining, each index of the array contains a linked list or an array to store multiple key-value pairs. In open addressing, if a collision occurs, the algorithm probes the next available index in the array to find an empty slot for storage.

## Q3: What is a hash function?

A3: A hash function is a function that takes an input (typically a key) and returns a unique numerical value called a hash code. It is designed to efficiently distribute the keys across the available array indexes and minimize collisions.

## Q4: How do you implement a hash table in JavaScript?

A4: In JavaScript, you can implement a hash table using an object or a Map data structure. Objects in JavaScript can be used as hash tables, where keys are hashed using the built-in hashing mechanism. The Map data structure, introduced in ECMAScript 6, provides an ordered collection of key-value pairs and is suitable for implementing hash tables.

## Q5: What is the time complexity for hash table operations?

A5: In an ideal scenario with a good hash function and minimal collisions, hash table operations have an average time complexity of O(1) for insertion, deletion, and retrieval. However, in the worst case, when collisions are frequent, the time complexity can degrade to O(n), where n is the number of key-value pairs stored.

## Q6: How can you handle hash table resizing?

A6: Hash tables often need resizing when the number of elements exceeds a certain threshold to maintain a reasonable load factor. Resizing typically involves creating a new, larger array, and rehashing all the existing key-value pairs into the new array based on the updated hash function. This ensures that the distribution of keys remains balanced, reducing collisions.

## Q7: When should you use a hash table?

A7: Hash tables are useful when you need efficient key-value pair storage, fast lookups, insertions, and deletions. They are commonly used in scenarios such as caching, indexing, and implementing associative arrays.

## Q8: Applications of hash table

1. Data Caching: Cache storing mechanism is very popular in computer science, which used to store frequently accessed data, which are used hash tables to store data, By using hash table user can quickly retrieve the value based on a key avoiding the need to perform expensive computation or database queries

2. Databases indexing: They are used to build indexes that provide efficient access to data based on specific criteria or attributes

3. Password storage: instead of storing passwords in plain text, which is highly in-secure hashtables are used to store the hashed version of passwords, A hash function takes the original password as input and generates a fixed length hash value which is a unique representation of the new password

4. Salting: To enhance security. a technique called salting is often employed with hashtables. A salt is a random value appended to the original password before hashing, the salt value is also stored in the hashtable alongside the hashed password, salting prevents the use of pre-computed rainbow tables or other common attacks where the same password hashed are known in advance

## Q9: What is the load factor in a hash table?

A9 :

- Load factor is a measure of how full the hashtable is. it is defined as the ratio of the number of elements stored in the hashtable to the total number of buckets or slots available in the hashtable.
- The load factor is typically denoted by the symbol 'λ' and calculated as
  λ = (number of elements in a hashtable) / (total number of the bucket)
- Load factor values range between 0 and 1
- A load factor of 0 indicates an empty hashtable, while a load factor of 1 indicates that all buckets in the hashtable are occupied
- A higher load factor means that the hashtable is more densely filled with elements which can lead to increased collisions and longer lookup items
- To maintain good performance. it is often recommended to keep the load factor within a certain range. normally it is preferable to keep below 0.7 or 0.8
- Leaving some empty space in hashtable will minimise collisions
- By monitoring the load factor user can dynamically resize the hashtable when necessary to avoid excessive collisions
