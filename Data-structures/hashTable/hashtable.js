const hashtable = new Map();

hashtable.set("name", "sufiyan");
hashtable.set('mane','minnus')
hashtable.set("age", "24");
hashtable.set("professtion", "webdeveloper");

hashtable.get("name"); //sufiyan
hashtable.get("profession"); //webdeveloper

hashtable.has("name"); // true;
hashtable.has('place'); // false

hashtable.delete("name");


function printHashTable(table) {
  for (let [key, value] of table) {
    console.log(`Key: ${key}, Value: ${value}`);
  }
}

printHashTable(hashtable);