---
description: 'Author: @wkw | https://leetcode.com/problems/average-of-levels-in-binary-tree/'
tags: [Tree, Depth-First Search, Breadth-First Search, Binary Tree]
---

# 0637 - Average of Levels in Binary Tree (Easy)

## Problem Statement

Given the `root` of a binary tree, return _the average value of the nodes on each level in the form of an array_. Answers within `10-5` of the actual answer will be accepted.

**Example 1:**

```
Input: root = [3,9,20,null,null,15,7]
Output: [3.00000,14.50000,11.00000]
Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
Hence return [3, 14.5, 11].
```

**Example 2:**

```
Input: root = [3,9,20,15,7]
Output: [3.00000,14.50000,11.00000]
```

**Constraints:**

- The number of nodes in the tree is in the range `[1, 10^4]`.
- `-231 <= Node.val <= 2^31 - 1`

## Approach 1: BFS

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

// Time Complexity: O(N) where N is the number of nodes in the tree
// Space Complexity: O(M): where N is the maximum number in the tree at any level
class Solution {
public:
    // The idea is to use BFS, which is a common way to traverse the tree level by level
    // For a standard BFS, we can use queue to push the first root node into a queue
    // Then remove the front of the queue, add its children to back of the queue
    // Do the above steps until the queue is empty
    // In this question, we need to extra thing which is calculate the average value of the nodes on each level
    // We can simply use `sum` to store the current sum of the nodes,
    // and calculate the average after processing all the nodes on each level
    vector<double> averageOfLevels(TreeNode* root) {
        // Use a queue for perform BFS
        queue<TreeNode*> q;
        // Push the root node.
        // Unlike some other questions, the number of nodes is guaranteed to be [1, 10 ^ 4]
        // Hence, we don't need to check if it is null or not here
        q.push(root);
        // ans[i] is used to store the average values for each level i
        vector<double> ans;
        // Do the following logic until the queue is empty
        while(!q.empty()) {
            // n is the number of nodes in the current queue
            int n = q.size();
            // init the sum to store the total sum of the nodes on this level
            double sum = 0;
            // iterate each node on the current level
            for(int i = 0; i < n; i++) {
                // get the first node from the queue
                TreeNode* node = q.front();
                // then pop it
                q.pop();
                // add the value to sum
                sum += node->val;
                // add its children to back of the queue here
                // add the left tree if possible
                if(node->left) q.push(node->left);
                // add the right tree if possible
                if(node->right) q.push(node->right);
            }
            // the current level has been processed, calculate the average value for this level
            ans.push_back(sum / n);
        }
        // return the final answer
        return ans;
    }
};
```
