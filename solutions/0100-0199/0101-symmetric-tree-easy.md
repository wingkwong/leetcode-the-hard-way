---
description: 'Author: @wingkwong, @vigneshshiv | https://leetcode.com/problems/symmetric-tree/'
---

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

<Tabs>
<TabItem value="c++" label="C++">
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

</TabItem>

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
// Time complexity: O(n), where n - # nodes in the tree
// Space complexity: O(log(n))
class Solution {
    public boolean isSymmetric(TreeNode root) {
        if (root == null) return true;
        return areSymmetric(root.left, root.right);
    }
    
    public boolean areSymmetric(TreeNode root1, TreeNode root2) {
        if (root1 == null && root2 == null) return true;
        // Both nodes should not be null and values should be equal
        // If not, both are not a valid symmetric tree
        if (!(root1 != null && root2 != null) || root1.val != root2.val) {
            return false;
        }
        return areSymmetric(root1.left, root2.right) && areSymmetric(root1.right, root2.left);
    }
}
```

</TabItem>
</Tabs>

## Approach 2: Iterative

A tree is symmetric if the following conditions are satisfied

- two nodes should have the value 
- the left sub-tree is a reflection of the right sub-tree of the other tree

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
// Time complexity: O(n), where n - # nodes in the tree
// Space complexity: O(n)
class Solution {
    public boolean isSymmetric(TreeNode root) {
        if (root == null) return true;
        // ArrayDeque acts as head & tail pointers
        // Add and remove elements from both sides
        Deque<TreeNode> stack = new ArrayDeque<>();
        if (root.left == null && root.right == null) {
            return true;
        }
        if (root.left == null || root.right == null) {
            return false;
        }
        // Add left to head & right to tail in deque
        stack.offerFirst(root.left);
        stack.offerLast(root.right);
        while (!stack.isEmpty()) {
            TreeNode left = stack.pollFirst();
            TreeNode right = stack.pollLast();
            // Compare the value, if not same, not a valid symmetric tree
            if (left.val != right.val) return false;
            // Mirror view elements check of both left and right subtree's
            // If any left and right has one node exists and other doesn't, then it's not valid symmetric tree
            if ((left.left == null && right.right != null) || (left.left != null && right.right == null)
                    || (left.right != null && right.left == null) || (left.right == null && right.left != null)) {
                return false;
            }
            if (left.right != null && right.left != null) {
                stack.offerFirst(left.right);
                stack.offerLast(right.left);
            }
            if (left.left != null && right.right != null) {
                stack.offerFirst(left.left);
                stack.offerLast(right.right);
            }
        }
        return true;    
    }
}
```
</TabItem>
</Tabs>