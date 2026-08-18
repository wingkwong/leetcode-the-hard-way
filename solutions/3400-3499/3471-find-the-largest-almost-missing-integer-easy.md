---
description: 'Author: @wkw | https://leetcode.com/problems/find-the-largest-almost-missing-integer'
tags: [Array, Hash Table]
---

# 3471 - Find the Largest Almost Missing Integer (Easy) 

## Problem Link

https://leetcode.com/problems/find-the-largest-almost-missing-integer

## Problem Statement

You are given an integer array `nums` and an integer `k`.

An integer `x` is **almost missing** from `nums` if `x` appears in *exactly* one subarray of size `k` within `nums`.

Return the **largest** **almost missing** integer from `nums`. If no such integer exists, return `-1`.

A **subarray** is a contiguous sequence of elements within an array.

**Example 1:**

**Input:** nums = [3,9,2,1,7], k = 3

**Output:** 7

**Explanation:**

- 1 appears in 2 subarrays of size 3: `[9, 2, 1]` and `[2, 1, 7]`.
- 2 appears in 3 subarrays of size 3: `[3, 9, 2]`, `[9, 2, 1]`, `[2, 1, 7]`.
- 3 appears in 1 subarray of size 3: `[3, 9, 2]`.
- 7 appears in 1 subarray of size 3: `[2, 1, 7]`.
- 9 appears in 2 subarrays of size 3: `[3, 9, 2]`, and `[9, 2, 1]`.

We return 7 since it is the largest integer that appears in exactly one subarray of size `k`.

**Example 2:**

**Input:** nums = [3,9,7,2,1,7], k = 4

**Output:** 3

**Explanation:**

- 1 appears in 2 subarrays of size 4: `[9, 7, 2, 1]`, `[7, 2, 1, 7]`.
- 2 appears in 3 subarrays of size 4: `[3, 9, 7, 2]`, `[9, 7, 2, 1]`, `[7, 2, 1, 7]`.
- 3 appears in 1 subarray of size 4: `[3, 9, 7, 2]`.
- 7 appears in 3 subarrays of size 4: `[3, 9, 7, 2]`, `[9, 7, 2, 1]`, `[7, 2, 1, 7]`.
- 9 appears in 2 subarrays of size 4: `[3, 9, 7, 2]`, `[9, 7, 2, 1]`.

We return 3 since it is the largest and only integer that appears in exactly one subarray of size `k`.

**Example 3:**

**Input:** nums = [0,0], k = 1

**Output:** -1

**Explanation:**

There is no integer that appears in only one subarray of size 1.

**Constraints:**

- `1 <= nums.length <= 50`
- `0 <= nums[i] <= 50`
- `1 <= k <= nums.length`

## Approach 1: Array

If $k == n$, there is only one subarray, so every distinct integer appears in exactly one size-k subarray, therefore, the answer is max(nums). 

If $k == 1$, every element forms its own subarray, so an integer is almost missing exactly when it occurs once in nums. We return the largest integer with frequency $1$. 

Otherwise, when $1 < k < n$, any element at an middle position belongs to at least two size-k subarrays. Thus, only the first and last elements can appear in exactly one such subarray, and each qualifies only if it occurs exactly once in the entire array.

Both the time and space complexity are $O(n)$ where $n$ is the length of nums.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def largestInteger(self, nums: List[int], k: int) -> int:
        n = len(nums)
        if n == k: return max(nums)
        c = Counter(nums)
        res = -1
        if k == 1:
            for k, v in c.items():
                if v == 1: res = max(res, k)
            return res if res != -1 else -1
        if c[nums[0]] == 1: res = max(res, nums[0])
        if c[nums[-1]] == 1: res = max(res, nums[-1])
        return res
```

</TabItem>
</Tabs>