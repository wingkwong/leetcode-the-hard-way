---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/min-cost-to-connect-all-points/
---

# 1584 - Min Cost to Connect All Points (Medium)

## Problem Link

https://leetcode.com/problems/min-cost-to-connect-all-points/

## Problem Statement

You are given an array `points` representing integer coordinates of some points on a 2D-plane, where `points[i] = [xi, yi]`.

The cost of connecting two points `[xi, yi]` and `[xj, yj]` is the **manhattan distance** between them: `|xi - xj| + |yi - yj|`, where `|val|` denotes the absolute value of `val`.

Return _the minimum cost to make all points connected._ All points are connected if there is **exactly one** simple path between any two points.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/08/26/d.png)

```
Input: points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
Output: 20
Explanation: 

We can connect the points as shown above to get the minimum cost of 20.
Notice that there is a unique path between every pair of points.
```

**Example 2:**

```
Input: points = [[3,12],[-2,5],[-4,1]]
Output: 18
```

**Constraints:**

* `1 <= points.length <= 1000`
* `-106 <= xi, yi <= 106`
* All pairs `(xi, yi)` are distinct.

## Approach 1: Kruskal's Algorithm

If we see this problem as a graph problem, it is same as find a minimum spanning tree (MST).  We can use Kruskal's algorithm with disjoint-set data structure (DSU) to solve it. We calculate the weight and build edges for all points. Then sort the array in an increasing order. For each edge, we check if two points are united or not. If not, we unite them and and the cost.

For more, please see [Kruskal's Algorithm](https://en.wikipedia.org/wiki/Kruskal's\_algorithm).

<details>

<summary>DSU Template</summary>

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
```

</details>

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int minCostConnectPoints(vector<vector<int>>& points) {
        int n = points.size(); 
        vector<array<int, 3>> edges;
        // build all the edges
        for(int i = 0; i < n; i++) {
            for(int j = i + 1; j < n; j++) {
                int w = abs(points[i][0] - points[j][0]) + abs(points[i][1] - points[j][1]);
                // put w first - as we want to sort by weight
                edges.push_back({w, i, j});
            }
        }
        // init dsu
        dsu d(n);
        // sort by weight - as we choose the shortest edge for each round
        sort(edges.begin(), edges.end());
        int ans = 0;
        for (auto x : edges) {
            // unite both point and add the weight
            if (d.unite(x[1], x[2])) ans += x[0];
        }
        return ans;
    }
};
```
