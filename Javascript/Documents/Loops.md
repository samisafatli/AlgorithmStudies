# Loops

## 1. **`for` Loop**
## Main Use:
- The `for` loop is used when you know **exactly how many times** you want to iterate, such as iterating over an array using indices or counting from one number to another.

### When to Use:
- When you need to perform a **fixed number of iterations**.
- When you need access to the **index** of each iteration.
- When you need to **control** the iteration flow (e.g., skipping iterations or modifying the loop variable).

### Example:
```javascript
let arr = [10, 20, 30];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```

## 2. **`for...of` Loop**

### Main Use:
- The `for...of` loop is used to iterate over the **values** of an iterable object (like arrays, strings, or sets).

### When to Use:
- When you only need the **values** in an iterable (not the index or keys).
- When you need a **simple and readable** syntax for iterating over arrays, strings, or other iterable objects.
- Best for use with **arrays**, **strings**, **Maps**, and **Sets**.

### Example:
```javascript
let arr = [10, 20, 30];
for (let value of arr) {
    console.log(value);
}
```

## 3. **`for...in` Loop**
### Main Use:
- The `for...in` loop is used to iterate over **the keys (properties) of an object** or indices of an array. It is **not recommended for arrays** because it may include inherited properties and may not preserve the correct index order.
### When to Use:
- When you need to **iterate over an object’s properties**.
- When you need to access both the **key and value** of an object.
### Example:
```javascript
let obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
    console.log(key, obj[key]);
}
```

### **Note**:
- **Avoid** using `for...in` with arrays as it may iterate over non-index properties or return properties in an unintended order.

## 4. **`while` Loop**
### Main Use:
- The `while` loop is used when you **do not know in advance** how many iterations you need. It continues to loop as long as the condition is `true`.
### When to Use:
- When you need a **loop with a condition** that is evaluated **before each iteration**.
- When the number of iterations depends on **external factors** or dynamic conditions.
### Example:
```javascript
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

## 5. **`do...while` Loop**
### Main Use:
- The `do...while` loop is used when you need the loop to **execute at least once**, regardless of the condition.
### When to Use:
- When you need the **code to run at least once** (since the condition is checked after the first iteration).
- When the logic inside the loop **affects the condition** for the next iteration.
### Example:
```javascript
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
```

## 6. **`Array.forEach()`**
### Main Use:
- The `forEach` method is used to execute a function (callback) once for each element in an array. It **does not return** anything, and **cannot break** early.
### When to Use:
- When you need to **perform an action for each element** in an array.
- When you don’t need to **return** anything or break out of the loop.
- Ideal for **side effects** (e.g., printing values, modifying DOM).
### Example:
```javascript
let arr = [10, 20, 30];
arr.forEach((value) => {
    console.log(value);
});
```

## 7. **`Array.map()`**
### Main Use:
- The `map` method creates a **new array** with the results of calling a provided function (callback) on every element in the calling array.
### When to Use:
- When you need to **transform** each element of an array and return the result as a new array.
- Ideal when you need a **one-to-one mapping** between input and output.
### Example:
```javascript
let arr = [10, 20, 30];
let doubled = arr.map(value => value * 2); // [20, 40, 60]
```

## 8. **`Array.filter()`**
### Main Use:
- The `filter` method creates a **new array** with all elements that pass the test implemented by the provided function (callback).
### When to Use:
- When you need to **select certain elements** from an array based on a condition.
### Example:
```javascript
let arr = [10, 20, 30];
let evens = arr.filter(value => value % 2 === 0); // [10, 20]
```

## 9. **`Array.reduce()`**
### Main Use:
- The `reduce` method executes a reducer function on each element of the array, **resulting in a single output value**.
### When to Use:
- When you need to **aggregate** data from an array into a single value (e.g., sum, product, concatenation).
### Example:
```javascript
let arr = [10, 20, 30];
let sum = arr.reduce((acc, value) => acc + value, 0); // 60
```

---

## Summary Table:

| Loop/Method          | Main Usage                                                  | When to Use                                                   |
|----------------------|--------------------------------------------------------------|---------------------------------------------------------------|
| `for`                | Iterating a known number of times                            | When you know the exact number of iterations or need indices   |
| `for...of`           | Iterating over iterable values                               | When you only need values and not the index                    |
| `for...in`           | Iterating over object properties or keys                     | When you need to access object properties                      |
| `while`              | Iterating until a condition is false                         | When the number of iterations depends on a dynamic condition   |
| `do...while`         | Iterating at least once, condition checked after iteration    | When you need to execute the loop body at least once           |
| `Array.forEach()`    | Iterating over an array with side effects                    | When you don't need to return a value or break early           |
| `Array.map()`        | Transforming each element and returning a new array          | When you need a one-to-one mapping from input to output        |
| `Array.filter()`     | Filtering an array based on a condition                      | When you need to select elements based on a condition          |
| `Array.reduce()`     | Aggregating array values into a single                      | .          |