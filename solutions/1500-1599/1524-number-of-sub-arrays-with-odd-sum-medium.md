---
title: 'LeetCode 1524 – Number of Sub-arrays With Odd Sum'
description: 'Count subarrays with an odd sum using prefix sum parity'
tags: ['Array', 'Math', 'Dynamic Programming', 'Prefix Sum']
---

# 1524 - Number of Sub-arrays With Odd Sum (Medium)

## Problem Link

https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum

## Problem Statement

Given an array of integers `arr`, return *the number of subarrays with an **odd** sum*.

Since the answer can be very large, return it modulo `1e9 + 7`.

**Example 1:**

```
Input: arr = [1,3,5]
Output: 4
Explanation: All subarrays are [[1],[1,3],[1,3,5],[3],[3,5],[5]]
All sub-arrays sum are [1,4,9,3,8,5].
Odd sums are [1,9,3,5] so the answer is 4.
```

**Example 2:**

```
Input: arr = [2,4,6]
Output: 0
Explanation: All subarrays are [[2],[2,4],[2,4,6],[4],[4,6],[6]]
All sub-arrays sum are [2,6,12,4,10,6].
All sub-arrays have even sum and the answer is 0.
```

**Example 3:**

```
Input: arr = [1,2,3,4,5,6,7]
Output: 16
```

**Constraints:**

- `1 <= arr.length <= 1e5`
- `1 <= arr[i] <= 100`

## Approach 1: Prefix Sum

A subarray has an odd sum when the prefix sums at its start and end have different parity. While going through the array, we keep track of whether the current prefix sum is even or odd and count both types. Start $even$ at $1$ to include the empty prefix. Each even prefix can pair with every odd prefix, so the answer is $even * odd$.

The time complexity is $O(n)$ and the space complexity is $O(1)$.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def numOfSubarrays(self, arr: list[int]) -> int:
        M = 10 ** 9 + 7
        even, odd, par = 1, 0, 0
        for x in arr:
            par ^= x & 1
            odd += par
            even += 1 - par
        return (even * odd) % M
```

</TabItem>
</Tabs>