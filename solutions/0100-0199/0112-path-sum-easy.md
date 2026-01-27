---
description: 'Author: @wkw | https://leetcode.com/problems/path-sum/'
tags: [Tree, Depth-First Search, Breadth-First Search, Binary Tree]
---

# 0112 - Path Sum (Easy)

## Problem Link

https://leetcode.com/problems/path-sum/

## Problem Statement

Given the `root` of a binary tree and an integer `targetSum`, return `true` if the tree has a **root-to-leaf** path such that adding up all the values along the path equals `targetSum`.

A **leaf** is a node with no children.

**Example 1:**

```
Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
Explanation: The root-to-leaf path with the target sum is shown.
```

**Example 2:**

```
Input: root = [1,2,3], targetSum = 5
Output: false
Explanation: There two root-to-leaf paths in the tree:
(1 --> 2): The sum is 3.
(1 --> 3): The sum is 4.
There is no root-to-leaf path with sum = 5.
```

**Example 3:**

```
Input: root = [], targetSum = 0
Output: false
Explanation: Since the tree is empty, there are no root-to-leaf paths.
```

**Constraints:**

- The number of nodes in the tree is in the range `[0, 5000]`.
- `-1000 <= Node.val <= 1000`
- `-1000 <= targetSum <= 1000`

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
    bool hasPathSum(TreeNode* root, int targetSum) {
        // return false if the root is nullptr
        if(!root) return false;
        // if it reaches to the end and the val is equal to the sum, return true
        if(!root->left && !root->right && root->val == targetSum) return true;
        // otherwise, we traverse left node and right node with targetSum `sum - root->val`
        return hasPathSum(root->left, targetSum - root->val) || hasPathSum(root->right, targetSum-root->val);
    }
};
```

</TabItem>
</Tabs>
