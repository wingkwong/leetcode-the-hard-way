---
description: https://leetcode.com/problems/graph-valid-tree/
---

# 0261 -Graph Valid Tree (Medium)

## Problem Statement



You have a graph of `n` nodes labeled from `0` to `n - 1`. You are given an integer n and a list of `edges` where `edges[i] = [ai, bi]` indicates that there is an undirected edge between nodes `ai` and `bi` in the graph.

Return `true` _if the edges of the given graph make up a valid tree, and_ `false` _otherwise_.

&#x20;

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/03/12/tree1-graph.jpg)

```
Input: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]
Output: true
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2021/03/12/tree2-graph.jpg)

```
Input: n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]
Output: false
```

&#x20;

**Constraints:**

* `1 <= n <= 2000`
* `0 <= edges.length <= 5000`
* `edges[i].length == 2`
* `0 <= ai, bi < n`
* `ai != bi`
* There are no self-loops or repeated edges.

## Approach 1: DSU

If a graph is a valid tree, it must have exactly `n - 1` edges. Besides, it cannot be fully connected and contain any cycles. Therefore, we just need check if there are n - 1 edges and any cycles. We can use DSU to check if element A and element B share the same parent. If so, it means that they are united, a cycle wound be there. Hence, we can return false immediately as a valid tree cannot have a  cycle. Otherwise, we unite both element. If there is no cycle after iterating all elements, then we can simply check if there are `n - 1` edges. There are other ways such as DFS and BFS to solve it.&#x20;

### C++

```cpp
class dsu {
 private:
  vector<long long> d, sz;

 public:
  dsu(long long n) {
    d = vector<long long>(n);
    sz = vector<long long>(n, 1);
    for(int i = 0; i < n; i++) d[i] = i;
  }

  long long p(long long a) {
    if (d[a] == a)
      return a;
    else
      return d[a] = p(d[a]);
  }

  long long get_sz(long long a) { return sz[p(a)]; }

  void unite(long long a, long long b) {
    long long pa = p(a);
    long long pb = p(b);
    if (pa == pb)
      return;
    else {
      sz[pb] += sz[pa];
      sz[pa] = 0;
      d[pa] = pb;
      return;
    }
    return;
  }
};

class Solution {
public:
    bool validTree(int n, vector<vector<int>>& edges) {
        dsu d(n);
        for (auto x : edges) {
            if (d.p(x[0]) == d.p(x[1])) return false;
            d.unite(x[0], x[1]);
        }
        return (int) edges.size() == n - 1;
        // return d.get_sz(0) == n;
    }
};
```
