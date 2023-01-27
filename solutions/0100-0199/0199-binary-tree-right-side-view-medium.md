---
description: 'Author: @ganajayant, @ColeB2 | https://leetcode.com/problems/binary-tree-right-side-view/'
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


<TabItem value="py" label="Python">
<SolutionAuthor name="@kondekarshubham123"/>

```py

"""

binary-tree-right-side-view

    3       <-  3
   / \
  9   20    <-  20
     /  \
    15   7  <-  7

Output: [3, 20, 7]
"""
class TreeNode:
    def __init__(
        self, val: int = 0, left: TreeNode | None = None, right: TreeNode | None = None
    ) -> None:
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        def dfs(root: Optional[TreeNode], depth, right_view):
            if not root:
                return

            if depth == len(right_view):
                right_view.append(root.val)

            dfs(root.right, depth + 1, right_view)
            dfs(root.left, depth + 1, right_view)

        right_view: list = []
        if not root:
            return right_view
        dfs(root, 0, right_view)
        return right_view

```

</TabItem>
</Tabs>


## Approach 2: Breadth-First Search

A level order traversal, selecting the far right node in each level makes a lot of sense. We can perform a level order traversal using a queue and performing a breadth-first search.

A [level order traversal](https://leetcodethehardway.com/solutions/0100-0199/binary-tree-level-order-traversal-medium) can be started by placing the root into the queue. Then for each iteration, we can loop over the length of the queue, $$n$$. By looping over $$n$$ it means we only ever loop over the current level, meaning we can add nodes to the queue, and will never reach them as our for loop will stop, maintaining a perfect level order traversal.

We can place the nodes from left to right, or right to left. If we place nodes right first, then left. Then on each iteration, our rightmost node will be first in the queue. If we place them left to right, then on each iteration the rightmost node will be last in our queue.

Time Complexity: $$O(n)$$ we have to process each node once. If we only tried to process the right node, and skip nodes when the rightmost node exists, we would be skipping nodes in the left subtree in the cases where the right subtree is shorter in height than the left subtree.

Space Complexity: $$O(n)$$. In the worst case, that is a full binary tree, the last level of our traversal will fill our queue with $$n/2$$ nodes, leading us to a $$O(n)$$ space complexity.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        # Base case for early termination.
        if not root:
            return []
        # Initialize our queue with the root node inside.
        q = deque([root])
        # initialize an empty list to return later.
        right_view = []
        # while the queue contains nodes.
        while q:
            # Since we are placing nodes inside the queue from right to left
            # it means the first node will always be rightmost node.
            # Note we could do it left to right, then the rightmost will always
            # be the last node in the queue at position [-1]
            right_view.append(q[0].val)
            # loop through each node in the current level. By looping over len(q)
            # it allows us to add children nodes, whilst also only processing
            # the nodes in the current level.
            for i in range(len(q)):
                # pop the node.
                node = q.popleft()
                # if node has a right child, add it to the queue.
                if node.right:
                    q.append(node.right)
                # if node has a left child, add it to the queue.
                if node.left:
                    q.append(node.left)
        # return our answer.
        return right_view
```
</TabItem>
</Tabs>