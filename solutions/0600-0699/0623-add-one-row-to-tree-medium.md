---
description: 'Author: @divyansh_0602| https://leetcode.com/problems/add-one-row-to-tree/'
tags: [Tree, Depth-First Search, Breadth-First Search, Binary Tree]
---

# 0623 - Add One Row to Tree (Medium) 

## Problem Link

https://leetcode.com/problems/add-one-row-to-tree/

## Problem Statement

Given the `root` of a binary tree and two integers `val` and `depth`, add a row of nodes with value `val` at the given depth `depth`.

Note that the root `node` is at depth `1`.

The adding rule is:

* Given the integer `depth`, for each not null tree node `cur` at the depth `depth - 1`, create two tree nodes with value `val` as `cur`'s left subtree root and right subtree root.
* `cur`'s original left subtree should be the left subtree of the new left subtree root.
* `cur`'s original right subtree should be the right subtree of the new right subtree root.
* If `depth == 1` that means there is no depth `depth - 1` at all, then create a tree node with value `val` as the new root of the whole original tree, and the original tree is the new root's left subtree.

**Example 1:**

![Example 1](https://assets.leetcode.com/uploads/2021/03/15/addrow-tree.jpg "Example 1")

```
Input: root = [4,2,6,3,1,5], val = 1, depth = 2
Output: [4,1,1,2,null,null,6,3,1,5]
```

**Example 2:**

![Example 2](https://assets.leetcode.com/uploads/2021/03/11/add2-tree.jpg "Example 2")

```
Input: root = [4,2,null,3,1], val = 1, depth = 3
Output: [4,2,null,1,1,3,null,null,1]
```

**Constraints:**

* The number of nodes in the tree is in the range `[1, 10^4]`.
* The depth of the tree is in the range `[1, 10^4]`.
* `-100 <= Node.val <= 100`
* `-10^5 <= val <= 10^5`
* `1 <= depth <= the depth of tree + 1`

## Approach 1: Recursion (DFS)

This approach uses a simple DFS approach. The recursive function $insert(node, currDepth, val, depth)$ can be used to recursively reach a node where we need to insert two nodes.

The parameters used in the function are:
- $node$: the current node on which DFS is called upon
- $currDepth$: the depth of current node $node$
- $val$: value of nodes to be inserted
- $depth$: the depth at which nodes are to be inserted

> Note: the parameters $val$ and $depth$ never change during program execution and hence can be made global

Now, whenever we reach a node with depth $depth-1$ we create two new nodes $l$ and $r$ and link $l$'s and $r$'s left and right children to be $node$'s left and right children respectively, and then we re-assign $node$'s left and right children as $l$ and $r$ respectively. 

If $node$ is at a depth < $depth$ we recursively call $insert$ for $node$->$right$ and $node$->$left$ with increased depths.

One special case to be taken care of is when $depth$ is 1 because here the original root of tree is changed so we create a new node, assign this new node's left child as root and return this new node as root of tree.

Time Complexity: $O(n)$. A total of n nodes of the given tree will be considered in worst case.

Space Complexity: $O(n)$. The depth of the recursion tree can go upto n in the worst case (skewed tree).

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@divyansh_0602"/>

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
    void insert(TreeNode *node, int currDepth, int val, int depth) {
        if (!node) return;

        // if we reach the node where we need to create two nodes
        if (currDepth == depth - 1) {
            // create two new nodes
            TreeNode *l = new TreeNode(val);
            TreeNode *r = new TreeNode(val);

            // link the new nodes
            l->left = node->left;
            r->right = node->right;

            // change original links
            node->left = l;
            node->right = r;

            // return since we do not need to further deep in the tree
            return;
        }

        // if we do not reach desired depth, go deep in the tree
        insert(node->left, currDepth + 1, val, depth);
        insert(node->right, currDepth + 1, val, depth);
    }

    TreeNode *addOneRow(TreeNode *root, int val, int depth) {
        // since root is changed in this case, handle this case seperately
        if (depth == 1) {
            TreeNode *newNode = new TreeNode(val);
            newNode->left = root;
            return newNode;
        }
        // recursive function for insertion of new nodes
        insert(root, 1, val, depth);
        return root;
    }
};
```

</TabItem>
</Tabs>
