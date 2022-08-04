---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/find-closest-node-to-given-two-nodes
---

# 2359 - Find Closest Node to Given Two Nodes (Medium)

import SolutionAuthor from '@site/src/components/SolutionAuthor';

## Problem Link

https://leetcode.com/problems/find-closest-node-to-given-two-nodes

## Problem Statement

You are given a **directed** graph of `n` nodes numbered from `0` to `n - 1`, where each node has **at most one** outgoing edge.

The graph is represented with a given **0-indexed** array `edges` of size `n`, indicating that there is a directed edge from node `i` to node `edges[i]`. If there is no outgoing edge from `i`, then `edges[i] == -1`.

You are also given two integers `node1` and `node2`.

Return _the **index** of the node that can be reached from both_ `node1` _and_ `node2`_, such that the **maximum** between the distance from_ `node1` _to that node, and from_ `node2` _to that node is **minimized**_. If there are multiple answers, return the node with the **smallest** index, and if no possible answer exists, return `-1`.

Note that `edges` may contain cycles.

&#x20;

**Example 1:**

![](https://assets.leetcode.com/uploads/2022/06/07/graph4drawio-2.png)

```
Input: edges = [2,2,3,-1], node1 = 0, node2 = 1
Output: 2
Explanation: The distance from node 0 to node 2 is 1, and the distance from node 1 to node 2 is 1.
The maximum of those two distances is 1. It can be proven that we cannot get a node with a smaller maximum distance than 1, so we return node 2.
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2022/06/07/graph4drawio-4.png)

```
Input: edges = [1,2,-1], node1 = 0, node2 = 2
Output: 2
Explanation: The distance from node 0 to node 2 is 2, and the distance from node 2 to itself is 0.
The maximum of those two distances is 2. It can be proven that we cannot get a node with a smaller maximum distance than 2, so we return node 2.
```

**Constraints:**

* `n == edges.length`
* `2 <= n <= 10^5`
* `-1 <= edges[i] < n`
* `edges[i] != i`
* `0 <= node1, node2 < n`

## Approach: Dijkstra x 2

We can use dijkstra algorithm to compute the shortest paths starting from `node1` and `node2` to other nodes, then check for the one with the minimum max distance.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    template<typename T_pair, typename T_vector>
    void dijkstra(T_pair &g, T_vector &dist, int start) {
      priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
      dist[start] = 0;
      pq.push({start, 0});
      while (!pq.empty()) {
        auto [u_node, u_cost] = pq.top(); pq.pop();
        if (u_cost > dist[u_node]) continue;
        for (auto [v_node, v_cost] : g[u_node]) {
          if (dist[v_node] > dist[u_node] + v_cost) {
            dist[v_node] = dist[u_node] + v_cost;
            pq.push({v_node, dist[v_node]});
          }
        }
      }
    }
    
    int closestMeetingNode(vector<int>& edges, int node1, int node2) {
        int n = edges.size();
        vector<int> d1(n, INT_MAX), d2(n, INT_MAX);
        vector<vector<pair<int, int>>> g(n);
        for (int i = 0; i < n; i++) if (edges[i] != -1) g[i].push_back({edges[i], 1});
        dijkstra(g, d1, node1);
        dijkstra(g, d2, node2);
        int ans = -1, mi = INT_MAX;
        for (int i = 0; i < n; i++) {
            if (max(d1[i], d2[i]) < mi) {
                mi = max(d1[i], d2[i]);
                ans = i;
            }
        }
        return mi == INT_MAX ? -1 : ans;
    }
};
```