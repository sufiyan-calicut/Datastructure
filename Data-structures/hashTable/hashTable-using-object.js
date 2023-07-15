class HashTable {
  // creating table object to store key value pairs
  constructor() {
    this.table = {};
  }

  // function to create unique hashcode;
  hash(key) {
    let hashedCode = 0;
    for (let i = 0; i < key.length; i++) {
      hashedCode += key.charCodeAt(i);
    }
    return hashedCode % 10;
  }
  // insert method to add value into hashtable
  insert(key, value) {
    let index = this.hash(key);

    // If the bucket is empty, a new empty object is created at the hashedKey index of the table
    //   object using this.table[hashedKey] = {}. This object will serve as a container for multiple
    //  key-value pairs that have the same hash value. This technique is known as separate chaining.

    if (!this.table[index]) {
      this.table[index] = {};
    }
    this.table[index][key] = value;
  }

  // retriving a value from hashtable
  get(key) {
    let index = this.hash(key);
    if (this.table[index] && this.table[index][key]) {
      return this.table[index][key];
    }
    return undefined;
  }

  // removing a element from hashtable
  remove(key) {
    let index = this.hash(key);
    if (this.table[index] && this.table[index][key]) {
      delete this.table[index][key];

      // if the bucket doesn't contain more key-value pairs, delete the bucket;
      if (Object.keys(this.table[index].length == 0)) {
        delete this.table[index];
      }
      return "deleted";
    }
    return "not found";
  }

  has(key) {
    let index = this.hash(key);
    return (
      this.table[index] !== undefined && this.table[index][key] !== undefined
    );
  }
  print() {
    for (const index in this.table) {
      if (this.table.hasOwnProperty(index)) {
        const bucket = this.table[index];
        for (const key in bucket) {
          if (bucket.hasOwnProperty(key)) {
            console.log(`Key: ${key}, Value: ${bucket[key]}`);
          }
        }
      }
    }
  }
}  

let hashTable = new HashTable();
hashTable.insert("number", 10);
hashTable.insert('name','sufiyan')
hashTable.insert('profession','software engineer')
hashTable.insert('salary','5 lpa')
console.log(hashTable.has("number"));


hashTable.print();