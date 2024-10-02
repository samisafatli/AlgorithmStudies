# Stacks

### 1. **Definition**
A **Stack** is a linear data structure that follows the **Last In, First Out (LIFO)** principle. This means that the most recently added element is the first one to be removed.

### 2. **Key Characteristics:**
- **LIFO (Last In, First Out)**: The last element added is the first to be removed.
- **Push/Pop Operations**: The two main operations in a stack are:
  - **Push**: Adds an element to the top of the stack.
  - **Pop**: Removes the element from the top of the stack.
- **Top Pointer**: Points to the most recent element in the stack.

### 3. **Advantages of Stacks:**
- **Simple to Implement**: Stacks can be easily implemented using arrays or linked lists.
- **Efficient Memory Use**: Only requires memory for the elements in the stack and the top pointer.

### 4. **Disadvantages of Stacks:**
- **Limited Access**: Can only access the top element at any given time.
- **No Random Access**: Unlike arrays, you cannot randomly access elements in a stack.

### 5. **Common Use Cases of Stacks:**
- **Undo/Redo Functionality**: In text editors, stacks can be used to implement undo/redo features.
- **Expression Evaluation**: Used in compilers to evaluate expressions like `2 + 3 * (4 - 1)`.
- **Backtracking Algorithms**: Stacks can be used for backtracking (e.g., depth-first search in graphs).

### 6. **Stack Implementation**

```javascript
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) return null;
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek()); // Output: 30
console.log(stack.pop()); // Output: 30
console.log(stack.size()); // Output: 2
```

### 7. **Time Complexity of Stack Operations**

| Operation | Time Complexity |
|-----------|-----------------|
| **Push**  | O(1)            |
| **Pop**   | O(1)            |
| **Peek**  | O(1)            |
| **isEmpty**| O(1)           |
| **Size**  | O(1)            |
