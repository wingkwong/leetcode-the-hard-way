---
title: 'Binary Search Tree'
description: 'A binary tree where left child is less than or equal to the parent, while the right child is greater'
keywords:
  - leetcode
  - tutorial
  - binary search tree
  - data structure
---

<TutorialCredits authors="@ChiragAgg5k"/>

## Binary Search Trees

**Binary search trees (BST)** are basically [binary trees](./binary-tree.md) where each node's value is larger than all the nodes in that node's left subtree, and smaller than all the nodes in that node's right subtree. This property allows the [binary search algorithm](./../basic-topics/binary-search.md) to be applied to the tree, which is useful for fast lookup, insertion, and deletion of the nodes.

### Implementation

A BST can be implemented using a [binary tree](./binary-tree.md) with the following structure:

```cpp
struct TreeNode {
  int val;
  TreeNode * left;
  TreeNode * right;
  TreeNode(): val(0), left(nullptr), right(nullptr) {}
  TreeNode(int x): val(x), left(nullptr), right(nullptr) {}
  TreeNode(int x, TreeNode * left, TreeNode * right): val(x), left(left), right(right) {}
};
```

### Operations

#### Insertion

Inserting a node into a BST is similar to inserting a node into a [binary tree](./binary-tree.md), except that the node must be inserted in the correct position to maintain the BST property. The following is an example of inserting a node into a BST:

```cpp
TreeNode* insert(TreeNode* root, int key) {
  if (root == NULL) return new TreeNode(key);
  if (key < root->val) root->left = insert(root->left, key);
  else root->right = insert(root->right, key);
  return root;
}
```

#### Deletion

There are 4 cases to consider when deleting a node from a BST:

1. The node has no children - the node can be deleted without any further processing.
2. The node has only a left child - the node can be deleted and replaced with its left child.
3. The node has only a right child - the node can be deleted and replaced with its right child.
4. The node has both a left and right child - the node can be deleted and replaced with the _minimum node in its right subtree_.

```cpp
TreeNode* deleteNode(TreeNode* root, int key) {
  if (root) {
    if (key < root->val) root->left = deleteNode(root->left, key);
    else if (key > root->val) root->right = deleteNode(root->right, key);
  } else {
    if (!root->left && !root->right) return NULL;
    if (!root->left || !root->right) return root->left ? root->left : root->right;
    TreeNode* temp = root->left;
    while (temp->right != NULL) temp = temp->right;
    root->val = temp->val;
    root->left = deleteNode(root->left, temp->val);
  }
  return root;
}
```

#### Searching

Searching in a BST follows the same logic as in binary search, using the divide and conquer approach. The following is an implementation of searching in a BST:

```cpp
TreeNode* search(TreeNode* root, int key) {
  if (root == NULL || root->val == key) return root;
  if (key < root->val) return search(root->left, key);
  return search(root->right, key);
}
```

### Example #1: [0701 - Insert into a Binary Search Tree](https://leetcode.com/problems/insert-into-a-binary-search-tree/)

> You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

In this problem, we are asked to insert a node with a given key into a BST. To do so, first we need to find the correct position to insert the node and then insert it. The solution to this problem is as follows:

```cpp
class Solution {
 public:
  TreeNode* insertIntoBST(TreeNode* root, int key) {
    // if root is NULL, insert the node at the root
    if (root == NULL) return new TreeNode(key);
    // if key is less than root's value, recurse into the left subtree,
    // else recurse into the right subtree
    if (key < root->val) root->left = insertIntoBST(root->left, key);
    else root->right = insertIntoBST(root->right, key);
    return root;
  }
};
```

### Example #2: [0450 - Delete Node in a BST](https://leetcode.com/problems/delete-node-in-a-bst/)

> Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

In this problem, we are asked to delete a node with a given key from a BST. Now its fairly easy to navigate to the node with the given key, but the problem is that we need to _maintain the BST property_ after deleting the node. For this we can apply the logic of deletion in a BST, which is described above. The following is the complete solution to this problem:

```cpp
class Solution {
 public:
  TreeNode *deleteNode(TreeNode *root, int key) {
    if (root) {
      if (key < root->val) root->left = deleteNode(root->left, key);
      else if (key > root->val) root->right = deleteNode(root->right, key);
      else {
        // if the node has no children, delete it directly
        if (!root->left && !root->right) return NULL;
        // if the node has only one child, delete it and replace it with its child
        if (!root->left || !root->right) return root->left ? root->left : root->right;
        // if the node has both a left and right child, replace it with the minimum
        TreeNode *temp = root->left;
        while (temp->right != NULL) temp = temp->right;
        root->val = temp->val;
        root->left = deleteNode(root->left, temp->val);
      }
    }
    return root;
  }
};
```

### Example #3: [0700 - Search in a Binary Search Tree](https://leetcode.com/problems/search-in-a-binary-search-tree/)

> Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

In this problem, we are asked to find a node with a given key in a BST. This can be done in an optimal way using the divide and conquer approach due to the BST property. The following is the complete solution to this problem:

```cpp
class Solution {
 public:
  TreeNode* searchBST(TreeNode* root, int key) {
    // either root is found or the key is not present in the BST
    if (root == NULL || root->val == key) return root;
    // if key is less than root's value, recurse into the left subtree
    if (key < root->val) return searchBST(root->left, key);
    // else ecurse into the right subtree
    return searchBST(root->right, key);
  }
};
```

## Balanced Binary Search Trees

A binary search tree is said to be **balanced** if the height of the left and right subtrees of every node differ by at most 1. A balanced BST has applications in many algorithms, such as **AVL trees** and **red-black trees**.

We can convert a binary tree into a balanced BST by first traversing the tree in inorder and storing the values in an array, and then constructing a balanced BST from the array. The following leetcode problem demonstrates this approach:

### Example #1: [1382 - Balance a Binary Search Tree](https://leetcode.com/problems/balance-a-binary-search-tree/)

> Given the root of a binary search tree, return a balanced binary search tree with the same node values. If there is more than one answer, return any of them.

```cpp
class Solution {
 public:
  void inorder(TreeNode* root, vector<int>& ans) {
    if (root == NULL) return;
    inorder(root->left, ans);
    ans.push_back(root->val);
    inorder(root->right, ans);
  }

  TreeNode* createBST(vector<int> ans, int start, int end) {
    if (start > end) return NULL;
    int mid = start + (end - start) / 2;
    TreeNode* root = new TreeNode(ans[mid]);
    root->left = createBST(ans, start, mid - 1);
    root->right = createBST(ans, mid + 1, end);
    return root;
  }

  TreeNode* balanceBST(TreeNode* root) {
    vector<int> ans;
    // Store the inorder traversal of the tree in an array
    inorder(root, ans);
    int start = 0, end = ans.size() - 1;
    return createBST(ans, start, end);
  }
};
```

## Complexity Analysis

| Operation | Time Complexity | Space Complexity |
| --------- | --------------- | ---------------- |
| Insertion | $O(n)$          | $O(n)$           |
| Deletion  | $O(n)$          | $O(n)$           |
| Searching | $O(n)$          | $O(n)$           |

where $n$ is the number of nodes in the BST.

export const suggestedProblems = [ { "problemName": "0098 - Validate Binary Search Tree", "difficulty": "Medium", "leetCodeLink": "https://leetcode.com/problems/validate-binary-search-tree/", "solutionLink": "../../solutions/0000-0099/validate-binary-search-tree-medium" }, { "problemName": "0230 - Kth Smallest Element in a BST", "difficulty": "Medium", "leetCodeLink": "https://leetcode.com/problems/kth-smallest-element-in-a-bst/", "solutionLink": "../../solutions/0200-0299/kth-smallest-element-in-a-bst-medium" }, { "problemName": "0703 - Kth Largest Element in a Stream", "difficulty": "Easy", "leetCodeLink": "https://leetcode.com/problems/kth-largest-element-in-a-stream/", "solutionLink": "../../solutions/0700-0799/kth-largest-element-in-a-stream-easy" }, ]

<Table title="Suggested Problems" data={suggestedProblems} />
