---
description: "Author: @dhanu084 | https://leetcode.com/problems/validate-binary-search-tree/"
---

# 98 - Validate Binary Search Tree (Medium)

## Problem Link

https://leetcode.com/problems/validate-binary-search-tree/

## Problem Statement

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left
subtree
of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/12/01/tree1.jpg)

```
Input: root = [2,1,3]
Output: true
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2020/12/01/tree2.jpg)

```
Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
```

**Constraints**

- The number of nodes in the tree is in the range [1, 104].
- -231 <= Node.val <= 231 - 1

## Approach 1: Preorder Traversal

Time Complexity: $$O(n)$$

Space Complexity: $$O(n)$$ for recursive stack space

<SolutionAuthor name="@dhanu084" />

```python
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:

        def validate(root, left, right):
            if root is None:
                return True

            # Validate the condition for each subtree
            if root.val <= left or root.val >= right:
                return False

            # all subtrees left of root should be less than right so pass root.val as right
            left = validate(root.left, left, root.val)
            # all subtrees right of root should be greater than right so pass root.val as left
            right = validate(root.right, root.val, right)

            # only if left and right subtrees are valid return true
            return left and right

        # pass -inf as the left minimum and inf as right maximum initially
        return validate(root, -inf, inf)
```
