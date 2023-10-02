---
title: 'Binary Search Tree'
description: 'A binary tree where left child is less than or equal to the parent, while the right child is greater'
draft: true
keywords:
  - leetcode
  - tutorial
  - binary search tree
  - data structure
---

<TutorialAuthors names="@ChiragAgg5k"/>

## Overview

A **binary search tree (BST)** is a [binary tree](./binary-tree.md) where each node has a comparable key (and an associated value) and satisfies the restriction that the key in any node is larger than the keys in all nodes in that node's left subtree and smaller than the keys in all nodes in that node's right subtree. BSTs are a fundamental data structure used to implement other data structures such as binary heaps and priority queues.

## Implementation

A BST can be implemented using a [linked list](./../basic-topics/linked-list.md) where each node has a key, a value, and pointers to its left and right children. The root of the tree is the first node in the list. The left subtree of a node is the linked list starting from the node's left child, and the right subtree is the linked list starting from the node's right child. The following is an example of a BST implemented using a linked list:

```cpp
struct Node {
    int key;
    int value;
    Node* left;
    Node* right;
};

class BinarySearchTree {
    Node* root;
};
```

## Operations

### Insertion

Inserting a node into a BST is similar to inserting a node into a [binary tree](./binary-tree.md), except that the node must be inserted in the correct position to maintain the BST property. The following is an example of inserting a node into a BST:

```cpp
void insert(Node* node, int key, int value) {
    if (key < node->key) { // insert into left subtree
        if (node->left == nullptr) {
            node->left = new Node(key, value);
        } else {
            insert(node->left, key, value);
        }
    } else { // insert into right subtree
        if (node->right == nullptr) {
            node->right = new Node(key, value);
        } else {
            insert(node->right, key, value);
        }
    }
}
```

### Deletion

There are 4 cases to consider when deleting a node from a BST:

1. The node has no children - the node can be deleted without any further processing.
2. The node has only a left child - the node can be deleted and replaced with its left child.
3. The node has only a right child - the node can be deleted and replaced with its right child.
4. The node has both a left and right child - the node can be deleted and replaced with the *minimum node in its right subtree*.

```cpp
void delete(Node* node, int key) {
    if (node == nullptr) {
        return;
    }

    if (key < node->key) { // recurse to left subtree
        delete(node->left, key);
    } else if (key > node->key) { // recurse to right subtree
        delete(node->right, key);
    } else { // delete current node
        if (node->left == nullptr && node->right == nullptr) { // no children
            delete node;
            node = nullptr;
        } else if (node->left == nullptr) { // right child only
            Node* temp = node;
            node = node->right;
            delete temp;
        } else if (node->right == nullptr) { // left child only
            Node* temp = node;
            node = node->left;
            delete temp;
        } else { // both children
            Node* temp = findMin(node->right);
            node->key = temp->key;
            node->value = temp->value;
            delete(node->right, temp->key);
        }
    }
}
```


### Searching

Searching in a BST follows the same logic as in binary search, using the divide and conquer approach. The following is an implementation of searching in a BST:

```cpp
Node* search(Node* node, int key) {
    if (node == nullptr || node->key == key) {
        return node;
    }

    if (key < node->key) { // recurse to left subtree
        return search(node->left, key);
    } else { // recurse to right subtree
        return search(node->right, key);
    }
}
```

## Complexity Analysis

| Operation | Time Complexity | Space Complexity |
| --------- | --------------- | ---------------- |
| Insertion | O(n)            | O(n)             |
| Deletion  | O(n)            | O(n)             |
| Searching | O(n)            | O(n)             |

where $n$ is the number of nodes in the BST.

export const suggestedProblems = [
  {
    "problemName": "0098 - Validate Binary Search Tree",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/validate-binary-search-tree/",
    "solutionLink": "../../solutions/0000-0099/validate-binary-search-tree-medium"
  },
  {
    "problemName": "0230 - Kth Smallest Element in a BST",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
    "solutionLink": "../../solutions/0200-0299/kth-smallest-element-in-a-bst-medium"
  },
  {
    "problemName": "0703 - Kth Largest Element in a Stream",
    "difficulty": "Easy",
    "leetCodeLink": "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
    "solutionLink": "../../solutions/0700-0799/kth-largest-element-in-a-stream-easy"
  },
]

<Table title="Suggested Problems" data={suggestedProblems} />