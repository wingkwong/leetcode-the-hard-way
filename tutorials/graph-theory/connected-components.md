---
title: "Connected Components"
description: "Finding number of connected components in an undirected graph using DFS algorithm"
hide_table_of_contents: true
keywords:
  - leetcode
  - tutorial
  - connected
  - components
  - dfs
  - algorithm
---

<TutorialAuthors names="@Mr-ram99"/>

## Overview

A connected component is a subgraph of a graph in which every pair of nodes(vertices) is connected by a path.There is no path between nodes of different connected components. A graph may contain **1 or more** connected components.

In this tutorial we will use **Depth-First-Search(DFS)** algorithm to find number of connected components in a graph.

## Implementation

> Create a boolean array or set to keep track of visited nodes. Initially, all nodes are marked as unvisited.  
> Initialize a counter to keep track of the number of connected components. This starts at 0.  
> Start by selecting any node in the graph as the starting point. We'll explore the entire connected component containing this node.  
> Mark the current node as visited and explore all unvisited neighbors of the current node recursively by calling the DFS function on them.  
> After completing a connected component (when DFS returns), increment the connected component counter by 1.  
> Repeat from step 4, for the next unvisited node untill all nodes have been visited.  

<Tabs>

<TabItem value="cpp" label="C++">
<SolutionAuthor name="@Mr-ram99"/>

```cpp
// dfs to mark the entire connected component as visited
void dfs(int node, vector<vector<int>> &adj_list, vector<bool> &visited){  
    visited[node]=true;
    for(int x: adj_list[node]){
        if(!visited[x]){
            dfs(x, adj_list, visited);
        }
    }
}
// function to count connected component
// V represent the number of vertices
// adj_list represents adjacency list of the graph 
int connectedComponents(int V, vector<vector<int>> &adj_list){
    // boolean array to keep track of visited nodes
    vector<bool> visited(V,false);  
    // count of connected components
    int count = 0;                   
    // we will start with 0 and explore all unvisited nodes
    for(int i=0;i<V;i++){
    	// if node is not visited, then mark visited entire connected component containing this node and increment counter
        if(!visited[i]){       
            dfs(i, adj_list, visited);
            count++;
        }
    }
    return count;
}
```
</TabItem>
</Tabs>

### Time Complexity
$$O(V+E)$$

### Space Complexity
$$O(V)$$

export const suggestedProblems = [
  {
    "problemName": "0547 - Number of Provinces",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/number-of-provinces/",
    "solutionLink": ""
  },
  {
    "problemName": "2101 - Detonate the Maximum Bombs",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/detonate-the-maximum-bombs/",
    "solutionLink": ""
  },
]

<Table title="Suggested Problems" data={suggestedProblems} />
