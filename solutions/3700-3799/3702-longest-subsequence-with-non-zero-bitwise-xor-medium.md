---
description: 'Author: @wkw | https://leetcode.com/problems/longest-subsequence-with-non-zero-bitwise-xor'
tags: [Array, Bit Manipulation]
---

# 3702 - Longest Subsequence With Non-Zero Bitwise XOR (Medium) 

## Problem Link

https://leetcode.com/problems/longest-subsequence-with-non-zero-bitwise-xor

## Problem Statement

You are given an integer array `nums`.

Return the length of the **longest subsequence** in `nums` whose bitwise **XOR** is **non-zero**. If no such **subsequence** exists, return 0.

**Example 1:**

**Input:** nums = [1,2,3]

**Output:** 2

**Explanation:**

One longest subsequence is `[2, 3]`. The bitwise XOR is computed as `2 XOR 3 = 1`, which is non-zero.

**Example 2:**

**Input:** nums = [2,3,4]

**Output:** 3

**Explanation:**

The longest subsequence is `[2, 3, 4]`. The bitwise XOR is computed as `2 XOR 3 XOR 4 = 5`, which is non-zero.

**Constraints:**

- `1 <= nums.length <= 1e5`
- `0 <= nums[i] <= 1e9`

## Approach 1: Bit Manipulation

If the XOR of the entire array is non-zero, use all $n$ elements.

If the total XOR is zero: Removing any one non-zero element makes the remaining XOR equal to that removed element, so the answer is $n - 1$.

If every element is zero, every subsequence has XOR zero, so return $0$.

Time Complexity: $O(n)$

Space Complexity: $O(1)$

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def longestSubsequence(self, nums: List[int]) -> int:
        n = len(nums)
        x = 0
        for v in nums: x ^= v
        if x != 0: return n
        if any(v != 0 for v in nums): return n - 1
        return 0
```

</TabItem>
</Tabs>