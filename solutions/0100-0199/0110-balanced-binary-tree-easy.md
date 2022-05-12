---
description: 'Author: @SkollRyu | https://leetcode.com/problems/balanced-binary-tree/'
---

# 0110 - Balanced Binary Tree (Easy)

## Problem Statement

Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

> a binary tree in which the left and right subtrees of _every_ node differ in height by no more than 1.

&#x20;

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/10/06/balance\_1.jpg)

```
Input: root = [3,9,20,null,null,15,7]
Output: true
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2020/10/06/balance\_2.jpg)

```
Input: root = [1,2,2,3,3,null,null,4,4]
Output: false
```

**Example 3:**

```
Input: root = []
Output: true 
```

**Constraints:**

* The number of nodes in the tree is in the range `[0, 5000]`.
* `-10^4 <= Node.val <= 10^4`

## Visualization
![height-balanced](https://user-images.githubusercontent.com/63882653/152684367-0ea099bd-623c-4d5a-8862-0ec035620c13.jpg)
![Height-unbalanced](https://user-images.githubusercontent.com/63882653/152684944-1e774af3-8303-42be-9d7b-20af26221f74.jpg)

## Approach 1: Straight forward
This solution is strictly following the definition of a balanced binary tree.  
(1) ABS(left sub-tree's height - right sub-tree's height) <= 1.  
(2) Every left sub-trees and right sub-trees are also balanced.  

First, we need to set up the base case for the recursion solution. Then we check if the whole left subtree and right subtree are balanced. If so, then we check if every subtrees are balanced. This solution should give $$O(n^2)$$ time complexity

### Java
```java
class Solution {
    public boolean isBalanced(TreeNode root) {
        if (root == null) {
            return true;
        }
        if(Math.abs(height(root.left) - height(root.right)) <= 1){
            return isBalanced(root.left) && isBalanced(root.right);
        } else {
            return false;
        }
    }
    
    public int height(TreeNode root){
        if (root == null) return -1;
        int ld = height(root.left);
        int rd = height(root.right);
        return 1 + Math.max(ld,rd);
    }
}
```
