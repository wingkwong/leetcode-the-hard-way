---
description: 'Author: @wkw | https://leetcode.com/problems/maximum-k-to-sort-a-permutation'
tags: ['Bit Manipulation']
rating: 1775
---

# 3644 - Maximum K to Sort a Permutation (Medium) 

## Problem Link

https://leetcode.com/problems/maximum-k-to-sort-a-permutation

## Problem Statement

You are given an integer array `nums` of length `n`, where `nums` is a **permutation** of the numbers in the range `[0..n - 1]`.

You may swap elements at indices `i` and `j` **only if** `nums[i] AND nums[j] == k`, where `AND` denotes the bitwise AND operation and `k` is a **non-negative** integer.

Return the **maximum** value of `k` such that the array can be sorted in **non-decreasing** order using any number of such swaps. If `nums` is already sorted, return 0.

**Example 1:**

**Input:** nums = [0,3,2,1]

**Output:** 1

**Explanation:**

Choose `k = 1`. Swapping `nums[1] = 3` and `nums[3] = 1` is allowed since `nums[1] AND nums[3] == 1`, resulting in a sorted permutation: `[0, 1, 2, 3]`.

**Example 2:**

**Input:** nums = [0,1,3,2]

**Output:** 2

**Explanation:**

Choose `k = 2`. Swapping `nums[2] = 3` and `nums[3] = 2` is allowed since `nums[2] AND nums[3] == 2`, resulting in a sorted permutation: `[0, 1, 2, 3]`.

**Example 3:**

**Input:** nums = [3,2,1,0]

**Output:** 0

**Explanation:**

Only `k = 0` allows sorting since no greater `k` allows the required swaps where `nums[i] AND nums[j] == k`.

**Constraints:**

- `1 <= n == nums.length <= 1e5`
- `0 <= nums[i] <= n - 1`
- `nums` is a permutation of integers from `0` to `n - 1`.

## Approach 1: Bit Manipulation

The key observation is that every value that is not at its correct index must be swapped. For a swap between two values $x$ and $y$ to be allowed, $x \& y$ must equal $k$, meaning both values must contain every set bit of $k$.

Therefore, $k$ cannot contain any bit that is absent from a misplaced value, so the maximum possible $k$ is the bitwise AND of all misplaced values. We initialize $res$ to $-1$, the identity for bitwise AND, and AND it with each misplaced value. If the array is already sorted, $res$ remains $-1$, so $max(res, 0)$ returns $0$. 

The time complexity is $O(n)$ and the space complexity is $O(1)$.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def sortPermutation(self, nums: List[int]) -> int:
        res = -1
        for i, x in enumerate(nums):
            if i != x: 
                res &= x
        return max(res, 0)
```

</TabItem>
</Tabs>