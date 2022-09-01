---
description: 'Author: @wingkwong | https://leetcode.com/problems/count-good-nodes-in-binary-tree/'
tags: [Tree, Depth-First Search, Breadth-First Search, Binary Tree]
---

# 1448 - Count Good Nodes in Binary Tree (Medium) 

## Problem Statement

Given a binary tree `root`, a node *X* in the tree is named **good** if in the path from root to *X* there are no nodes with a value *greater than* X.

Return the number of **good** nodes in the binary tree.

**Example 1:**

```
Input: root = [3,1,4,3,null,1,5]
Output: 4
Explanation: Nodes in blue are good.
Root Node (3) is always a good node.
Node 4 -> (3,4) is the maximum value in the path starting from the root.
Node 5 -> (3,4,5) is the maximum value in the path
Node 3 -> (3,1,3) is the maximum value in the path.
```

**Example 2:**

```
Input: root = [3,3,null,4,2]
Output: 3
Explanation: Node 2 -> (3, 3, 2) is not good, because "3" is higher than it.
```

**Example 3:**

```
Input: root = [1]
Output: 1
Explanation: Root is considered as good.
```

**Constraints:**

- The number of nodes in the binary tree is in the range `[1, 10^5]`.
- Each node's value is between `[-10^4, 10^4]`.

## Approach 1: DFS

<SolutionAuthor name="@wingkwong"/>

```cpp
// Time complexity: O(N) as we visit every node only once.
// Space complexity: O(H) where H is the height of the tree.
// In the worst case, H would be N given that the tree only has one path.
class Solution {
public:
    // the idea is to record the max value from the root to the node
    // we can first initialise mx as INT_MIN 
    int goodNodes(TreeNode* root, int mx = INT_MIN) {
        // if the root is null, we return 0
        if (!root) return 0;
        // then we can break it into 3 parts
        // the first part is the current node
        // if the current node value is greater than the maximum value so far
        // that means the current node is a good node
        // hence we add 1, else add 0
        return (mx <= root->val ? 1 : 0) + 
                // the second part is the result of the left sub-tree
                // we traverse it with the updated maximum value at the current point
                // we don't need to check if root->left is null or not here
                // as we cover the null case in the first line
                goodNodes(root->left, max(root->val, mx)) + 
                // the last part is the result of the right sub-tree
                // we traverse it with the updated maximum value at the current point
                // we don't need to check if root->right is null or not here
                // as we cover the null case in the first line
                goodNodes(root->right, max(root->val, mx));
    }
};
```