---
description: 'Author: @wingkwong, @ganajayant, @vigneshshiv | https://leetcode.com/problems/binary-tree-preorder-traversal/'
tags: [Stack, Tree, Depth-First Search, Binary Tree]
---

# 0144 - Binary Tree Preorder Traversal (Easy)

## Problem Statement

Given the `root` of a binary tree, return *the preorder traversal of its nodes' values*.

**Example 1:**

```
Input: root = [1,null,2,3]
Output: [1,2,3]
```

**Example 2:**

```
Input: root = []
Output: []
```

**Example 3:**

```
Input: root = [1]
Output: [1]
```

**Constraints:**

- The number of nodes in the tree is in the range `[0, 100]`.
- `-100 <= Node.val <= 100`

**Follow up:** Recursive solution is trivial, could you do it iteratively?

## Approach 1: DFS - Pre-order traversal

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

// Time Complexity: O(N)
// Space Complexity: O(N)

// This is a standard pre-order traversal problem, I'd suggest to learn in-order and post-order as well.
// Here's a short tutorial if you're interested.
// https://wingkwong.github.io/leetcode-the-hard-way/tutorials/graph-theory/binary-tree
// then you may try the following problems 
// 94. Binary Tree Inorder Traversal: https://leetcode.com/problems/binary-tree-inorder-traversal/
// 145. Binary Tree Postorder Traversal: https://leetcode.com/problems/binary-tree-postorder-traversal/

class Solution {
public:
    vector<int> ans;
    void preorder(TreeNode* node) {
        if (node == NULL) return;
        // do something with node value here
        ans.push_back(node->val);
        // traverse the left node
        preorder(node->left);
        // traverse the right node
        preorder(node->right);
    }
    
    vector<int> preorderTraversal(TreeNode* root) {
        preorder(root);
        return ans;
    }
};
```
</TabItem>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wingkwong"/>

```py
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# This is a standard pre-order traversal problem, I'd suggest to learn in-order and post-order as well.
# Here's a short tutorial if you're interested.
# https://wingkwong.github.io/leetcode-the-hard-way/tutorials/graph-theory/binary-tree
# then you may try the following problems 
# 94. Binary Tree Inorder Traversal: https://leetcode.com/problems/binary-tree-inorder-traversal/
# 145. Binary Tree Postorder Traversal: https://leetcode.com/problems/binary-tree-postorder-traversal/

class Solution:
    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
		# root -> left  -> right
        return [root.val] + self.preorderTraversal(root.left) + self.preorderTraversal(root.right) if root else []
```
</TabItem>
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
    public static List<Integer> preorder(TreeNode root, List<Integer> ll) {
        if (root == null) {
            return ll;
        }
        ll.add(root.val);
        preorder(root.left, ll);
        preorder(root.right, ll);
        return ll;
    }
   public static List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> ll = new LinkedList<Integer>();
        ll = preorder(root, ll);
        return ll;
    }
}
```
</TabItem>
</Tabs>

## Approach 2: Iterative

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
// Time complexity: O(n), where n - # of nodes in the tree
// Space complexity: O(n)
class Solution {
    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> result = new LinkedList<>();
        Stack<TreeNode> stack = new Stack<>();
        while (root != null) {
            // Keeping add top and left node values, while keep traversing left
            result.add(root.val);
            // If Root has right subtree, add it to stack
            if (root.right != null) {
                stack.push(root.right);
            }
            //   1
            //  / \
            // 2   3
            // If 1 & 2 is added to result, Stack is only having 3
            // If current node is 2, the 2's left is null, 
            // So Pops out stack top, i.e, current node's (2's) parent (1) right subtree
            root = root.left;
            if (root == null && !stack.isEmpty()) {
                root = stack.pop();
            }
        }
        return result;
    }
}
```
</TabItem>
</Tabs>