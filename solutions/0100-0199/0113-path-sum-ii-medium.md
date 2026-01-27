---
description: 'Author: @wkw, @lonyehan, @radojicic23 | https://leetcode.com/problems/path-sum-ii/'
tags: [Backtracking, Tree, Depth-First Search, Binary Tree]
---

# 0113 - Path Sum II (Medium)

## Problem Link

https://leetcode.com/problems/path-sum-ii/

## Problem Statement

Given the `root` of a binary tree and an integer `targetSum`, return _all **root-to-leaf** paths where the sum of the node values in the path equals_`targetSum`_. Each path should be returned as a list of the node **values**, not node references_.

A **root-to-leaf** path is a path starting from the root and ending at any leaf node. A **leaf** is a node with no children.

**Example 1:**

```
Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: [[5,4,11,2],[5,8,4,5]]
Explanation: There are two paths whose sum equals targetSum:
5 + 4 + 11 + 2 = 22
5 + 8 + 4 + 5 = 22
```

**Example 2:**

```
Input: root = [1,2,3], targetSum = 5
Output: []
```

**Example 3:**

```
Input: root = [1,2], targetSum = 0
Output: []
```

**Constraints:**

- The number of nodes in the tree is in the range `[0, 5000]`.
- `-1000 <= Node.val <= 1000`
- `-1000 <= targetSum <= 1000`

## Approach 1: DFS + Backtracking

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    vector<vector<int>> ans;

    // the idea is to use dfs to traverse the tree from all root to leaf paths
    // `path` is used to store the current route
    // `remainingSum` is used to store thre remaining sum that we need with the initial value `targetSum`.
    //  we substract it from the node value when we traverse down the tree
    // if we arrive the leaf and the the remaining sum is eqaul to leaf node value
    // then we can add `path` to ans
    // e.g. path = [5,4,11,2] and remainingSum = targetSum = 22
    // traverse node 5, remainingSum = 22 - 5 = 17
    // traverse node 4, remainingSum = 17 - 4 = 13
    // traverse node 11, remainingSum = 13 - 11 = 2
    // traverse node 2, remainingSum = 2 - 2 = 0
    // remainingSum is 0 which means the sum of current path is eqaul to targetSum
    // so how to find another path?
    // we can backtrack here
    // we can pop back a node and try another
    // e.g. path = [5, 4, 11, 7]
    // pop 7 out = [5, 4, 11]
    // push 2 = [5, 4, 11, 2]
    // ... etc
    void dfs(TreeNode* node, vector<int>& path, int remainingSum) {
        // if it is nullptr, then return
        if (!node) return;
        // add the current node val to path
        path.push_back(node-> val);
        // !node->left && !node->right : check if it is a leaf node
        // remainingSum == node->val: check if the remaining sum - node->val == 0
        // if both condition is true, then we find one of the paths
        if (!node->left && !node->right && remainingSum == node->val) ans.push_back(path);
        // traverse left sub tree with updated remaining sum
        // we don't need to check if left sub tree is nullptr or not
        // as we handle it in the first line of this function
        dfs(node-> left, path, remainingSum - node-> val);
        // traverse right sub tree with updated remaining sum
        // we don't need to check if right sub tree is nullptr or not
        // as we handle it in the first line of this function
        dfs(node-> right, path, remainingSum - node-> val);
        // backtrack
        path.pop_back();
    }

    vector<vector<int>> pathSum(TreeNode* root, int targetSum) {
        // used to store current route
        vector<int> path;
        // dfs from the root
        dfs(root, path, targetSum);
        return ans;
    }
};
```

</TabItem>

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
    # the idea is to use dfs to traverse the tree from all root to leaf paths
    # `path` is used to store the current route
    # `remainingSum` is used to store thre remaining sum that we need with the initial value `targetSum`.
    #  we substract it from the node value when we traverse down the tree
    # if we arrive the leaf and the the remaining sum is eqaul to leaf node value
    # then we can add `path` to ans
    # e.g. path = [5,4,11,2] and remainingSum = targetSum = 22
    # traverse node 5, remainingSum = 22 - 5 = 17
    # traverse node 4, remainingSum = 17 - 4 = 13
    # traverse node 11, remainingSum = 13 - 11 = 2
    # traverse node 2, remainingSum = 2 - 2 = 0
    # remainingSum is 0 which means the sum of current path is eqaul to targetSum
    # so how to find another path?
    # we can backtrack here
    # we can pop back a node and try another
    # e.g. path = [5, 4, 11, 7]
    # pop 7 out = [5, 4, 11]
    # push 2 = [5, 4, 11, 2]
    # ... etc
    def dfs(self, root, path, ans, remainingSum):
        # if it is None, then return
        if not root:
            return
        # add the current node val to path
        path.append(root.val)
        # !node.left && !node.right : check if it is a leaf node
        # remainingSum == node.val: check if the remaining sum - node.val == 0
        # if both condition is true, then we find one of the paths
        if not root.left and not root.right and remainingSum == root.val:
            # lists passed a function are just references (i.e. Pass By Reference)
            # and path.pop() would pop them all eventually
            # therefore you need to create a new list there
            # or your can use ans.append(path[:]) / ans.append(path.copy())
            ans.append(list(path))
        # traverse left sub tree with updated remaining sum
        # we don't need to check if left sub tree is nullptr or not
        # as we handle it in the first line of this function
        self.dfs(root.left, path, ans, remainingSum - root.val)
        # traverse right sub tree with updated remaining sum
        # we don't need to check if right sub tree is nullptr or not
        # as we handle it in the first line of this function
        self.dfs(root.right, path, ans, remainingSum - root.val)
        # backtrack
        path.pop()

    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:
        ans = []
        self.dfs(root, [], ans, targetSum)
        return ans
```

</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@wkw"/>

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    List<List<Integer>> ans = new ArrayList<List<Integer>>();
    // the idea is to use dfs to traverse the tree from all root to leaf paths
    // `path` is used to store the current route
    // `remainingSum` is used to store thre remaining sum that we need with the initial value `targetSum`.
    //  we substract it from the node value when we traverse down the tree
    // if we arrive the leaf and the the remaining sum is eqaul to leaf node value
    // then we can add `path` to ans
    // e.g. path = [5,4,11,2] and remainingSum = targetSum = 22
    // traverse node 5, remainingSum = 22 - 5 = 17
    // traverse node 4, remainingSum = 17 - 4 = 13
    // traverse node 11, remainingSum = 13 - 11 = 2
    // traverse node 2, remainingSum = 2 - 2 = 0
    // remainingSum is 0 which means the sum of current path is eqaul to targetSum
    // so how to find another path?
    // we can backtrack here
    // we can pop back a node and try another
    // e.g. path = [5, 4, 11, 7]
    // pop 7 out = [5, 4, 11]
    // push 2 = [5, 4, 11, 2]
    // ... etc
    private void dfs(TreeNode node, List<Integer> path, int remainingSum) {
        // if it is null, then return
        if (node == null) return;
        // add the current node val to path
        path.add(node.val);
        // !node.left && !node.right : check if it is a leaf node
        // remainingSum == node.val: check if the remaining sum - node.val == 0
        // if both condition is true, then we find one of the paths
        if (node.left == null && node.right == null && remainingSum == node.val) ans.add(new ArrayList<>(path));
        // traverse left sub tree with updated remaining sum
        // we don't need to check if left sub tree is nullptr or not
        // as we handle it in the first line of this function
        this.dfs(node.left, path, remainingSum - node.val);
        // traverse right sub tree with updated remaining sum
        // we don't need to check if right sub tree is nullptr or not
        // as we handle it in the first line of this function
        this.dfs(node.right, path, remainingSum - node.val);
        // backtrack
        path.remove(path.size() - 1);
    }
    public List<List<Integer>> pathSum(TreeNode root, int targetSum) {
        List<Integer> path = new ArrayList<Integer>();
        dfs(root, path, targetSum);
        return ans;
    }
}

```

</TabItem>

<TabItem value="cs" label="C#">
<SolutionAuthor name="@lonyehan"/>

```cs
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    public List<IList<int>> result;

    public void PreOrder(TreeNode root, int targetSum, List<int> list, int sum = 0) {
        if(root == null) return;

        sum += root.val;
        list.Add(root.val);

        // Is this node is leaf and sum equal to target?
        if(sum == targetSum && root.left == null && root.right == null) {
            result.Add(list);
        }
        PreOrder(root.left, targetSum, new List<int>(list), sum);
        PreOrder(root.right, targetSum, new List<int>(list), sum);
    }

    public IList<IList<int>> PathSum(TreeNode root, int targetSum) {
        result = new List<IList<int>>();
        PreOrder(root, targetSum, new List<int>());
        return result;
    }
}
```

</TabItem>

<TabItem value="js" label="JavaScript">
<SolutionAuthor name="@radojicic23"/>

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  function dfs(root, remainingSum, path, ans) {
    if (!root) return ans;
    path.push(root.val);
    if (!root.left && !root.right && root.val === remainingSum) {
      ans.push(path.slice());
    }
    dfs(root.left, remainingSum - root.val, path, ans);
    dfs(root.right, remainingSum - root.val, path, ans);
    path.pop();
    return ans;
  }
  return dfs(root, targetSum, [], []);
};
```

</TabItem>
</Tabs>
