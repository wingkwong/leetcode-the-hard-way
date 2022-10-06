---
description: >-
  Author: @Kavita613 |
  https://leetcode.com/problems/path-with-maximum-probability/
tags: [Graph, Heap (Priority Queue), Shortest Path]
---

# 1514 - Path with Maximum Probability (Medium) 

## Problem Link

https://leetcode.com/problems/path-with-maximum-probability/

## Problem Statement

You are given an undirected weighted graph of `n` nodes (0-indexed), represented by an edge list where `edges[i] = [a, b]` is an undirected edge connecting the nodes `a` and `b` with a probability of success of traversing that edge `succProb[i]`.

Given two nodes `start` and `end`, find the path with the maximum probability of success to go from `start` to `end` and return its success probability.

If there is no path from `start` to `end`, **return 0**. Your answer will be accepted if it differs from the correct answer by at most **1e-5**.

**Example 1:**

```
Input: n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.2], start = 0, end = 2
Output: 0.25000
Explanation: There are two paths from start to end, one having a probability of success = 0.2 and the other has 0.5 * 0.5 = 0.25.
```

**Example 2:**

```
Input: n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.3], start = 0, end = 2
Output: 0.30000
```

**Example 3:**

```
Input: n = 3, edges = [[0,1]], succProb = [0.5], start = 0, end = 2
Output: 0.00000
Explanation: There is no path between 0 and 2.
```

**Constraints:**

- `2 <= n <= 10^4`
- `0 <= start, end < n`
- `start != end`
- `0 <= a, b < n`
- `a != b`
- `0 <= succProb.length == edges.length <= 2*10^4`
- `0 <= succProb[i] <= 1`
- There is at most one edge between every two nodes.


## Approach 1: Dijkstra's Algorithm 

First, we will create adjanacy list $graph$ from given input. Now we have to find maximum success probability from soruce node to every node.  

In standard djikstra algorithm, we will find the shortest path from start to end and update the "minimum distance" array accordingly for each $from$ -> $to$ pair.

In this problem, we have to find maximum probability so we create a max heap $pq$ and an array $sp$ which will store success probability for every node. Now, we will iterate for top node of $pq$ priority queue and upadate the $sp$ array. After iterating through $graph$, we will return $sp[end]$.

<Tabs>

<TabItem value="cpp" label="C++">
<SolutionAuthor name="@Kavita613"/>

```cpp
double maxProbability(int n, vector<vector<int>>& edges, vector<double>& succProb, int start, int end) {    
        int e = edges.size();
  
        // First, Create Adjanacy list   
        vector<vector<pair<int, double>>> graph(n);
        for (int i = 0; i < e; i++) {
            graph[edges[i][0]].push_back({edges[i][1], succProb[i]});
            graph[edges[i][1]].push_back({edges[i][0], succProb[i]});
        }
        
        // Max heap, pair<success_probability, node>
        priority_queue<pair<double, int>> pq;
           
        // success probability vector
        vector<double> sp(n, (double)0.0);       
        
        // Source Node is having max success probability which is equal to 1
        pq.push({1.0, start});
        
        while (!pq.empty()) {
            double prob = pq.top().first;
            int node = pq.top().second;
            pq.pop();
            // Now, we will iterate for adj nodes of our priority_queue's top node
            for (auto x : graph[node]) {
                // we have to find maximum success probability path from source to target
                if (prob * x.second > sp[x.first]) {
                    sp[x.first] = (double)(prob * x.second);
                    pq.push({sp[x.first], x.first});
                }
            }
        }
        return sp[end];
    }
```

</TabItem>

</Tabs>

### Time Complexity

Time Complexity of this solution is $O(e * log(n))$, where $e$ is the length of $edges$ array and $n$ is total nodes in given graph.  
  
### Space Complexity
  
Space Complexity of this solution is $O(n)$, since we use $sp$ array of length $n$.
