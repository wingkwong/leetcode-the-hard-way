---
title: 'LeetCode 3105 – Longest Strictly Increasing or Strictly Decreasing Subarray'
description: 'Scan the array once and track the current increasing and decreasing streak lengths to find the longest monotonic subarray.'
tags: ['Array']
---

# 3105 - Longest Strictly Increasing or Strictly Decreasing Subarray (Easy)

## Problem Link

https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray

## Problem Statement

You are given an array of integers `nums`. Return *the length of the **longest** subarray of*`nums`*which is either **strictly increasing** or **strictly decreasing***.

**Example 1:**

**Input:** nums = [1,4,3,3,2]

**Output:** 2

**Explanation:**

The strictly increasing subarrays of `nums` are `[1]`, `[2]`, `[3]`, `[3]`, `[4]`, and `[1,4]`.

The strictly decreasing subarrays of `nums` are `[1]`, `[2]`, `[3]`, `[3]`, `[4]`, `[3,2]`, and `[4,3]`.

Hence, we return `2`.

**Example 2:**

**Input:** nums = [3,3,3,3]

**Output:** 1

**Explanation:**

The strictly increasing subarrays of `nums` are `[3]`, `[3]`, `[3]`, and `[3]`.

The strictly decreasing subarrays of `nums` are `[3]`, `[3]`, `[3]`, and `[3]`.

Hence, we return `1`.

**Example 3:**

**Input:** nums = [3,2,1]

**Output:** 3

**Explanation:**

The strictly increasing subarrays of `nums` are `[3]`, `[2]`, and `[1]`.

The strictly decreasing subarrays of `nums` are `[3]`, `[2]`, `[1]`, `[3,2]`, `[2,1]`, and `[3,2,1]`.

Hence, we return `3`.

**Constraints:**

- `1 <= nums.length <= 50`
- `1 <= nums[i] <= 50`

## Approach 1: One Pass

We only need to know the length of the current strictly increasing subarray and the current strictly decreasing subarray ending at the current position. Let $inc$ be the length of the current increasing streak, $dec$ be the length of the current decreasing streak and $res$ be the best answer seen so far.

For each adjacent pair $(a, b)$:

- If $a < b$, then the increasing streak continues, so we update $inc = inc + 1$.
- Otherwise, the increasing streak is broken, so we reset $inc = 1$.
- If $a > b$, then the decreasing streak continues, so we update $dec = dec + 1$.
- Otherwise, the decreasing streak is broken, so we reset $dec = 1$.

After each update, we set $res = \max(res, inc, dec)$ because every strictly increasing or strictly decreasing subarray is determined by consecutive adjacent comparisons, so a single left-to-right pass is enough.

The time complexity is $O(n)$ and the space complexity is $O(1)$.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def longestMonotonicSubarray(self, nums: List[int]) -> int:
        inc = dec = res = 1
        for a, b in zip(nums, nums[1:]):
            inc = inc + 1 if a < b else 1
            dec = dec + 1 if a > b else 1
            res = max(res, inc, dec)
        return res
```

</TabItem>
</Tabs>