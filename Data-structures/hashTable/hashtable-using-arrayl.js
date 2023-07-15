// HashTable class for storing key-value pairs
class HashTable {
    constructor(size) {
      this.hashtable = new Array(size);
      this.size = size;
    }
  
    // Hashes the key to generate an index within the hashtable
    hash(key) {
      let hashCode = 0;
      for (let i = 0; i < key.length; i++) {
        hashCode += key.charCodeAt(i);
      }
      return hashCode % this.size;
    }
  
    // Sets a key-value pair in the hashtable
    set(key, value) {
      let index = this.hash(key);
      let bucket = this.hashtable[index];
  
      // Scenario where bucket doesn't exist
      if (!bucket) {
        this.hashtable[index] = [[key, value]];
      } else {
        let sameKeyItem = bucket.find(item => item[0] == key);
        if (sameKeyItem) {
          // If value already exists, update it
          sameKeyItem[1] = value;
        } else {
          // Else push a new key-value pair
          bucket.push([key, value]);
        }
      }
    }
  
    // Retrieves the value associated with the given key
    get(key) {
      let index = this.hash(key);
      let bucket = this.hashtable[index];
  
      if (bucket) {
        let sameKeyItem = bucket.find(item => item[0] == key);
        if (sameKeyItem) {
          return sameKeyItem[1];
        }
      }
      return undefined;
    }
  
    // Removes the key-value pair associated with the given key
    remove(key) {
      let index = this.hash(key);
      let bucket = this.hashtable[index];
      if (bucket) {
        let sameKeyItem = bucket.find(item => item[0] == key);
        if (sameKeyItem) {
          bucket.splice(bucket.indexOf(sameKeyItem), 1);
        }
      }
    }
  
    // Checks if the given key exists in the hashtable
    has(key) {
      let index = this.hash(key);
      let bucket = this.hashtable[index];
      if (bucket) {
        let sameKeyItem = bucket.find(item => item[0] == key);
        return Boolean(sameKeyItem);
      }
      return false;
    }
  
    // Displays the contents of the hashtable
    display() {
      for (let i = 0; i < this.size; i++) {
        if (this.hashtable[i]) {
          console.log(i, this.hashtable[i]);
        }
      }
    }
  }
  
  // Example usage of the HashTable class
  let hashtable = new HashTable(25);
  hashtable.set("name", "sufiyan");
  hashtable.set('mane', 'jabir');
  hashtable.set('anem', 'minnus');
  hashtable.set("profession", "software engineer");
  hashtable.set("salary", "50 lak");
  
  hashtable.remove('mane');
  console.log(hashtable.get('anem'));
  hashtable.display();
  
  console.log(hashtable.has('manee'));
  