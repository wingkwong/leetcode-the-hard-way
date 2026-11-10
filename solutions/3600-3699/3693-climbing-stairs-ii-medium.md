---
title: 'LeetCode 3693 – Climbing Stairs II'
description: 'Find the minimum cost to reach the top of the staircase by tracking the cheapest way to reach each of the three possible previous steps.'
tags: ['Array', 'Dynamic Programming']
---

# 3693 - Climbing Stairs II (Medium)

## Problem Link

https://leetcode.com/problems/climbing-stairs-ii

## Problem Statement

You are climbing a staircase with `n + 1` steps, numbered from 0 to `n`.

You are also given a **1-indexed** integer array `costs` of length `n`, where `costs[i]` is the cost of step `i`.

From step `i`, you can jump **only** to step `i + 1`, `i + 2`, or `i + 3`. The cost of jumping from step `i` to step `j` is $\text{costs}[j] + (j - i)^2$.

You start from step 0 with `cost = 0`.

Return the **minimum** total cost to reach step `n`.

**Example 1:**

**Input:** n = 4, costs = [1,2,3,4]

**Output:** 13

**Explanation:**

One optimal path is `0 → 1 → 2 → 4`

| Jump | Landing cost | Squared distance | Jump cost |
| --- | ---: | ---: | ---: |
| 0 → 1 | 1 | $1^2$ | 2 |
| 1 → 2 | 2 | $1^2$ | 3 |
| 2 → 4 | 4 | $2^2$ | 8 |

Thus, the minimum total cost is `2 + 3 + 8 = 13`

**Example 2:**

**Input:** n = 4, costs = [5,1,6,2]

**Output:** 11

**Explanation:**

One optimal path is `0 → 2 → 4`

| Jump | Landing cost | Squared distance | Jump cost |
| --- | ---: | ---: | ---: |
| 0 → 2 | 1 | $2^2$ | 5 |
| 2 → 4 | 2 | $2^2$ | 6 |

Thus, the minimum total cost is `5 + 6 = 11`

**Example 3:**

**Input:** n = 3, costs = [9,8,3]

**Output:** 12

**Explanation:**

The optimal path is `0 → 3`, with a total cost of $3 + 3^2 = 12$.

**Constraints:**

- `1 <= n == costs.length <= 1e5`
- `1 <= costs[i] <= 1e4`

## Approach 1: Dynamic Programming

Let $dp[i]$ be the minimum total cost to reach step $i$. The last jump must come from one of the previous three steps. Each choice pays the same landing cost for step $i$, but the squared jump distance adds $1$, $4$, or $9$. Taking the cheapest of these three ways to arrive gives $dp[i] = \text{costs}[i] + \min(dp[i-1] + 1,\; dp[i-2] + 4,\; dp[i-3] + 9)$.

The loop keeps the previous three costs in $a$, $b$, and $c$, from oldest to newest. For each landing cost $x$, it adds $x$ to the cheapest of the three jump options. The simultaneous assignment shifts the old $b$ and $c$ into $a$ and $b$, then stores the new minimum in $c$. After the last step, $c$ holds $dp[n]$.

All three variables start at zero. Initially, $c$ represents step $0$, while $a$ and $b$ are placeholders. At step $1$, the jump from step $0$ adds $1$, which beats the placeholder options of $4$ and $9$. At step $2$, $b$ represents step $0$, so the direct jump adds $4$ and beats the remaining placeholder's $9$. From step $3$ onward, all three predecessors are valid.

In Example 1, $costs = [1, 2, 3, 4]$ and $(a, b, c)$ starts at $(0, 0, 0)$.

| Step | New $c$ using the previous values | $(a, b, c)$ after the update |
| --- | --- | --- |
| 1 | $1 + min(1, 4, 9) = 2$ | $(0, 0, 2)$ |
| 2 | $2 + min(3, 4, 9) = 5$ | $(0, 2, 5)$ |
| 3 | $3 + min(6, 6, 9) = 9$ | $(2, 5, 9)$ |
| 4 | $4 + min(10, 9, 11) = 13$ | $(5, 9, 13)$ |

The last jump skips from step $2$ to step $4$. Reaching step $2$ costs $5$, the squared distance adds $4$, and landing adds another $4$, giving the final $c = 13$.

The time complexity is $O(n)$ and the space complexity is $O(1)$.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def climbStairs(self, n: int, costs: List[int]) -> int:
        a = b = c = 0
        for x in costs:
            a, b, c = b, c, x + min(c + 1, b + 4, a + 9)
        return c
```

</TabItem>
</Tabs>
