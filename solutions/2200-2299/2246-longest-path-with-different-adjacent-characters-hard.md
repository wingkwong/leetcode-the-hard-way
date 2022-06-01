---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/longest-path-with-different-adjacent-characters/
---

import Authors from '@site/src/components/Authors';

# 2246 - Longest Path With Different Adjacent Characters (Hard)

## Problem Link

https://leetcode.com/problems/longest-path-with-different-adjacent-characters/

## Problem Statement

You are given a **tree** (i.e. a connected, undirected graph that has no cycles) **rooted** at node `0` consisting of `n` nodes numbered from `0` to `n - 1`. The tree is represented by a **0-indexed** array `parent` of size `n`, where `parent[i]` is the parent of node `i`. Since node `0` is the root, `parent[0] == -1`.

You are also given a string `s` of length `n`, where `s[i]` is the character assigned to node `i`.

Return _the length of the **longest path** in the tree such that no pair of **adjacent** nodes on the path have the same character assigned to them._



**Example 1:**

![](https://assets.leetcode.com/uploads/2022/03/25/testingdrawio.png)

```
Input: parent = [-1,0,0,1,1,2], s = "abacbe"
Output: 3
Explanation: The longest path where each two adjacent nodes have different characters in the tree is the path: 0 -> 1 -> 3. The length of this path is 3, so 3 is returned.
It can be proven that there is no longer path that satisfies the conditions. 
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2022/03/25/graph2drawio.png)

```
Input: parent = [-1,0,0,0], s = "aabc"
Output: 3
Explanation: The longest path where each two adjacent nodes have different characters is the path: 2 -> 0 -> 3. The length of this path is 3, so 3 is returned.
```

**Constraints:**

* `n == parent.length == s.length`
* `1 <= n <= 10^5`
* `0 <= parent[i] <= n - 1` for all `i >= 1`
* `parent[0] == -1`
* `parent` represents a valid tree.
* `s` consists of only lowercase English letters.

## Approach 1: DFS

The first observation is that node can have at most two longest chains from child nodes. If a node have more than two chains, we only need to take the longest two.

<Authors names="@wingkwing"/>

```cpp
class Solution {
public:
    int longestPath(vector<int>& parent, string s) {
        int ans = 0, n = parent.size();
        vector<vector<int>> g(n);
        // build the graph
        for (int i = 0; i < n; i++) {
            if (parent[i] ^ -1) {
                g[parent[i]].push_back(i);
            }
        }
        function<int(int)> dfs = [&](int u) {
            // store the largest one and the second largest
            int largest = 0, secondLargest = 0;
            for (auto v : g[u]) {
                // calculate the value first
                int val = dfs(v);
                // if their charachters are not same
                if (s[u] ^ s[v]) {
                    // then find out largest & secondLargest
                    if (val > secondLargest) secondLargest = val;
                    if (secondLargest > largest) swap(largest, secondLargest);
                }
            }
            // update ans 
            // the value would be largest + secondLargest + 1, i.e.
            // the length of both chain (largest & secondLargest) + itself
            ans = max(ans, largest + secondLargest + 1);
            // take the largest one plus itself
            return largest + 1;
        };
        // 0 must be the root
        dfs(0);
        return ans;
    }
};
```
