---
title: "Bellman Ford Algorithm"
description: 'Bellman Ford Algorithm computes shortest paths from a single source vertex to all of the other vertices in a weighted digraph'
keywords:
  - leetcode
  - tutorial
  - bellman ford
  - algorithm
---

<TutorialAuthors names="@wingkwong"/>

## Overview

Bellman Ford Algorithm computes shortest paths from a single source vertex to all of the other vertices in a weighted digraph. Similar to Dijkstra's algorithm, it proceeds by relaxation. However, Dijkstra's algorithm uses a priority queue to greedily select the closest vertex that has not been processed, which all of its outgoing edges will be processed. On the other hand, Bellman Ford Algorithm relaxes all the edges and does the relaxation only $|V| - 1$ times where $|V|$ is the number of vertices in the graph. This is because given a graph with no negative weight cycles with $V$ vertices, the shortest path between any two vertices has at most $|V| - 1$ edges.

## Implementation

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
template<typename T_a3, typename T_vector>
void bellman_ford(T_a3 &g, T_vector &dist, int src, int mx_edges) {
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
```
</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@Odion-Sonny"/>

```py
def bellman_ford(g, dist, src, mx_edges):
    dist[src] = 0
    for i in range(mx_edges+1):
        ndist = dist.copy()
        for x in g:
            from_, to, cost = x
            ndist[to] = min(ndist[to], dist[from_] + cost)
        dist = ndist
```

</TabItem>
</Tabs>
