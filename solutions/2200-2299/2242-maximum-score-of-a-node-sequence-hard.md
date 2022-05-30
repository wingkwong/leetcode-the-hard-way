---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/maximum-score-of-a-node-sequence/
---

# 2242 - Maximum Score of a Node Sequence (Hard)

## Problem Statement

There is an **undirected** graph with `n` nodes, numbered from `0` to `n - 1`.

You are given a **0-indexed** integer array `scores` of length `n` where `scores[i]` denotes the score of node `i`. You are also given a 2D integer array `edges` where `edges[i] = [ai, bi]` denotes that there exists an **undirected** edge connecting nodes `ai` and `bi`.

A node sequence is **valid** if it meets the following conditions:

* There is an edge connecting every pair of **adjacent** nodes in the sequence.
* No node appears more than once in the sequence.

The score of a node sequence is defined as the **sum** of the scores of the nodes in the sequence.

Return _the **maximum score** of a valid node sequence with a length of_ `4`_._ If no such sequence exists, return __ `-1`.



**Example 1:**

![](https://assets.leetcode.com/uploads/2022/04/15/ex1new3.png)

```
Input: scores = [5,2,9,8,4], edges = [[0,1],[1,2],[2,3],[0,2],[1,3],[2,4]]
Output: 24
Explanation: The figure above shows the graph and the chosen node sequence [0,1,2,3].
The score of the node sequence is 5 + 2 + 9 + 8 = 24.
It can be shown that no other node sequence has a score of more than 24.
Note that the sequences [3,1,2,0] and [1,0,2,3] are also valid and have a score of 24.
The sequence [0,3,2,4] is not valid since no edge connects nodes 0 and 3.
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2022/03/17/ex2.png)

```
Input: scores = [9,20,6,4,11,12], edges = [[0,3],[5,3],[2,4],[1,3]]
Output: -1
Explanation: The figure above shows the graph.
There are no valid node sequences of length 4, so we return -1.
```

**Constraints:**

* `n == scores.length`
* `4 <= n <= 5 * 10^4`
* `1 <= scores[i] <= 10^8`
* `0 <= edges.length <= 5 * 10^4`
* `edges[i].length == 2`
* `0 <= ai, bi <= n - 1`
* `ai != bi`
* There are no duplicate edges.

## Approach 1: Find the neighbours

The key idea is to find the best three neighbours for each node. We need to keep the order based on the scores. We can use priority queue but in C++ it is not convenient to iterate it at the end, instead we use set as it is sorted internally. After that, we just need to iterate them to find out all the combinations. However, we need to check if they are duplicate before updating the answer.

```cpp
class Solution {
public:
    int maximumScore(vector<int>& scores, vector<vector<int>>& edges) {
        int n = scores.size();
        // find the best neighbours (at most 3)
        vector<set<pair<int, int>>> m(n);
        for(auto x : edges) {
            int u = x[0], v = x[1];
            m[u].insert({scores[v], v});
            m[v].insert({scores[u], u});
            if (m[u].size() > 3) m[u].erase(m[u].begin());
            if (m[v].size() > 3) m[v].erase(m[v].begin());
        }
        // iterate each combination to find the answer
        int ans = -1;
        for (auto x : edges) {
            int u = x[0], v = x[1];
            for (auto x1 : m[u]) {
                for (auto x2 : m[v]) {
                    // skip some cases
                    if (x1.second != x2.second && x1.second != v && x2.second != u) {
                        ans = max(ans, scores[u] + scores[v] + x1.first + x2.first);
                    }
                }
            }
        }
        return ans;
    }
};
```
