---
title: 'Minimum Spanning Tree'
description: 'A minimum spanning tree is a subset of the edges of a connected undirected graph with the minimum possible total edge weight and it does not contain any cycles.'
hide_table_of_contents: true
keywords:
  - leetcode
  - tutorial
  - minimum spanning tree
  - mst
  - algorithm
---

> This tutorial is written by @wingkwong

A minimum spanning tree is a subset of the edges of a connected undirected graph with the minimum possible total edge weight and it does not contain any cycles.

### Kruskal's Algorithm

We sort the edges based on the weights in ascending order. Then we iterate them one by one, and greedily pick edges which does not result in cycle with the previous edges.

#### C++ Implementation

```cpp
class dsu {
 public:
  vector<int> root, rank;
  int n;
  int cnt;

  dsu(int _n) : n(_n) {
    root.resize(n);
    rank.resize(n);
    for(int i = 0; i < n; i++) {
        root[i] = i;
        rank[i] = 1;
    }
    cnt = n;
  }

  inline int getCount() { return cnt; }

  inline int get(int x) { return (x == root[x] ? x : (root[x] = get(root[x]))); }

  inline bool unite(int x, int y) {
    x = get(x);
    y = get(y);
    if (x != y) {
        if (rank[x] > rank[y]) {
            root[y] = x;
        } else if (rank[x] < rank[y]) {
            root[x] = y;
        } else {
            root[y] = x;
            rank[x] += 1;
        }
        cnt--;
      return true;
    }
    return false;
  }
};

int mst(vector<vector<int>>& g) {
    int n = (int) g.size();
    vector<array<int, 3>> edges;
    // g[i] = {from, to, weight}
    for (auto x : g) edges.push_back({x[2], x[0], x[1]}); 
    sort(edges.begin(), edges.end());
    dsu d(n + 1);
    int minimum_weight = 0;
    for (auto x : edges) {
        if (d.unite(x[1], x[2])) {
            minimum_weight += x[0];
        }
    }
    return minimum_weight;
}
```

### Suggested Problems

* [1135 - Connecting Cities With Minimum Cost (Medium)](../../solutions/1100-1199/connecting-cities-with-minimum-cost-medium)
* [1168 - Optimize Water Distribution in a Village (Hard)](../../solutions/1100-1199/optimize-water-distribution-in-a-village-hard)
