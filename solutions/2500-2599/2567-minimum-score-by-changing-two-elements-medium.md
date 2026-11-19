---
title: 'LeetCode 2567 – Minimum Score by Changing Two Elements'
description: 'Sort the array and check the three possible ways to change two extreme elements, then take the smallest remaining range as the minimum score.'
---

# 2567 - Minimum Score by Changing Two Elements (Medium)

## Problem Link

https://leetcode.com/problems/minimum-score-by-changing-two-elements

## Problem Statement

You are given an integer array `nums`.

- The **low** score of `nums` is the **minimum** absolute difference between any two integers.
- The **high** score of `nums` is the **maximum** absolute difference between any two integers.
- The **score** of `nums` is the sum of the **high** and **low** scores.

Return the **minimum score** after **changing two elements** of `nums`.

OriginalPython3**Example 1:**

**Input:** nums = [1,4,7,8,5]

**Output:** 3

**Explanation:**

- Change `nums[0]` and `nums[1]` to be 6 so that `nums` becomes [6,6,7,8,5].
- The low score is the minimum absolute difference: |6 - 6| = 0.
- The high score is the maximum absolute difference: |8 - 5| = 3.
- The sum of high and low score is 3.

**Example 2:**

**Input:** nums = [1,4,3]

**Output:** 0

**Explanation:**

- Change `nums[1]` and `nums[2]` to 1 so that `nums` becomes [1,1,1].
- The sum of maximum absolute difference and minimum absolute difference is 0.

**Constraints:**

- `3 <= nums.length <= 1e5`
- `1 <= nums[i] <= 1e9`

## Approach 1: Sorting & Greedy

Sort the array first. Since we can change two elements to any values, we can make two numbers equal, so the low score becomes $0$. Now we only need to make the difference between the smallest and largest values as small as possible.

There are three cases to check: change the two smallest elements, change the smallest and largest elements, or change the two largest elements. After sorting, the remaining ranges are $nums[-1] - nums[2], nums[-2] - nums[1], and nums[-3] - nums[0]$. The smallest of these is the answer.

The time complexity is $O(n \log n)$ and the space complexity is $O(n)$.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def minimizeSum(self, nums: List[int]) -> int:
        nums.sort()
        return min(
            nums[-1] - nums[2],
            nums[-2] - nums[1],
            nums[-3] - nums[0]
        )
```

</TabItem>
</Tabs>