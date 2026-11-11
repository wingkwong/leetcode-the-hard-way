---
title: 'LeetCode 3789 – Minimum Cost to Acquire Required Items'
description: 'Find the minimum cost by comparing three ways to buy combined items: buy none, cover the smaller requirement, or cover both requirements.'
tags: ['Math', 'Greedy']
---

# 3789 - Minimum Cost to Acquire Required Items (Medium)

## Problem Link

https://leetcode.com/problems/minimum-cost-to-acquire-required-items

## Problem Statement

You are given five integers $cost1$, $cost2$, $costBoth$, $need1$, and $need2$.

There are three types of items available:

- An item of **type 1** costs $cost1$ and contributes 1 unit to the type 1 requirement only.
- An item of **type 2** costs $cost2$ and contributes 1 unit to the type 2 requirement only.
- An item of **type 3** costs $costBoth$ and contributes 1 unit to **both** type 1 and type 2 requirements.

You must collect enough items so that the total contribution toward type 1 is **at least** $need1$ and the total contribution toward type 2 is **at least** $need2$.

Return an integer representing the **minimum** possible total cost to achieve these requirements.

**Example 1:**

**Input:** $cost1 = 3$, $cost2 = 2$, $costBoth = 1$, $need1 = 3$, $need2 = 2$

**Output:** 3

**Explanation:**

After buying three type 3 items, which cost $3 \times 1 = 3$, the total contribution to type 1 is 3 ($3 \ge need1$) and to type 2 is 3 ($3 \ge need2$).
Any other valid combination would cost more, so the minimum total cost is 3.

**Example 2:**

**Input:** $cost1 = 5$, $cost2 = 4$, $costBoth = 15$, $need1 = 2$, $need2 = 3$

**Output:** 22

**Explanation:**

We buy $need1 = 2$ items of type 1 and $need2 = 3$ items of type 2: $2 \times 5 + 3 \times 4 = 10 + 12 = 22$.
Any other valid combination would cost more, so the minimum total cost is 22.

**Example 3:**

**Input:** $cost1 = 5$, $cost2 = 4$, $costBoth = 15$, $need1 = 0$, $need2 = 0$

**Output:** 0

**Explanation:**

Since no items are required ($need1 = need2 = 0$), we buy nothing and pay 0.

**Constraints:**

- $1 \le cost1, cost2, costBoth \le 10^6$
- $0 \le need1, need2 \le 10^9$

## Approach 1: Greedy

Let $mi = \min(need1, need2)$ and $mx = \max(need1, need2)$. Suppose we buy $x$ type 3 items and fill any remaining requirements with single-type items. How does the total cost change if we buy one more type 3 item?

- For $0 \le x < mi$, both requirements still need units. One more type 3 item replaces one item of each single type, so the total cost changes by $costBoth - cost1 - cost2$.
- For $mi \le x < mx$, only the larger requirement still needs units. One more type 3 item replaces one single-type item for that requirement. It can still save money because exceeding the smaller requirement is allowed.
- Once $x = mx$, both requirements are met. Each additional item only increases the cost.

Within each of the first two ranges, every replacement changes the cost by the same amount, so a minimum occurs at an endpoint. The three expressions in the code evaluate those endpoints in order: buy only single-type items ($x = 0$), cover the shared units with type 3 items and buy the rest individually ($x = mi$), or cover both requirements entirely with type 3 items ($x = mx$). Return the smallest of these costs.

The time complexity is $O(1)$ and the space complexity is $O(1)$.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def minimumCost(self, cost1: int, cost2: int, costBoth: int, need1: int, need2: int) -> int:
        mi = min(need1, need2)
        mx = max(need1, need2)
        return min(
            need1 * cost1 + need2 * cost2,
            mi * costBoth + (need1 - mi) * cost1 + (need2 - mi) * cost2,
            mx * costBoth
        )
```

</TabItem>
</Tabs>
