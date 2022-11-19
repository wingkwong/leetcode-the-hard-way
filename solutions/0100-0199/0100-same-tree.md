---
description: "Author: @ngld0 | https://leetcode.com/problems/same-tree/"
tags: [Tree, Binary Tree]
---
# 0100 Same Tree
## Problem Link: https://leetcode.com/problems/same-tree/

## Problem Statement
Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
**Example 1:**
```
Input: p = [1,2,3], q = [1,2,3]
Output: true
```
**Example 2:**

```
Input: p = [1,2], q = [1,null,2]
Output: false
```
**Example 3:**
```
Input: p = [1,2,1], q = [1,1,2]
Output: false
```
**Constraints:**

- `The number of nodes in both trees is in the range [0, 100].`
- `10^4 <= Node.val <= 10^4`
## Approach 1. Recursive

## Approach 2. Iterative Depth First Search

<Tabs>

<TableItem value="cpp" label="C++">
<SolutionAuthor name="@ngld0"/>

```
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
    bool isSameTree(TreeNode* p, TreeNode* q) {
            
        #define sol 1
        #if sol == 0
            // recursive
            if(!p && !q)return true;
            if((p && !q)||(!p &&q) ||(p->val != q->val) ) return false;
            return isSameTree(p->left, q->left) && isSameTree(p->right, q->right);        
        #else
            // iterative Depth First Search
            stack<TreeNode*> st ;
            st.push(p);
            st.push(q);

            while(!st.empty()){
                p = st.top(); st.pop();
                q = st.top(); st.pop();
                if (p == nullptr && q == nullptr) continue;
                if ((p != nullptr && q == nullptr) || (p == nullptr && q != nullptr) || (p->val != q->val)) return false;
                //left node first , and then check right node
                st.push(p->left); st.push(q->left);
                st.push(p->right); st.push(q->right);
            }
            return true;        
        #endif
    }
};
```

</TabItem>
</Tabs>