
## Queues

### 1. **What is a Queue?**
A **Queue** is a linear data structure that follows the **First In, First Out (FIFO)** principle. This means that the element added first is the one to be removed first.

### 2. **Key Characteristics:**
- **FIFO (First In, First Out)**: The first element added is the first to be removed.
- **Enqueue/Dequeue Operations**: The two main operations in a queue are:
  - **Enqueue**: Adds an element to the end of the queue.
  - **Dequeue**: Removes the element from the front of the queue.
- **Front and Rear Pointers**: The **front** pointer refers to the first element, and the **rear** pointer refers to the last element.

### 3. **Advantages of Queues:**
- **Efficient for Processing in Order**: Queues are useful for managing tasks in order, like handling requests in a server.
- **Simple to Implement**: Can be implemented using arrays or linked lists.

### 4. **Disadvantages of Queues:**
- **Limited Access**: You can only access the front element.
- **No Random Access**: Like stacks, queues don’t allow random access to elements.

### 5. **Common Use Cases of Queues:**
- **Task Scheduling**: Queues are used in CPU scheduling algorithms.
- **Breadth-First Search**: In graph traversal algorithms, queues are used to explore nodes level by level.
- **Printer Queues**: Jobs in a printer queue are handled in a first-come-first-served manner.

### 6. **Queue Implementation in JavaScript**

```javascript
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }
    
    dequeue() {
        if (this.isEmpty()) return null;
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) return null;
        return this.items[0];
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

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.front()); // Output: 10
console.log(queue.dequeue()); // Output: 10
console.log(queue.size()); // Output: 2
```

### 7. **Time Complexity of Queue Operations**

| Operation  | Time Complexity |
|------------|-----------------|
| **Enqueue**| O(1)            |
| **Dequeue**| O(1)            |
| **Front**  | O(1)            |
| **isEmpty**| O(1)            |
| **Size**   | O(1)            |

---

### Circular Queues

---

A **Circular Queue** is a queue where the last element is connected back to the first element to make a circle. This allows for efficient use of memory by reusing the space once elements are dequeued.

### 1. **Circular Queue in JavaScript**

```javascript
class CircularQueue {
    constructor(size) {
        this.size = size;
        this.items = Array(size).fill(null);
        this.front = -1;
        this.rear = -1;
    }

    enqueue(element) {
        if ((this.rear + 1) % this.size === this.front) {
            console.log("Queue is full");
            return;
        }

        if (this.front === -1) {
            this.front = 0;
        }

        this.rear = (this.rear + 1) % this.size;
        this.items[this.rear] = element;
    }

    dequeue() {
        if (this.front === -1) {
            console.log("Queue is empty");
            return null;
        }

        let element = this.items[this.front];
        this.items[this.front] = null;

        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.size;
        }

        return element;
    }

    isEmpty() {
        return this.front === -1;
    }

    isFull() {
        return (this.rear + 1) % this.size === this.front;
    }
}
```

### 8. **Time Complexity of Circular Queue Operations**

| Operation  | Time Complexity |
|------------|-----------------|
| **Enqueue**| O(1)            |
| **Dequeue**| O(1)            |
| **isEmpty**| O(1)            |
| **isFull** | O(1)            |
