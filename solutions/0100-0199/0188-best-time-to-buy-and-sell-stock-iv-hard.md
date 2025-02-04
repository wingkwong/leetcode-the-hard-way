---
description: 'Author: @wkw | https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/'
tags: [Array, Dynamic Programming]
---

# 0188 - Best Time to Buy and Sell Stock IV (Hard)

## Problem Statement

You are given an integer array `prices` where `prices[i]` is the price of a given stock on the `ith` day, and an integer `k`.

Find the maximum profit you can achieve. You may complete at most `k` transactions.

**Note:** You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

**Example 1:**

```
Input: k = 2, prices = [2,4,1]
Output: 2
Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.
```

**Example 2:**

```
Input: k = 2, prices = [3,2,6,5,0,3]
Output: 7
Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4. Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
```

**Constraints:**

- `0 <= k <= 100`
- `0 <= prices.length <= 1000`
- `0 <= prices[i] <= 1000`

## Approach 1: DP

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int maxProfit(int k, vector<int>& prices) {
        // no transaction, no profit
        if (k == 0) return 0;
        // dp[k][0] = min cost you need to spend at most k transactions
        // dp[k][1] = max profit you can achieve at most k transactions
        vector<vector<int>> dp(k + 1, vector<int>(2));
        for (int i = 0; i <= k; i++) dp[i][0] = INT_MAX;
        for (auto& price : prices) {
            for (int i = 1; i <= k; i++) {
                // price - dp[i - 1][1] is how much you need to spend
                // i.e use the profit you earned from previous transaction to buy the stock
                // we want to minimize it
                dp[i][0] = min(dp[i][0], price - dp[i - 1][1]);
                // price - dp[i][0] is how much you can achieve from previous min cost
                // we want to maximize it
                dp[i][1] = max(dp[i][1], price - dp[i][0]);
            }
        }
        // return max profit at most k transactions
        // or you can use `return dp.back()[1];`
        return dp[k][1];
    }
};
```

<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def maxProfit(self, k: int, prices: List[int]) -> int:
        # no transaction, no profit
        if k == 0: return 0
        # dp[k][0] = min cost you need to spend at most k transactions
        # dp[k][1] = max profit you can achieve at most k transactions
        dp = [[1005, 0] for _ in range(k + 1)]
        for price in prices:
            for i in range(1, k + 1):
                # price - dp[i - 1][1] is how much you need to spend
                # i.e use the profit you earned from previous transaction to buy the stock
                # we want to minimize it
                dp[i][0] = min(dp[i][0], price - dp[i - 1][1])
                # price - dp[i][0] is how much you can achieve from previous min cost
                # we want to maximize it
                dp[i][1] = max(dp[i][1], price - dp[i][0])
        # return max profit at most k transactions
        return dp[-1][1]
```

<SolutionAuthor name="@wkw"/>

```java
class Solution {
    public int maxProfit(int k, int[] prices) {
        // no transaction, no profit
        if (k == 0) return 0;
        // dp[k][0] = min cost you need to spend at most k transactions
        // dp[k][1] = max profit you can achieve at most k transactions
        int [][] dp = new int[k + 1][2];
        for (int i = 0; i <= k; i++) dp[i][0] = 1000;
        for (int i = 0; i < prices.length; i++) {
            for (int j = 1; j <= k; j++) {
                // price - dp[i - 1][1] is how much you need to spend
                // i.e use the profit you earned from previous transaction to buy the stock
                // we want to minimize it
                dp[j][0] = Math.min(dp[j][0], prices[i] - dp[j - 1][1]);
                // price - dp[i][0] is how much you can achieve from previous min cost
                // we want to maximize it
                dp[j][1] = Math.max(dp[j][1], prices[i] - dp[j][0]);
            }
        }
        // return max profit at most k transactions
        return dp[k][1];
    }
}
```
