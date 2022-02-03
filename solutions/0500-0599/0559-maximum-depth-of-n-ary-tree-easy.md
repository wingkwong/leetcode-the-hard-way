---
description: >-
  Author: heiheihang |
  https://leetcode.com/problems/maximum-depth-of-n-ary-tree/
---

# 0559 - Maximum Depth of N-ary Tree (Easy)

## Statement

Given a n-ary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

_Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples)._

**Example 1:**

![](https://assets.leetcode.com/uploads/2018/10/12/narytreeexample.png)

```
Input: root = [1,null,3,2,4,null,5,6]
Output: 3
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2019/11/08/sample\_4\_964.png)

```
Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
Output: 5
```

**Constraints:**

* The total number of nodes is in the range `[0, 10^4]`.
* The depth of the n-ary tree is less than or equal to `1000`.

## Approach 1: DFS

We should use the DFS template from [DFS Guide](../../tutorials/graph-theory/depth-first-search.md). Instead of looking at the left and right child, we look at all children in an _n-ary tree._ We find the deepest child and set it to the current `largestDepth`, then we add one for counting the depth of the current level.&#x20;

_Note: A **binary tree** means each node at most has **2 children** (binary means 2). An **n-ary** tree means each node at most has **n children**_

```python
def maxDepth(self, root: 'Node') -> int:
        
        def dfs(node):
            #there is a possibility the root is None
            if(node is None):
                return 0
                
            #initialize the largest depth
            largestDepth = 0
            
            #iterate each child, and update the largest depth if appropriate
            for child in node.children:
                largestDepth = max(largestDepth, dfs(child))
            
            #don't forget to add the current level height!    
            return largestDepth + 1
        
        #we start iterating from the root
        return dfs(root)
```
