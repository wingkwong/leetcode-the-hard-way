---
title: 'LeetCode 462 – Minimum Moves to Equal Array Elements II'
description: 'Minimize unit moves to equalize an array by sorting the values and measuring their distances to a median.'
tags: ['Array', 'Math', 'Sorting']
---

# 0462 - Minimum Moves to Equal Array Elements II (Medium)

## Problem Link

https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii

## Problem Statement

Given an integer array `nums` of size `n`, return *the minimum number of moves required to make all array elements equal*.

In one move, you can increment or decrement an element of the array by $1$.

Test cases are designed so that the answer will fit in a **32-bit** integer.

**Example 1:**

```
Input: nums = [1,2,3]
Output: 2
Explanation:
Only two moves are needed (remember each move increments or decrements one element):
[1,2,3]  =>  [2,2,3]  =>  [2,2,2]
```

**Example 2:**

```
Input: nums = [1,10,2,9]
Output: 16
```

**Constraints:**

- `n == nums.length`
- `1 <= nums.length <= 1e5`
- `-1e9 <= nums[i] <= 1e9`

## Approach 1: Sorting + Median

Since one move lets us increase or decrease exactly one number by $1$, the total number of moves needed to make every value equal to some target $x$ is $\sum |nums[i] - x|$. So the problem becomes "which target $x$ minimizes the sum of absolute differences?"

The answer is the median of the array. Why?

- If we sort the array, numbers on the left of the target need to move right
- Numbers on the right of the target need to move left
- Choosing the median balances those two sides so that the total distance is as small as possible

Another way to see it is to pair the smallest and largest numbers after sorting. If we want both of them to become the same value $x$, then the number of moves contributed by this pair is $|a - x| + |b - x|$.

For any $x$ between $a$ and $b$, this value is always $b - a$, so it is already minimal. Applying this idea to all pairs shows that any median gives the minimum total moves.

That means the algorithm is straightforward:

1. Sort $nums$
2. Pick the middle element as the median
3. Sum up $abs(nums[i] - median)$ for all elements

For example, if $nums = [1, 10, 2, 9]$, after sorting we get $[1, 2, 9, 10]$.

- One valid median is $9$ (the code uses $nums[len(nums) // 2]$).
- Total moves = $|1 - 9| + |2 - 9| + |9 - 9| + |10 - 9| = 8 + 7 + 0 + 1 = 16$.

The time complexity is $O(n \log n)$ and the space complexity is $O(1)$ if we ignore the internal space used by the sorting implementation.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def minMoves2(self, nums: list[int]) -> int:
        nums.sort()
        m = nums[len(nums) // 2]
        return sum(abs(x - m) for x in nums)
```

</TabItem>
</Tabs>