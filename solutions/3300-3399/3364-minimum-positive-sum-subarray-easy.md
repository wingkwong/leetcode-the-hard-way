---
title: 'LeetCode 3364 – Minimum Positive Sum Subarray'
description: 'Find the minimum positive sum of a subarray with a length between l and r using a simple running-sum approach.'
---

# 3364 - Minimum Positive Sum Subarray (Easy)

## Problem Link

https://leetcode.com/problems/minimum-positive-sum-subarray

## Problem Statement

You are given an integer array `nums` and **two** integers `l` and `r`. Your task is to find the **minimum** sum of a **subarray** whose size is between `l` and `r` (inclusive) and whose sum is greater than 0.

Return the **minimum** sum of such a subarray. If no such subarray exists, return -1.

A **subarray** is a contiguous **non-empty** sequence of elements within an array.

OriginalPython3**Example 1:**

**Input:** nums = [3, -2, 1, 4], l = 2, r = 3

**Output:** 1

**Explanation:**

The subarrays of length between `l = 2` and `r = 3` where the sum is greater than 0 are:

- `[3, -2]` with a sum of 1
- `[1, 4]` with a sum of 5
- `[3, -2, 1]` with a sum of 2
- `[-2, 1, 4]` with a sum of 3

Out of these, the subarray `[3, -2]` has a sum of 1, which is the smallest positive sum. Hence, the answer is 1.

**Example 2:**

**Input:** nums = [-2, 2, -3, 1], l = 2, r = 3

**Output:** -1

**Explanation:**

There is no subarray of length between `l` and `r` that has a sum greater than 0. So, the answer is -1.

**Example 3:**

**Input:** nums = [1, 2, 3, 4], l = 2, r = 4

**Output:** 3

**Explanation:**

The subarray `[1, 2]` has a length of 2 and the minimum sum greater than 0. So, the answer is 3.

**Constraints:**

- `1 <= nums.length <= 100`
- `1 <= l <= r <= nums.length`
- `-1000 <= nums[i] <= 1000`

## Approach 1: Brute Force

We try every index as the start of a subarray, then extend the subarray one element at a time until its length reaches $r$. As we extend it, we keep a running sum. Whenever the length is at least $l$, we check whether the sum is positive and smaller than the best result found so far. We return the smallest positive sum we find. If no valid subarray has a positive sum, we return $-1$.

The time complexity is $O(n * r)$ and the space complexity is $O(1)$.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def minimumSumSubarray(self, nums: List[int], l: int, r: int) -> int:
        n = len(nums)
        res = float("inf")
        for i in range(n):
            s = 0
            for j in range(i, min(i + r, n)):
                s += nums[j]
                if j - i + 1 >= l and 0 < s < res: res = s
        return res if res < float("inf") else -1
```

</TabItem>
</Tabs>