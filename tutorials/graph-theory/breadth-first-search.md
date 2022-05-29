---
title: 'Breadth First Search (BFS)'
description: 'In BFS, we explore all the closest nodes first before going one step further.'
hide_table_of_contents: true
keywords:
  - leetcode
  - tutorial
  - breadth first search
  - bfs
  - algorithm
---

> This tutorial is written by @heiheihang

In Breadth-First Search (BFS), we explore **all** the closest nodes first before going one step further. A good example would be:

> Given a binary tree, find the **closest node** from **root** that has the **value 3**

Of course, you may use DFS to find the solution by iterating all nodes. However, as you can imagine, if the target node is the right child of the root, we have wasted so much time iterating the entire left branch of the root!

BFS would immediately locate the closest target node without wasting time iterating deeper nodes.

We will introduce the following template for BFS:

```python
def findTargetNode(root, targetValue):
    if(root is None):
        return None
    
    #currentLevel contains the nodes with the same distance to root (closest so far)
    currentLevel = [root]
    
    #we increase our depth one by one as long as there is still node
    while(len(level) > 0):
    
        #we store the current level node's children in nextLevel
        nextLevel = []
        
        for node in currentLevel:
            #skip if the node is None
            if(node is None):
                continue
            #we can be sure the target node is the CLOSEST so we can return
            #because we are traversing the tree level by level
            if(node.val == targetValue):
                return node
                
            #add the children to nextLevel
            nextLevel.append(node.left)
            nextLevel.append(node.right)
        #change the currentLevel to nextLevel (no target node in this level, go next)
        currentLevel = nextLevel
    
    #if no target node has been returned    
    return None
    
    
```

In general, we use a **queue** to model **BFS.** As the head of the queue represents the closest nodes, and the tail of the queue represents the furthest nodes. We look at the head of the queue, and add new nodes to the end of the queue.

We can start applying this template to the following problem ([LeetCode Link](https://leetcode.com/problems/average-of-levels-in-binary-tree/)).

> Given the `root` of a binary tree, return _the average value of the nodes on each level in the form of an array_. Answers within `10-5` of the actual answer will be accepted.

In this problem, our primary goal is to separate the tree into different levels. For example, we have these following levels:

1. `[1]`
2. `[2,3]`
3. `[4, _, 3, 5]`

When we can separate the tree into different levels, we are just one step before obtaining the solution (which is just getting the averages of each list)

The challenge here is how can we separate the tree into different levels. We can use the template above with `currentLevel` and `nextLevel`.

```python
def findAverageOfLevels(root):

    answer = []
    
    #saves the nodes in the currentLevel
    currentLevel = [root]
    
    #continue traversing as long as there is still unexplored nodes
    while(len(level) > 0):
    
        #stores the children of the nodes in the currentLevel
        nextLevel = []
        
        #stores the total sum of the currentLevel nodes
        currentLevelSum = 0
        for node in currentLevel:
            if(node is None):
                continue
            currentLevelSum += node.val
            nextLevel.append(node.left)
            nextLevel.append(node.right)
        
        #calculate the level average
        currentLevelNodeCount = len(currentLevel)
        currentLevelAverage = currentLevelSum / currentLevelNodeCount
        answer.append(currnetLevelAverage)
        
        #explore the nextLevel
        currentLevel = nextLevel
    return answer
```

We should keep practising the this template of BFS in these similar problems:

* Binary Tree Right Side View ([LeetCode Link](https://leetcode.com/problems/binary-tree-right-side-view/)) (Guide)
* Binary Tree Zigzag Level Order Traversal ([LeetCode Link](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/)) (Guide)
* Symmetric Tree ([LeetCode Link](https://leetcode.com/problems/symmetric-tree/)) (Guide)
