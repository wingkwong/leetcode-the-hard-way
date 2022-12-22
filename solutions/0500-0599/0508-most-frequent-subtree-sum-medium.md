---
description: 'Author: @wingkwong | https://leetcode.com/problems/most-frequent-subtree-sum/'
tags: [Hash Table, Tree, Depth-First Search, Binary Tree]
---

# 0508 - Most Frequent Subtree Sum (Medium) 

## Problem Link

https://leetcode.com/problems/most-frequent-subtree-sum/

## Problem Statement

Given the `root` of a binary tree, return the most frequent **subtree sum**. If there is a tie, return all the values with the highest frequency in any order.

The **subtree sum** of a node is defined as the sum of all the node values formed by the subtree rooted at that node (including the node itself).

**Example 1:**

```
Input: root = [5,2,-3]
Output: [2,-3,4]
```

**Example 2:**

```
Input: root = [5,2,-5]
Output: [2]
```

**Constraints:**

- The number of nodes in the tree is in the range `[1, 104]`.
- `-10^5 <= Node.val <= 10^5`

## Approach 1: DFS

We need to find all subtree sum and return the values with the highest frequency. To do so, first we can use dfs to find out the subtree sum. If the root is null, we return 0. Otherwise, the subtree sum would be `root->val + dfs(root->left) + dfs(root->rigth)`. 

For each subtree sum, we use a hashmap to record it and update the maximum count at the same time. At the end, we iterate the hashmap to build the final answer.

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
    int mx = 0;
    unordered_map<int, int> m;
    int dfs(TreeNode* root) {
        // if root is null, return 0
        if (!root) return 0;
        // else the subtree sum would be 
        // the current root value + dfs result from left & right subtree
        int res = root->val + dfs(root->left) + dfs(root->right);
        // count the highest frequency
        mx = max(mx, ++m[res]);
        return res;
    }
    
    vector<int> findFrequentTreeSum(TreeNode* root) {
        // dfs from root
        dfs(root);
        // build the final answer
        vector<int> ans;
        for (auto [k, v] : m) {
            // if it matches the highest frequency, push the subtree sum value. 
            if (v == mx) {
                ans.push_back(k);
            }
        }
        return ans;
    }
};
```

</TabItem>
</Tabs>