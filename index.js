class HashTable {
  constructor() {
    this.table = {};
  }

  hash(key) {
    let hashedCode = 0;
    for (let i = 0; i < key.length; i++) {
      hashedCode += key.charCodeAt(i);
    }
    return hashedCode;
  }

  insert(key, value) {
    let slotNumber = this.hash(key);
    if (!this.table[slotNumber]) {
      this.table[slotNumber] = {};
    }
    this.table[slotNumber][key] = value;
  }

  has(key){
    let slotNumber = this.hash(key);
    if(this.table[slotNumber][key]){
        return this.table[slotNumber][key];
    }
    return undefined;
  }

  delete (key) {
    let slotNumber = this.hash(key);
    if(this.table[slotNumber] && this.table[slotNumber][key]){
        delete this.table[slotNumber][key]
        
    }

  }
}
