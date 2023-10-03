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

## Example : [0547 - Number of Provinces](https://leetcode.com/problems/number-of-provinces/)
>There are $$n$$ cities. Some of them are connected, while some are not. If city a is connected directly with city $$b$$, and city $$b$$ is connected directly with city $$c$$, then city $$a$$ is connected indirectly with city $$c$$.  
>A province is a group of directly or indirectly connected cities and no other cities outside of the group.  
>You are given an $$n$$ x $$n$$ matrix isConnected where $$isConnected[i][j] = 1$$ if the ith city and the jth city are directly connected, and $$isConnected[i][j] = 0$$ otherwise.  

>Return the total number of provinces.

In this problem, a province is basically a connected component, so we just have to find the number of connected components here.  
Since the graph is given in form of adjacency matrix, we will first convert it to adjacency list.  
Then we will use the connected component code template to find number of provinces.  

## Solution
<Tabs>

<TabItem value="cpp" label="C++">
<SolutionAuthor name="@Mr-ram99"/>

```cpp
int findCircleNum(vector<vector<int>>& isConnected) {
      vector<vector<int>> adj_list(isConnected.size());
      for(int i=0;i<isConnected.size();i++){
          for(int j=0;j<isConnected[i].size();j++){
              if(isConnected[i][j]==1){
                  adj_list[i].push_back(j);
              }
          }
      }
      return connectedComponents(isConnected.size(), adj_list);
  }
  void dfs(int node, vector<vector<int>> &adj_list, vector<bool> &visited){  
      visited[node]=true;
      for(int x: adj_list[node]){
          if(!visited[x]){
              dfs(x, adj_list, visited);
          }
      }
  }
  int connectedComponents(int V, vector<vector<int>> &adj_list){
      vector<bool> visited(V,false);  
      int count = 0;                   
      for(int i=0;i<V;i++){
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

export const suggestedProblems = [
  {
    "problemName": "1319 - Number of Operations to Make Network Connected",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/number-of-operations-to-make-network-connected/",
    "solutionLink": ""
  },
  {
    "problemName": "2316 - Count Unreachable Pairs of Nodes in an Undirected Graph",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/",
    "solutionLink": ""
  },
  
]

<Table title="Suggested Problems" data={suggestedProblems} />
