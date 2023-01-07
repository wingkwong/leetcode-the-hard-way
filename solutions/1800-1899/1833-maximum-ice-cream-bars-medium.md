---
description: >-
  Author: @hirotake111 |
  https://leetcode.com/problems/maximum-ice-cream-bars/
---

# 1833 - Maximum Ice Cream Bars (Medium)

## Problem Link

https://leetcode.com/problems/maximum-ice-cream-bars/

## Problem Statement

It is a sweltering summer day, and a boy wants to buy some ice cream bars.

At the store, there are `n` ice cream bars. You are given an array `costs` of length `n`, where `costs[i]` is the price of the `ith` ice cream bar in coins. The boy initially has `coins` coins to spend, and he wants to buy as many ice cream bars as possible.

Return the maximum number of ice cream bars the boy can buy with `coins` coins.

Note: The boy can buy the ice cream bars in any order.

**Example 1:**

```
Input: costs = [1,3,2,4,1], coins = 7
Output: 4
Explanation: The boy can buy ice cream bars at indices 0,1,2,4 for a total price of 1 + 3 + 2 + 1 = 7.
```

**Example 2:**

```
Input: costs = [10,6,8,7,7,8], coins = 5
Output: 0
Explanation: The boy cannot afford any of the ice cream bars.
```

**Example 3:**

```
Input: costs = [1,6,3,1,2,5], coins = 20
Output: 6
Explanation: The boy can buy all the ice cream bars for a total price of 1 + 6 + 3 + 1 + 2 + 5 = 18.
```

**Constraints:**

- `costs.length == n`
- `1 <= n <= 10^5`
- `1 <= costs[i] <= 10^5`
- `1 <= coins <= 10^8`

## Approach 1: Frequency

Time Complexity: $O(n + m)$ <sub>(where `n`: length of costs, `m`: maximum value among `costs`)</sub>
Space Complexity: $O(m)$ <sub>(where `m`: maximum value among `costs`)</sub>

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@hirotake111"/>

```py
class Solution:
    def maxIceCream(self, costs: List[int], coins: int) -> int:
        # Fill in the list of frequency
        # Each index is cost of icecream - so the length must be max(costs) + 1
        freq = [0] * (max(costs) + 1)
        answer = 0

        # Count each cost's frequency
        for cost in costs:
            freq[cost] += 1

        for cost, amount in enumerate(freq):
            # If frequency is 0, skip it
            if freq[cost] == 0:
                continue
            # If cost * amount is less than coins,
            # simply decrease the coins by cost * amount
            if cost * amount <= coins:
                coins -= cost * amount
                answer += amount
                continue
            # At this point we can't buy amount * cost
            # So coins // cost should be the amount of icecream we can buy
            answer += coins // cost
            # And don't forget to exit loop (as we can't buy icecreams anymore)
            break

        return answer
```

</TabItem>
</Tabs>
