## Main built-in functions in JavaScript
---

### 1. **String Built-in Functions**

- **`charAt(index)`**: Returns the character at the specified index in a string. **TC: O(1)**
  ```javascript
  "Hello".charAt(1); // Output: "e"
  ```

- **`concat()`**: Joins two or more strings and returns a new string. **TC: O(n)**
  ```javascript
  "Hello".concat(" World"); // Output: "Hello World"
  ```

- **`includes(substring)`**: Checks if a string contains a specified substring. **TC: O(n)**
  ```javascript
  "Hello".includes("ell"); // Output: true
  ```

- **`indexOf(substring)`**: Returns the position of the first occurrence of a specified value in a string. **TC: O(n)**
  ```javascript
  "Hello".indexOf("e"); // Output: 1
  ```

- **`slice(start, end)`**: Extracts a part of a string and returns it as a new string. **TC: O(n)**
  ```javascript
  "Hello".slice(1, 4); // Output: "ell"
  ```

- **`toLowerCase()`**: Converts a string to lowercase. **TC: O(n)**
  ```javascript
  "HELLO".toLowerCase(); // Output: "hello"
  ```

- **`toUpperCase()`**: Converts a string to uppercase. **TC: O(n)**
  ```javascript
  "hello".toUpperCase(); // Output: "HELLO"
  ```

- **`trim()`**: Removes whitespace from both sides of a string. **TC: O(n)**
  ```javascript
  " Hello ".trim(); // Output: "Hello"
  ```

### 2. **Array Built-in Functions**

- **`push(element)`**: Adds a new element to the end of an array. **TC: O(1)**
  ```javascript
  let arr = [1, 2, 3];
  arr.push(4); // arr = [1, 2, 3, 4]
  ```

- **`pop()`**: Removes the last element from an array. **TC: O(1)**
  ```javascript
  let arr = [1, 2, 3];
  arr.pop(); // arr = [1, 2]
  ```

- **`shift()`**: Removes the first element from an array. **TC: O(n)**
  ```javascript
  let arr = [1, 2, 3];
  arr.shift(); // arr = [2, 3]
  ```

- **`unshift(element)`**: Adds a new element to the beginning of an array. **TC: O(n)**
  ```javascript
  let arr = [1, 2, 3];
  arr.unshift(0); // arr = [0, 1, 2, 3]
  ```

- **`map(callback)`**: Creates a new array with the results of calling a function for every array element. **TC: O(n)**
  ```javascript
  let arr = [1, 2, 3];
  let doubled = arr.map(x => x * 2); // doubled = [2, 4, 6]
  ```

- **`filter(callback)`**: Creates a new array with all elements that pass a test. **TC: O(n)**
  ```javascript
  let arr = [1, 2, 3];
  let evens = arr.filter(x => x % 2 === 0); // evens = [2]
  ```

- **`reduce(callback, initialValue)`**: Reduces the array to a single value by applying a function. **TC: O(n)**
  ```javascript
  let arr = [1, 2, 3];
  let sum = arr.reduce((acc, x) => acc + x, 0); // sum = 6
  ```

- **`slice(start, end)`**: Returns a shallow copy of a portion of an array into a new array. **TC: O(n)**
  ```javascript
  let arr = [1, 2, 3, 4];
  let subArr = arr.slice(1, 3); // subArr = [2, 3]
  ```

- **`splice(start, deleteCount, item1, item2, ...)`**: Changes the content of an array by removing or replacing existing elements and/or adding new elements. **TC: O(n)**
  ```javascript
  let arr = [1, 2, 3, 4];
  arr.splice(1, 2); // arr = [1, 4]
  ```

- **`join(separator)`**: Joins all elements of an array into a string. **TC: O(n)**
  ```javascript
  let arr = [1, 2, 3];
  arr.join("-"); // Output: "1-2-3"
  ```

### 3. **Object Built-in Functions**

- **`Object.keys(obj)`**: Returns an array of a given object’s property names (keys). **TC: O(n)**
  ```javascript
  let obj = { a: 1, b: 2 };
  Object.keys(obj); // Output: ["a", "b"]
  ```

- **`Object.values(obj)`**: Returns an array of a given object’s property values. **TC: O(n)**
  ```javascript
  let obj = { a: 1, b: 2 };
  Object.values(obj); // Output: [1, 2]
  ```

- **`Object.entries(obj)`**: Returns an array of a given object's key-value pairs. **TC: O(n)**
  ```javascript
  let obj = { a: 1, b: 2 };
  Object.entries(obj); // Output: [["a", 1], ["b", 2]]
  ```

- **`Object.assign(target, source)`**: Copies the values of all properties from one or more source objects to a target object. **TC: O(n)**
  ```javascript
  let target = { a: 1 };
  let source = { b: 2 };
  Object.assign(target, source); // target = { a: 1, b: 2 }
  ```

- **`Object.freeze(obj)`**: Freezes an object, preventing new properties from being added or existing properties from being changed. **TC: O(n)**
  ```javascript
  let obj = { a: 1 };
  Object.freeze(obj);
  ```

### 4. **Math Built-in Functions**

- **`Math.max(a, b, c, ...)`**: Returns the largest of zero or more numbers. **TC: O(n)**
  ```javascript
  Math.max(1, 5, 3); // Output: 5
  ```

- **`Math.min(a, b, c, ...)`**: Returns the smallest of zero or more numbers. **TC: O(n)**
  ```javascript
  Math.min(1, 5, 3); // Output: 1
  ```

- **`Math.random()`**: Returns a random floating-point number between 0 (inclusive) and 1 (exclusive). **TC: O(1)**
  ```javascript
  Math.random(); // Example Output: 0.583245
  ```

- **`Math.floor(x)`**: Rounds a number downward to its nearest integer. **TC: O(1)**
  ```javascript
  Math.floor(4.9); // Output: 4
  ```

- **`Math.ceil(x)`**: Rounds a number upward to its nearest integer. **TC: O(1)**
  ```javascript
  Math.ceil(4.1); // Output: 5
  ```

- **`Math.round(x)`**: Rounds a number to the nearest integer. **TC: O(1)**
  ```javascript
  Math.round(4.5); // Output: 5
  ```

- **`Math.sqrt(x)`**: Returns the square root of a number. **TC: O(1)**
  ```javascript
  Math.sqrt(16); // Output: 4
  ```

- **`Math.pow(base, exponent)`**: Returns the base to the exponent power (base^exponent). **TC: O(1)**
  ```javascript
  Math.pow(2, 3); // Output: 8
  ```

### 5. **Date Built-in Functions**

- **`new Date()`**: Creates a new `Date` object representing the current date and time. **TC: O(1)**
  ```javascript
  let now = new Date(); // Output: current date and time
  ```

- **`getDate()`**: Returns the day of the month (1-31) of a `Date` object. **TC: O(1)**
  ```javascript
  let date = new Date();
  date.getDate(); // Output: current day of the month
  ```

- **`getDay()`**: Returns the day of the week (0-6) of a `Date` object. **TC: O(1)**
  ```javascript
  let date = new Date();
  date.getDay(); // Output: current day of the week (0 for Sunday, 6 for Saturday)
  ```

- **`getFullYear()`**: Returns the year of a `Date` object. **TC: O(1)**
  ```javascript
  let date = new Date();
  date.getFullYear(); // Output: current year
  ```

- **`getHours()`**: Returns the hour (0-23) of a `Date` object. **TC: O(1)**
  ```javascript
  let date = new Date();
  date.getHours(); // Output: current hour
  ```

- **`getTime()`**: Returns the number of milliseconds since January 1, 1970. **TC: O(1)**
  ```javascript
  let date = new Date();
  date.getTime(); // Output: milliseconds since 1970
  ```

### 6. **JSON Built-in Functions**

- **`JSON.stringify(obj)`**: Converts a JavaScript object or value to a JSON string. **TC: O(n)**
  ```javascript
  let obj = { a: 1, b: 2 };
  JSON.stringify(obj); // Output: '{"a":1,"b":2}'
- **`JSON.parse(string)`**: Parses a JSON string and returns a JavaScript object. **TC: O(n)**
  ```javascript
  let jsonStr = '{"a":1,"b":2}';
  JSON.parse(jsonStr); // Output: { a: 1, b: 2 }
  ```