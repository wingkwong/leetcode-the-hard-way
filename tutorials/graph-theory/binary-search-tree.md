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

A **binary search trees (BST)** are basically [binary trees](./binary-tree.md) where each node's value is larger than all the nodes in that node's left subtree, and smaller than all the nodes in that node's right subtree. This property allows the [binary search algorithm](./../basic-topics/binary-search.md) to be applied to the tree, which is useful for fast lookup, insertion, and deletion of the nodes.

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

## Examples


### Example : [0098 - Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/)

> Given the root of a binary tree, determine if it is a valid binary search tree (BST).

In this problem, we are asked to validate whether a given binary tree is a valid BST. So we just need to check if all the nodes in the tree follow the BST property. To do this, we can apply a `depth-first search (DFS)` algorithm to traverse the tree, and check if the current node's value is smaller than or equal to the previous node's value. If it is, then the tree is not a valid BST. The following is an implementation of this algorithm:

```cpp
class Solution {
public:
    bool isValidBST(TreeNode* root) {
        if(root == nullptr) return true;

        stack<TreeNode*> stck;
        TreeNode* prev = nullptr;

        while(root != nullptr || !stck.empty()){
            while(root != nullptr){
                stck.push(root);
                root = root->left;
            }

            root = stck.top();
            stck.pop();

            // check if current node's value is smaller than or equal to the previous node's value
            if(prev != nullptr && root->val <= prev->val){
                return false;
            }

            prev = root;
            root = root->right; // if right is nullptr, first while loop will not do anything , and root will be popped from stack
            // else, it will traverse to depth of left subtree of right child
        }

        return true;
    }
};
```

### Example : [0230 - Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)

> Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

In this problem, we are asked to return the kth smallest value of all the values in nodes of the Binary Search Tree. We can solve this problem by using a technique called `Inorder Traversal`. Since in BST, we know all the nodes to the left of the current node are smaller and all the nodes to right are larger, we can generate a sorted array by recursively traveling the left subtrees first, then the right subtrees.

```cpp
class Solution {
public:
    vector<int> res;

    // recursive function
    void inorder(TreeNode* root) {
        // if root exist
        if (root != NULL) {
            // recursive call on the left side
            inorder(root->left);
            // insert current node to result array
            res.push_back(root->val);
            // recursive call on the right side
            inorder(root->right);
        }
    }

    int kthSmallest(TreeNode* root, int k) {
        inorder(root);
        return res[k-1];
    }
};
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