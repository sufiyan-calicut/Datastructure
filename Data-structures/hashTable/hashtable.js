const hashtable = new Map();

hashtable.set("name", "sufiyan");
hashtable.set("age", "24");
hashtable.set("professtion", "webdeveloper");

hashtable.get("name"); //sufiyan
hashtable.get("profession"); //webdeveloper

hashtable.has("name"); // true;
hashtable.has("place"); // false

hashtable.delete("name");
