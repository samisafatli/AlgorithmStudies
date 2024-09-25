# Hash Maps

## 1. **Definition**
A **Hash Map** is a data structure that stores **key-value** pairs. It uses a **hash function** to compute an index (called a hash code) into an array of buckets or slots, where the desired value can be found. Hash Tables are highly efficient for lookups, insertions, and deletions.

### Key Components:
- **Keys**: Unique identifiers used to access values.
- **Values**: The data associated with keys.
- **Hash Function**: A function that converts a key into an index within a fixed-size array of buckets.
- **Buckets**: Array slots that store the actual key-value pairs.

---

## 2. **Key Characteristics:**
- **Efficient Lookups**: Hash tables allow for fast lookups, with an average time complexity of **O(1)** for operations like insertion, deletion, and search.
- **Non-Sequential Storage**: Data is stored non-sequentially, based on hash codes.
- **Collision Handling**: When two keys hash to the same index, the table handles it via **collision resolution techniques** (like chaining or open addressing).
- **Dynamic Growth**: Some implementations of hash tables can resize dynamically when they get too full.

---

## 3. **Advantages of Hash Tables:**
- **Fast Lookups**: On average, both lookup and update operations have constant time complexity **O(1)**.
- **Flexible Keys**: Can store any type of key as long as it's hashable (strings, numbers, objects, etc.).
- **Dynamic Size**: Can adjust its size dynamically to optimize performance.

---

## 4. **Disadvantages of Hash Tables:**
- **Collisions**: Although hash tables are designed to minimize collisions, handling collisions (like through chaining) can lead to performance degradation, especially when the hash table becomes full.
- **Wasted Space**: Hash tables may use more memory than necessary, as they allocate more buckets than required to minimize collisions.
- **Poor Performance in the Worst Case**: In the worst-case scenario, all keys could hash to the same index, resulting in **O(n)** time complexity for search, insert, or delete operations.

---

## 5. **Collision Resolution Techniques:**

### 5.1 **Chaining**
In chaining, each bucket holds a list (or linked list) of key-value pairs that hash to the same index. If multiple keys produce the same hash, they are stored in a list within the bucket.

### 5.2 **Open Addressing**
In open addressing, instead of storing multiple elements in the same bucket, the algorithm looks for an empty bucket elsewhere in the array. There are different strategies for finding the next available bucket:
- **Linear Probing**: Check the next slot sequentially.
- **Quadratic Probing**: Check slots by incrementing the index by a quadratic function.
- **Double Hashing**: Use a second hash function to calculate a new index.

---

## 6. **Hash Table Operations and Time Complexity**

| Operation      | Average Time Complexity | Worst Time Complexity |
|----------------|-------------------------|-----------------------|
| **Insert**     | O(1)                    | O(n)                  |
| **Search**     | O(1)                    | O(n)                  |
| **Delete**     | O(1)                    | O(n)                  |

In practice, a well-designed hash function and collision handling strategy can keep the average case for these operations at **O(1)**.

---

## 7. **Implementation**

```javascript
class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        let index = this._hash(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined;
    }

    keys() {
        let keysArray = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    keysArray.push(this.keyMap[i][j][0]);
                }
            }
        }
        return keysArray;
    }

    values() {
        let valuesArray = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    valuesArray.push(this.keyMap[i][j][1]);
                }
            }
        }
        return valuesArray;
    }
}

let ht = new HashTable();
ht.set("pink", "#FFC0CB");
ht.set("blue", "#0000FF");
ht.set("yellow", "#FFFF00");
console.log(ht.get("pink"));   // Output: #FFC0CB
console.log(ht.keys());        // Output: ["pink", "blue", "yellow"]
console.log(ht.values());      // Output: ["#FFC0CB", "#0000FF", "#FFFF00"]
```

---

## 8. **Use Cases of Hash Tables:**
- **Databases**: Hash tables are often used to index database records for efficient data retrieval.
- **Caching**: They are commonly used in caches to store frequently accessed data, improving performance.
- **Symbol Tables**: In compilers and interpreters, hash tables store variable names and values (symbol tables).
- **Sets**: Hash tables are the foundation for many set implementations, enabling fast lookups for set membership.

---

## 9. **Common Built-in Hash Map Methods**
JS provides a built-in `Map` object that functions as a hash table.

- **`set(key, value)`**: Adds or updates the key-value pair in the map.
  ```javascript
  let map = new Map();
  map.set("name", "John");
  ```

- **`get(key)`**: Retrieves the value associated with the given key.
  ```javascript
  map.get("name"); // Output: John
  ```

- **`has(key)`**: Returns `true` if the map contains the specified key.
  ```javascript
  map.has("name"); // Output: true
  ```

- **`delete(key)`**: Removes the key-value pair from the map.
  ```javascript
  map.delete("name");
  ```

- **`size`**: Returns the number of key-value pairs in the map.
  ```javascript
  map.size; // Output: 0
  ```

- **`clear()`**: Removes all key-value pairs from the map.
  ```javascript
  map.clear();
  ```
