## Linked Lists

### 1. **What is a Linked List?**
A **Linked List** is a linear data structure where each element (node) points to the next one in the sequence. Unlike arrays, linked lists do not have continuous memory allocation, and they are dynamic in size.

Each node contains:
- **Data**: The value stored in the node.
- **Next Pointer**: A reference to the next node in the sequence.

There are several types of linked lists:
- **Singly Linked List**: Each node points to the next node and the list ends with a `null` pointer.
- **Doubly Linked List**: Each node has two pointers, one pointing to the next node and another pointing to the previous node.
- **Circular Linked List**: The last node points back to the first node, forming a circle.

### 2. **Key Characteristics:**
- **Dynamic Size**: Unlike arrays, linked lists can grow and shrink dynamically without wasting memory.
- **Non-contiguous Memory**: Nodes are not stored in adjacent memory locations.
- **Sequential Access**: Linked lists do not allow random access like arrays. You have to traverse the list to access an element.

### 3. **Advantages of Linked Lists:**
- **Efficient Insertions/Deletions**: Insertion and deletion operations at the **beginning** and **middle** of the list are more efficient than in arrays (no need to shift elements).
- **Dynamic Size**: Linked lists grow dynamically as needed, unlike arrays that may need resizing.

---

### 4. **Disadvantages of Linked Lists:**
- **Access Time**: Accessing elements in a linked list takes **O(n)** time since you need to traverse the list sequentially.
- **Extra Memory**: Each node requires extra memory for the pointer/reference, making them less memory efficient than arrays.
- **No Random Access**: Linked lists do not provide constant time access by index, unlike arrays.

### 5. **Singly Linked List Implementation in JavaScript**

Here is a basic implementation of a **Singly Linked List** in JavaScript:

```javascript
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
    
    prepend(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    delete(data) {
        if (!this.head) return;

        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next && current.next.data !== data) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
        }
    }

    search(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    printList() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.data + ' -> ';
            current = current.next;
        }
        result += 'null';
        console.log(result);
    }
}

let list = new LinkedList();
list.append(10);
list.append(20);
list.prepend(5);
list.printList();  // Output: 5 -> 10 -> 20 -> null
list.delete(10);
list.printList();  // Output: 5 -> 20 -> null
console.log(list.search(20));  // Output: true
```

### 6. **Time Complexity of Operations in Singly Linked List**

| Operation                   | Time Complexity |
|-----------------------------|-----------------|
| **Access**                  | O(n)            |
| **Search**                  | O(n)            |
| **Insert at the Beginning** | O(1)            |
| **Insert at the End**       | O(n)            |
| **Delete a Node**           | O(n)            |

---

### 7. **Doubly Linked List Implementation in JavaScript**

A **Doubly Linked List** contains nodes with references to both the **next** and **previous** nodes.

```javascript
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    prepend(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    delete(data) {
        if (!this.head) return;

        if (this.head.data === data) {
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            } else {
                this.tail = null; // List became empty
            }
            return;
        }

        let current = this.head;
        while (current && current.data !== data) {
            current = current.next;
        }

        if (current) {
            current.prev.next = current.next;
            if (current.next) {
                current.next.prev = current.prev;
            } else {
                this.tail = current.prev; // Deleting the tail
            }
        }
    }

    printList() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.data + ' <-> ';
            current = current.next;
        }
        result += 'null';
        console.log(result);
    }
}

let list = new DoublyLinkedList();
list.append(10);
list.append(20);
list.prepend(5);
list.printList();  // Output: 5 <-> 10 <-> 20 <-> null
list.delete(10);
list.printList();  // Output: 5 <-> 20 <-> null
```

### 8. **Time Complexity of Operations in Doubly Linked List**

| Operation                  | Time Complexity |
|-----------------------------|-----------------|
| **Access**                  | O(n)            |
| **Search**                  | O(n)            |
| **Insert at the Beginning** | O(1)            |
| **Insert at the End**       | O(1)            |
| **Delete a Node**           | O(n)            |

---

### 9. **Advantages of Doubly Linked Lists**:
- **Bi-directional Traversal**: You can traverse the list in both directions (from head to tail and vice versa).
- **Efficient Deletions**: Removing a node is more efficient in a doubly linked list, as you have a reference to the previous node.

### 10. **Disadvantages of Doubly Linked Lists**:
- **Extra Memory**: Each node requires extra memory to store the `prev` pointer.
- **Increased Complexity**: Managing two pointers (`next` and `prev`) increases the complexity of the implementation.

---

### 11. **Circular Linked Lists**:
In **Circular Linked Lists**, the last node points back to the head, forming a circular structure. These can be **singly** or **doubly linked**.

```javascript
class CircularLinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head;
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next;
            }
            current.next = newNode;
            newNode.next = this.head;
        }
    }

    printList() {
        if (!this.head) return;

        let current = this.head;
        let result = '';
        do {
            result += current.data + ' -> ';
            current = current.next;
        } while (current !== this.head);
        result += 'HEAD';
        console.log(result);
    }
}
```

### 12. **Use Cases for Linked Lists**:
- **Efficient Insertions/Deletions**: When you need to insert or delete elements

 frequently, especially at the beginning or middle of the list.
- **Memory-Efficient in Specific Cases**: When you don’t know the size of the list in advance and need a dynamic data structure.
- **Undo Operations**: Doubly linked lists are used to implement undo functionality in text editors.

---


Arrays (Already exists)
Stacks
Queues
Linked Lists (Singly and Doubly)
Hash Tables / Maps
Sets
Trees (Binary Trees, Binary Search Trees, and maybe a brief on more advanced ones like AVL or Red-Black Trees)
Graphs
Heaps (Min and Max)
