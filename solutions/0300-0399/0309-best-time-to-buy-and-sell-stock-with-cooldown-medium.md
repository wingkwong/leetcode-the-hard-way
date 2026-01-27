---
description: 'Author: @ColeB2 | https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/'
tags: [Array, Dynamic Programming]
---

# 0309 - Best Time to Buy and Sell Stock with Cooldown (Medium)

## Problem Link

https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/

## Problem Statement

You are given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day.

Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:

- After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).

**Note**: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

**Example 1:**

```
Input: prices = [1,2,3,0,2]
Output: 3
Explanation: transactions = [buy, sell, cooldown, buy, sell]
```

**Example 2:**

```
Input: prices = [1]
Output: 0
```

**Constraints:**

- `1 <= prices.length <= 5000`
- `0 <= prices[i] <= 1000`

## Approach 1: Dynamic Programming

A tricky question, which requires us to track 3 states.

1. We are ready to buy stock, no need to wait for a cool down.
2. We are ready to sell stock,
3. We sold stock, and now need to cool down.

We can track these with 3 dp arrays, $$dp_buy$$, $$dp_sell$$, $$dp_cool$$.

1. $$dp\_buy$$ will represent the max profit if we buy today, and can be updated by subtracting the price of stock today from $$dp_cool$$.
2. $$dp\_sell$$ will represent the max profit we could have if we sold today, and can be updated by subtracting the price of today's stock from the max profit from previous buy days, which will be a variable we can track.
3. $$dp\_cool$$ will represent the maximum profit we could have if we did nothing today, which will just be updated based on the max profit from all the dp arrays from the day before.

By iterating through all the prices from $$1$$ to $$n$$ and updating our dp arrays, we can find the max profit in linear time.

Time Complexity: $$O(n)$$, where n is the length of prices. We must iterate through the list and perform constant time operations on each iteration.

Space Complexity: $$O(n)$$, where n is the length of prices. We maintain 3 separate dynamic programming arrays.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # initialize our variables, n length of prices, and our 3
        # dynamic programming arrays.
        n = len(prices)
        # dp_buy represents the max profit on ith day if we bought stock.
        dp_buy = [0] * n
        # dp_sell reps. the max profit on the ith day if we sold stock.
        dp_sell = [0] * n
        # dp_cool reps. the max profit on the ith day if we do nothing.
        dp_cool = [0] * n
        # initialize dp_buy as if we bought first stock.
        dp_buy[0] = - prices[0]
        #dp_sell, first stock can't be sold, so we initialize -inf.
        dp_sell[0] = float('-inf')
        # Max profit from our buy array so far. Used for calculating our
        # max sell profit.
        max_prev_buy = dp_buy[0]
        # iterate all prices from 1 - n as we already handles 0th day.
        for i in range(1, n):
            # only buy after cool down, update based on max profit from
            # cooldown yesterday and price of today's stock.
            dp_buy[i] = dp_cool[i - 1] - prices[i]
            # we calculate dp_sell of today base on the max profit from
            # any previous buy day which we store instead of constantly
            # getting max price from dp_buy[:i].
            dp_sell[i] = max_prev_buy + prices[i]
            # do nothing, so we can update date dp_cool based of the
            # of any of the dp days yesterday values.
            dp_cool[i] = max(dp_cool[i - 1], dp_buy[i - 1], dp_sell[i - 1])
            # update our max_prev_buy with today's value.
            max_prev_buy = max(max_prev_buy, dp_buy[i])
        # return max profit, since the buy will always finish with us
        # buying stock on last day, no need to involve it as it will
        # always be less than the last day of dp_sell and dp_cool.
        return max(dp_sell[-1], dp_cool[-1])
```

</TabItem>
</Tabs>
