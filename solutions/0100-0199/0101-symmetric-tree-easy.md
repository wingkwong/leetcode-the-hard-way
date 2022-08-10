---
description: 'Author: @wingkwong | https://leetcode.com/problems/symmetric-tree/'
---

import SolutionAuthor from '@site/src/components/SolutionAuthor';

# 0101 - Symmetric Tree (Easy)

## Problem Link

https://leetcode.com/problems/symmetric-tree/

## Problem Statement

Given the `root` of a binary tree, _check whether it is a mirror of itself_ (i.e., symmetric around its center).

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/02/19/symtree1.jpg)

```
Input: root = [1,2,2,3,4,4,3]
Output: true
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2021/02/19/symtree2.jpg)

```
Input: root = [1,2,2,null,3,null,3]
Output: false
```

**Constraints:**

* The number of nodes in the tree is in the range `[1, 1000]`.
* `-100 <= Node.val <= 100`

**Follow up:** Could you solve it both recursively and iteratively?

## Approach 1: Recursive

A tree is symmetric if the following conditions are satisfied

- two nodes should have the value 
- the left sub-tree is a reflection of the right sub-tree of the other tree

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    bool f(TreeNode* r1, TreeNode* r2){
        // if two nodes r null, they are same
        if(!r1 && !r2) return true;
        // if one of them r null, they are not same
        if(!r1 || !r2) return false;
        // if their values are same, and the sub-nodes are same
        return (r1->val == r2->val) && f(r1->left, r2->right) && f(r1->right, r2->left);
    }
    
    bool isSymmetric(TreeNode* root) {
        return f(root, root);
    }
};
```