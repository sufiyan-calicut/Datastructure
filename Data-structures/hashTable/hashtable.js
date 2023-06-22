const hashTable = new Map();

hashtable.set("name", "sufiyan");
hashtable.set("age", "24");
hashtable.set("professtion", "webdeveloper");

hashTable.get("name"); //sufiyan
hashTable.get("profession"); //webdeveloper

hashtable.has("name"); // true;
hashtable.has("place"); // false

hashTable.delete('name');