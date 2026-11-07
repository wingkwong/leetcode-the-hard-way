---
title: 'LeetCode 453 – Minimum Moves to Equal Array Elements'
description: 'Find the minimum moves to equalize an array by relating increments of all but one element to differences from the minimum.'
tags: ['Array', 'Math']
---

# 0453 - Minimum Moves to Equal Array Elements (Medium) 

## Problem Link

https://leetcode.com/problems/minimum-moves-to-equal-array-elements

## Problem Statement

Given an integer array `nums` of size `n`, return *the minimum number of moves required to make all array elements equal*.

In one move, you can increment `n - 1` elements of the array by `1`.

**Example 1:**

```
Input: nums = [1,2,3]
Output: 3
Explanation: Only three moves are needed (remember each move increments two elements):
[1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
```

**Example 2:**

```
Input: nums = [1,1,1]
Output: 0
```

**Constraints:**

- `n == nums.length`
- `1 <= nums.length <= 1e5`
- `-109 <= nums[i] <= 1e9`
- The answer is guaranteed to fit in a **32-bit** integer.

## Approach 1: Math

Each move increments all elements except one. That's the same as 
- Incrementing every element by $1$
- Decrementing the excluded element by $1$

The first step doesn't change the differences between elements. It just shifts the whole array up. So for the purpose of making everything equal, each move is effectively decrementing one element by $1$. Now the problem becomes "how many decrements do we need to make every element equal?".  

The best target is the smallest element in the array. We can't choose anything larger because we're only decrementing, and choosing anything smaller would just add extra moves. For each element $nums[i]$, the number of moves needed is `nums[i] - min(nums)`. For example, if $nums = [1, 2, 3]$, the minimum is $1$:
- For $nums[0]$: $1 - 1 = 0$
- For $nums[1]$: $2 - 1 = 1$
- For $nums[2]$: $3 - 1 = 2$

Those differences are exactly how many moves each element needs to reach $1$.Adding them gives $res = (1 - 1) + (2 - 1) + (3 - 1) = 3$ and we can rearrange that expression as $res = (1 + 2 + 3) - (1 + 1 + 1)$ which is $sum(nums) - min(nums) * 3$. We subract the minimum once for every element so the number of times we subtract it is $len(nums)$, which gives $sum(nums) - min(nums) * len(nums)$.

The time complexity is $O(n)$ and the space complexity is $O(1)$.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def minMoves(self, nums: list[int]) -> int:
        return sum(nums) - min(nums) * len(nums)
```

</TabItem>
</Tabs>