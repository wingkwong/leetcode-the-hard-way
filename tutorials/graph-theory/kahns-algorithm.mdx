---
title: "Kahn's Algorithm"
description: "Kahn's Algorithm is a classical algorithm in computer science that is used for topological sorting of directed acyclic graphs (DAGs)"
keywords:
  - leetcode
  - tutorial
  - kahn
  - algorithm
---

## Overview

Kahn's Algorithm is a classical algorithm in computer science that is used for topological sorting of directed acyclic graphs (DAGs).

Topological sorting is the process of arranging the nodes of a DAG in a linear order such that for every directed edge $(u, v)$, u comes before v in the order. In other words, a topological sort of a DAG is an ordering of its nodes such that if there is a directed edge from node u to node v, then u comes before v in the ordering.

Kahn's Algorithm is a simple and elegant algorithm that works by repeatedly finding nodes with no incoming edges and adding them to the sorted order. The algorithm maintains a queue of nodes that have no incoming edges, and removes these nodes one by one, adding them to the sorted order. As each node is removed, its outgoing edges are also removed, and any nodes that no longer have any incoming edges are added to the queue.

## Implementation

The algorithm continues this process until all nodes have been removed and added to the sorted order. If the graph contains a cycle, then the algorithm will not be able to find a topological order, as there will always be at least one node that has an incoming edge. Thus, Kahn's Algorithm is only applicable to DAGs.

Here is the pseudocode for Kahn's Algorithm:

1. Initialize a queue $Q$ to contain all nodes with no incoming edges.
2. Initialize an empty list $L$ to contain the sorted nodes.
3. While $Q$ is not empty:
   - Remove a node $n$ from the front of $Q$.
   - Add $n$ to the end of $L$.
   - For each node $m$ with an edge $e$ from $n$ to $m$, remove $e$ from the graph.
   - If $m$ has no other incoming edges, add $m$ to the back of $Q$.
4. If the graph still contains edges, then it must contain at least one cycle and therefore cannot be a DAG.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
template<typename T_vector, typename T_vector_vector>
T_vector kahn(int n, T_vector_vector &edges){
    vector<int> ordering, indegree(n, 0);
    vector<vector<int> > g(n);
    for (auto e : edges) {
      --e[0], --e[1];
      indegree[e[1]]++;
      g[e[0]].push_back(e[1]);
    }
    queue<int> q;
    for (int i = 0; i < n; i++) {
      if (indegree[i] == 0) {
      q.push(i);
      }
    }
    int visited = 0;
    while (!q.empty()) {
      int u = q.front(); q.pop();
      ordering.push_back(u);
      visited++;
      for (auto v : g[u]) {
        if (--indegree[v] == 0) q.push(v);
      }
    }
    if (visited != n) return T_vector{};
    reverse(ordering.begin(), ordering.end());
    return ordering;
}
```

</TabItem>
</Tabs>

There are a few important things to note about Kahn's Algorithm. First, the algorithm is not unique, as there may be multiple nodes with no incoming edges at any given time. Second, the algorithm has a time complexity of $O(|V| + |E|)$, where $|V|$ is the number of nodes in the graph and $|E|$ is the number of edges. This is because each node and edge is visited exactly once. Finally, the algorithm can be easily modified to detect cycles in a graph by keeping track of the nodes that have been visited but not yet added to the sorted order.

export const suggestedProblems = [ { "problemName": "0207 - Course Schedule", "difficulty": "Medium", "leetCodeLink": "https://leetcode.com/problems/network-delay-time/", "solutionLink": "" } ]

<Table title="Suggested Problems" data={suggestedProblems} />
