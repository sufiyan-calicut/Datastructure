Q1: What is a hash table?
A1: A hash table, also known as a hash map, is a data structure that allows for efficient insertion, deletion, and retrieval of key-value pairs. It uses a hash function to map keys to indexes in an array, where the corresponding values are stored.

Q2: How does a hash table handle collisions?
A2: Collisions occur when two different keys map to the same index in the array. Hash tables handle collisions through techniques like separate chaining or open addressing. In separate chaining, each index of the array contains a linked list or an array to store multiple key-value pairs. In open addressing, if a collision occurs, the algorithm probes the next available index in the array to find an  empty slot for storage..

Q3: What is a hash function?
A3: A hash function is a function that takes an input (typically a key) and returns a unique numerical value called a hash code. It is designed to efficiently distribute the keys across the available array indexes and minimize collisions.

Q4: How do you implement a hash table in JavaScript?
A4: In JavaScript, you can implement a hash table using an object or a Map data structure. Objects in JavaScript can be used as hash tables, where keys are hashed using the built-in hashing mechanism. The Map data structure, introduced in ECMAScript 6, provides an ordered collection of key-value pairs and is suitable for implementing hash tables.

Q5: What is the time complexity for hash table operations?
A5: In an ideal scenario with a good hash function and minimal collisions, hash table operations have an average time complexity of O(1) for insertion, deletion, and retrieval. However, in the worst case, when collisions are frequent, the time complexity can degrade to O(n), where n is the number of key-value pairs stored.

Q6: How can you handle hash table resizing?
A6: Hash tables often need resizing when the number of elements exceeds a certain threshold to maintain a reasonable load factor. Resizing typically involves creating a new, larger array, and rehashing all the existing key-value pairs into the new array based on the updated hash function. This ensures that the distribution of keys remains balanced, reducing collisions.

Q7: When should you use a hash table?
A7: Hash tables are useful when you need efficient key-value pair storage, fast lookups, insertions, and deletions. They are commonly used in scenarios such as caching, indexing, and implementing associative arrays.