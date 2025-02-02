---
description: >-
  Author: @wkw | https://leetcode.com/problems/longest-path-with-different-adjacent-characters/
---

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

- `n == parent.length == s.length`
- `1 <= n <= 10^5`
- `0 <= parent[i] <= n - 1` for all `i >= 1`
- `parent[0] == -1`
- `parent` represents a valid tree.
- `s` consists of only lowercase English letters.

## Approach 1: DFS

The first observation is that node can have at most two longest chains from child nodes. If a node have more than two chains, we only need to take the longest two.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw" />

```cpp
// observation:
// a node can have at most two longest chains from child nodes
// if a node have more than two chains, take the longest two
// i.e. one parent node + longest + second longest

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
            // store the longest one and the second longest
            int longest = 0, secondLongest = 0;
            for (auto v : g[u]) {
                // calculate the value first
                int val = dfs(v);
                // if their charachters are not same
                if (s[u] ^ s[v]) {
                    // then find out longest & secondLongest
                    if (val > secondLongest) secondLongest = val;
                    if (secondLongest > longest) swap(longest, secondLongest);
                }
            }
            // update ans
            // the value would be longest + secondLongest + 1, i.e.
            // the length of both chain (longest & secondLongest) + itself
            ans = max(ans, longest + secondLongest + 1);
            // take the longest one plus itself
            return longest + 1;
        };
        // 0 must be the root
        dfs(0);
        return ans;
    }
};
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def longestPath(self, parent: List[int], s: str) -> int:
        ans = 0
        n = len(parent)
        g = [[] for _ in range(n)]
        # build the graph
        for i in range(n):
            if parent[i] != -1:
                g[parent[i]].append(i)

        def dfs(u):
            nonlocal ans
            # store the longest one and the second longest
            longest = 0
            secondLongest = 0
            for v in g[u]:
                # calculate the value first
                val = dfs(v)
                # if their charachters are not same
                if s[u] != s[v]:
                    # then find out longest & secondLongest
                    if val > secondLongest:
                        secondLongest = val
                    if secondLongest > longest:
                        longest, secondLongest = secondLongest, longest

            # update ans
            # the value would be longest + secondLongest + 1, i.e.
            # the length of both chain (longest & secondLongest) + itself
            ans = max(ans, longest + secondLongest + 1)
            # take the longest one plus itself
            return longest + 1

        # 0 must be the root
        dfs(0)
        return ans
```

</TabItem>
</Tabs>
