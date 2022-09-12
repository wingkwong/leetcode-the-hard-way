---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock/
---

# 2110 - Number of Smooth Descent Periods of a Stock (Medium)

## Problem Link

https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock/

## Problem Statement

You are given an integer array `prices` representing the daily price history of a stock, where `prices[i]` is the stock price on the `ith` day.

A **smooth descent period** of a stock consists of **one or more contiguous** days such that the price on each day is **lower** than the price on the **preceding day** by **exactly** `1`. The first day of the period is exempted from this rule.

Return _the number of **smooth descent periods**_.

**Example 1:**

```
Input: prices = [3,2,1,4]
Output: 7
Explanation: There are 7 smooth descent periods:
[3], [2], [1], [4], [3,2], [2,1], and [3,2,1]
Note that a period with one day is a smooth descent period by the definition.
```

**Example 2:**

```
Input: prices = [8,6,7,7]
Output: 4
Explanation: There are 4 smooth descent periods: [8], [6], [7], and [7]
Note that [8,6] is not a smooth descent period as 8 - 6 ≠ 1.
```

**Example 3:**

```
Input: prices = [1]
Output: 1
Explanation: There is 1 smooth descent period: [1]
```

**Constraints:**

* `1 <= prices.length <= 10^5`
* `1 <= prices[i] <= 10^5`

## Approach 1: Dynamic Programming

Let `dp[i]` be the number of smooth descent periods ended at day `i`. First we can initialise `dp[i] = 1` for each `i`. This is true because the minimum smooth descent period is 1 which is itself. Then we can iterate `prices` and check if the difference between previous price and current price is exactly 1 or not. If so, we can contribute `dp[i - 1]` to `dp[i]`.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    long long getDescentPeriods(vector<int>& prices) {
        int n = prices.size();
        long long ans = 0;
        vector<int> dp(n, 1);
        for (int i = 0; i < n; i++) {
            if (i > 0 && prices[i - 1] - prices[i] == 1) {
                dp[i] += dp[i - 1];
            }
            ans += dp[i];
        }
        return ans;
    }
};
```

## Approach 2: Math

For a non-increasing contiguous segement with length `l`, it contributes `1 + 2 + 3 + ... + l = (l + 1) * l / 2` subarrays.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    long long getDescentPeriods(vector<int>& prices) {
        int n = prices.size();
        long long ans = 0, i = 0;
        while (i < n) {
            long long l = 1;
            i++;
            while (i < n && prices[i - 1] - prices[i] == 1) i++, l++;
            ans += (l + 1) * l / 2;
        }
        return ans;
    }
};
```
