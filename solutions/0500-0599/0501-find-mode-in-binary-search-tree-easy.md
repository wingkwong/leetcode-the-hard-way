---
description: 'Author: @wingkwong | https://leetcode.com/problems/find-mode-in-binary-search-tree/'
tags: [Tree, Depth-First Search, Binary Search Tree, Binary Tree]
---

# 501 - Find Mode in Binary Search Tree (Easy) 

## Problem Link

https://leetcode.com/problems/find-mode-in-binary-search-tree/

## Problem Statement

Given the `root` of a binary search tree (BST) with duplicates, return *all the mode(s) (i.e., the most frequently occurred element) in it*.

If the tree has more than one mode, return them in **any order**.

Assume a BST is defined as follows:

- The left subtree of a node contains only nodes with keys **less than or equal to** the node's key.
- The right subtree of a node contains only nodes with keys **greater than or equal to** the node's key.
- Both the left and right subtrees must also be binary search trees.

**Example 1:**

```
Input: root = [1,null,2,2]
Output: [2]
```

**Example 2:**

```
Input: root = [0]
Output: [0]
```

**Constraints:**

- The number of nodes in the tree is in the range `[1, 10 ^ 4]`.
- `-10 ^ 5 <= Node.val <= 10 ^ 5`

**Follow up:** Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).

## Approach 1: DFS + Counting

We can perform DFS to traverse the tree to get each node value and store in a hash map. After that, we know the frequencies for each node value and we can find the maximum one and build the final result.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    unordered_map<int, int> m;
    void dfs(TreeNode* root) {
        // base case
        if (!root) return;
        // increase the frequency of root->val by 1
        m[root->val] += 1;
        // traverse the left tree
        dfs(root->left);
        // traverse the right tree
        dfs(root->right);
    }
    vector<int> findMode(TreeNode* root) {
        vector<int> ans;
        // traverse the tree
        dfs(root);
        // find the maximum frequency
        int mx = 0;
        for (auto &x : m) mx = max(mx, x.second);
        // build the final answer
        for (auto &x : m) if (x.second == mx) ans.push_back(x.first);
        return ans;
    }
};
```

</TabItem>
</Tabs>