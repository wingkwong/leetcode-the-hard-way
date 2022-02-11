---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/maximum-score-from-performing-multiplication-operations
---

# 1770 - Maximum Score from Performing Multiplication Operations (Medium)

## Problem Statement

You are given two integer arrays `nums` and `multipliers` **** of size `n` and `m` respectively, where `n >= m`. The arrays are **1-indexed**.

You begin with a score of `0`. You want to perform **exactly** `m` operations. On the `ith` operation **(1-indexed)**, you will:

* Choose one integer `x` from **either the start or the end** of the array `nums`.
* Add `multipliers[i] * x` to your score.
* Remove `x` from the array `nums`.

Return _the **maximum** score after performing_ `m` _operations._

**Example 1:**

```
Input: nums = [1,2,3], multipliers = [3,2,1]
Output: 14
Explanation: An optimal solution is as follows:
- Choose from the end, [1,2,3], adding 3 * 3 = 9 to the score.
- Choose from the end, [1,2], adding 2 * 2 = 4 to the score.
- Choose from the end, [1], adding 1 * 1 = 1 to the score.
The total score is 9 + 4 + 1 = 14.
```

**Example 2:**

```
Input: nums = [-5,-3,-3,-2,7,1], multipliers = [-10,-5,3,4,6]
Output: 102
Explanation: An optimal solution is as follows:
- Choose from the start, [-5,-3,-3,-2,7,1], adding -5 * -10 = 50 to the score.
- Choose from the start, [-3,-3,-2,7,1], adding -3 * -5 = 15 to the score.
- Choose from the start, [-3,-2,7,1], adding -3 * 3 = -9 to the score.
- Choose from the end, [-2,7,1], adding 1 * 4 = 4 to the score.
- Choose from the end, [-2,7], adding 7 * 6 = 42 to the score. 
The total score is 50 + 15 - 9 + 4 + 42 = 102.
```

**Constraints:**

* `n == nums.length`
* `m == multipliers.length`
* `1 <= m <= 103`
* `m <= n <= 105`
* `-1000 <= nums[i], multipliers[i] <= 1000`

## Approach 1: Dynamic Programming

This is a classic DP problem. You choose one operation out of two. The tricky part is to handle three things - the starting point of nums, the ending point of nums, and the current point of multipliers.

If we go for a 3D DP solution, it will get TLE given the constraints. Hence we need to reduce it to a 2D solution. We need the pointer at multipliers anyway so we need to think about how to use one pointer to track both starting point and the ending point.

Supposing our multipliers pointer is at index $$j$$ (0-based), that means we have multiplied $$j + 1$$elements already. If our starting point is at index $$i$$ (0-based), the ending point would be at index $$n - 1 - j  +i$$.&#x20;

Let $$dp[i][j]$$ be the maximum score where $$i$$ is the pointer at $$nums$$ and $$j$$ is the pointer at $$mult$$. When $$j$$ reaches the end of $$mult$$, then return $$0$$. If $$dp[i][j]$$has been calculated before, return it immediately. Otherwise, we have two options.&#x20;

* if we pick from the left, we got $$mult[j] * nums[i] + dfs(nums, mult, i + 1, j + 1)$$
* if we pick from the right, $$mult[j] * nums[n - 1 - j + i] + dfs(nums, mult, i, j + 1)$$

```cpp
class Solution {
public:
    int dp[1005][1005], m, n;
    int dfs(vector<int>& nums, vector<int>& mult, int i, int j) {
        // i : pointer at nums. j : pointer at mult
        // pointer j reaches the end of mult, return 0
        if (j == m) return 0; 
        // dp[i][j] has been calculated, return the result 
        if (dp[i][j] != -1) return dp[i][j];
        // take the max score from either left or right side
        return dp[i][j] = max(
            // pick from the left
            mult[j] * nums[i] + dfs(nums, mult, i + 1, j + 1),
            // pick from the right
            mult[j] * nums[n - 1 - j + i] + dfs(nums, mult, i, j + 1)
        ); 
    }
    int maximumScore(vector<int>& nums, vector<int>& multipliers) {
        n = (int) nums.size(), m = (int) multipliers.size();
        memset(dp, -1, sizeof(dp));
        return dfs(nums, multipliers, 0, 0);
    }
};
```
