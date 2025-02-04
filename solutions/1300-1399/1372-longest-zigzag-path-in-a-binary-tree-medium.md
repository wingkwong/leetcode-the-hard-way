---
description: 'Author: @wkw | https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/'
tags: [Dynamic Programming, Tree, Depth-First Search, Binary Tree]
---

# 1372 - Longest ZigZag Path in a Binary Tree (Medium)

## Problem Link

https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/

## Problem Statement

You are given the `root` of a binary tree.

A ZigZag path for a binary tree is defined as follow:

- Choose **any**node in the binary tree and a direction (right or left).
- If the current direction is right, move to the right child of the current node; otherwise, move to the left child.
- Change the direction from right to left or from left to right.
- Repeat the second and third steps until you can't move in the tree.

Zigzag length is defined as the number of nodes visited - 1. (A single node has a length of 0).

Return _the longest **ZigZag** path contained in that tree_.

**Example 1:**

```
Input: root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1,null,1]
Output: 3
Explanation: Longest ZigZag path in blue nodes (right -> left -> right).
```

**Example 2:**

```
Input: root = [1,1,1,null,1,null,null,1,1,null,1]
Output: 4
Explanation: Longest ZigZag path in blue nodes (left -> right -> left -> right).
```

**Example 3:**

```
Input: root = [1]
Output: 0
```

**Constraints:**

- The number of nodes in the tree is in the range `[1, 5 * 10^4]`.
- `1 <= Node.val <= 100`

## Approach 1: DFS

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

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
    int dfs(TreeNode* root, int isLeft, int cnt) {
        // root is nullptr, we can return `cnt`
        if (!root) return cnt;
        // if `isLeft` is true, we have two choices
        // 1. go to right making a zipzag path - increase the cnt by 1
        // 2. still go to left - starting a new zigzag path - hence cnt is set to 0
        if (isLeft) return max(dfs(root->right, 0, cnt + 1), dfs(root->left, 1, 0));
        // similarly, we apply the same logic for the opposite direction
        return max(dfs(root->left, 1, cnt + 1), dfs(root->right, 0, 0));
    }
    int longestZigZag(TreeNode* root) {
        // go through left-subtree and right-subtree
        // get the max result
        return max(dfs(root->left, 1, 0), dfs(root->right, 0, 0));
    }
};
```

</TabItem>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def longestZigZag(self, root: Optional[TreeNode]) -> int:
        def dfs(node, isLeft, cnt):
            # root is None, we can return `cnt`
            if node is None: return cnt
            # if `isLeft` is true, we have two choices
            # 1. go to right making a zipzag path - increase the cnt by 1
            # 2. still go to left - starting a new zigzag path - hence cnt is set to 0
            if isLeft:  return max(dfs(node.right, 0, cnt + 1), dfs(node.left, 1, 0))
            # similarly, we apply the same logic for the opposite direction
            return max(dfs(node.left, 1, cnt + 1), dfs(node.right, 0, 0))
        # go through left-subtree and right-subtree and get the max result
        return max(dfs(root.left, 1, 0), dfs(root.right, 0, 0))

```

</TabItem>

</Tabs>
