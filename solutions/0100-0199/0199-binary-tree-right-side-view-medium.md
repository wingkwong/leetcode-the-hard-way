---
description: 'Author: @ganajayant | https://leetcode.com/problems/binary-tree-right-side-view/'
---

# 0199 - Binary Tree Right Side View (Medium)

## Problem Link

https://leetcode.com/problems/binary-tree-right-side-view/

## Problem Statement

Given the `root` of a binary tree, imagine yourself standing on the **right side** of it, return _the values of the nodes you can see ordered from top to bottom_.

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/02/14/tree.jpg)

```
Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]
```

**Example 2:**

```
Input: root = [1,null,3]
Output: [1,3]
```

**Example 3:**

```
Input: root = []
Output: []
```

**Constraints:**

* The number of nodes in the tree is in the range `[0, 100]`.
* `-100 <= Node.val <= 100`

## Approach 1: DFS
Maintain an ArrayList.
TRAVERSAL -> ROOT ->RIGHT -> LEFT This is the way traversal is done in array so that rightmost node at i level is visited first.
When at i level, check in array/vector, if there is an element already present at indexi in the array.
[ index represents the level in tree ]->[element at index i is rightmost node at level i]
If at that level, element is present,, just continue the traversal.
Else if no element is present at index i -> add that node to answer [res] at the i index.
<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@ganajayant"/>

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
    public List<Integer> rightSideView(TreeNode root) {
        ArrayList<Integer> a = new ArrayList<Integer>();
        traverse(root, a, 0);
        return a;
    }

    private void traverse(TreeNode root, ArrayList<Integer> a, int c) {
        if (root == null) {
            return;
        }
        if (c == a.size()) {
            a.add(root.val);
        }
        traverse(root.right, a, c + 1);
        traverse(root.left, a, c + 1);
    }
}
```
</TabItem>
</Tabs>
