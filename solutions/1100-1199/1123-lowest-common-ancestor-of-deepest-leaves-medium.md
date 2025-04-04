---
description: 'Author: @wkw | https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves'
---

# 1123 - Lowest Common Ancestor of Deepest Leaves (Medium)

## Problem Link

https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves

## Problem Statement

Given the root of a binary tree, return the lowest common ancestor of its deepest leaves.

Recall that:

- The node of a binary tree is a leaf if and only if it has no children
- The depth of the root of the tree is 0. if the depth of a node is d, the depth of each of its children is d + 1.
- The lowest common ancestor of a set S of nodes, is the node A with the largest depth such that every node in S is in the subtree with root A.

**Example 1:**

**Input:** root = [3,5,1,6,2,0,8,null,null,7,4]

**Output:** [2,7,4]

**Explanation:**

We return the node with value 2, colored in yellow in the diagram. The nodes coloured in blue are the deepest leaf-nodes of the tree. Note that nodes 6, 0, and 8 are also leaf nodes, but the depth of them is 2, but the depth of nodes 7 and 4 is 3.

**Example 2:**

**Input:** root = [1]

**Output:** [1]

**Explanation:**

The root is the deepest node in the tree, and it's the lca of itself.

**Example 3:**

**Input:** root = [0,1,3,null,2]

**Output:** [2]

**Explanation:**

The deepest leaf node in the tree is 2, the lca of one node is itself.

**Constraints:**

- The number of nodes in the tree will be in the range $[1, 1000]$.
- $0 <= Node.val <= 1000$
- The values of the nodes in the tree are unique.

Note: This question is the same as 865: https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/

## Approach 1: DFS

We can write a DFS function to return a tuple $(depth, lca)$ where $depth$ is the depth of the deepest leaf in its subtree, while $lca$ is the lowest common ancestor (LCA) of all the deepest leaves in its subtree.

If the left subtree has a deeper leaf than the right one, then the LCA for the current node is the one returned by the left subtree. Similar logic for the opposite side. If the deepest leaves in both left & right subtrees are at the same depth, then the current node is the LCA.

Time complexity: $O(n)$

Space complexity: $O(n)$

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def lcaDeepestLeaves(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        def dfs(node):
            if not node: return (0, None) # (depth, lca)
            l, l_lca = dfs(node.left)
            r, r_lca = dfs(node.right)
            if l == r: return (l + 1, node)
            return (l + 1, l_lca) if l > r else (r + 1, r_lca)
        return dfs(root)[1]
```

</TabItem>
</Tabs>
