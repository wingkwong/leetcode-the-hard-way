---
description: 'Author: @vigneshshiv, @radojicic23 | https://leetcode.com/problems/maximum-depth-of-binary-tree'
---

# 0104 - Maximum Depth of Binary Tree (Easy)

## Problem Link

https://leetcode.com/problems/maximum-depth-of-binary-tree

## Problem Statement

Given the `root` of a binary tree, return _its maximum depth_.

A binary tree's **maximum depth** is the number of nodes along the longest path from the root node down to the farthest leaf node.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/11/26/tmp-tree.jpg)

```
Input: root = [3,9,20,null,null,15,7]
Output: 3
```

**Example 2:**

```
Input: root = [1,null,2]
Output: 2
```

**Constraints:**

* The number of nodes in the tree is in the range `[0, 104]`.
* `-100 <= Node.val <= 100`

## Approach 1: Recursive

Traverse left and right nodes till last, and at every level keep find the maximum between left and right nodes and add 1.

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
// Time complexity: O(n), where n - # of nodes in the tree
// Space complexity: O(h), where h - height of the tree from root
class Solution {
    public int maxDepth(TreeNode root) {
        if (root == null) return 0;
        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    }
}
```
</TabItem>

<TabItem value="python" label="Python">
<SolutionAuthor name="@radojicic23"/>

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0 
        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))
```

</TabItem>
</Tabs>
