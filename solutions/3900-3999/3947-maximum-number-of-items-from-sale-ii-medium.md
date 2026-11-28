---
title: 'LeetCode 3947 – Maximum Number of Items From Sale II'
description: 'Maximize purchased and free items within a budget using divisibility preprocessing and an efficient greedy strategy.'
tags: ['Array', 'Greedy',  'Sorting', 'Heap (Priority Queue)']
---

# 3947 - Maximum Number of Items From Sale II (Medium)

## Problem Link

https://leetcode.com/problems/maximum-number-of-items-from-sale-ii

## Problem Statement

You are given a 2D integer array `items`, where `items[i] = [factori, pricei]` represents the `ith` item. You are also given an integer `budget`.

There are unlimited copies of each item available for purchase. You may buy any number of copies of any items such that the total cost of the purchased copies is at most `budget`.

After buying items, you may receive free copies according to the following rules:

- Each purchased copy of item `i` can give you **at most one** free copy of another item `j`.
- The free item must satisfy `i != j` and `factori` divides `factorj`.
- For each ordered pair `(i, j)`, you can receive a free copy of item `j` from purchases of item `i` **at most once**, regardless of how many copies of item `i` you buy.
- The same item `j` can be received multiple times for free if it is received from purchases of different item types.

Return the **maximum total number of item copies** you can obtain, including both purchased copies and free copies, while spending at most `budget` on purchased items.

OriginalPython3**Example 1:**

**Input:** items = [[1,6],[2,4],[3,5]], budget = 19

**Output:** 5

**Explanation:**

- You can buy 2 copies of item 0 and 1 copy of item 1 for a total cost of `2 * 6 + 4 = 16`, which is not greater than `budget = 19`.
- One purchased copy of item 0 gives 1 free copy of item 1, because `factor0 = 1` divides `factor1 = 2`.
- The other purchased copy of item 0 gives 1 free copy of item 2, because `factor0 = 1` divides `factor2 = 3`.
- You leave with 3 purchased copies and 2 free copies, for a total of 5 item copies.

**Example 2:**

**Input:** items = [[2,8],[1,10],[6,6],[4,12],[5,20],[5,17]], budget = 35

**Output:** 7

**Explanation:**

- You can buy 2 copies of item 0, 1 copy of item 1, and 1 copy of item 2 for a total cost of `2 * 8 + 10 + 6 = 32`, which is not greater than `budget = 35`.
- One purchased copy of item 0 gives 1 free copy of item 2, because `factor0 = 2` divides `factor2 = 6`.
- The other purchased copy of item 0 gives 1 free copy of item 3, because `factor0 = 2` divides `factor3 = 4`.
- The purchased copy of item 1 gives 1 free copy of item 2, because `factor1 = 1` divides `factor2 = 6`.
- Buying item 2 gives no free copy, because `factor2 = 6` does not divide the factor of any other item.
- You leave with 4 purchased copies and 3 free copies, for a total of 7 item copies.

**Constraints:**

- `1 <= items.length <= 1e5`
- `items[i] = [factori, pricei]`
- `1 <= factori <= items.length`
- `1 <= pricei <= 1e9`
- `1 <= budget <= 1e9`

## Approach 1: Greedy

We want to count both the items we buy and the items we receive for free. When we buy one copy of an item, it may give us one additional free item. However, each item type can give each valid target item for free only once.

First, $cnt[f]$ stores how many item types have factor $f$. For example, if three items have factor $2$, then $cnt[2]$ is $3$.

Next, we calculate $div[f]$. This is the number of item types whose factors are divisible by $f$. To find it, we add the counts at $f$, $2 * f$, $3 * f$, and so on. These are exactly the factors that an item with factor $f$ can give for free.

An item cannot give a free copy of itself, so an item with factor $f$ has $div[f] - 1$ possible free items. This means that its first $div[f] - 1$ purchased copies can each give one free copy. Every one of these purchases gives us two items in total: one purchased item and one free item.

After all free-item possibilities are used, buying more copies gives only one item. In that case, we should always buy the cheapest item available. We store its price in $c$.

Buying one normal item costs $c$, so buying two normal items costs $2 * c$. Therefore, a purchase that gives one free item is only better when its price is less than $2 * c$. We store these useful choices in $opt$.

We sort $opt$ by price because cheaper purchases should be made first. For each choice, we buy as many copies as the budget allows, but no more than the number of free items that choice can produce. Each such purchase adds $2$ to $res$. Finally, any money left is spent on the cheapest item. The number of additional items we can buy is $budget // c$, which is added to $res$.

The time complexity is $O(n log n)$ and the space complexity is $O(n)$.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def maximumSaleItems(self, items: List[List[int]], budget: int) -> int:
        n = len(items)
        cnt = [0] * (n + 1)
        for f, _ in items: cnt[f] += 1
        div = [0] * (n + 1)
        for f in range(1, n + 1): div[f] = sum(cnt[f::f])
        c = min(p for _, p in items)
        opt = sorted((p, div[f] - 1) for f, p in items if p < 2 * c)
        res = 0
        for p, k in opt:
            x = min(k, budget // p)
            res += 2 * x
            budget -= p * x
        return res + budget // c
```

</TabItem>
</Tabs>