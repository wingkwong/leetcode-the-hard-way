---
description: "Author: @dhanu084, @vigneshshiv, @radojicic23 | https://leetcode.com/problems/validate-binary-search-tree/"
---

# 0098 - Validate Binary Search Tree (Medium)

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
- -$2^31 <= Node.val <= 2 ^ 31 - 1$

## Approach 1: Preorder Traversal

Time Complexity: $$O(n)$$

Space Complexity: $$O(n)$$ for recursive stack space

<Tabs>
<TabItem value="py" label="Python">
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
class Solution {
    public boolean isValidBST(TreeNode root) {
        if (root == null) return true;
        return checkBST(root, null, null);
    }
    
    public boolean checkBST(TreeNode root, Integer min, Integer max) {
        if (root == null) return true;
        // Check the node value with it's parent
        // If node is left, then value should be less than or equal to it's parent
        // If node is right, then value should be greater than or equal to it's parent
        if ((min != null && root.val <= min) || (max != null && root.val >= max)) {
            return false;
        }
        return checkBST(root.left, min, root.val) && checkBST(root.right, root.val, max);
    }
}
```

</TabItem>

<TabItem value="cpp" label="C++">
<SolutionAuthor name="@radojicic23"/>

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
    bool valid(TreeNode* node, long left, long right) {
        if (!node) {
            return true;
        }
        if (!(node->val > left && node->val < right)) {
            return false;
        }
        return (valid(node->left, left, node->val) && 
                valid(node->right, node->val, right));
    }

    bool isValidBST(TreeNode* root) {
        return valid(root, LONG_MIN, LONG_MAX);
    }
};
```

</TabItem>

<TabItem value="js" label="JavaScript">
<SolutionAuthor name="@radojicic23"/>

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    function valid(node, left, right) {
        if (!node) {
            return true;
        }
        if (!(node.val > left && node.val < right)) {
            return false;
        }
        return (valid(node.left, left, node.val) && 
                valid(node.right, node.val, right));
    }
    return valid(root, parseFloat(-Infinity), parseFloat(Infinity));
};
```

</TabItem>
</Tabs>

