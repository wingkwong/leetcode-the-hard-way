---
description: >-
  Author: @wingkwong, @ColeB2 |
  https://leetcode.com/problems/min-cost-to-connect-all-points/''
tags: [Array, Union Find, Graph, Minimum Spanning Tree]
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
* `-10^6 <= xi, yi <= 10^6`
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

<Tabs>
<TabItem value="cpp" label="C++">
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

</TabItem>
</Tabs>

## Approach 2: Prim's Algorithm

[Prim's Algorithm](https://en.wikipedia.org/wiki/Prim%27s_algorithm) to create a minimum spanning tree. Prim's algorithm works by building a tree vertex by vertex, selecting the minimum weighted edge of the next vertex not in the tree.

There are multiple ways to solve which edge it the min edge to select for the next vertex. We can use an adjaceny matrix, which would matrix that holds the weight of all edges between all vertices.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    # Prim's Algorithm
    # For this version of Prim's algorithm, we will use a hash map to map
    # our vertex to the distance of the closest point. We will then use
    # this hash map to track which point is closest to our MST.
    # Time: O(n^2). Where n is the number of points. For each point
    # we are going to have to check its distance to all other points.
    # Space: O(n) our adjancency list will only hold n points inside.
    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        # function to calculate manhattan distances.
        manhattan = lambda x1, x2, y1, y2: abs(x1 - x2) + abs(y1 - y2)
        # Adjaceny list --> dictionary that maps key:value
        # key: (x,y) coords. Dictionary gives up O(1) acces to points.
        # value: Distance to the closest point.
        # initialize distance of 0 for first point, as that is our
        # starting point, and then infinity for the remaining points.
        adj_list = {(x,y): float('inf') if i else 0 for i, (x,y) in enumerate(points)}
        min_cost = 0
        # While our adjacency list still has points inside it.
        while adj_list:
            # Initialize x,y and min_point variables to help us
            # track which point we need to select to add to our tree.
            x, y, min_point = None, None, float('inf')
            # loop through all our points in the adjacency list.
            # k = (x,y) coords of that point. 
            # v = manhattan distance of nearest point.
            for k, v in adj_list.items():
                # If this point is closer than selected point.
                if v < min_point:
                    # Select this point instead.
                    (x, y), min_point = k, v
            # Looped all points and selected closest, update min_cost and
            # remove it from our adjacency list.
            min_cost += min_point
            adj_list.pop((x,y))
            # Loop the remaining points, and update manhattan distances.
            for xi, yi in adj_list.keys():
                # Get (xi,yi) manhattan distance value
                current_val = adj_list[(xi,yi)]
                # calculate how close (xi,yi) is to (x,y) we found above.
                updated_val = manhattan(xi,x,yi,y)
                # update manhattan distance to the smaller of too values.
                adj_list[(xi,yi)] = min(current_val,  updated_val)
        return min_cost
```

</TabItem>
</Tabs>

