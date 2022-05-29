---
title: 'Depth First Search (DFS)'
description: 'In DFS, we aim to finish one branch before looking at other branches.'
hide_table_of_contents: true
keywords:
  - leetcode
  - tutorial
  - depth first search
  - dfs
  - algorithm
---

import Authors from '@site/src/components/Authors';

<Authors names="@heiheihang"/>

In Depth-First Search (DFS), we aim to finish one branch before looking at other branches.

A good example of DFS is the following problem ([LeetCode Link](https://leetcode.com/problems/maximum-depth-of-binary-tree/)):

> Given the `root` of a binary tree, return _its maximum depth_.
>
> A binary tree's **maximum depth** is the number of nodes along the longest path from the root node down to the farthest leaf node.

We want to know how **far** we can travel from the root, so we try one path at a time. (Of course, this problem can be solved by Breadth-First-Search , but DFS is more intuitive)

DFS can be implemented in the following way

```python
def dfs(node):
    if(node == None):
        # we stop when node is invalid
        return
        
    # explore left branch first
    dfs(node.left)
    
    # evalute current node
    print("I just visited the left branch!")
    print("I am number: " + str(node.val))
    print("I am visiting the right branch now!")
    
    # explore right branch
    dfs(node.right)
```

With this template of DFS, we can modify the function above to obtain the depth of each branch

```python
def findMaximumDepth(root):

    def dfs(node):
        if(node == None):
            # we stop when node is invalid
            return 0
            
        # explore left branch first
        left_branch_depth = dfs(node.left)
        
        print("I just visited the left branch!")
        print("I am visiting the right branch now!")
        
        # explore right branch
        right_branch_depth = dfs(node.right)
        
        # return the larger depth of the two branches
        return max(left_branch_depth, right_branch_depth) + 1
    
    return dfs(root)
```

There we go! This is a simple DFS problem. We are going to work through a few more DFS problems together.

Let's look at another problem ([LeetCode Link](https://leetcode.com/problems/diameter-of-binary-tree/))

> Given the `root` of a binary tree, return _the length of the **diameter** of the tree_.
>
> The **diameter** of a binary tree is the **length** of the longest path between any two nodes in a tree. This path may or may not pass through the `root`.
>
> The **length** of a path between two nodes is represented by the number of edges between them.

This problem may seem difficult at first glance. However it is just a minor tweak from the previous problem. The longest path between two nodes would be the sum of the maximum depth of the left branch and that of the right branch. Modify the code above before you look at the solution below.

```python
def findTreeDiameter(root):
    diameter = 0

    def dfs(node):
        if(node == None):
            # we stop when node is invalid
            return 0
            
        # explore left branch first
        left_branch_depth = dfs(node.left)
        
        print("I just visited the left branch!")
        print("I am visiting the right branch now!")
        
        # explore right branch
        right_branch_depth = dfs(node.right)
        
        #the longest path at the current node is the maximum depth of left and right
        local_diameter = left_brach_depth + right_branch_depth + 1
        
        #update the global variable
        nonlocal diameter
        diameter = max(diameter, local_diameter)
        
        # return the larger depth of the two branches
        return max(left_branch_depth, right_branch_depth) + 1
    
    dfs(root)
    
    return diameter
```

Here are some similar problems in which you can tweak the template above to obtain a solution:

* Sum of Left Leaves ([LeetCode Link](https://leetcode.com/problems/sum-of-left-leaves/)) (Guide)
* Balanced Binary Tree ([LeetCode Link](https://leetcode.com/problems/balanced-binary-tree/)) (Guide)
* Maximum Depth of N-ary Tree ([LeetCode Link](https://leetcode.com/problems/maximum-depth-of-n-ary-tree/)) (Guide)
