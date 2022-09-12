---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/
---

# 1866 - Number of Ways to Rearrange Sticks With K Sticks Visible (Hard)

## Problem Link

https://leetcode.com/problems/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/

## Problem Statement

There are `n` uniquely-sized sticks whose lengths are integers from `1` to `n`. You want to arrange the sticks such that **exactly** `k` sticks are **visible** from the left. A stick is **visible** from the left if there are no **longer** sticks to the **left** of it.

* For example, if the sticks are arranged `[1,3,2,5,4]`, then the sticks with lengths `1`, `3`, and `5` are visible from the left.

Given `n` and `k`, return _the **number** of such arrangements_. Since the answer may be large, return it **modulo** `10^9 + 7`.

**Example 1:**

```
Input: n = 3, k = 2
Output: 3
Explanation: [1,3,2], [2,3,1], and [2,1,3] are the only arrangements such that exactly 2 sticks are visible.
The visible sticks are underlined.
```

**Example 2:**

```
Input: n = 5, k = 5
Output: 1
Explanation: [1,2,3,4,5] is the only arrangement such that all 5 sticks are visible.
The visible sticks are underlined.
```

**Example 3:**

```
Input: n = 20, k = 11
Output: 647427950
Explanation: There are 647427950 (mod 109 + 7) ways to rearrange the sticks such that exactly 11 sticks are visible.
```

**Constraints:**

* `1 <= n <= 1000`
* `1 <= k <= n`

## Approach 1: Dynamic Programming

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int rearrangeSticks(int n, int k) {
        int M = 1e9 + 7;
        // let dp[i][j] be the number of such arrangements
        // for length from 1 to i with exactly j sticks visible from the left
        vector<vector<int>> dp(n + 1, vector<int>(k + 1, -1));
        function<int(int,int)> dfs = [&](int i, int j) {
            // base case
            if (i < j || j == 0) return 0;
            // there is one way, i.e. sort those i numbers
            if (i == j) return 1;
            // calculated before - return it directly
            if (dp[i][j] != -1) return dp[i][j];
            // init res
            long long res = 0;
            // if we put the tallest number from the right
            // then we look for j - 1 sticks visible for i - 1 size
            res = (res + dfs(i - 1, j - 1)) % M;
            // if we dont put the tallest one, 
            // we have (i - 1) choices to choose
            // then we look for j sticks visible i - 1 size
            res = (res + 1LL * dfs(i - 1, j) * (i - 1) % M) % M;
            // memoize the result
            return dp[i][j] = res;
        };
        return dfs(n, k);
    }
};
```
