---
description: 'Author: @wingkwong | https://leetcode.com/problems/network-delay-time/'
---

# 0743 - Network Delay Time (Medium)

## Problem Link

https://leetcode.com/problems/network-delay-time/

## Problem Statement

You are given a network of `n` nodes, labeled from `1` to `n`. You are also given `times`, a list of travel times as directed edges `times[i] = (ui, vi, wi)`, where `ui` is the source node, `vi` is the target node, and `wi` is the time it takes for a signal to travel from source to target.

We will send a signal from a given node `k`. Return the time it takes for all the `n` nodes to receive the signal. If it is impossible for all the `n` nodes to receive the signal, return `-1`.

**Example 1:**

![](https://assets.leetcode.com/uploads/2019/05/23/931\_example\_1.png)

```
Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
Output: 2
```

**Example 2:**

```
Input: times = [[1,2,1]], n = 2, k = 1
Output: 1
```

**Example 3:**

```
Input: times = [[1,2,1]], n = 2, k = 2
Output: -1
```

**Constraints:**

* `1 <= k <= n <= 100`
* `1 <= times.length <= 6000`
* `times[i].length == 3`
* `1 <= ui, vi <= n`
* `ui != vi`
* `0 <= wi <= 100`
* All the pairs `(ui, vi)` are **unique**. (i.e., no multiple edges.)

## Approach 1: Dijkstra

If we know the time between the starting node and other nodes, then the answer would be the max time. In example 1, if node 2 goes to node 4, it takes 2 seconds. If node 2 goes to to node 1, it takes 1 second. If we take the max time, then other cases would be covered as well.

Therefore, the problem is now asking to find out the max time it takes from the starting node to an arbitrary node. To calculate the shortest path from node A to node B, we can use Dijkstra. Let $$d[i]$$ be the time that is required to reach from the starting point to node $$i$$. We initialise each time as $$1e9$$. After calling dijkstra function, if there is one node that need $$time = 1e9$$ to reach, then it means this node is unreachable. We can return $$-1$$ in this case. Otherwise, return the max one.

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

    int networkDelayTime(vector<vector<int>>& times, int n, int k) {
        vector<vector<pair<int, int>>> g(n + 1);
        for (auto x : times) g[x[0]].push_back({x[1], x[2]});
        vector<int> d(n + 1, 1e9);
        dijkstra(g, d, k);
        int ans = *max_element(d.begin() + 1, d.end());
        return ans == 1e9 ? -1 : ans;
    }
};
```

## Approach 2: Bellman Ford

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    template<typename T_a3, typename T_vector>
    void bellman_ford(T_a3 &g, T_vector &dist, int src, int mx_edges) {
        // dist[i] : dist to reach node j using at most i edges from src
        dist[src] = 0;
        for (int i = 0; i <= mx_edges; i++) {
            T_vector ndist = dist;
            for (auto x : g) {
                auto [from, to, cost] = x;
                ndist[to] = min(ndist[to], dist[from] + cost);
            }
            dist = ndist;
        }
    }
    
    int networkDelayTime(vector<vector<int>>& times, int n, int k) {
        vector<array<int, 3>> g;
        vector<int> dist(n, 1e9);
        for (auto x : times) g.push_back({x[0] - 1, x[1] - 1, x[2]});
        bellman_ford(g, dist, k - 1, n);
        int mx = *max_element(dist.begin(), dist.end());
        return mx == 1e9 ? -1 : mx;
    }
};
```
