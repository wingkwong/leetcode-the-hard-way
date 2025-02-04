---
description: 'Author: @kesava-karri | https://leetcode.com/problems/path-sum-iii/'
tags: [Tree, Binary Tree, Depth-First Search, Breadth-First Search]
---

# 0437 - Path Sum III (Medium)

## Problem Link

https://leetcode.com/problems/path-sum-iii/

## Problem Statement

Given the `root` of a binary tree and an integer `targetSum`, return the number of paths where the sum of the values along the path equals `targetSum`.

The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).

**Example 1:**

```
Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
Output: 3
Explanation: The paths that sum to 8 are shown.
```

**Example 2:**

```
Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: 3
```

**Constraints:**

- The number of nodes in the tree is in the range `[0, 1000]`.
- `-10^9 <= Node.val <= 10^9`
- `-1000 <= targetSum <= 1000`

## Approach 1: DFS + BFS

- Since the path can start from any node of the tree it felt like dfs needs to be done from every node which lead to the thought of accessing nodes using BFS and calculating the sum.
- So we use a queue to reach each node & calculate the sum from that node (Similar to level order traversing (BFS))
- When the `remainingSum` reaches the node whose difference makes it zero leads to the path we need.
- So whenever such path exists we increment our answer
- Note:
- 1. The start node doesn't need to be the root node
- 2. The end node doesn't have to be the leaf node
- The 3 paths for example 1 equating to targetSum are: [5, 3], [5, 2, 1], [-3, 11]
- Check [this remainingSum example](https://leetcode.com/problems/path-sum-ii/solutions/2615948/leetcode-the-hard-way-explained-line-by-line/remainingSum) run thru by @wkw

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@kesava-karri"/>

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
    int ans;
     /** @param root the TreeNode of binary tree
     * @param targetSum to check if sum exists
     * @return ans indicates the number of paths satisfying the given targetSum
     */
    public int pathSum(TreeNode root, int targetSum) {
        if (root == null) return ans;
        Queue<TreeNode> q = new LinkedList<>();
        q.add(root);
        // Since the path can start from any node, combining a BFS style approach w DFS
        while (!q.isEmpty()) {
            // get the first node in the queue
            root = q.poll();
            f(root, targetSum);
            if (root.left != null) q.add(root.left);
            if (root.right != null) q.add(root.right);
        }
        return ans;
    }

    private void f(TreeNode root, long remainingSum) {
        if (root == null) return;
        // indicates the sum upto current node is equal to target
        if (remainingSum - root.val == 0) {
            ans++;
        }
        f(root.left, remainingSum - root.val);
        f(root.right, remainingSum - root.val);
    }
}
```

</TabItem>
</Tabs>
