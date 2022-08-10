---
title: 'Binary Tree'
description: 'Binary Tree is a tree structure in which eacho node only contains at most two children'
keywords:
  - leetcode
  - tutorial
  - binary tree
  - data structure
---

import TutorialAuthors from '@site/src/components/TutorialAuthors';
import Table from '@site/src/components/Table';

<TutorialAuthors names="@wingkwong"/>

## Overview

Binary Tree is a tree structure in which eacho node only contains at most two children, often referred as left and right child.

<!-- TODO: properties -->

## Traversal 

There are different ways to traverse trees - In-order, Pre-order, and Post-order. Supposing we have a binary tree with 5 nodes,

![image](https://user-images.githubusercontent.com/35857179/180000691-7634f6e6-1c2b-4e6e-a52a-83f3218e2d6b.png)

### Pre-order

- Visit the root
- Traverse the left sub-tree
- Traverse the right sub-tree

```cpp
void preorder(TreeNode* node) {
    if (node == NULL) return;
    s.push_back(node->val);
    preorder(node->left);
    preorder(node->right);
}
```

### In-order

- Traverse the left sub-tree
- Visit the root
- Traverse the right sub-tree

```cpp
void inorder(TreeNode* node) {
    if (node == NULL) return;
    inorder(node->left);
    s.push_back(node->val);
    inorder(node->right);
}
```

### Post-order

- Traverse the left sub-tree
- Traverse the right sub-tree
- Visit the root

```cpp
void postorder(TreeNode* node) {
    if (node == NULL) return;
    postorder(node->left);
    postorder(node->right);
    s.push_back(node->val);
}
```

### Summary

| Traversal  | Path               | Order               |
| ---------- | ------------------ | ------------------- |
| Pre-order  | 1 -> 2 -> 4 -> 5 -> 3 | Root -> Left -> Right |
| In-order   | 4 -> 2 -> 5 -> 1 -> 3 | Left -> Root -> Right |
| Post-order | 4 -> 5 -> 2 -> 3 -> 1 | Left -> Right -> Root  |