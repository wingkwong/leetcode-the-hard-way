---
title: "Kruskal's Algorithm"
description: "Kruskal's algorithm is a greedy algorithm used to find the minimum spanning tree of a connected, undirected graph."
keywords:
  - leetcode
  - tutorial
  - kruskals
  - algorithm
---

<TutorialAuthors names="@wingkwong"/>

## Overview

Kruskal's algorithm is a greedy algorithm used to find the minimum spanning tree of a connected, undirected graph. The algorithm starts with each vertex in its own separate connected component, and iteratively adds edges to the MST in increasing order of weight, while ensuring that adding the edge does not form a cycle.

Here are the steps to find the MST using Kruskal's algorithm:

1. Sort all the edges in non-decreasing order of their weight.
2. Initialize the MST as an empty set.
3. For each edge in the sorted list of edges:
    - If adding the edge does not form a cycle in the MST, add the edge to the MST.
    - Otherwise, discard the edge.
4. Repeat steps 3 until all the vertices are included in the MST.

The time complexity of Kruskal's algorithm is $O(E log E)$ where $E$ is the number of edges in the graph. It is more efficient than Prim's algorithm when the number of edges is much larger than the number of vertices.

#### Implementation

Prerequisite: [Disjoint Set Union](../graph-theory/disjoint-set-union)

<Tabs>

<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp

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
</TabItem>
</Tabs>

export const suggestedProblems = [
  {
    "problemName": "1135 - Connecting Cities With Minimum Cost",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/connecting-cities-with-minimum-cost/",
    "solutionLink": "../../solutions/1100-1199/connecting-cities-with-minimum-cost-medium"
  },
  {
    "problemName": "1168 - Optimize Water Distribution in a Village",
    "difficulty": "Hard",
    "leetCodeLink": "https://leetcode.com/problems/optimize-water-distribution-in-a-village/",
    "solutionLink": "../../solutions/1100-1199/optimize-water-distribution-in-a-village-hard"
  },
]

<Table title="Suggested Problems" data={suggestedProblems} />