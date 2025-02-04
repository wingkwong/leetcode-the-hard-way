---
description: 'Author: @madhu915 | https://leetcode.com/problems/two-sum-iv-input-is-a-bst/'
tags:
  [
    Hash Table,
    Two Pointers,
    Tree,
    Depth-First Search,
    Breadth-First Search,
    Binary Search Tree,
    Binary Tree,
  ]
---

# 0653 - Two Sum IV - Input is a BST (Easy)

## Problem Link

https://leetcode.com/problems/two-sum-iv-input-is-a-bst/

## Problem Statement

Given the `root` of a binary search tree and an integer `k`, return `true` _if there exist two elements in the BST such that their sum is equal to_ `k`, _or_ `false` _otherwise_.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/09/21/sum_tree_1.jpg)

```
Input: root = [5,3,6,2,4,null,7], k = 9
Output: true
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2020/09/21/sum_tree_2.jpg)

```
Input: root = [5,3,6,2,4,null,7], k = 28
Output: false
```

**Constraints:**

- The number of nodes in the tree is in the range `[1, 10 ^ 4]`.
- `-10 ^ 4 <= Node.val <= 10 ^ 4`
- `root` is guaranteed to be a **valid** binary search tree.
- `-10 ^ 5 <= k <= 10 ^ 5`

## Approach 1: Depth First Search

Perform a depth first search in the binary search tree to search for the node with the target value. The values of the nodes are added to the hashset recursively as the tree is travelled in a DFS fashion and the node with the target value is searched within the hashset for each recursive call. The left subtree is traversed followed by the right subtree in order to determine the pair of nodes with sum $k$ and return true for any match.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@madhu915"/>

```cpp
class Solution {
public:
  // set keeps track of the corresponding values of nodes traversed in a DFS fashion
  unordered_set<int> node;

  bool findTarget(TreeNode* root, int k) {
    // DFS approach
    if (!root) return false;
    // if the target pair is found, then return true
    if (node.find(k - root->val) != node.end()) return true;
    // add node value to hashset
    node.insert(root->val);
    // search left and right subtrees
    return findTarget(root->left, k) || findTarget(root->right, k);
  }
};
```

</TabItem>
</Tabs>
