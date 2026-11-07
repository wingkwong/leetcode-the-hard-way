---
title: 'LeetCode 3736 – Minimum Moves to Equal Array Elements III'
description: 'Minimize unit increments to equalize an array by summing each element''s distance to the current maximum.'
tags: ['Array', 'Math']
---

# 3736 - Minimum Moves to Equal Array Elements III (Easy)

## Problem Link

https://leetcode.com/problems/minimum-moves-to-equal-array-elements-iii

## Problem Statement

You are given an integer array `nums`.

In one move, you may **increase** the value of any single element `nums[i]` by 1.

Return the **minimum total** number of **moves** required so that all elements in `nums` become **equal**.

**Example 1:**

**Input:** nums = [2,1,3]

**Output:** 3

**Explanation:**

To make all elements equal:

- Increase `nums[0] = 2` by 1 to make it 3.
- Increase `nums[1] = 1` by 1 to make it 2.
- Increase `nums[1] = 2` by 1 to make it 3.

Now, all elements of `nums` are equal to 3. The minimum total moves is `3`.

**Example 2:**

**Input:** nums = [4,4,5]

**Output:** 2

**Explanation:**

To make all elements equal:

- Increase `nums[0] = 4` by 1 to make it 5.
- Increase `nums[1] = 4` by 1 to make it 5.

Now, all elements of `nums` are equal to 5. The minimum total moves is `2`.

**Constraints:**

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`

## Approach 1: Greedy

Since one move can only increase an element by $1$, we can never make the final value smaller than the current maximum element in the array. Therefore, the best target value is exactly $max(nums)$.

Once the target is fixed, each number $x$ needs $max(nums) - x$ moves to catch up to the maximum. Adding this over all elements gives the minimum number of moves.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def minMoves(self, nums: List[int]) -> int:
        mx = max(nums)
        return sum(mx - x for x in nums)
```

</TabItem>
</Tabs>

We can also rewrite it in a more compact mathematical form.

If the final target is $max(nums)$, then after all operations the total sum of the array becomes $max(nums) * len(nums)$. The current sum is $sum(nums)$, so the number of increments we still need is simply the difference between these two values $max(nums) * len(nums) - sum(nums)$.

The time complexity is $O(n)$ and the space complexity is $O(1)$.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def minMoves(self, nums: List[int]) -> int:
        return max(nums) * len(nums) - sum(nums)
```

</TabItem>
</Tabs>


