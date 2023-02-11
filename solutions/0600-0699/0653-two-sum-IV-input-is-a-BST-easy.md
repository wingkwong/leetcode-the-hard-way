---
description: 'Author: @madhu915 | https://leetcode.com/problems/two-sum-iv-input-is-a-bst/'
---

# 0653 - Two Sum IV - Input is a BST (Easy)

## Problem Link

https://leetcode.com/problems/two-sum-iv-input-is-a-bst/

## Problem Statement

Given the ``root`` of a binary search tree and an integer ``k``, return ``true`` if there exist two elements in the BST such that their sum is equal to ``k``, or ``false`` otherwise.

 

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/09/21/sum_tree_1.jpg)

```
Input: root = [5,3,6,2,4,null,7], k = 9
Output: true
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2020/09/21/sum_tree_2.jpg)

```
Input: root = [5,3,6,2,4,null,7], k = 28
Output: false
```

**Constraints:**

- The number of nodes in the tree is in the range `[1, 104]`.
- `-104 <= Node.val <= 104`
- `root` is guaranteed to be a valid binary search tree.
- `-105 <= k <= 105`

## Approach 1: Depth First Search

Perform a depth first search in the binary search tree to search for the node with the target value. The nodes are added to the hashmap recursively as the tree is travelled in a DFS fashion and the node with the target value is searched within the hashmap for each recursive call. The left subtree is traversed followed by the right subtree in order to determine the pair of nodes with sum 'k' and return true for any match.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@madhu915"/>

```cpp
class Solution {
public:
    // hashmap keeps track of all the nodes and corresponding values traversed in a DFS fashion
    unordered_map<TreeNode*,int>node;
    TreeNode* fun(TreeNode* root,int target){
        // find node having target value
        for(auto i:node){
            if(i.first!=root and i.second==target)
             return i.first;
        }
        return NULL;
    }

    bool findTarget(TreeNode* root, int k) {
        // DFS approach
        
        if(!root)
         return false;

        // add new node to map 
        node[root]=root->val;

        // if target pair found return
        if(fun(root,k-root->val)!=NULL)
         return true;

        // search left and right subtree 
        return findTarget(root->left,k) || findTarget(root->right,k);      
    }
};
```

</TabItem>
</Tabs>
