---
description: 'Author: @wingkwong | https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/'
tags: [Depth-First Search, Union Find, Graph]
---

# 0947 - Most Stones Removed with Same Row or Column (Medium) 

## Problem Link

https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/

## Problem Statement

On a 2D plane, we place `n` stones at some integer coordinate points. Each coordinate point may have at most one stone.

A stone can be removed if it shares either **the same row or the same column** as another stone that has not been removed.

Given an array `stones` of length `n` where `stones[i] = [xi, yi]` represents the location of the `ith` stone, return *the largest possible number of stones that can be removed*.

**Example 1:**

```
Input: stones = [[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]]
Output: 5
Explanation: One way to remove 5 stones is as follows:
1. Remove stone [2,2] because it shares the same row as [2,1].
2. Remove stone [2,1] because it shares the same column as [0,1].
3. Remove stone [1,2] because it shares the same row as [1,0].
4. Remove stone [1,0] because it shares the same column as [0,0].
5. Remove stone [0,1] because it shares the same row as [0,0].
Stone [0,0] cannot be removed since it does not share a row/column with another stone still on the plane.
```

**Example 2:**

```
Input: stones = [[0,0],[0,2],[1,1],[2,0],[2,2]]
Output: 3
Explanation: One way to make 3 moves is as follows:
1. Remove stone [2,2] because it shares the same row as [2,0].
2. Remove stone [2,0] because it shares the same column as [0,0].
3. Remove stone [0,2] because it shares the same row as [0,0].
Stones [0,0] and [1,1] cannot be removed since they do not share a row/column with another stone still on the plane.
```

**Example 3:**

```
Input: stones = [[0,0]]
Output: 0
Explanation: [0,0] is the only stone on the plane, so you cannot remove it.
```

**Constraints:**

- `1 <= stones.length <= 1000`
- `0 <= xi, yi <= 10^4`
- No two stones are at the same coordinate point.

## Approach 1: DSU

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
// retrieved from https://wingkwong.github.io/leetcode-the-hard-way/tutorials/graph-theory/disjoint-set-union
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

// idea: 
// if two stones shares the same row or the same column, 
// we can use DSU to unite them together so that they are in the same group
// for each group, we want to keep at least 1 stone (i.e. others will be removed)
// hence, the answer is just the total count - the number of the connected components
class Solution {
public:
    int removeStones(vector<vector<int>>& stones) {
        int n = (int) stones.size();
        // init dsu
        dsu d = dsu(n);
        // iterate all pairs
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                // if two stones shares the same row or the same column
                if (stones[i][0] == stones[j][0] || stones[i][1] == stones[j][1]) {
                    // unite them together
                    d.unite(i, j);
                }
            }
        }
        // the max number of stones that can be removed is simply
        // the total count - the number of the connected components
        return n - d.getCount();
    }
};
```

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    vector<int> parent;
    int find(int x) {
        return parent[x] == x ? x : find(parent[x]);
    }
    
    int removeStones(vector<vector<int>>& stones) {
        int n = (int) stones.size();
        parent.resize(n + 1, 0);
        // at the beginning, each element is in its own group
        for(int i = 0; i <= n; i++) parent[i] = i;
        // iterate each pair
        for(int i = 0; i < n; i++) {
            for(int j = i + 1; j < n; j++) {
                // if two stones shares the same row or the same column
                if(stones[i][0] == stones[j][0] || stones[i][1] == stones[j][1]) {
                    // get the root of `i`
                    int a = find(i);
                    // get the root of `j`
                    int b = find(j);
                    // if they don't belong to the same group, unite them together
                    if(a != b) parent[b] = a;
                }
            }
        }
        int connected = 0;
        // if `i` is the root, then we found a new connected component
        for(int i = 0; i < n; i++) connected += parent[i] == i;
        // the max number of stones that can be removed is simply
        // the total count - the number of the connected components
        return n - connected;
    }
};
```

</TabItem>
</Tabs>