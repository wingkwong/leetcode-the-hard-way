---
description: 'Author: @heiheihang | https://leetcode.com/problems/sum-of-left-leaves/'
---

# 0404 - Sum of Left Leaves (Easy)

## Problem Statement

Given the `root` of a binary tree, return the sum of all left leaves.

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/04/08/leftsum-tree.jpg)

```
Input: root = [3,9,20,null,null,15,7]
Output: 24
Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.
```

**Example 2:**

```
Input: root = [1]
Output: 0 
```

**Constraints:**

* The number of nodes in the tree is in the range `[1, 1000]`.
* `-1000 <= Node.val <= 1000`

## Approach 1: DFS

Following the template from [DFS Guide](../../tutorials/graph-theory/depth-first-search.md), we iterate to each node and check if it is a left leaf. If it is a left leaf, we return that value to its parent for cumulating the sum. The trick here is to add a `is_left` parameter to the `dfs` function.

```python
def sumOfLeftLeaves(self, root: Optional[TreeNode]) -> int:
        
        def dfs(node, isLeft):
            
            #skip when we reach the end of the path
            if(node is None):
                return 0
                
            #if node is a leaf (no left and right) and is the left child
            #return its value for adding
            if(node.left is None and node.right is None and isLeft is True):
                return node.val 
            
            #perform dfs on both children
            #set isLeft to true on left child
            #set isLeft to false on right child
            return dfs(node.left, True) + dfs(node.right, False)
        
        #root can be a leaf if it is the only node in the tree
        #but it is not a left leaf (no right/left)
        return dfs(root, False)
```
