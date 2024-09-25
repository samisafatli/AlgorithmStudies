## Arrays

### 1. **What is an Array?**
An **Array** is a data structure that stores a collection of elements in a sequential manner. These elements can be of any type (numbers, strings, objects, etc.), and they are ordered by index, starting from 0.

### 2. **Key Characteristics:**
- **Indexed**: Each element is accessed by its index, starting from 0.
- **Resizable**: In JavaScript, arrays are dynamic, meaning they can grow or shrink in size.
- **Mixed Types**: Arrays in JavaScript can hold elements of different types.
- **Mutable**: The elements in an array can be modified after the array is created.


### 3. **Advantages of Arrays**:
- **Fast access** to elements by index.
- **Dynamic size** in JavaScript, meaning arrays can grow and shrink as needed.
- **Versatile** for storing collections of data, especially when order matters.

---

### 4. **Disadvantages of Arrays**:
- **Insertions and deletions** at the beginning or middle of the array are **O(n)** due to shifting elements.
- Arrays are not ideal for certain tasks like frequent insertions/removals at the beginning, where other data structures like **Linked Lists** are more efficient.

### 5. **Array Methods and Operations**:

Here are the common array methods and their **time complexity**:

| Method                     | Description                                                                                     | Time Complexity |
|-----------------------------|-------------------------------------------------------------------------------------------------|-----------------|
| **`push(element)`**          | Adds a new element to the end of the array.                                                     | O(1)            |
| **`pop()`**                  | Removes the last element from the array.                                                        | O(1)            |
| **`shift()`**                | Removes the first element of the array, shifting all other elements.                            | O(n)            |
| **`unshift(element)`**       | Adds a new element to the beginning of the array, shifting all other elements.                  | O(n)            |
| **`slice(start, end)`**      | Returns a shallow copy of a portion of the array, from start index to end index.                | O(n)            |
| **`splice(start, deleteCount)`** | Adds/removes elements to/from the array starting from the specified index.                  | O(n)            |
| **`indexOf(element)`**       | Returns the first index of the element in the array, or -1 if not found.                        | O(n)            |
| **`includes(element)`**      | Checks if an array contains a specific element.                                                 | O(n)            |
| **`concat(array2)`**         | Merges two or more arrays and returns a new array.                           | O(n + m)        |
| **`map(callback)`**          | Creates a new array populated with the results of calling a function on every element.          | O(n)            |
| **`filter(callback)`**       | Creates a new array with all elements that pass the test implemented by the provided function.  | O(n)            |
| **`reduce(callback, initialValue)`** | Reduces the array to a single value by applying a function to each element.             | O(n)            |
| **`forEach(callback)`**      | Executes a provided function once for each array element.                                       | O(n)            |
| **`join(separator)`**        | Joins all elements of an array into a string, separated by a specified separator.               | O(n)            |
| **`reverse()`**              | Reverses the array in place.                                                                    | O(n)            |
| **`sort(compareFunction)`**  | Sorts the array. If no compare function is provided, elements are converted to strings first.   | O(n log n)      |
