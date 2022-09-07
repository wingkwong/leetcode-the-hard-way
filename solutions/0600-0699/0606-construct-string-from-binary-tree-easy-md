---
description: 'Author: @wingkwong | https://leetcode.com/problems/construct-string-from-binary-tree/'
tags: [String, Tree, Depth-First Search, Binary Tree]
---

# 0606 - Construct String from Binary Tree (Easy) 

## Problem Statement

Given the `root` of a binary tree, construct a string consisting of parenthesis and integers from a binary tree with the preorder traversal way, and return it.

Omit all the empty parenthesis pairs that do not affect the one-to-one mapping relationship between the string and the original binary tree.

**Example 1:**

```
Input: root = [1,2,3,4]
Output: "1(2(4))(3)"
Explanation: Originally, it needs to be "1(2(4)())(3()())", but you need to omit all the unnecessary empty parenthesis pairs. And it will be "1(2(4))(3)"
```

**Example 2:**

```
Input: root = [1,2,3,null,4]
Output: "1(2()(4))(3)"
Explanation: Almost the same as the first example, except we cannot omit the first parenthesis pair to break the one-to-one mapping relationship between the input and the output.
```

**Constraints:**

- The number of nodes in the tree is in the range `[1, 10^4]`.
- `-1000 <= Node.val <= 1000`

## Approach 1: DFS

<SolutionAuthor name="@wingkwong"/>

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

// Time Complexity: O(N) where N is the number of the nodes in the tree
// Space Complexity: O(H) where H is the height of the tree. 
// In worse case, H can be N when it is a left skewed binary tree / right skewed binary tree
class Solution {
public:
    // case 1: root is nullptr -> ""
    // case 2: root doesn't have left sub tree and right sub tree -> root->val
    // case 3: root->left is not nullptr -> root->val + (dfs result from left sub tree)
    // case 4: root->left is nullptr but root->right is not nullptr -> root->val + () 
    // case 5: root->right is not nullptr -> root->val + (dfs result from right sub tree)
    string tree2str(TreeNode* root) {
        // handle case 1
        if (!root) return "";
        // we convert root->val to string here, then append results from different cases
        string s = to_string(root->val);
        // handle case 2
        // this line is obviously not necessary
        if (!root->left && !root->right) s += "";  
        // handle case 3
        if (root->left) s += "(" + tree2str(root->left) + ")";
        // handle case 4
        // alternatively, you can use `else if (root->right) s += "()";`
        if (!root->left && root->right) s += "()";
        // handle case 5
        if (root->right) s += "(" + tree2str(root->right) + ")";
        return s;
    }
};
```

<SolutionAuthor name="@wingkwong"/>

```py
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# Time Complexity: O(N) where N is the number of the nodes in the tree
# Space Complexity: O(H) where H is the height of the tree. 
# In worse case, H can be N when it is a left skewed binary tree / right skewed binary tree
class Solution:
    # case 1: root is nullptr -> ""
    # case 2: root doesn't have left sub tree and right sub tree -> root.val
    # case 3: root.left is not nullptr -> root.val + (dfs result from left sub tree)
    # case 4: root.left is nullptr but root.right is not nullptr -> root.val + () 
    # case 5: root.right is not nullptr -> root.val + (dfs result from right sub tree)
    def tree2str(self, root: Optional[TreeNode]) -> str:
        # handle case 1
        if root is None:
            return ''
        # we convert root.val to string here, then append results from different cases
        s = str(root.val)
        # handle case 2
        # this line is obviously not necessary
        if root.left is None and root.right is None:
            s += ''
        # handle case 3
        if root.left:
            s += '({})'.format(self.tree2str(root.left))
        # handle case 4
        # alternatively, you can use `elif root.right: s += '()'`
        if root.left is None and root.right:
            s += '()'
        # handle case 5
        if root.right:
            s += '({})'.format(self.tree2str(root.right))
        return s        
```