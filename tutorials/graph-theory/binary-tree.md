---
title: 'Binary Tree'
description: 'Binary Tree is a tree structure in which eacho node only contains at most two children'
keywords:
  - leetcode
  - tutorial
  - binary tree
  - data structure
---

<TutorialAuthors names="@wingkwong"/>

## Overview

Binary Tree is a tree structure in which each node only contains at most two children, often referred as left and right child.

## Properties

- The number on nodes on level $l$ is equal to the $2^l$, like on level $0$ (root node) we got $2 ^ 0 >= 1$ node only.
- The Maximum number of nodes in a binary tree of height $h$ is $2^h - 1$. 

## Traversal 

There are different ways to traverse trees - In-order, Pre-order, and Post-order. Supposing we have a binary tree with $5$ nodes,

![image](https://user-images.githubusercontent.com/35857179/180000691-7634f6e6-1c2b-4e6e-a52a-83f3218e2d6b.png)

### Pre-order

- Visit the root
- Traverse the left sub-tree
- Traverse the right sub-tree

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
void preorder(TreeNode* node) {
    if (node == NULL) return;
    s.push_back(node->val);
    preorder(node->left);
    preorder(node->right);
}
```
</TabItem>

<TabItem value="py" label="Python">

```py
def preorder(node):
    if (node == None): return
    s.append(node.val)    
    preorder(node.left)
    preorder(node.right)
```
</TabItem>
</Tabs>

### In-order

- Traverse the left sub-tree
- Visit the root
- Traverse the right sub-tree

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
void inorder(TreeNode* node) {
    if (node == NULL) return;
    inorder(node->left);
    s.push_back(node->val);
    inorder(node->right);
}
```
</TabItem>

<TabItem value="py" label="Python">

```py
def inorder(node):
    if (node == None): return
    inorder(node.left)
    s.append(node.val)
    inorder(node.right)
```
</TabItem>
</Tabs>

### Post-order

- Traverse the left sub-tree
- Traverse the right sub-tree
- Visit the root

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
void postorder(TreeNode* node) {
    if (node == NULL) return;
    postorder(node->left);
    postorder(node->right);
    s.push_back(node->val);
}
```
</TabItem>

<TabItem value="py" label="Python">

```py
def postorder(node):
    if (node == None): return
    postorder(node.left)
    postorder(node.right)
    s.append(node.val)  
```

</TabItem>
</Tabs>


## Summary

| Traversal  | Path               | Order               |
| ---------- | ------------------ | ------------------- |
| Pre-order  | 1 -> 2 -> 4 -> 5 -> 3 | Root -> Left -> Right |
| In-order   | 4 -> 2 -> 5 -> 1 -> 3 | Left -> Root -> Right |
| Post-order | 4 -> 5 -> 2 -> 3 -> 1 | Left -> Right -> Root  |
