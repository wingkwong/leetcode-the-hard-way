---
description: 'Author: @wkw | https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/'
tags: [Depth-First Search, Breadth-First Search, Union Find, Graph]
---

# 0323 - Number of Connected Components in an Undirected Graph (Medium)

## Problem Link

https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/

## Problem Statement

You have a graph of `n` nodes. You are given an integer `n` and an array `edges` where `edges[i] = [ai, bi]` indicates that there is an edge between `ai` and `bi` in the graph.

Return _the number of connected components in the graph_.

**Example 1:**

```
Input: n = 5, edges = [[0,1],[1,2],[3,4]]
Output: 2
```

**Example 2:**

```
Input: n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]
Output: 1
```

**Constraints:**

- `1 <= n <= 2000`
- `1 <= edges.length <= 5000`
- `edges[i].length == 2`
- `0 <= ai <= bi < n`
- `ai != bi`
- There are no repeated edges.

## Approach 1: DSU

Eventually the connected components would belong to its own group. We can use DSU to unite those nodes and count how many groups at the end. See [Disjoint Set Union (DSU)](../../tutorials/graph-theory/disjoint-set-union) for basic understanding.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

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
    int countComponents(int n, vector<vector<int>>& edges) {
        // init dsu
        dsu d = dsu(n);
        // unite each node
        for (auto x: edges) d.unite(x[0], x[1]);
        // return the number of connected components
        return d.cnt;
    }
};
```

</TabItem>
</Tabs>
