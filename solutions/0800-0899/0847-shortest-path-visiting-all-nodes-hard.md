---
description: 'Author: @TBC | https://leetcode.com/problems/shortest-path-visiting-all-nodes/'
---

# 0847 - Shortest Path Visiting All Nodes (Hard)

## Problem Statement

You have an undirected, connected graph of `n` nodes labeled from `0` to `n - 1`. You are given an array `graph` where `graph[i]` is a list of all the nodes connected with node `i` by an edge.

Return _the length of the shortest path that visits every node_. You may start and stop at any node, you may revisit nodes multiple times, and you may reuse edges.

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/05/12/shortest1-graph.jpg)

```
Input: graph = [[1,2,3],[0],[0],[0]]
Output: 4
Explanation: One possible path is [1,0,2,0,3]
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2021/05/12/shortest2-graph.jpg)

```
Input: graph = [[1],[0,2,4],[1,3,4],[2],[1,2]]
Output: 4
Explanation: One possible path is [0,1,4,2,3]
```

**Constraints:**

* `n == graph.length`
* `1 <= n <= 12`
* `0 <= graph[i].length < n`
* `graph[i]` does not contain `i`.
* If `graph[a]` contains `b`, then `graph[b]` contains `a`.
* The input graph is always connected.

## Approach 1: BFS

There are two key observations in this question

* We can use a bitmask to represent visited nodes as there are at most 12 nodes
* We should use BFS as we want to find the shortest path that visits all nodes

We then need to figure out how to keep track of duplication. We can simply store the (currentNode, visitedBitMask) tuple in a set to prevent duplication.&#x20;

We can start at any node in the graph initially, and we should update the bitmask accordingly.&#x20;

```python
def shortestPathLength(self, graph: List[List[int]]) -> int:
        
        #a visited set to prevent duplication
        visited = set()
        
        #number of nodes in the graph
        n = len(graph)
        
        #we want to visit all nodes (1111...1111)
        target = (1 << n) - 1
        
        #a level set to keep the states at the current depth
        level = set()
        
        #we can start at any node initially
        for i in range(n):
            level.add((i, 1 << i))
        
        #keep track of the distance of the path
        depth = 0
        
        while(level):
            
            #store the states in the next level
            new_level = set()
            
            for node, mask in level:
    
                #continue if state is visited before
                if (node,mask) in visited:
                    continue
                
                #return depth if all nodes have been visited
                if(mask == target):
                    return depth
                
                #add the current state to visited
                visited.add((node,mask))
                
                #add the visiting neighbour state to the next level
                for neighbour in graph[node]:
                    new_level.add((neighbour, mask | (1 << neighbour)))
            
            #go to the next level
            level = new_level
            
            #increase distance by 1
            depth += 1
        
        #should never reach here
        return -1
```
