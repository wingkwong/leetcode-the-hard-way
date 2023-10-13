---
title: "Connected Components"
description: "Finding number of connected components in an undirected graph using DFS algorithm"
hide_table_of_contents: true
keywords:
  - leetcode
  - tutorial
  - connected
  - components
  - DFS
  - algorithm
---

<TutorialAuthors names="@Mr-ram99"/>

## Overview

Graphs are a fundamental concept in computer science and mathematics, used to model relationships and connections between various entities. One important concept within the realm of graphs is that of **connected components**.  

Connected components help us understand the structure of a graph by grouping nodes (vertices) that are connected to each other. In simple terms, a connected component is a set of nodes within a graph in which each node is reachable from any other node in the same set through a path of edges.  

In this article, we will define what they are, offer examples to illustrate the concept, and then walk you through a step-by-step approach to finding the number of connected components in a given graph using **Depth-First Search (DFS)**.  

## Definition

A connected component in a graph is a subgraph in which any two vertices are connected to each other by a path, and this subgraph is not connected to any additional vertices in the graph. In other words, if you start at any node within a connected component, you can reach any other node in the same component by following edges.

Let's have a look at an example for better understanding.

![connected-component-image-1](https://user-images.githubusercontent.com/81464998/272657946-b3648f98-985e-472e-813e-11ab392eed37.png) 

In this graph, we have two connected components:
1. Component 1: $${0, 1}$$  
2. Component 2: $${2, 3, 4}$$

In case of a connected graph, there is only $$1$$ component i.e,  
![connected-component-image-2](https://user-images.githubusercontent.com/81464998/272663877-50416b5e-47d9-4890-9d49-c51d5a1ac5be.png)

In this graph, we have only $$1$$ connected component that is consisted of all the nodes.

## Finding Number of Connected Components using DFS

DFS is particularly effective in exploring connected regions within a graph. It starts from a source node and explores as far as possible along each branch before backtracking. This behavior is ideal for identifying and grouping nodes into connected components.  
DFS traverses a single path as deeply as possible before backtracking. When applied to a connected component, it ensures that all nodes within that component are visited before moving on to the next. This property makes it well-suited for detecting connected components.  

Here's the step-by-step approach:
1. Create a vector or set to keep track of visited nodes.
2. Initialize a variable to count the number of connected components (start at 0).
3. Start iterating through all nodes in the graph.
4. For each unvisited node, perform a DFS traversal to explore all reachable nodes.
5. While traversing, mark visited nodes to avoid revisiting them.
6. After the DFS traversal is complete for a set of nodes, increment the component count by 1.
7. Repeat steps $$4$$ to $$6$$  process until you've visited all nodes.
8. The final count of connected components is the answer.

Let's go through an example step-by-step for better understanding.  
![graph-1](https://user-images.githubusercontent.com/81464998/272657946-b3648f98-985e-472e-813e-11ab392eed37.png)  
>visited array = $$[0,0,0,0,0]$$, count = $$0$$  
>NOTE: In visited array $$0$$ represent false and $$1$$ represent true.  

First unvisited node is 0, So we will start with vertex $$0$$ and call DFS from vertex $$0$$ to visit all reachable nodes from vertex $$0$$  
![graph-2](https://user-images.githubusercontent.com/81464998/273179893-bf694d78-f73e-41f8-a81c-59243bc65972.png)  
Now, vertex $$0$$, $$1$$ are marked visited and DFS returns, increasing count by 1.  
>visited array = $$[1,1,0,0,0]$$, count = $$1$$  

Again, next unvisited node is $$2$$, so start DFS from vertex $$2$$ and DFS from vertex $$2$$ will mark all reachable nodes as visited.  
![graph-5](https://user-images.githubusercontent.com/81464998/273182323-388b22f5-1594-4ef8-99e7-3b1450f9e0b4.png)  
Now, vertex $$2$$, $$3$$, $$4$$ are marked visited and DFS returns, increasing count by 1.  
>visited array = $$[1,1,1,1,1]$$, count = $$2$$  

Finally, all vertex are marked visited and we got $$2$$ connected components in the graph.  

## Implementation  

<Tabs>

<TabItem value="cpp" label="C++">
<SolutionAuthor name="@Mr-ram99"/>

```cpp
// DFS to mark the entire connected component as visited                 
void DFS(int node, vector<vector<int>> &adj_list, vector<bool> &visited){
    visited[node]=true;                                                  
    for(int x: adj_list[node]){                                          
        if(!visited[x]){                                                 
            DFS(x, adj_list, visited);                                   
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
    	// if node is not visited, then mark visited entire connected    
        // component containing this node and increment counter          
        if(!visited[i]){                                                 
            DFS(i, adj_list, visited);                                   
            count++;                                                     
        }                                                                
    }                                                                    
    return count;                                                        
}                                                                        
```
</TabItem>
</Tabs>

### Time Complexity
The DFS function runs once for each unvisited node in the graph. In the worst case, it may visit all nodes and edges. The time complexity of the DFS function is $$O(V + E)$$,  
where:  
>$$V$$ is the number of vertices (nodes) in the graph.  
>$$E$$ is the number of edges in the graph.  

The connectedComponents function iterates through all vertices and invokes the DFS function on each unvisited node. Therefore, it runs the DFS function once for each connected component in the graph. In the worst case, it may also visit all nodes and edges. The time complexity of the connectedComponents function is $$O(V + E)$$.  

>So, the overall time complexity of the code is **$$O(V + E)$$**, where $$V$$ is the number of vertices, and $$E$$ is the number of edges in the graph.

### Space Complexity
**Visited Vector**: The visited vector is used to keep track of whether each node has been visited or not. It has a size of $$V$$ (the number of vertices).  
**DFS Recursion Stack**: The space complexity of the recursion stack used in the DFS function depends on the maximum depth of the recursion. In the worst case, when DFS explores the entire graph, the maximum depth of the recursion stack can be $$V$$ (the number of vertices). Therefore, the space complexity due to the recursion stack is also $$O(V)$$.

>So, the overall space complexity of the code is **$$O(V)$$** due to the visited vector and the recursion stack.  

Now, let's go through some related problems which include concept of connected components.
## Example-1 : [0547 - Number of Provinces](https://leetcode.com/problems/number-of-provinces/)
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
  void DFS(int node, vector<vector<int>> &adj_list, vector<bool> &visited){
      visited[node]=true;                                                  
      for(int x: adj_list[node]){                                          
          if(!visited[x]){                                                 
              DFS(x, adj_list, visited);                                   
          }                                                                
      }                                                                    
  }                                                                        
  int connectedComponents(int V, vector<vector<int>> &adj_list){           
      vector<bool> visited(V,false);                                       
      int count = 0;                                                       
      for(int i=0;i<V;i++){                                                
          if(!visited[i]){                                                 
              DFS(i, adj_list, visited);                                   
              count++;                                                     
          }                                                                
      }                                                                    
      return count;                                                        
  }                                                                        
```

</TabItem>
</Tabs>

## Example-2 : [0200 - Number of Islands](https://leetcode.com/problems/number-of-islands)
>Given an $$m$$ x $$n$$ 2D binary $$grid$$ which represents a map of $$'1'$$s (land) and $$'0'$$s (water), return the number of islands.  
>An **island** is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Let's look at this example, similer to the above example, here an island represent a connected component of graph, which is a map in this case.  
You can consider a cell of map as a node of gragh which is connected by it's neighboring cells through an edge.  
So the approach is to traverse the entire map and whenever we come through a unvisited $$'1'$$s (land) cell, we use DFS to visit all cells of the component containing this cell. This component will represent a single island.
After traversing the map, we will get the number of connected components or you can say the number of islands.

## Solution
<Tabs>

<TabItem value="cpp" label="C++">
<SolutionAuthor name="@Mr-ram99"/>

```cpp
int numIslands(vector<vector<char>>& grid) {                                     
    return connectedComponents(grid);                                            
}                                                                                
void DFS(int i, int j, vector<vector<char>>& grid,vector<vector<bool>>& visited){
    int n=grid.size(), m=grid[0].size();                                         
    visited[i][j]=true;                                                          
    int dir[] = {0,1,0,-1,0};                                                    
    for(int k=0;k<4;k++){                                                        
        int neighborX = i+dir[k];                                                
        int neighborY = j+dir[k+1];                                              
        if(neighborX>=0 && neighborX<n && neighborY>=0 && neighborY<m &&         
            grid[neighborX][neighborY]=='1' && !visited[neighborX][neighborY]){  
            DFS(neighborX, neighborY, grid, visited);                                    
        }                                                                        
    }                                                                            
}                                                                                
int connectedComponents(vector<vector<char>> &grid){                             
    int n=grid.size(), m=grid[0].size();                                         
    vector<vector<bool>> visited(n, vector<bool>(m, false));                     
    int count = 0;                                                               
    for(int i=0;i<n;i++){                                                        
        for(int j=0;j<m;j++){                                                    
            if(grid[i][j]=='1' && !visited[i][j]){                               
                DFS(i, j, grid, visited);                                        
                count++;                                                         
            }                                                                    
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
