---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/
---

import Authors from '@site/src/components/Authors';

# 2265 - Count Nodes Equal to Average of Subtree (Medium)

## Problem Link

https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/

## Problem Statement

Given the `root` of a binary tree, return _the number of nodes where the value of the node is equal to the **average** of the values in its **subtree**_.

**Note:**

* The **average** of `n` elements is the **sum** of the `n` elements divided by `n` and **rounded down** to the nearest integer.
* A **subtree** of `root` is a tree consisting of `root` and all of its descendants.

**Example 1:**

![](https://assets.leetcode.com/uploads/2022/03/15/image-20220315203925-1.png)

```
Input: root = [4,8,5,0,1,null,6]
Output: 5
Explanation: 
For the node with value 4: The average of its subtree is (4 + 8 + 5 + 0 + 1 + 6) / 6 = 24 / 6 = 4.
For the node with value 5: The average of its subtree is (5 + 6) / 2 = 11 / 2 = 5.
For the node with value 0: The average of its subtree is 0 / 1 = 0.
For the node with value 1: The average of its subtree is 1 / 1 = 1.
For the node with value 6: The average of its subtree is 6 / 1 = 6.
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2022/03/26/image-20220326133920-1.png)

```
Input: root = [1]
Output: 1
Explanation: For the node with value 1: The average of its subtree is 1 / 1 = 1.
```

**Constraints:**

* The number of nodes in the tree is in the range `[1, 1000]`.
* `0 <= Node.val <= 1000`

## Approach 1: Post Order Traversal

<Authors names="@wingkwong"/>

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
    int ans = 0;
    pair<int, int> dfs(TreeNode* node) {
        if (!node) return {0, 0}; // {sum, cnt}
        // post order traversal
        auto l = dfs(node->left);
        auto r = dfs(node->right);
        // sum from left tree + sum from right tree + current node value
        int sum = l.first + r.first + node->val;
        // cnt from left tree + cnt from right tree + current node value
        int cnt = l.second + r.second + 1;
        // check if the avgerage is same as the node value
        ans += (sum / cnt == node->val);
        // return the pair
        return {sum, cnt};
    }
    
    int averageOfSubtree(TreeNode* root) {
        dfs(root);
        return ans;
    }
};
```
