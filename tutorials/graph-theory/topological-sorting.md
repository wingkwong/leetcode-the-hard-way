---
title: 'Topological Sorting'
description: 'Topological Sorting is a linear ordering of its vertices such that for every directed edge (u, v) from vertex u to vertex v, u comes before v in the ordering.'
keywords:
  - leetcode
  - tutorial
  - topological sorting
  - algorithm
---

<TutorialCredits authors="@wkw"/>

## Overview

Topological Sorting is a linear ordering of its vertices such that for every directed edge $(u, v)$ from vertex $u$ to vertex $v$, $u$ comes before $v$ in the ordering.

In order to find the order, we start from those nodes which do not have any prerequisites / dependencies. In other word, those nodes with indegree $0$. Then we incrementally add the nodes to the order following the given prerequisites. For each node with an edge, we remove the edge from the graph. By doing so, there would be more nodes without dependency. At the end, there is no edges that can be removed, which gives two possible results. The first one is a cycle is form which cannot remove in above steps. The second one is all the edges from the graph have been removed and we got the topological order of the graph.

The time complexity would be $O(|E| + |V|)$.

## Implementation

The following implementation is using BFS.

- `G` is the graph built with the dependencies
- `indegree` is used to record the indegree of given node
- `orders` is the topologically sorted order
- `isTopologicalSorted` is used to determine if the graph can be topologically sorted or not

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
struct TopologicalSort {
    int n;
    vector<int> indegree;
    vector<int> orders;
    vector<vector<int>> G;
    bool isTopologicalSorted = false;
    int steps = 0;
    int nodes = 0;

    TopologicalSort(vector<vector<int>>& g, vector<int>& in) {
        G = g;
        n = (int) G.size();
        indegree = in;

        int res = 0;
        queue<int> q;
        for(int i = 0; i < n; i++) {
            if(indegree[i] == 0) {
                q.push(i);
            }
        }
        while(!q.empty()) {
            int sz = q.size();
            steps += 1;
            nodes += q.size();
            for (int i = 0; i < sz; i++) {
                auto u = q.front(); q.pop();
                orders.push_back(u);
                for(auto v : G[u]) {
                    if(--indegree[v] == 0) {
                        q.push(v);
                    }
                }
            }
        }
        isTopologicalSorted = nodes == n;
    }
};
```

</TabItem>
</Tabs>

## Example 1: [0207 - Course Schedule](https://leetcode.com/problems/course-schedule/)

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
// ...
// TopologicalSort implementation here
// ...

class Solution {
public:
    bool canFinish(int n, vector<vector<int>>& prerequisites) {
        // define the graph
        vector<vector<int>> g(n);
        // define indegree
        vector<int> indegree(n);
        // build the graph
        for(auto p : prerequisites) {
            // we have to take p[1] in order to take p[0]
            g[p[1]].push_back(p[0]);
            // increase indegree by 1 for p[0]
            indegree[p[0]]++;
        }
        // init topological sort
        TopologicalSort ts(g, indegree);
        // we can finish all courses only if we can topologically sort
        return ts.isTopologicalSorted;
    }
};
```

</TabItem>
</Tabs>

## Example 2: [0210 - Course Schedule II](https://leetcode.com/problems/course-schedule-ii/)

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
// ...
// TopologicalSort implementation here
// ...

class Solution {
public:
    vector<int> findOrder(int n, vector<vector<int>>& prerequisites) {
        // define the graph
        vector<vector<int>> g(n);
        // define indegree
        vector<int> indegree(n);
        // build the graph
        for(auto p : prerequisites) {
            // we have to take p[1] in order to take p[0]
            g[p[1]].push_back(p[0]);
            // increase indegree by 1 for p[0]
            indegree[p[0]]++;
        }
        // init topological sort
        TopologicalSort ts(g, indegree);
        // we can finish all courses only if we can topologically sort
        // hence, return an empty array if it cannot be sorted
        if (!ts.isTopologicalSorted) return {};
        // else return the order
        return ts.orders;
    }
};
```

</TabItem>
</Tabs>

## Example 3: [1136. Parallel Courses](https://leetcode.com/problems/parallel-courses/)

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
// ...
// TopologicalSort implementation here
// ...

class Solution {
public:
    int minimumSemesters(int n, vector<vector<int>>& relations) {
        vector<vector<int>> g(n);
        vector<int> in(n);
        for (auto x : relations) {
            --x[0], --x[1];
            g[x[0]].push_back(x[1]);
            in[x[1]]++;
        }
        TopologicalSort ts(g, in);
        return ts.isTopologicalSorted ? ts.steps : -1;
    }
};
```

</TabItem>
</Tabs>
