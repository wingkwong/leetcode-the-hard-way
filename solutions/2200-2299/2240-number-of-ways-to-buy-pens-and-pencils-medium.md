---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils/
---

import Authors from '@site/src/components/Authors';

# 2240 - Number of Ways to Buy Pens and Pencils (Medium)

## Problem Link

https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils/

## Problem Statement

You are given an integer `total` indicating the amount of money you have. You are also given two integers `cost1` and `cost2` indicating the price of a pen and pencil respectively. You can spend **part or all** of your money to buy multiple quantities (or none) of each kind of writing utensil.

Return _the **number of distinct ways** you can buy some number of pens and pencils._

**Example 1:**

```
Input: total = 20, cost1 = 10, cost2 = 5
Output: 9
Explanation: The price of a pen is 10 and the price of a pencil is 5.
- If you buy 0 pens, you can buy 0, 1, 2, 3, or 4 pencils.
- If you buy 1 pen, you can buy 0, 1, or 2 pencils.
- If you buy 2 pens, you cannot buy any pencils.
The total number of ways to buy pens and pencils is 5 + 3 + 1 = 9.
```

**Example 2:**

```
Input: total = 5, cost1 = 10, cost2 = 10
Output: 1
Explanation: The price of both pens and pencils are 10, which cost more than total, so you cannot buy any writing utensils. Therefore, there is only 1 way: buy 0 pens and 0 pencils.
```

**Constraints:**

* `1 <= total, cost1, cost2 <= 10^6`

## Approach 1: Math

We try all the cases - if buy 0 pen to $$total / cost1$$ pens, how many pencils we can buy in each round?

<Authors names="@wingkwong"/>

<Authors names="@wingkwong"/>

```cpp
class Solution {
public:
    long long waysToBuyPensPencils(int total, int cost1, int cost2) {
        long long ans = 0;
        // we can buy 0 pen, 1 pen, 2 pens, ..., total / cost1 pens
        for (int i = 0; i <= total / cost1; i++) {
            // every time we buy i pen(s), the total become total - cost1 * i
            // + 1 here means we buy none
            ans += (total - cost1 * i) / cost2 + 1;
        }
        return ans;
    }
};
```
