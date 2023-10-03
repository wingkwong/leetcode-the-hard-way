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

A BST can be implemented using a [binary tree](./binary-tree.md) with the following structure:

```cpp
struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};
```

## Operations

### Insertion

Inserting a node into a BST is similar to inserting a node into a [binary tree](./binary-tree.md), except that the node must be inserted in the correct position to maintain the BST property. The following is an example of inserting a node into a BST:

```cpp
TreeNode *insert(TreeNode *root, int key)
    {
        if (root == NULL)
            return new TreeNode(key);
        if (key < root->val)
            root->left = insert(root->left, key);
        else
            root->right = insert(root->right, key);
        return root;
    }
```

### Deletion

There are 4 cases to consider when deleting a node from a BST:

1. The node has no children - the node can be deleted without any further processing.
2. The node has only a left child - the node can be deleted and replaced with its left child.
3. The node has only a right child - the node can be deleted and replaced with its right child.
4. The node has both a left and right child - the node can be deleted and replaced with the *minimum node in its right subtree*.

```cpp
TreeNode *deleteNode(TreeNode *root, int key)
    {
        if (root)
            if (key < root->val)
                root->left = deleteNode(root->left, key);
            else if (key > root->val)
                root->right = deleteNode(root->right, key);
            else
            {
                if (!root->left && !root->right)
                    return NULL;
                if (!root->left || !root->right)
                    return root->left ? root->left : root->right;
                TreeNode *temp = root->left;
                while (temp->right != NULL)
                    temp = temp->right;
                root->val = temp->val;
                root->left = deleteNode(root->left, temp->val);
            }
        return root;
    }
```


### Searching

Searching in a BST follows the same logic as in binary search, using the divide and conquer approach. The following is an implementation of searching in a BST:

```cpp
TreeNode *search(TreeNode *root, int key)
    {
        if (root == NULL || root->val == key)
            return root;
        if (key < root->val)
            return search(root->left, key);
        return search(root->right, key);
    }
```

## Examples


### Example : [0700 - Search in a Binary Search Tree](https://leetcode.com/problems/search-in-a-binary-search-tree/)

> Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

In this problem, we are asked to find a node with a given key in a BST. This can be done in an optimal way using the divide and conquer approach due to the BST property. The following is the complete solution to this problem:

```cpp
class Solution {
public:
    TreeNode *searchBST(TreeNode *root, int key)
    {
        // Key found
        if (root == NULL || root->val == key)
            return root;

        // Key is present in left subtree
        if (key < root->val)
            return searchBST(root->left, key);

        // Else key is present in right subtree
        return searchBST(root->right, key);
    }
};
```

### Example : [0450 - Delete Node in a BST](https://leetcode.com/problems/delete-node-in-a-bst/)

> Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

In this problem, we are asked to delete a node with a given key from a BST. Now its fairly easy to navigate to the node with the given key, but the problem is that we need to *maintain the BST property* after deleting the node. For this we can apply the logic of deletion in a BST, which is described above. The following is the complete solution to this problem:

```cpp
class Solution
{
public:
    TreeNode *deleteNode(TreeNode *root, int key)
    {
        if (root)
            // If key is not equal to val, recursively call deleteNode on the left or right subtree
            if (key < root->val)
                root->left = deleteNode(root->left, key);
            else if (key > root->val)
                root->right = deleteNode(root->right, key);
            else
            {
                // Nothing to delete
                if (!root->left && !root->right)
                    return NULL;

                // If left or right subtree is NULL, return the other subtree
                if (!root->left || !root->right)
                    return root->left ? root->left : root->right;

                // If both subtrees are present, replace the node with the minimum node in its right subtree
                TreeNode *temp = root->left;
                while (temp->right != NULL)
                    temp = temp->right;
                root->val = temp->val;
                root->left = deleteNode(root->left, temp->val);
            }
        return root;
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