---
description: 'Author: @DongDong | https://leetcode.com/problems/squares-of-a-sorted-array/'
tags: [Array, Two Pointers]
---

# 0977 - Squares of A Sorted Array (Easy)

## Problem Link

https://leetcode.com/problems/squares-of-a-sorted-array/

## Problem Statement

Given an integer array `nums` sorted in **non-decreasing** order, return an array of the squares of each number sorted in **non-decreasing** order.

**Example 1:**

```
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100]. After sorting, it becomes [0,1,9,16,100].
```

**Example 2:**

```
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
```

**Constraints:**

- $$1 <= key.length, value.length <= 10^4$$
- $$-10^4 <= nums[i] <= 10^4$$
- `nums` is sorted in **non-decreasing** order.

## Approach 1: Two Pointers

Because the input array is sorted but may include negative numbers, the largest square value may come from either end of the array (a large negative or a large positive number). To handle this, use two pointers `l` and `r` starting at each end of the array. Compare `abs(nums[l])` and `abs(nums[r])`. The larger absolute value has the larger square.

Place that square at position `pos` (starting from the end of the result array), then move the corresponding pointer inward (`l += 1` or `r -= 1`). Decrement `pos` each step and repeat until all elements are processed.

Time Complexity: $O(n)$

Space Complexity: $O(n)$

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@DongDong"/>

```py
class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        n = len(nums)
        res = [0] * n
        l, r = 0, n - 1
        pos = n - 1
        while l <= r:
            if abs(nums[l]) < abs(nums[r]):
                res[pos] = nums[r] ** 2
                r -= 1
            else:
                res[pos] = nums[l] ** 2
                l += 1
            pos -= 1
        return res
```

</TabItem>
</Tabs>
