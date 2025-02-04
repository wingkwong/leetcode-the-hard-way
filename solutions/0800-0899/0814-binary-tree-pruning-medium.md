---
description: 'Author: @wkw | https://leetcode.com/problems/binary-tree-pruning/'
tags: [Tree, Depth-First Search, Binary Tree]
---

# 0814 - Binary Tree Pruning (Medium)

## Problem Statement

Given the `root` of a binary tree, return _the same tree where every subtree (of the given tree) not containing a_`1`_has been removed_.

A subtree of a node `node` is `node` plus every node that is a descendant of `node`.

**Example 1:**

```
Input: root = [1,null,0,0,1]
Output: [1,null,0,null,1]
Explanation:
Only the red nodes satisfy the property "every subtree not containing a 1".
The diagram on the right represents the answer.
```

**Example 2:**

```
Input: root = [1,0,1,0,0,0,1]
Output: [1,null,1,null,1]
```

**Example 3:**

```
Input: root = [1,1,0,1,1,0,1,0]
Output: [1,1,0,1,1,null,1]
```

**Constraints:**

- The number of nodes in the tree is in the range `[1, 200]`.
- `Node.val` is either `0` or `1`.

## Approach 1: DFS

<SolutionAuthor name="@wkw"/>

```cpp
// Time Complexity: O(N) where N is the number of the nodes in the tree
// Space Complexity: O(H) where H is the height of the tree.
// In worse case, H can be N when it is a left skewed binary tree / right skewed binary tree
class Solution {
public:
    // the idea is to use DFS to traverse the tree
    // if the current subtree satifies one of the following conditions
    // 1. root value is 1
    // 2. left sub tree contains 1
    // 3. right sub tree contains 1
    // then we return `root`
    // otherwise, we return nullptr
    TreeNode* pruneTree(TreeNode* root) {
        // if root is nullptr, then return nullptr
        if (!root) return nullptr;
        // DFS on left sub tree
        root->left = pruneTree(root->left);
        // DFS on right sub tree
        root->right = pruneTree(root->right);
        // !root->left means the left sub tree doesn't contain 1
        // !root->right means the right sub tree doesn't contain 1
        // !root->val means the current node value is 0
        // for this case, return nullptr
        // else we can keep the node
        return (!root->left && !root->right && !root->val) ? nullptr : root;
    }
};
```

In case you want to free the deleted root to avoid memory leak. You can change the last line to

```cpp
if (!root->left && !root->right && !root->val) {
    // delete will delete the memory of the pointer of root
	delete root;
	return nullptr;
} else {
	return root;
}
```

<SolutionAuthor name="@wkw"/>

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
    # the idea is to use DFS to traverse the tree
    # if the current subtree satisfies one of the following conditions
    # 1. root value is 1
    # 2. left sub tree contains 1
    # 3. right sub tree contains 1
    # then we return `root`
    # otherwise, we return None
    def pruneTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        # if root is None, then return None
        if root is None: return None
        # DFS on left sub tree
        root.left = self.pruneTree(root.left)
        # DFS on right sub tree
        root.right = self.pruneTree(root.right)
        # !root->left means the left sub tree doesn't contain 1
        # !root->right means the right sub tree doesn't contain 1
        # !root->val means the current node value is 0
        # for this case, return None
        # else we can keep the node
        if root.left is None and root.right is None and root.val == 0: return None
        return root
```
