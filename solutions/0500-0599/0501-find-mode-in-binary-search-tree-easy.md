---
description: 'Author: @wingkwong | https://leetcode.com/problems/find-mode-in-binary-search-tree/'
tags: [Tree, Depth-First Search, Binary Search Tree, Binary Tree]
---

# 0501 - Find Mode in Binary Search Tree (Easy) 

## Problem Link

https://leetcode.com/problems/find-mode-in-binary-search-tree/

## Problem Statement

Given the `root` of a binary search tree (BST) with duplicates, return *all the mode(s) (i.e., the most frequently occurred element) in it*.

If the tree has more than one mode, return them in **any order**.

Assume a BST is defined as follows:

- The left subtree of a node contains only nodes with keys **less than or equal to** the node's key.
- The right subtree of a node contains only nodes with keys **greater than or equal to** the node's key.
- Both the left and right subtrees must also be binary search trees.

**Example 1:**

```
Input: root = [1,null,2,2]
Output: [2]
```

**Example 2:**

```
Input: root = [0]
Output: [0]
```

**Constraints:**

- The number of nodes in the tree is in the range `[1, 10 ^ 4]`.
- `-10 ^ 5 <= Node.val <= 10 ^ 5`

**Follow up:** Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).

## Approach 1: DFS + Counting

We can perform DFS to traverse the tree to get each node value and store in a HashMap. After that, we know the frequencies for each node value and we can find the maximum one and build the final result.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

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
    unordered_map<int, int> m;
    void dfs(TreeNode* root) {
        // base case
        if (!root) return;
        // increase the frequency of root->val by 1
        m[root->val] += 1;
        // traverse the left tree
        dfs(root->left);
        // traverse the right tree
        dfs(root->right);
    }
    vector<int> findMode(TreeNode* root) {
        vector<int> ans;
        // traverse the tree
        dfs(root);
        // find the maximum frequency
        int mx = 0;
        for (auto &x : m) mx = max(mx, x.second);
        // build the final answer
        for (auto &x : m) if (x.second == mx) ans.push_back(x.first);
        return ans;
    }
};
```

</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

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
    public int[] findMode(TreeNode root) {
        Map<Integer, Integer> frequency = new HashMap<>();
        findModeRecursive(root, frequency);
        // Leetcode compilation issue for Optional class, so used java.util package directly here
        java.util.Optional<Integer> max = frequency.values().stream().max(Integer::compare);
        return max.isPresent() 
            ? frequency.entrySet().stream()
                .filter(entry -> entry.getValue() == max.get())
                .mapToInt(Map.Entry::getKey)
                .toArray() 
            : null;
    }

    private void findModeRecursive(TreeNode node, Map<Integer, Integer> frequency) {
        if (node == null) return;
        // Count the frequency
        frequency.put(node.val, frequency.getOrDefault(node.val, 0) + 1);
        findModeRecursive(node.left, frequency);
        findModeRecursive(node.right, frequency);
    }
}
```

</TabItem>
</Tabs>

## Approach 2: DFS Iterative

We can perform DFS Iterative to traverse the tree to get each node value and store in a HashMap. After that, we know the frequencies for each node value and we can find the maximum one and build the final result.

Both DFS Recursive and Iterative approach follows In-Order Traversal techniques.

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

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
    public int[] findMode(TreeNode root) {
        Map<Integer, Integer> frequency = new HashMap<>();
        Stack<TreeNode> stack = new Stack<>();
        while (root != null || !stack.isEmpty()) {
            if (root != null) {
                stack.push(root);
                root = root.left;
            } else {
                int key = stack.peek().val;
                frequency.put(key, frequency.getOrDefault(key, 0) + 1);
                root = stack.pop().right;
            }
        }
        // Leetcode compilation issue for Optional class, so used java.util package directly here
        java.util.Optional<Integer> max = frequency.values().stream().max(Integer::compare);
        return max.isPresent() 
            ? frequency.entrySet().stream()
                .filter(entry -> entry.getValue() == max.get())
                .mapToInt(Map.Entry::getKey)
                .toArray()
            : null;
    }
}
```

</TabItem>
</Tabs>

## Approach 3: Breadth First Search (BFS)

We can perform BFS to traverse the tree to get each node value and store in a HashMap. After that, we know the frequencies for each node value and we can find the maximum one and build the final result.

Since BFS approach follows Pre-Order Traversal so Queue is used to handle First-In, First-Out (FIFO) technique.

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

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
    public int[] findMode(TreeNode root) {
        Map<Integer, Integer> frequency = new HashMap<>();
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        while (!queue.isEmpty()) {
            TreeNode node = queue.poll();
            frequency.put(node.val, frequency.getOrDefault(node.val, 0) + 1);
            if (node.left != null) {
                queue.offer(node.left);
            }
            if (node.right != null) {
                queue.offer(node.right);
            }
        }
        // Leetcode compilation issue for Optional class, so used java.util package directly here
        java.util.Optional<Integer> max = frequency.values().stream().max(Integer::compare);
        return max.isPresent() 
            ? frequency.entrySet().stream()
                .filter(entry -> entry.getValue() == max.get())
                .mapToInt(Map.Entry::getKey)
                .toArray()
            : null;
    }
}
```

</TabItem>
</Tabs>