---
description: >-
  Author: @Kavita613 |
  https://leetcode.com/problems/path-with-maximum-probability/
---

# 1514 - Path with Maximum Probability (Medium)

## Problem Link

https://leetcode.com/problems/path-with-maximum-probability/

## Problem Statement

You are given an undirected weighted graph of n nodes (0-indexed), represented by an edge list where edges[i] = [a, b] is an undirected edge connecting the nodes a and b with a probability of success of traversing that edge succProb[i].

Given two nodes start and end, find the path with the maximum probability of success to go from start to end and return its success probability.

If there is no path from start to end, return 0. Your answer will be accepted if it differs from the correct answer by at most 1e-5.



**Example 1:**   
 
<img src = "https://assets.leetcode.com/uploads/2019/09/20/1558_ex1.png" alt = "Graph1" />    

```
Input:  n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.2], start = 0, end = 2
Output: 0.25000
Explanation: There are two paths from start to end, one having a probability of success = 0.2 and the other has 0.5 * 0.5 = 0.25.
```

**Example 2:**   

<img src = "https://assets.leetcode.com/uploads/2019/09/20/1558_ex2.png" alt = "Graph2" />

```
Input: n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.3], start = 0, end = 2
Output: 0.30000
```

**Example 3:**    

<img src = "https://assets.leetcode.com/uploads/2019/09/20/1558_ex3.png" alt = "Graph3" />

```
Input: n = 3, edges = [[0,1]], succProb = [0.5], start = 0, end = 2  
Output: 0.00000  
Explanation: There is no path between 0 and 2.  
```

**Constraints:**

* `2 <= n <= 10^4`
* `0 <= start, end < n`
* `start != end`  
* `0 <= a, b < n`
* `a != b`  
* `0 <= succProb.length == edges.length <= 2*10^4`
* `0 <= succProb[i] <= 1`
* `There is at most one edge between every two nodes.`

## Approach - Using Dijkstra's Algorithm:   

<Tabs>

<TabItem value="cpp" label="C++">
<SolutionAuthor name="@Kavita613"/>

```cpp
double maxProbability(int n, vector<vector<int>>& edges, vector<double>& succProb, int start, int end) 
  {    
        int total_edges = edges.size();  
  
        // First, Create Adjanacy list   
  
        vector<vector<pair<int, double>>> graph(n);    
        
        for(int i = 0; i < total_edges; i++)
        {
            graph[edges[i][0]].push_back({edges[i][1], succProb[i]});
            graph[edges[i][1]].push_back({edges[i][0], succProb[i]});
        }
        
        // Max heap, pair<success_probability, node>     
  
        priority_queue<pair<double, int>> pq;       
           
        // success probability vector     
  
        vector<double> sp(n, (double)0.0);       
        
        // Source Node is having max success probability which is equal to 1   
  
        pq.push({(double)1.0, start});      
        
        while(!pq.empty())
        {
            int node = pq.top().second;
            double prob = pq.top().first;
            
            pq.pop();
            
            // Now, we will iterate for adj nodes of our priority_queue's top node
            
            for(auto x : graph[node]){    
                
                // we have to find maximum success probability path from source to target   
  
                if((prob)*(x.second) > dis[x.first]){   
                    
                    dis[x.first] = (double)((prob)*(x.second));
                    pq.push({dis[x.first], x.first});
                }
            }
        }
        
        // Checking if there any path exists or not from source to target node
        
        if(dis[end] != 0.0) return dis[end];   
        else return 0;
    }
```

</TabItem>

</Tabs>

## Time complexity:    

O(total_edges * log(n))  
  
## Space complexity:
O(n)
