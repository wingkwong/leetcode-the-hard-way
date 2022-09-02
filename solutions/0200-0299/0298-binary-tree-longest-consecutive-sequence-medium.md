---
description: 'Author: @wingkwong | https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/'
tags: [Tree, Depth-First Search, Binary Tree]
---

# 0298 - Binary Tree Longest Consecutive Sequence (Medium) 

## Problem Statement

Given the `root` of a binary tree, return *the length of the longest **consecutive sequence path***.

A **consecutive sequence path** is a path where the values **increase by one** along the path.

Note that the path can start **at any node** in the tree, and you cannot go from a node to its parent in the path.

**Example 1:**

```
Input: root = [1,null,3,2,4,null,null,null,5]
Output: 3
Explanation: Longest consecutive sequence path is 3-4-5, so return 3.
```

**Example 2:**

```
Input: root = [2,null,3,2,null,1]
Output: 2
Explanation: Longest consecutive sequence path is 2-3, not 3-2-1, so return 2.
```

**Constraints:**

- The number of nodes in the tree is in the range `[1, 3 * 10^4]`.
- `-3 * 104 <= Node.val <= 3 * 10^4`

## Approach 1: DFS

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

// Time Complexity: O(N) where N is the number of node
// Space Complexity: O(H) where H is the number of the level. In worst case, H would be N if there is only one path
class Solution {
public:
    int longestConsecutive(TreeNode* root, int len = 0, TreeNode* parent = nullptr) {
        // if root is nullptr, we return the current length
        if (!root) return len;
        // if the current node has a parent node,
        // and the value of the current node is that of parent node plus one
        // then we increase len
        if (parent && root->val == parent->val + 1) len += 1;
        // otherwise, we need to reset the len
        else len = 1;
        // then we calculate the result of left sub-tree and right sub-tree
        // compare with the current len and take the maximum one
        return max({
            // max len at current level
            len,
            // max len from left sub-tree
            longestConsecutive(root->left, len, root),
            // max len from right sub-tree
            longestConsecutive(root->right, len, root)
        });
    }
};
```