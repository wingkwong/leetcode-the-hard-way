# 0102 - Binary Tree Level Order Traversal (Medium)

## Problem Link

https://leetcode.com/problems/binary-tree-level-order-traversal/

## Problem Statement

Given the $root$ of a binary tree, return _the level order traversal of its nodes' values_. (i.e., from left to right, level by level).


**Example 1:**

![](https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg)
```
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
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

*  The number of nodes in the tree is in the range `[0, 2000]`.
*  `-1000 <= Node.val <= 1000`


## Approach 1: Using Queue Data Structure

- Take one 2D vector $ans$ to return the final tree-traversal, and another vector $v$ to store seperate levels.
- Take a queue, store $root$ node inside it and a _NULL_ node for seperating levels.
- Until the queue is not empty, pop one by one nodes from queue. if the node is _NULL_ and queue is not empty, push the _NULL_ again inside the queue. Push $v$ into $ans$ as one level is completed and clear $v$.
- If the node is not null, push the value into $v$ and push its left and right nodes into queue (if not null).

**Time Complexity:**  O(N)


<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@Srijita-mandal"/>

```cpp
class Solution {
public:
    vector<vector<int>> levelOrder(TreeNode* root) {
        vector<vector<int>> ans;
        //for storing each level
        vector<int> v;  
        if(root==NULL) return ans;
        queue<TreeNode*> q;
        q.push(root);
        //for sepearting levels
        q.push(NULL);  
        while(!q.empty()){
            TreeNode* cur = q.front();
            q.pop();
            if(cur==NULL){
                //storing each level into ans vector
                ans.push_back(v);  
                //clearing v vector to insert next level
                v.clear();  
                //storing NULL at the end of queue
                if(!q.empty()) q.push(NULL);  
            }
            else{
                v.push_back(cur->val);
                if(cur->left!=NULL) q.push(cur->left);
                if(cur->right!=NULL) q.push(cur->right);
            }
        }
        return ans;
    }
};
```
</Tabs>