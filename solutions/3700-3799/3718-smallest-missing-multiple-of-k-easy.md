---
description: 'Author: @wkw | https://leetcode.com/problems/smallest-missing-multiple-of-k/'
tags: ['Array', 'Hash Table']
---

# 3718 - Smallest Missing Multiple of K (Easy) 

## Problem Link

https://leetcode.com/problems/smallest-missing-multiple-of-k/

## Problem Statement

Given an integer array `nums` and an integer `k`, return the **smallest positive multiple** of `k` that is **missing** from `nums`.

A **multiple** of `k` is any positive integer divisible by `k`.

**Example 1:**

**Input:** nums = [8,2,3,4,6], k = 2

**Output:** 10

**Explanation:**

The multiples of `k = 2` are 2, 4, 6, 8, 10, 12... and the smallest multiple missing from `nums` is 10.

**Example 2:**

**Input:** nums = [1,4,7,10,15], k = 5

**Output:** 5

**Explanation:**

The multiples of `k = 5` are 5, 10, 15, 20... and the smallest multiple missing from `nums` is 5.

**Constraints:**

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`
- `1 <= k <= 100`

## Approach 1: Enumeration

Convert $nums$ into a set to allow fast membership checks. Starting from `k`, check each positive multiple of $k$ in increasing order. If the current multiple exists in the set, add `k` and continue, otherwise return it. Because the multiples are checked from smallest to largest, the first missing one is guaranteed to be the answer.

Building the set takes $O(n)$ time and space. At most $n+1$ multiples need to be checked, so the overall time complexity is $O(n)$, and the space complexity is $O(n)$.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def missingMultiple(self, nums: List[int], k: int) -> int:
        nums = {*nums}
        res = k
        while True:
            if res not in nums: break
            res += k
        return res
```

</TabItem>
</Tabs>