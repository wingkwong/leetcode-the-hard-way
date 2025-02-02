---
description: >-
  Author: @wkw | https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/


tags: [Tree, Breadth-First Search, Binary Tree]
---

# 0103 - Binary Tree Zigzag Level Order Traversal (Medium)

## Problem Link

https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

## Problem Statement

Given the `root` of a binary tree, return _the zigzag level order traversal of its nodes' values_. (i.e., from left to right, then right to left for the next level and alternate between).

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg)

```
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]
```

**Example 2:**

```
Input: root = [1]
Output: [[1]]
```

**Example 3:**

```
Input: root = []
Output: []
```

**Constraints:**

- The number of nodes in the tree is in the range `[0, 2000]`.
- `-100 <= Node.val <= 100`

## Approach 1: BFS

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
    # Level traversal -> BFS
    # reverse the list for odd-index level
    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        # if there is no root, then return []
        if not root: return []
        # init ans and queue with initial node `root`
        ans, q = [], [root]
        # BFS
        while q:
            # direction - 1 for even-index level and -1 for odd-index level
            d = -1 if len(ans) % 2 == 1 else 1
            # put all node values to a list with the correct direction
            # and add to `ans`
            ans.append([n.val for n in q][::d])
            # for each node in the queue,
            # we add the left or right node to the queue if applicable
            q = [n for node in q for n in (node.left, node.right) if n]
        return ans
```

</TabItem>
</Tabs>
