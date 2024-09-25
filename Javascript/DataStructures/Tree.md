# Trees

## 1. **What is a Tree?**
A **Tree** is a hierarchical data structure consisting of nodes, where each node has a value and references (or links) to other nodes. It is often used to represent relationships between data elements that have a parent-child hierarchy.

### Key Components:
- **Root**: The top node of the tree.
- **Node**: Each element in the tree, containing a value and pointers to its children.
- **Edge**: The connection between two nodes.
- **Leaf**: A node with no children.
- **Parent**: A node that has references to other nodes (children).
- **Child**: A node that is a descendant of another node.
- **Subtree**: A portion of the tree that consists of a node and all its descendants.
- **Depth**: The length of the path from the root to a node.
- **Height**: The longest path from a node to a leaf.

---

## 2. **Key Characteristics:**
- **Hierarchical Structure**: Trees represent hierarchical relationships, making them useful for data that has a natural hierarchy (e.g., file systems, organizational charts).
- **Recursive Structure**: Trees are inherently recursive, as each subtree of a tree is itself a tree.
- **No Cycles**: Unlike graphs, trees do not have cycles. There is only one unique path between two nodes.

---

## 3. **Types of Trees**:
### 3.1 **Binary Tree**:
A tree where each node has at most two children, referred to as the **left** and **right** children.

### 3.2 **Binary Search Tree (BST)**:
A type of binary tree where the left child contains only nodes with values less than the parent, and the right child contains only nodes with values greater than the parent.

### 3.3 **Balanced Tree**:
A tree where the height difference between the left and right subtrees of any node is minimal (often used in **AVL Trees** or **Red-Black Trees**).

### 3.4 **N-ary Tree**:
A tree where each node can have up to **N** children. This is a generalization of a binary tree.

### 3.5 **Heap**:
A special type of binary tree where the tree is a complete binary tree, and the values of the parent nodes are greater (or smaller) than the values of their children (min-heaps or max-heaps).

---

## 4. **Advantages of Trees**:
- **Hierarchical Representation**: Trees naturally represent data with a hierarchical structure.
- **Efficient Search**: In **Binary Search Trees (BSTs)**, searching is efficient with an average time complexity of **O(log n)**.
- **Dynamic**: Trees can easily grow or shrink in size, and nodes can be added or removed dynamically.
- **Traversal**: Multiple ways to traverse a tree (e.g., pre-order, in-order, post-order).

---

## 5. **Disadvantages of Trees**:
- **Unbalanced Trees**: If a tree becomes unbalanced (e.g., in a Binary Search Tree), the time complexity for operations like search, insertion, and deletion can degrade to **O(n)**.
- **Overhead**: Trees require pointers or references to child nodes, leading to additional memory usage compared to simpler data structures like arrays or linked lists.

---

## 6. **Tree Traversal Methods**:
### 6.1 **Depth-First Search (DFS)**:
There are three primary ways to traverse a tree using DFS:
- **Pre-order Traversal**: Visit the root, then recursively traverse the left subtree, followed by the right subtree.
- **In-order Traversal**: Recursively traverse the left subtree, visit the root, then recursively traverse the right subtree. (Used in BSTs to retrieve elements in sorted order.)
- **Post-order Traversal**: Recursively traverse the left subtree, then the right subtree, and visit the root last.

### 6.2 **Breadth-First Search (BFS)**:
Also known as **level-order traversal**, BFS visits nodes level by level, from top to bottom, using a queue.

---

## 7. **Binary Search Tree (BST) Implementation**

```javascript
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let current = this.root;
            while (true) {
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        break;
                    } else {
                        current = current.left;
                    }
                } else {
                    if (current.right === null) {
                        current.right = newNode;
                        break;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    search(value) {
        let current = this.root;
        while (current !== null) {
            if (value === current.value) return true;
            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    // In-order traversal (prints the tree values in ascending order)
    inOrderTraversal(node = this.root) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.inOrderTraversal(); // Output: 2 5 10 15
console.log(bst.search(5));  // Output: true
console.log(bst.search(20)); // Output: false
```

---

## 8. **Time Complexity of Tree Operations**

| Operation          | Average Time Complexity | Worst Case (Unbalanced Tree) |
|--------------------|-------------------------|------------------------------|
| **Search**         | O(log n)                | O(n)                         |
| **Insertion**      | O(log n)                | O(n)                         |
| **Deletion**       | O(log n)                | O(n)                         |

---

## 9. **Balanced Trees**

Balanced trees ensure that the tree remains "balanced" (or as flat as possible) to maintain efficient operations.

### Examples of balanced trees:
- **AVL Tree**: A self-balancing binary search tree where the difference in heights of the left and right subtrees is no more than 1.
- **Red-Black Tree**: Another self-balancing BST that ensures the longest path is no more than twice as long as the shortest path.

Both AVL and Red-Black Trees maintain balance dynamically during insertion and deletion, ensuring the time complexity stays at **O(log n)**.
