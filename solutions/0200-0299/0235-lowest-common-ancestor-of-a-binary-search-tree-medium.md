---
description: 'Author: @ColeB2, @radojicic23 | https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/'
tags: [Tree, Depth-First Search, Binary Search Tree, Binary Tree]
---

# 0235 - Lowest Common Ancestor of a Binary Search Tree (Medium)

## Problem Link

https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

## Problem Statement

Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

According to the [definition of LCA on Wikipedia](https://en.wikipedia.org/wiki/Lowest_common_ancestor): “The lowest common ancestor is defined between two nodes `p` and `q` as the lowest node in `T` that has both `p` and `q` as descendants (where we allow **a node to be a descendant of itself**).”

**Example 1:**

![](https://assets.leetcode.com/uploads/2018/12/14/binarysearchtree_improved.png)

```
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2018/12/14/binarysearchtree_improved.png)

```
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
```

**Example 3:**

```
Input: root = [2,1], p = 2, q = 1
Output: 2
```

**Constraints:**

- The number of nodes in the tree is in the range `[2, 10^5]`.
- `-10^9 <= Node.val <= 10^9`
- All `Node.val` are **unique**.
- `p != q`
- `p` and `q` will exist in the BST.

## Approach 1: Iterative

The biggest thing to remember is a BST(Binary Search Tree) is a data structure, where all nodes in the left subtree are less than the root and all nodes in the right subtree are greater than the root. Knowing that we can easily leverage this idea using 3 simple conditions.

1. If $p$ and $q$ are both greater than the $node$ we are looking at, then the LCA(Lowest Common Ancestor) must be in the right subtree.
2. If $p$ and $q$ are both less than the $node$ we are looking at, then the LCA must be in the left subtree.
3. Finally, if the above are not true, it means 1 node must be in the left, and 1 must be in the right, or 1 of them are equal, and 1 of them are in the left/right subtree. Which in both cases, means the current node is the LCA.

Time Complexity: $$O(log n)$$ since we are using a BST, and only ever check the subtree we know both will be in, we know in the worst case that means we will only ever have to check through $$log n$$ nodes.

Space Complexity: $$O(1)$$. We only need pointers to track the current node.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        # initalize a current node variable to trace through our BST.
        node = root
        # while the node has not reached a null node.
        while node:
            # if both p and q are > than node, LCA must be in the right subtree.
            if p.val > node.val and q.val > node.val:
                node = node.right
            # if both p and q are < than node, LCA must be in the left subtree.
            elif p.val < node.val and q.val < node.val:
                node = node.left
            # Else will cover 2 cases:
            # 1. node == p or q -- since we are traversing top down, it means
            # the other must be a child, thus making node the LCA.
            # 2. p is in one subtree and q is in the other subtree, making the
            # current node the LCA.
            else:
                return node
```

</TabItem>

<TabItem value="js" label="JavaScript">
<SolutionAuthor name="@radojicic23"/>

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let curr = root;
  while (curr) {
    if (p.val < curr.val && q.val < curr.val) {
      curr = curr.left;
    } else if (p.val > curr.val && q.val > curr.val) {
      curr = curr.right;
    } else {
      return curr;
    }
  }
};
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
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */

class Solution {
public:
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        TreeNode* curr = root;
        while (curr) {
            if (p->val < curr->val && q->val < curr->val) {
                curr = curr->left;
            } else if (p->val > curr->val && q->val > curr->val) {
                curr = curr->right;
            } else {
                return curr;
            }
        }
        return root;
    }
};
```

</TabItem>
</Tabs>
