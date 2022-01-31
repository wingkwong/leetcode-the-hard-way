# Depth First Search

In Depth-First Search (DFS), we aim to finish one branch before looking at other branches.

A good example of DFS is the following problem:

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
```

There we go! This is a simple DFS problem. We are going to work through a few more DFS problems together.
