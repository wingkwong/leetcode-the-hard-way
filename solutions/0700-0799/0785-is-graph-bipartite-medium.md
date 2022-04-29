---
description: 'Author: @wingkwong | https://leetcode.com/problems/is-graph-bipartite'
---

# 0785 -  Is Graph Bipartite? (Medium)

## Problem Statement

There is an **undirected** graph with `n` nodes, where each node is numbered between `0` and `n - 1`. You are given a 2D array `graph`, where `graph[u]` is an array of nodes that node `u` is adjacent to. More formally, for each `v` in `graph[u]`, there is an undirected edge between node `u` and node `v`. The graph has the following properties:

* There are no self-edges (`graph[u]` does not contain `u`).
* There are no parallel edges (`graph[u]` does not contain duplicate values).
* If `v` is in `graph[u]`, then `u` is in `graph[v]` (the graph is undirected).
* The graph may not be connected, meaning there may be two nodes `u` and `v` such that there is no path between them.

A graph is **bipartite** if the nodes can be partitioned into two independent sets `A` and `B` such that **every** edge in the graph connects a node in set `A` and a node in set `B`.

Return `true` _if and only if it is **bipartite**_.

&#x20;

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/10/21/bi2.jpg)

```
Input: graph = [[1,2,3],[0,2],[0,1,3],[0,2]]
Output: false
Explanation: There is no way to partition the nodes into two independent sets such that every edge connects a node in one and a node in the other.
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2020/10/21/bi1.jpg)

```
Input: graph = [[1,3],[0,2],[1,3],[0,2]]
Output: true
Explanation: We can partition the nodes into two sets: {0, 2} and {1, 3}.
```

**Constraints:**

* `graph.length == n`
* `1 <= n <= 100`
* `0 <= graph[u].length < n`
* `0 <= graph[u][i] <= n - 1`
* `graph[u]` does not contain `u`.
* All the values of `graph[u]` are **unique**.
* If `graph[u]` contains `v`, then `graph[v]` contains `u`.

## Approach 1: DSF Colouring

We can colour each set, says $$0$$ and $$1$$. For example, in example 2, we can colour {0, 2} to $$0$$ and {1, 3} to $$1$$. Therefore, we greedily colour them - if the current node is marked as $$0$$, then all neighbours would be $$1$$ and so on.&#x20;

```cpp
class Solution {
public:
    bool isBipartite(vector<vector<int>>& graph) {
        int n = graph.size();
        // {-1, 0, 1}
        // -1: uncoloured
        // 0: red
        // 1: blue
        vector<int> vis(n, -1); 
        function<int(int,int)> dfs = [&](int u, int colour) -> int {
            // check if it is coloured or not
            if (vis[u] != -1) {
                // if the colour is same as previous one -> return 1
                if (vis[u] == (color ^ 1)) return 1;
                // the colour is correct -> return 0 
                else return 0;
            }
            // set the colour
            vis[u] = colour;
            // iterate each neighbours
            for (auto& v : graph[u]) {
                // the expected colour for neighbours would be colour ^ 1
                // i.e. 0 -> 1 or 1 -> 0
                if (dfs(v, colour ^ 1)) {
                    return 1;
                }
            }
            return 0;
        };
        // iterate each node
        for (int i = 0; i < n; i++) {
            // check if it is coloured
            if (vis[i] == -1) {
                // if not, then colour it
                // set 0 by default
                if (dfs(i, 0)) {
                    // found neighbours also have the same colour
                    // then return 0 
                    return 0;
                }
            }
        }
        return 1;
    }
};
```

## Approach 2: BFS Colouring

Same idea but using BFS.

```cpp
class Solution {
public:
    bool isBipartite(vector<vector<int>>& graph) {
        int n = graph.size();
        vector<int> vis(n, -1);
        queue<int> q; 
        for (int i = 0; i < n; i++) {
            if (vis[i] == -1) {
                vis[i] = 0;
                q.push(i);
                while (!q.empty()) {
                    int u = q.front(); q.pop();
                    for (int v : graph[u])  {
                        if (vis[v] == -1) { 
                            vis[v] = vis[u] ^ 1; 
                            q.push(v); 
                        }  else if (vis[v] == vis[u]) {
                            return false;
                        }
                    }
                }
            } 
        }
        return true;
    }
};
```

## Approach 3: Custom Template

<details>

<summary>is_bipartite Template</summary>

```cpp
struct is_bipartite {
  int V;
  vector<vector<int>> adj;
  vector<int> depth;
  vector<bool> visited;

  is_bipartite(int v = -1) {
    if (v >= 0) init(v);
  }

  void init(int v) {
    V = v;
    adj.assign(V, {});
  }

  void add(int a, int b) {
    adj[a].push_back(b);
    adj[b].push_back(a);
  }

  vector<array<vector<int>, 2>> components;

  bool dfs(int node, int parent) {
    assert(!visited[node]);
    visited[node] = true;
    depth[node] = parent < 0 ? 0 : depth[parent] + 1;
    components.back()[depth[node] % 2].push_back(node);
    for (int h : adj[node])
      if (h != parent) {
        if (!visited[h] && !dfs(h, node)) return false;
        if (depth[node] % 2 == depth[h] % 2) return false;
      }
    return true;
  }

  bool solve() {
    depth.assign(V, -1);
    visited.assign(V, false);
    components = {};
    for (int i = 0; i < V; i++)
      if (!visited[i]) {
        components.emplace_back();
        if (!dfs(i, -1)) return false;
      }
    return true;
  }
}; 

```

</details>

```cpp
class Solution {
public:
    bool isBipartite(vector<vector<int>>& graph) {
        int n = graph.size();
        // init is_bipartite
        is_bipartite c(n);
        // iterate input and build the edges
        for (int i = 0; i < n; i++) {
            int from = i;
            for (auto& to : graph[from]) {
                c.add(from, to);
                c.add(to, from);
            }
        }
        // call solve to get the answer
        return c.solve();
    }
};
```
