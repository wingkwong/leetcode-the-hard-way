---
description: 'Author: @wkw | https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/'
tags: [Array, Dynamic Programming, Bit Manipulation, Bitmask]
---

# 1434 - Number of Ways to Wear Different Hats to Each Other (Hard)

## Problem Statement

There are `n` people and `40` types of hats labeled from `1` to `40`.

Given a 2D integer array `hats`, where `hats[i]` is a list of all hats preferred by the `ith` person.

Return _the number of ways that the n people wear different hats to each other_.

Since the answer may be too large, return it modulo `1e9 + 7`.

**Example 1:**

```
Input: hats = [[3,4],[4,5],[5]]
Output: 1
Explanation: There is only one way to choose hats given the conditions.
First person choose hat 3, Second person choose hat 4 and last one hat 5.
```

**Example 2:**

```
Input: hats = [[3,5,1],[3,5]]
Output: 4
Explanation: There are 4 ways to choose hats:
(3,5), (5,3), (1,3) and (1,5)
```

**Example 3:**

```
Input: hats = [[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4]]
Output: 24
Explanation: Each person can choose hats labeled from 1 to 4.
Number of Permutations of (1,2,3,4) = 24.
```

**Constraints:**

- `n == hats.length`
- `1 <= n <= 10`
- `1 <= hats[i].length <= 40`
- `1 <= hats[i][j] <= 40`
- `hats[i]` contains a list of **unique** integers.

## Approach 1: Dynamic Programming

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int n, M = 1e9 + 7;

    int dfs(vector<vector<int>>& hatsToPeople, vector<vector<int>>& dp, int hat, int mask) {
        // if the mask is able to reache the end state,
        // i.e. all people can wear some hats, then return 1
        if (mask == (1 << n) - 1) return 1;
        // if the current hat is out of 40, return 0
        if (hat > 40) return 0;
        // if we calculated the result before, return it directly
        if (dp[mask][hat] != -1) return dp[mask][hat];
        // get number of ways if we skip this hat
        long res = dfs(hatsToPeople, dp, hat + 1, mask);
        // since the current hat can be assigned to different people
        // we try all of them
        for (auto& person: hatsToPeople[hat]) {
            // if this person has been assigned with a hat, then skip it
            if ((1 << person) & mask) continue;
            // then we can assign this hat to this person
            (res += dfs(hatsToPeople, dp, hat + 1, mask | (1 << person))) %= M;
        }
        // memoize the result
        return dp[mask][hat] = res;
    }

    int numberWays(vector<vector<int>>& hats) {
        // number of people
        n = hats.size();
        // for each hat, we map to different people
        vector<vector<int>> hatsToPeople(41);
        // iterate each person
        for (int i = 0; i < n; i++) {
            // iterate i-th person's preferred hats
            for (auto &h : hats[i]) {
                // assign hat h to person i
                hatsToPeople[h].push_back(i);
            }
        }
        // init dp
        vector<vector<int>> dp(1 << n, vector<int>(41, -1));
        // dfs
        return dfs(hatsToPeople, dp, 1, 0);
    }
};
```
