---
description: 'Author: @wingkwong | https://leetcode.com/problems/number-of-good-paths/'
tags: [Array, Tree, Union Find, Graph]
---

# 2421 - Number of Good Paths (Hard) 

## Problem Link

https://leetcode.com/problems/number-of-good-paths/

## Problem Statement

There is a tree (i.e. a connected, undirected graph with no cycles) consisting of `n` nodes numbered from `0` to `n - 1` and exactly `n - 1` edges.

You are given a **0-indexed** integer array `vals` of length `n` where `vals[i]` denotes the value of the `ith` node. You are also given a 2D integer array `edges` where `edges[i] = [ai, bi]` denotes that there exists an **undirected** edge connecting nodes `ai` and `bi`.

A **good path** is a simple path that satisfies the following conditions:

1. The starting node and the ending node have the **same** value.
2. All nodes between the starting node and the ending node have values **less than or equal to** the starting node (i.e. the starting node's value should be the maximum value along the path).

Return *the number of distinct good paths*.

Note that a path and its reverse are counted as the **same** path. For example, `0 -> 1` is considered to be the same as `1 -> 0`. A single node is also considered as a valid path.

**Example 1:**

```
Input: vals = [1,3,2,1,3], edges = [[0,1],[0,2],[2,3],[2,4]]
Output: 6
Explanation: There are 5 good paths consisting of a single node.
There is 1 additional good path: 1 -> 0 -> 2 -> 4.
(The reverse path 4 -> 2 -> 0 -> 1 is treated as the same as 1 -> 0 -> 2 -> 4.)
Note that 0 -> 2 -> 3 is not a good path because vals[2] > vals[0].
```

**Example 2:**

```
Input: vals = [1,1,2,2,3], edges = [[0,1],[1,2],[2,3],[2,4]]
Output: 7
Explanation: There are 5 good paths consisting of a single node.
There are 2 additional good paths: 0 -> 1 and 2 -> 3.
```

**Example 3:**

```
Input: vals = [1], edges = []
Output: 1
Explanation: The tree consists of only one node, so there is one good path.
```

**Constraints:**

- `n == vals.length`
- `1 <= n <= 3 * 10^4`
- `0 <= vals[i] <= 105`
- `edges.length == n - 1`
- `edges[i].length == 2`
- `0 <= ai, bi < n`
- `ai != bi`
- `edges` represents a valid tree.

## Approach 1: DSU

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    // dsu
    vector<int> root;
    int get(int x) {
        return x == root[x] ? x : (root[x] = get(root[x]));
    }
    int numberOfGoodPaths(vector<int>& vals, vector<vector<int>>& edges) {
        // each node is a good path
        int n = vals.size(), ans = n;
        vector<int> cnt(n, 1);
        root.resize(n);
        // each element is in its own group initially
        for (int i = 0; i < n; i++) root[i] = i;
        // sort by vals
        sort(edges.begin(), edges.end(), [&](const vector<int>& x, const vector<int>& y) {
           return max(vals[x[0]], vals[x[1]]) < max(vals[y[0]], vals[y[1]]);
        });
        // iterate each edge
        for (auto e : edges) {
            int x = e[0], y = e[1];
            // get the root of x
            x = get(x);
            // get the root of y
            y = get(y);
            // if their vals are same, 
            if (vals[x] == vals[y]) {
                // then there would be cnt[x] * cnt[y] good paths
                ans += cnt[x] * cnt[y];
                // unite them
                root[x] = y;
                // add the count of x to that of y
                cnt[y] += cnt[x];
            } else if (vals[x] > vals[y]) {
                // unite them
                root[y] = x;
            } else {
                // unite them
                root[x] = y;
            }
        }
        return ans;
    }
};

// [3,2]
// [1,2,3]

// 3 - 1 - 2 - 3
// 3 - 2 - 3
// 3 - 2 - 1 - 3
// 3 - 2 - 2 - 3
// 3 - 2 - 1 - 2 - 3
// 3 - 3
// good paths += cnt[x] * cnt[y]
```

</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@wingkwong"/>

```java
class Solution {
    // dsu
    int[] root;
    int[] cnt;
    int get(int x) {
        return x == root[x] ? x : (root[x] = get(root[x]));
    }

    public int numberOfGoodPaths(int[] vals, int[][] edges) {
        // each node is a good path
        int n = vals.length, ans = n;
        cnt = new int[n];
        root = new int[n];
        // each element is in its own group initially
        for (int i = 0; i < n; i++) {
            root[i] = i;
            cnt[i] = 1;
        }
        // sort by vals
        List<int[]> edgesList = new ArrayList<>();
        for(int i = 0; i < edges.length; i++) edgesList.add(edges[i]);
        Collections.sort(edgesList, new Comparator<int[]>() {
            public int compare(int[] x, int[] y) {
                int a = Math.max(vals[x[0]], vals[x[1]]);
                int b = Math.max(vals[y[0]], vals[y[1]]);
                if(a < b) return -1;
                else if(a > b) return 1;
                else return 0;
            }
        });

        // iterate each edge
        for (int[] e : edgesList) {
            int x = e[0], y = e[1];
            // get the root of x
            x = get(x);
            // get the root of y
            y = get(y);
            // if their vals are same, 
            if (vals[x] == vals[y]) {
                // then there would be cnt[x] * cnt[y] good paths
                ans += cnt[x] * cnt[y];
                // unite them
                root[x] = y;
                // add the count of x to that of y
                cnt[y] += cnt[x];
            } else if (vals[x] > vals[y]) {
                // unite them
                root[y] = x;
            } else {
                // unite them
                root[x] = y;
            }
        }
        return ans;
    }
}
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@wingkwong"/>

```py
class Solution:
    def numberOfGoodPaths(self, vals: List[int], edges: List[List[int]]) -> int:
        n = len(vals)
        # each node is a good path
        ans = n
        # sort by vals
        edges.sort(key=lambda x: max(vals[x[0]], vals[x[1]]))
        
        # dsu
        cnt = [1] * n
        root = [i for i in range(n)]
        def get(x):
            # recursively get the root element
            if x == root[x]:
                return x 
            else:
                root[x] = get(root[x])
                return root[x]
        
        # iterate each edge
        for x, y in edges:
            # get the root of x
            x = get(x)
            # get the root of y
            y = get(y)
            # if their vals are same
            if vals[x] == vals[y]:
                # then there would be cnt[x] * cnt[y] good paths
                ans += cnt[x] * cnt[y]
                # unite them
                root[x] = y
                # add the count of x to that of y
                cnt[y] += cnt[x]
            elif vals[x] > vals[y]:
                # unite them
                root[y] = x
            else:
                # unite them
                root[x] = y
        return ans

```

</TabItem>

<TabItem value="rs" label="Rust">
<SolutionAuthor name="@wingkwong"/>

```rs
use std::cmp::max;

impl Solution {
    pub fn number_of_good_paths(vals: Vec<i32>, edges: Vec<Vec<i32>>) -> i32 {
        let n = vals.len();
        // each node is a good path
        let mut ans = n as i32;
        let mut edges = edges;
        // sort by vals
        edges.sort_by(|x, y| max(vals[x[0] as usize], vals[x[1] as usize]).cmp(&max(vals[y[0] as usize], vals[y[1] as usize])));

        // dsu
        let mut cnt = vec![1; n];
        // each element is in its own group initially
        let mut root = (0 .. n).collect();
        fn get(x: usize, root: &mut Vec<usize>) -> usize {
            if x == root[x] {
                return x;
            }
            return get(root[x], root);
        }
        // iterate each edge
        for e in edges {
            // get the root of x
            let x = get(e[0] as usize, &mut root);
            // get the root of y
            let y = get(e[1] as usize, &mut root);
            // if their vals are same, 
            if vals[x] == vals[y] {
                // then there would be cnt[x] * cnt[y] good paths
                ans += cnt[x] as i32 * cnt[y] as i32;
                // unite them
                root[x] = y;
                // add the count of x to that of y
                cnt[y] += cnt[x];
            } else if vals[x] > vals[y] {
                // unite them
                root[y] = x;
            } else {
                // unite them
                root[x] = y;
            }
        }
        ans
    }
}
```

</TabItem>
</Tabs>