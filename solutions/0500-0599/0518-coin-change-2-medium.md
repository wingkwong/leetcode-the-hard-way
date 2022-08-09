---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/coin-change-2
tags: ['Dynamic Programming']
---

import SolutionAuthor from '@site/src/components/SolutionAuthor';

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

* `1 <= coins.length <= 300`
* `1 <= coins[i] <= 5000`
* All the values of `coins` are **unique**.
* `0 <= amount <= 5000`

## Approach: Dynamic Programming

This problem is very similar to [0377 - Combination Sum IV (Medium)](https://leetcode.com/problems/combination-sum-iv/). The only difference is the order of loops. The reason is that `(1, 1, 2)` and `(2, 1, 1)` are considered different in that problem.

We can derive the following transition if $target$ is greater or equal to $nums[i]$ where $dp[i]$ represents the number of combinations that sum up to the $target$.

$$
dp(amount)=\sum_{i=0}^n dp(amount - coins[i])
$$

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
