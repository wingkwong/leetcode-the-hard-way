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

We just run a dfs-like approach where we just follow the rules line-by-line as asked in the problem statement. Whenever we reach depth-1, we create two new nodes, and change the links.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@divyansh_0602"/>

```cpp
// Time Complexity: O(n). A total of n nodes of the given tree will be considered in worst case.
// Space Complexity: O(N). The depth of the recursion tree can go upto n in the worst case(skewed tree).
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
    void insert(TreeNode* node, int currDepth, int val, int depth)
    {
        if(!node) return;

        //if we reach the node where we need to create two nodes
        if(currDepth == depth-1)
        {
            // create two new nodes
            TreeNode* l = new TreeNode(val);
            TreeNode* r = new TreeNode(val);

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
        insert(node->left, currDepth+1, val, depth);
        insert(node->right, currDepth+1, val, depth);
    }

    TreeNode* addOneRow(TreeNode* root, int val, int depth) {
        // since root is changed in this case, handle this case seperately
        if(depth==1)
        {
            TreeNode* newNode = new TreeNode(val);
            newNode->left = root;
            return newNode;
        }

        // recursive function for insertion of new nodes (similar to dfs)
        insert(root, 1, val, depth);
        return root;
    }
};
```

</TabItem>
</Tabs>