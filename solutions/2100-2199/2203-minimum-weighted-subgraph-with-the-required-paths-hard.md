---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/
---

# 2203 - Minimum Weighted Subgraph With the Required Paths (Hard)

## Problem Link

https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/

## Problem Statement

You are given an integer `n` denoting the number of nodes of a **weighted directed** graph. The nodes are numbered from `0` to `n - 1`.

You are also given a 2D integer array `edges` where `edges[i] = [fromi, toi, weighti]` denotes that there exists a **directed** edge from `fromi` to `toi` with weight `weighti`.

Lastly, you are given three **distinct** integers `src1`, `src2`, and `dest` denoting three distinct nodes of the graph.

Return _the **minimum weight** of a subgraph of the graph such that it is **possible** to reach_ `dest` _from both_ `src1` _and_ `src2` _via a set of edges of this subgraph_. In case such a subgraph does not exist, return `-1`.

A **subgraph** is a graph whose vertices and edges are subsets of the original graph. The **weight** of a subgraph is the sum of weights of its constituent edges.



**Example 1:**

![](https://assets.leetcode.com/uploads/2022/02/17/example1drawio.png)

```
Input: n = 6, edges = [[0,2,2],[0,5,6],[1,0,3],[1,4,5],[2,1,1],[2,3,3],[2,3,4],[3,4,2],[4,5,1]], src1 = 0, src2 = 1, dest = 5
Output: 9
Explanation:
The above figure represents the input graph.
The blue edges represent one of the subgraphs that yield the optimal answer.
Note that the subgraph [[1,0,3],[0,5,6]] also yields the optimal answer. It is not possible to get a subgraph with less weight satisfying all the constraints.
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2022/02/17/example2-1drawio.png)

```
Input: n = 3, edges = [[0,1,1],[2,1,1]], src1 = 0, src2 = 1, dest = 2
Output: -1
Explanation:
The above figure represents the input graph.
It can be seen that there does not exist any path from node 1 to node 2, hence there are no subgraphs satisfying all the constraints.
```

**Constraints:**

* `3 <= n <= 10^5`
* `0 <= edges.length <= 10^5`
* `edges[i].length == 3`
* `0 <= fromi, toi, src1, src2, dest <= n - 1`
* `fromi != toi`
* `src1`, `src2`, and `dest` are pairwise distinct.
* `1 <= weight[i] <= 10^5`

## Approach 1: Dijkstra x 3

We calculate the shortest paths for each node from $$src1$$, $$src2$$ and $$dest$$. For $$dest$$, we need to do it in a reversed order. If we cannot reach $$src1$$ or $$src2$$ from $$dest$$, then the answer is $$-1$$. Otherwise, we iterate each node to find the distances and sum them together to take the minimal one.

<SolutionAuthor name="@wingkwong"/>

```cpp
using ll = long long;

class Solution {
public:
    template<typename T_pair, typename T_vector>
    void dijkstra(T_pair &g, T_vector &dist, ll start) {
      priority_queue<pair<ll, ll>, vector<pair<ll, ll>>, greater<pair<ll, ll>>> pq;
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

    long long minimumWeight(int n, vector<vector<int>>& edges, int src1, int src2, int dest) {
        ll inf = 1e18;
        vector<ll> d1(n, inf), d2(n, inf), d3(n, inf);
        vector<vector<pair<ll, ll>>> g(n);
        vector<vector<pair<ll, ll>>> rev_g(n);
        for (auto x : edges) {
            g[x[0]].push_back({x[1], x[2]});
            // reversed order
            rev_g[x[1]].push_back({x[0], x[2]});
        }
        // calculate shortest paths for each node from src1
        dijkstra(g, d1, src1);
        // calculate shortest paths for each node from src2
        dijkstra(g, d2, src2);
        // calculate shortest paths for each node from dest
        dijkstra(rev_g, d3, dest);
        // cannot reach src1 / src2 from dest
        if (d3[src1] == inf || d3[src2] == inf) return -1;
        ll ans = inf;
        for (int i = 0; i < n; i++) {
            ans = min(ans, d1[i] + d2[i] + d3[i]);
        }
        return ans;
    }
};
```
