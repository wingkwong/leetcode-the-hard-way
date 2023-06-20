---
description: >-
  Author: @wingkwong, @ColeB2, @radojicic23 |
  https://leetcode.com/problems/coin-change-2
tags: [Array, Dynamic Programming]
---

# 0518 - Coin Change 2 (Medium)

## Problem Link

https://leetcode.com/problems/coin-change-2

## Problem Statement

You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.

Return _the number of combinations that make up that amount_. If that amount of money cannot be made up by any combination of the coins, return `0`.

You may assume that you have an infinite number of each kind of coin.

The answer is **guaranteed** to fit into a signed **32-bit** integer.

**Example 1:**

```
Input: amount = 5, coins = [1,2,5]
Output: 4
Explanation: there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1
```

**Example 2:**

```
Input: amount = 3, coins = [2]
Output: 0
Explanation: the amount of 3 cannot be made up just with coins of 2.
```

**Example 3:**

```
Input: amount = 10, coins = [10]
Output: 1
```

**Constraints:**

- `1 <= coins.length <= 300`
- `1 <= coins[i] <= 5000`
- All the values of `coins` are **unique**.
- `0 <= amount <= 5000`

## Approach 1: Dynamic Programming

This problem is very similar to [0377 - Combination Sum IV (Medium)](https://leetcode.com/problems/combination-sum-iv/). The only difference is the order of loops. The reason is that `(1, 1, 2)` and `(2, 1, 1)` are considered different in that problem.

We can derive the following transition if $target$ is greater or equal to $nums[i]$ where $dp[i]$ represents the number of combinations that sum up to the $target$.

$$
dp(amount)=\sum_{i=0}^n dp(amount - coins[i])
$$

Time Complexity: $$O(amount * coins.length)$$. For each coin, we are going to loop through all the values from $$0$$ to $$amount$$.

Space Complexity: $$O(amount)$$. We are going to create an array of size $$amount$$.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int change(int amount, vector<int>& coins) {
        // let dp[i] be the number of combinations that make up to i
        vector<uint> dp(amount + 1);
        // base case
        dp[0] = 1;
        for(auto c : coins) {
            for(int i = 1; i <= amount; i++) {
                // since we need dp[i - c],
                // we need to make sure i - c is greater or equal to 0
                if(i >= c) {
                    // add the previous result
                    dp[i] += dp[i - c];
                }
            }
        }
        return dp.back();
    }
};
```

</TabItem>

<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def change(self, amount: int, coins: List[int]) -> int:
        # initialize dp for all amounts from 0 to amount.
        dp = [0] * (amount + 1)
        # initialize base case for amount 0.
        dp[0] = 1
        # loop through all the coins
        for coin in coins:
            # loop through all the amounts, starting at coin. This
            # prevents us from having to check if i >= coin.
            for i in range(coin, amount + 1):
                # the number of ways we can make each amount is based
                # of the number of ways we can make the amount at each
                # amount-coin
                dp[i] += dp[i - coin]
        # return final value, dp[-1] would also work.
        return dp[amount]
```

</TabItem>

<TabItem value="js" label="JavaScript">
<SolutionAuthor name="@radojicic23"/>

```js
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  let dp = new Array(amount + 1).fill(0);
  dp[0] = 1;
  for (let coin of coins) {
    for (let i = coin; i < amount + 1; i++) {
      dp[i] += dp[i - coin];
    }
  }
  return dp[dp.length - 1];
};
```

</TabItem>

<TabItem value="cpp" label="C++">
<SolutionAuthor name="@radojicic23"/>

```cpp
class Solution {
public:
    int change(int amount, vector<int>& coins) {
        vector<int> dp(amount + 1, 0);
        dp[0] = 1;
        for (int coin : coins) {
            for (int i = coin; i < amount + 1; i++) {
                dp[i] += dp[i - coin];
            }
        }
        return dp[dp.size() - 1];
    }
};
```

</TabItem>
</Tabs>
