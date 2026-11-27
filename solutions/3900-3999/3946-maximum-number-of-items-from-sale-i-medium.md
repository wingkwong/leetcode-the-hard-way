---
title: 'LeetCode 3946 – Maximum Number of Items From Sale I'
description: 'Maximize the total number of purchased and free items within a budget using dynamic programming and factor-based rewards.'
tags: ['Array', 'Dynamic Programming', 'Greedy']
---

# 3946 - Maximum Number of Items From Sale I (Medium)

## Problem Link

https://leetcode.com/problems/maximum-number-of-items-from-sale-i

## Problem Statement

You are given a 2D integer array `items`, where `items[i] = [factori, pricei]` represents the `ith` item. You are also given an integer `budget`.

There are unlimited copies of each item available for purchase.You may buy any number of copies of any items such that the total cost of the purchased copies is at most `budget`.

After buying items, you may receive free copies according to the following rules:

- For each item `i` that you bought **at least one copy** of, you receive **one free copy** of every item `j` such that `j != i` and `factori` divides `factorj`.
- Buying multiple copies of the same item `i` does **not** give additional free copies through item `i`.
- The same item `j` can be received multiple times for free if it is received from purchases of different item types.

Return the **maximum total number of item copies** you can obtain, including both purchased copies and free copies, while spending at most `budget` on purchased items.

**Example 1:**

**Input:** items = [[6,2],[2,6],[3,4]], budget = 9

**Output:** 4

**Explanation:**

- You can buy 2 copies of item 0 and 1 copy of item 2 for a total cost of `2 * 2 + 4 = 8`, which is not greater than `budget = 9`.
- Buying item 2 gives 1 free copy of item 0, because `factor2 = 3` divides `factor0 = 6`.
- You leave with 3 purchased copies and 1 free copy, for a total of 4 item copies.

**Example 2:**

**Input:** items = [[2,4],[3,2],[4,1],[6,4],[12,4]], budget = 8

**Output:** 10

**Explanation:**

- You can buy 1 copy of item 0, 1 copy of item 1, and 2 copies of item 2 for a total cost of `4 + 2 + 2 * 1 = 8`.
- Buying item 0 gives 1 free copy of items 2, 3, and 4.
- Buying item 1 gives 1 free copy of items 3 and 4.
- Buying item 2 gives 1 free copy of item 4.
- Thus, you receive 6 free copies. You leave with 4 purchased copies and 6 free copies, for a total of 10 item copies.

**Constraints:**

- `1 <= items.length <= 1000`
- `items[i] = [factori, pricei]`
- `1 <= factori, pricei <= 1500`
- `1 <= budget <= 1500`

## Approach 1: Dynamic Programming

We use dynamic programming to process the item types one at a time. For each item type, we decide whether to skip it or buy one or more copies. The important detail is that buying the first copy gives free items, while buying additional copies of the same type gives only the purchased copy.

The array $dp$ stores the best results found so far. More specifically, $dp[c]$ is the maximum total number of item copies we can obtain by spending exactly $c$. The total includes both purchased copies and free copies.

At the beginning, we have not bought anything. Therefore, spending exactly $0$ gives us $0$ copies, so we set $dp[0] = 0$. Every other position is initialized to $inf$, which is a very small negative number. This means that those costs are currently impossible to reach.

For each item, $f$ represents its factor and $p$ represents its price. Before updating the dynamic programming array, we calculate how many free copies buying this item for the first time will give us. We count how many items have a factor divisible by $f$. An item with factor $x$ is included when $x % f == 0$, meaning that $f$ divides $x$ evenly. Each such item is eligible to be received as a free copy.

This count also includes the current item because every positive number divides itself. Since an item cannot give a free copy of itself, we subtract one from the count. The remaining value, stored in $b$, is the number of free copies received when the current item is purchased for the first time.

For example, suppose the factors are $2, 3, 4, 6, 12$, and the current factor is $2$. The factors divisible by $2$ are $2, 4, 6, 12$. There are four matches, but the current item with factor $2$ must be excluded. Therefore, buying this item gives three free copies.

The $buy$ array stores results where we buy the current item at least once. In other words, $buy[c]$ is the maximum number of copies we can obtain by spending exactly $c$, while making sure that the current item is included in our purchases. It is initially filled with $inf$ because none of these states have been reached yet.

For every cost $c$ from the current price $p$ to the budget, we consider two ways to reach $buy[c]$. The first way is to buy the first copy of the current item. Before doing so, we have spent $c - p$, so we start from $dp[c - p]$. Buying the first copy adds one purchased copy and $b$ free copies. Therefore, this choice gives $dp[c - p] + b + 1$.

The second way is to buy an additional copy of the current item. In this case, $buy[c - p]$ already represents a state where the current item was bought at least once. We spend another $p$ and receive one more purchased copy, giving $buy[c - p] + 1$. We do not add $b$ again because the free-copy reward is given only once for each item type, regardless of how many copies we buy.

We store the better of these two choices in $buy[c]$. The costs are processed from small to large, so $buy[c - p]$ has already been calculated when it is needed. This allows the code to buy unlimited copies of the current item. For example, if the price is $2$, the algorithm can use $buy[2]$ to calculate $buy[4]$, then use $buy[4]$ to calculate $buy[6]$, and continue in the same way.

After calculating all possibilities for the current item, we combine $dp$ and $buy$. For each cost, $skip$ is the result when we do not buy the current item, while $take$ is the result when we buy it at least once. We keep the larger value, so the updated $dp$ contains the best result for every exact cost after processing the current item.

After all item types have been processed, $dp[c]$ contains the maximum number of copies obtainable by spending exactly $c$. The problem allows us to spend at most the budget, so we do not have to use all of it. Returning $max(dp)$ chooses the best result among every possible spending amount from $0$ through $budget$.

The time complexity is $O(n ^ 2 + n * budget)$ and the space complexity is $O(budget)$.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def maximumSaleItems(self, items: List[List[int]], budget: int) -> int:
        inf = -10 ** 9
        dp = [inf] * (budget + 1)
        dp[0] = 0
        for f, p in items:
            b = sum(x % f == 0 for x, _ in items) - 1
            buy = [inf] * (budget + 1)
            for c in range(p, budget + 1):
                buy[c] = max(dp[c - p] + b + 1, buy[c - p] + 1)
            dp = [max(skip, take) for skip, take in zip(dp, buy)]
        return max(dp)
```

</TabItem>
</Tabs>