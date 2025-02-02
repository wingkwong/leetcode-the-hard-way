---
description: 'Author: @ColeB2 | https://leetcode.com/problems/coin-change/'
tags: [Array, Dynamic Programming, Breadth-First Search]
---

# 0322 - Coin Change (Medium)

## Problem Link

https://leetcode.com/problems/coin-change/

## Problem Statement

You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.

Return _the fewest number of coins that you need to make up that amount_. If that amount of money cannot be made up by any combination of the coins, return `-1`.

You may assume that you have an infinite number of each kind of coin.

**Example 1:**

```
Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
```

**Example 2:**

```
Input: coins = [2], amount = 3
Output: -1
```

**Example 3:**

```
Input: coins = [1], amount = 0
Output: 0
```

**Constraints:**

- `1 <= coins.length <= 12`
- `1 <= coins[i] <= 2^31 - 1`
- `0 <= amount <= 10^4`

## Approach 1: Dynamic Programming

We can create a $$dp$$ array of length $$amount + 1$$ to represent all the ways we can make change from $$0$$ to $$amount$$, then solve the ways we can make each amount.

We can do this by initializing the array with a number larger than the amount ($$amount$$ using all $$1$$ coins would reach size $$amount$$), and give the $$0$$ position of the array a value of $$0$$.

Then we can loop through all amounts, and for each amount, loop through all the coins, and updating the amount at that position with either its current value, $$dp[i]$$ or the value from $$amount - coin$$ incremented by $$1$$.

Time Complexity: $$O(amount + len(coins))$$. We are going to iterate over each amount, and for each amount, iterate through each coin.

Space Complexity: $$O(amount)$$. We are going to create an array of size $$amount$$ to hold the number of ways we can create each amount.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        # initialize dp array, we will use float('inf') as an initial
        # value, any value over the largest value of amount would work.
        # The array shows the number of ways we can make coins for each
        # value from 0 to amount + 1, which would be our amount.
        dp = [float('inf')] * (amount + 1)
        # The number of ways we can make change for 0.
        dp[0] = 0
        # loop over the dp array, we already handled 0.
        for i in range(1, len(dp)):
            # loop through each coin
            for coin in coins:
                # i - coin is >= 0, we can use it to determine amount
                if i - coin >= 0:
                    # the way to make coins will be either the min of
                    # the current way to make coins, dp[i] or
                    # the number of ways it took to make coins at the
                    # current amount minus the coin we are using + 1.
                    dp[i] = min(dp[i], 1 + dp[i-coin])
        # return the last number in the array, which will be amount.
        # do so iff that amount does not equal inf.
        return dp[-1] if dp[-1] != float('inf') else -1
```

</TabItem>
</Tabs>
