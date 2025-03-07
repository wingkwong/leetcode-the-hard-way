---
description: 'Author: @wkw, @ganajayant, @vigneshshiv, @radojicic23 | https://leetcode.com/problems/binary-tree-postorder-traversal/'
tags: [Stack, Tree, Depth-First Search, Binary Tree]
---

# 0145 - Binary Tree Postorder Traversal (Easy)

## Problem Link

https://leetcode.com/problems/binary-tree-postorder-traversal/

## Problem Statement

Given the `root` of a binary tree, return _the postorder traversal of its nodes' values_.

**Example 1:**

```
Input: root = [1,null,2,3]
Output: [3,2,1]
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

- The number of the nodes in the tree is in the range `[0, 100]`.
- `-100 <= Node.val <= 100`

**Follow up:** Recursive solution is trivial, could you do it iteratively?

## Approach 1: DFS - Post-order traversal

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

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

// This is a standard post-order traversal problem, I'd suggest to learn in-order and pre-order as well.
// Here's a short tutorial if you're interested.
// https://wingkwong.github.io/leetcode-the-hard-way/tutorials/graph-theory/binary-tree
// then you may try the following problems
// 94. Binary Tree Inorder Traversal: https://leetcode.com/problems/binary-tree-inorder-traversal/
// 144. Binary Tree Postorder Traversal: https://leetcode.com/problems/binary-tree-preorder-traversal/

class Solution {
public:
    vector<int> ans;
    void postoder(TreeNode* node) {
        if (node == NULL) return;
        postoder(node->left);
        // traverse the left node
        postoder(node->right);
        // traverse the right node
        ans.push_back(node->val);
        // do something with node value here
    }

    vector<int> postorderTraversal(TreeNode* root) {
        postoder(root);
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

# This is a standard post-order traversal problem, I'd suggest to learn in-order and pre-order as well.
# Here's a short tutorial if you're interested.
# https://wingkwong.github.io/leetcode-the-hard-way/tutorials/graph-theory/binary-tree
# then you may try the following problems
# 94. Binary Tree Inorder Traversal: https://leetcode.com/problems/binary-tree-inorder-traversal/
# 144. Binary Tree Postorder Traversal: https://leetcode.com/problems/binary-tree-preorder-traversal/

class Solution:
    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
		# root -> left  -> right
        return self.preorderTraversal(root.left) + self.preorderTraversal(root.right) + [root.val] if root else []
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
    public static List<Integer> postorder(TreeNode root, List<Integer> ll) {
        if (root == null) {
            return ll;
        }
        ll.add(root.val);
        postorder(root.left, ll);
        postorder(root.right, ll);
        return ll;
    }
   public static List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> ll = new LinkedList<Integer>();
        ll = postorder(root, ll);
        return ll;
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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  let ans = [];
  function dfs(node) {
    if (!node) return;
    dfs(node.left);
    dfs(node.right);
    ans.push(node.val);
  }
  dfs(root);
  return ans;
};
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
// Time complexity: O(n), where n - # of nodes in tree
// Space complexity: O(n)
class Solution {
    /**
     * Sample binary tree
     *
     *    1
     *   / \
     *  2   3
     *
     */
    public List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> result = new LinkedList<>();
        Stack<TreeNode> stack = new Stack<>();
        // Reference for last visited right node, for when parent is on top of the stack
        TreeNode last = null;
        while (root != null || !stack.isEmpty()) {
            // Keep pushing left nodes, all the way down onto stack
            if (root != null) {
                stack.push(root);
                root = root.left;
            } else {
                TreeNode node = stack.peek();
                // When Parent is on top stack, it checks with right node which has a refence in last variable
                // If both are same, it will not add repeated reference onto stack
                // Pops out stack top, i.e parent node, and level up higher for other nodes.
                if (node.right != null && node.right != last) {
                    root = node.right;
                } else {
                    // If any of the right node is empty, the block executes and add value from top of stack
                    result.add(node.val);
                    // Pops out stock top
                    last = stack.pop();
                }
            }
        }
        return result;
    }
}
```

</TabItem>
</Tabs>
