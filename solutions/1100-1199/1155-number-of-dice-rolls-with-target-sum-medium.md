---
description: >-
  Author: @wkw | https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/
---

# 1155 - Number of Dice Rolls With Target Sum (Medium)

## Problem Link

https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/

## Problem Statement

You have `n` dice and each die has `k` faces numbered from `1` to `k`.

Given three integers `n`, `k`, and `target`, return _the number of possible ways (out of the_ `kn` _total ways) to roll the dice so the sum of the face-up numbers equals_ `target`. Since the answer may be too large, return it **modulo** `1e9 + 7`.

**Example 1:**

```
Input: n = 1, k = 6, target = 3
Output: 1
Explanation: You throw one die with 6 faces.
There is only one way to get a sum of 3.
```

**Example 2:**

```
Input: n = 2, k = 6, target = 7
Output: 6
Explanation: You throw two dice, each with 6 faces.
There are 6 ways to get a sum of 7: 1+6, 2+5, 3+4, 4+3, 5+2, 6+1.
```

**Example 3:**

```
Input: n = 30, k = 30, target = 500
Output: 222616187
Explanation: The answer must be returned modulo 1e9 + 7.
```

**Constraints:**

- `1 <= n, k <= 30`
- `1 <= target <= 1000`

## Approach 1: Dynamic Programming

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int numRollsToTarget(int n, int k, int target) {
        int M = 1e9 + 7;
        // dp[i][j]: number of ways to reach target j using i dice
        vector<vector<int>> dp(n + 1, vector<int>(target + 1));
        // there is 1 way to reach 0 using 0 dice
        dp[0][0] = 1;
        // iterate each dice
        for (int i = 1; i <= n; i++) {
            // iterate each target
            for (int j = 1; j <= target; j++) {
                // iterate each face
                for (int f = 1; f <= k; f++) {
                    // we can use this f only if we add it
                    // the sum won't exceed target
                    if (j - f >= 0) {
                        (dp[i][j] += dp[i - 1][j - f]) %= M;
                    }
                }
            }
        }
        return dp[n][target];
    }
};
```
