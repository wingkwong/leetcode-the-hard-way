---
description: 'Author: @wingkwong, @ganajayant, @vigneshshiv, @radojicic23 | https://leetcode.com/problems/binary-tree-inorder-traversal/'
tags: [Stack, Tree, Depth-First Search, Binary Tree]
---

# 0094 - Binary Tree Inorder Traversal (Easy)

## Problem Statement

Given the `root` of a binary tree, return *the inorder traversal of its nodes' values*.

**Example 1:**

```
Input: root = [1,null,2,3]
Output: [1,3,2]
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

## Approach 1: Inorder Traversal

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

// This is a standard in-order traversal problem, I'd suggest to learn pre-order and post-order as well.
// Here's a short tutorial if you're interested.
// https://wingkwong.github.io/leetcode-the-hard-way/tutorials/graph-theory/binary-tree
// then you may try the following problems 
// 144. Binary Tree Preorder Traversal: https://leetcode.com/problems/binary-tree-preorder-traversal/
// 145. Binary Tree Postorder Traversal: https://leetcode.com/problems/binary-tree-postorder-traversal/

class Solution {
public:
    vector<int> ans;
    void inorder(TreeNode* node) {
        if (node == NULL) return;
        // traverse the left node
        inorder(node->left);
        // do something with node value here
        ans.push_back(node->val);
        // traverse the right node
        inorder(node->right);
    }
    
    vector<int> inorderTraversal(TreeNode* root) {
        inorder(root);
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

class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
		# left -> root -> right
        return self.inorderTraversal(root.left) + [root.val] + self.inorderTraversal(root.right) if root else []
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
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        inorder(root, result);
        return result;
    }
    private void inorder(TreeNode node, List<Integer> result){
        if (node == null) {
            return;
        }
        inorder(node.left, result);
        result.add(node.val);
        inorder(node.right, result);
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
var inorderTraversal = function(root) {
    let res = [];
    function inorder(root) {
        if (!root) {
            return;
        }
        inorder(root.left);
        res.push(root.val);
        inorder(root.right);
    }
    inorder(root);
    return res;
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
// Time complexity: O(n), where n - # of nodes in the tree
// Space complexity: O(n)
class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> result = new LinkedList<>();
        Stack<TreeNode> stack = new Stack<>();
        while (root != null || !stack.isEmpty()) {
            // Keep traversing to left and add it to stack till last
            if (root != null) {
                stack.push(root);
                root = root.left;
            } else {
                //   1
                //  / \
                // 2   3
                // All left tree traversed and currently root is NULL 
                // 2 is added to result, Stack is only having 1
                // If current node is 2, and it's popped out, 2's right is assigned to root which is NULL
                // So in the next iteration root still be NULL. 
                // Stack top value 1 added to result and 1 popped out and 1's right 3 assigned to root. 
                result.add(stack.peek().val);
                root = stack.pop().right;
            }
        }
        return result;
    }
}
```
</TabItem>

<TabItem value="python" label="Python">
<SolutionAuthor name="@radojicic23"/>

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        stack = []
        res = []
        curr = root
        
        # If either of these are not empty
        while curr or stack:
            # If our current node is not None
            while curr:
                # Add it to the stack
                stack.append(curr)
                # Move down to the left and 
                # keep doing it as long as it's possible
                curr = curr.left
            
            curr = stack.pop()
            res.append(curr.val)
            # Shift to the right
            curr = curr.right
        
        return res 
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
var inorderTraversal = function(root) {
    let stack = [];
    let res = [];
    while (root || stack.length) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        res.push(root.val);
        root = root.right;
    }
    return res;
};
```

</TabItem>
</Tabs>
