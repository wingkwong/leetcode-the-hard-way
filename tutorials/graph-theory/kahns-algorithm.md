---
title: "Kahn's Algorithm"
description: "Topological sorting using Breadth-First Search is Kahn's Algorithm."
keywords:
  - leetcode
  - tutorial
  - kahn
  - algorithm
---

## Overview

Topological sorting is a linear ordering of vertices such that if there is an edge (u,v) then u appears before v in that ordering like u->v .Topological Sorting for a graph is not possible if the graph is not a DAG.
Topological sort will start from where the in-degree is 0 since we want to follow u->v order and also reducing the dependency factor of their adjacent nodes.

- Step 1: Calculate and store the in-degree of all the nodes.We can store the in-degrees in an array data structure.
- Step 2: Let's take a queue data structure (since we'll be performing bfs here).Initially , push all those nodes into the queue whose indegree is 0.
- Step 3: Now, from here we will simply implement the Breadth-First Search(BFS) algorithm.So, now each time you take out an element out of the queue we have to      remember that is a part of the topological sort(simply print it).Now, we would check for the adjacent nodes of the element taken out from the queue,if any.
- Step 4: While checking for adjacent nodes do "-1" from their current indegree(s) and if their indegree becomes 0 then follow ahead from Step 2.

The time complexity would be $O(|E| + |V|)$.

## Implementation

- `G` is the graph built with the dependencies
- `indegree` is used to record the indegree of given node
- `order` is the topologically sorted order
- `isTopologicalSorted` is used to determine if the graph can be topologically sorted or not

```cpp
struct TopologicalSort {
    int n;
    vector<int> indegree;
    vector<int> order;
    vector<vector<int>> G;
    
    void TopologicalSort(vector<vector<int>>& g, vector<int>& in) {
        G = g; 
        vector<vector<int>>n = (int) G.size();
        indegree = in;
        
        int res = 0;
        queue<int> q;
        for(int i = 0; i < n; i++) {
            if(indegree[i] == 0) {
                q.push(i);
            }
        }
        while(!q.empty()) {
            auto u = q.front(); q.pop();
            order.push_back(u);
            for(auto v : G[u]) {
                if(--indegree[v] == 0) {
                    q.push(v);
                }
            }
            res++;
        }
       for (int i = 0; i < order.size(); i++){
        cout << order[i] << " ";
        }
       cout << endl;
    }
};
```

## Example : [2192 - All Ancestors of a Node in a Directed Acyclic Graph](https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/)

### Intuition after reading the question should be : Topological sorting is a kind of dependencies problem so, we can start with the tasks which do not have any dependencies and can be done straight away or simply if we talk about in the term of node, We will always try to execute those nodes that have indegree 0. 

```cpp
// ...
// Kahn's algorithm implementation here
// ...

class Solution {
public:
    vector<vector<int>> getAncestors(int n, vector<vector<int>>& edges) {
        //stores vector of adjacency list with each node having a vector of nodes to which it points 
        vector<int> adj_list[n];   
        
        //stores indegree of each node
        vector<int> indegree(n);
        
        //creating adjacency list and updating indegrees
        for(int i=0;i<edges.size();++i)
        {
            adj_list[edges[i][0]].push_back(edges[i][1]);
            indegree[edges[i][1]]++;
        }
        
        //queue for BFS Traversal
        queue<int> q; 
        
        //adding all the nodes with indegree==0 as they act as the source node
        for(int i=0;i<n;++i)
        {
            if(indegree[i]==0)
                q.push(i);
        }
        
        set<int> st[n]; //to avoid repetition of parent nodes 
        while(!q.empty())
        {
            
            int cur=q.front(); 
            q.pop();
            
            for(auto it:adj_list[cur])
            {
                //inserting immediate parent node to each child of current node
                st[it].insert(cur); 
                
                //adds all the ancestors of the current node
                for(auto it2:st[cur])
                    st[it].insert(it2);
                 
                //adding to queue if indegree ==0
                indegree[it]--;
                if(indegree[it]==0)
                q.push(it);
            }
        }
        
        //to store ans
        vector<vector<int>> ans(n,vector<int>());
        
        //adding ancestors of each node to final ans vector
        for(int i=0;i<n;++i)
            ans[i]=vector<int>(st[i].begin(),st[i].end());
        
        
        return ans; 
    }
};
