---
description: >-
  Author: @vigneshshiv |
  https://leetcode.com/problems/subtree-of-another-tree/
---

# 0572 - Subtree of Another Tree (Easy)

## Problem Link

https://leetcode.com/problems/subtree-of-another-tree/

## Problem Statement

Given the roots of two binary trees `root` and `subRoot`, return true if there is a subtree of `root` with the same structure and node values of `subRoot` and `false` otherwise.

A subtree of a binary tree tree is a `tree` that consists of a node in `tree` and all of this node's descendants. The `tree` could also be considered as a subtree of itself.

Given the `head` of a linked list, remove the `nth` node from the end of the list and return its head.

**Example 1:**

![Alt text](https://assets.leetcode.com/uploads/2021/04/28/subtree1-tree.jpg)

```
Input: root = [3,4,5,1,2], subRoot = [4,1,2]
Output: true
```

**Example 2:**

![Alt text](https://assets.leetcode.com/uploads/2021/04/28/subtree2-tree.jpg)

```
Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
Output: false
```

**Constraints:**

* The number of nodes in the `root` tree is in the range `[1, 2000]`.
* The number of nodes in the `subRoot` tree is in the range `[1, 1000]`.
* `-10^4 <= root.val <= 10^4`
* `-10^4 <= subRoot.val <= 10^4`

**Follow up:** Could you do this in one pass?

## Approach 1: Pre-order Recursive Solution


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
class Solution {
    public boolean isSubtree(TreeNode root, TreeNode subRoot) {
        boolean contains = Objects.nonNull(subRoot) ? containsTree(root, subRoot) : true;
        return contains;
    }
    
    private boolean containsTree(TreeNode t1, TreeNode t2) {
        // Big tree t1 is empty, not a matching case
        if (Objects.isNull(t1)) return false;
        if (Objects.equals(t1.val, t2.val) && matchTree(t1, t2)) return true;
        return containsTree(t1.left, t2) || containsTree(t1.right, t2);
    }
    
    private boolean matchTree(TreeNode t1, TreeNode t2) {
        // nothing left in the subtree to compare
        if (Objects.isNull(t1) && Objects.isNull(t2)) return true;
        // one tree is empty, therefore trees don't match
        if (Objects.isNull(t1) || Objects.isNull(t2)) return false;
        // value doesn't match
        if (!Objects.equals(t1.val, t2.val)) return false;
        // Repeat until the last node of both left and right
        return matchTree(t1.left, t2.left) && matchTree(t1.right, t2.right);
    }
}
```

</TabItem>
</Tabs>