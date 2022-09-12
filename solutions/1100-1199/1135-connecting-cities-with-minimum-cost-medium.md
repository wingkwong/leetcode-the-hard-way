---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/connecting-cities-with-minimum-cost/
---

# 1135 - Connecting Cities With Minimum Cost (Medium)

## Problem Link

https://leetcode.com/problems/connecting-cities-with-minimum-cost/

## Problem Statement

There are `n` cities labeled from `1` to `n`. You are given the integer `n` and an array `connections` where `connections[i] = [xi, yi, costi]` indicates that the cost of connecting city `xi` and city `yi` (bidirectional connection) is `costi`.

Return _the minimum **cost** to connect all the_ `n` _cities such that there is at least one path between each pair of cities_. If it is impossible to connect all the `n` cities, return `-1`,

The **cost** is the sum of the connections' costs used.

**Example 1:**

![](https://assets.leetcode.com/uploads/2019/04/20/1314\_ex2.png)

```
Input: n = 3, connections = [[1,2,5],[1,3,6],[2,3,1]]
Output: 6
Explanation: Choosing any 2 edges will connect all cities so we choose the minimum 2.
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2019/04/20/1314\_ex1.png)

```
Input: n = 4, connections = [[1,2,3],[3,4,4]]
Output: -1
Explanation: There is no way to connect all cities even if all edges are used. 
```

**Constraints:**

* `1 <= n <= 10^4`
* `1 <= connections.length <= 10^4`
* `connections[i].length == 3`
* `1 <= xi, yi <= n`
* `xi != yi`
* `0 <= costi <= 10^5`

## Approach 1: **Kruskal's Algorithm**

If we treat it as a graph problem, it is actually same as finding Minimum Spanning Tree. Hence, we can use Kruskal's Algorithm with DSU to solve it.

In order to get the MST, we sort the edges based on the weights in an increasing order. Then we iterate them one by one, and greedily pick edges which does not result in cycle with the previous edges. At the end, we should have $$N - 1$$edges in MST. Otherwise, we return $$-1$$.

<SolutionAuthor name="@wingkwong"/>

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

class Solution {
public:
    int minimumCost(int n, vector<vector<int>>& connections) {
        vector<array<int, 3>> edges;
        for (auto x : connections) {
            edges.push_back({x[2], x[0], x[1]});
        }
        sort(edges.begin(), edges.end());
        dsu d(n + 1);
        int ans = 0, cnt = 0;
        for (auto x : edges) {
            if (d.unite(x[1], x[2])) {
                ans += x[0];
                cnt += 1;
            }
        }
        return cnt == n - 1 ? ans : -1;
    }
};
```

