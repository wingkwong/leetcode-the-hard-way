---
description: 'Author: @wingkwong | https://leetcode.com/problems/power-of-heroes/'
---

# 2681 - Power of Heroes (Hard) 

## Problem Link

https://leetcode.com/problems/power-of-heroes/

## Problem Statement

You are given a **0-indexed** integer array `nums` representing the strength of some heroes. The**power** of a group of heroes is defined as follows:

- Let `i0`, `i1`, ... ,`ik` be the indices of the heroes in a group. Then, the power of this group is `max(nums[i0], nums[i1], ... ,nums[ik])2 * min(nums[i0], nums[i1], ... ,nums[ik])`.

Return *the sum of the **power** of all **non-empty** groups of heroes possible.* Since the sum could be very large, return it **modulo** `1e9 + 7`.

**Example 1:**

```
Input: nums = [2,1,4]
Output: 141
Explanation: 
1st group: [2] has power = 22 * 2 = 8.
2nd group: [1] has power = 12 * 1 = 1. 
3rd group: [4] has power = 42 * 4 = 64. 
4th group: [2,1] has power = 22 * 1 = 4. 
5th group: [2,4] has power = 42 * 2 = 32. 
6th group: [1,4] has power = 42 * 1 = 16. 
7th group: [2,1,4] has power = 42 * 1 = 16. 
The sum of powers of all groups is 8 + 1 + 64 + 4 + 32 + 16 + 16 = 141.
```

**Example 2:**

```
Input: nums = [1,1,1]
Output: 7
Explanation: A total of 7 groups are possible, and the power of each group will be 1. Therefore, the sum of the powers of all groups is 7.
```

**Constraints:**

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^9`

## Approach 1: Math

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wingkwong"/>

```py
class Solution:
    def sumOfPower(self, nums: List[int]) -> int:
        M = 10 ** 9 + 7
        # sort the input so that we can easily find the min and max
        # besides, sorting won't affect the result since original position doesn't matter
        nums.sort()
        res, s = 0, 0
        for x in nums:
            # if we just include one element [x], 
            # it is easy to see it contributes x * x * x
            # if we include a pair [x, y] where x < y, 
            # it contributes x * y * y 
            # if we include some numbers between x and y, i.e. [x, a, b, c, y] where x < a, b, c < y
            # the power is also x * y * y 
            # the number of subsets will be 2 ^ (j - i + 1)
            # e.g. [x, a, y], [x, a, b, y], [x, a, b, c, y], [x, b, y], [x, b, c] ...
            # hence, for each pair, the power will be x * y * y * 2 ^ (j - i + 1)
            # combining above two cases, for the index j, we got
            # (nums[j] * nums[j] * nums[j]) + (nums[j] * nums[j]) * \sum_{i = 0} ^ {j - 1} (nums[j] * 2 ^ (j - i + 1))
            # so how to calculate \sum_{i = 0} ^ {j - 1} (nums[j] * 2 ^ (j - i + 1)) in a linear time?
            # let F(i) = \sum_{i = 0} ^ {j - 1} (nums[j] * 2 ^ (j - i + 1))
            # rewrite the above formula, then we will see that F(i + 1) would be 2 * F(i) + nums[i]
			# if you have no idea on above mathematic explanation, 
			# try some cases and you will see the pattern
			# nums = [1, 2, 3, 4]
			# 1 * 1 * (1)
			# 2 * 2 * (1 * 2 ^ 0 + 2)
			# 3 * 3 * (1 * 2 ^ 1 + 2 * 2 ^ 0 + 3)
			# 4 * 4 * (1 * 2 ^ 2  + 2 * 2 ^ 1 + 3 * 2 ^ 0 + 4)
			# ...
			# x * x * (prev_s * 2 + x)
            res += (x + s) * (x * x) 
            res %= M
            s = (s * 2 + x) % M
        return res
```

</TabItem>
</Tabs>