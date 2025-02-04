---
description: 'Author: @wkw | https://leetcode.com/problems/maximum-or/'
---

# 2680 - Maximum OR (Medium)

## Problem Link

https://leetcode.com/problems/maximum-or/

## Problem Statement

You are given a **0-indexed** integer array `nums` of length `n` and an integer `k`. In an operation, you can choose an element and multiply it by `2`.

Return _the maximum possible value of_`nums[0] | nums[1] | ... | nums[n - 1]` _that can be obtained after applying the operation on nums at most_`k`_times_.

Note that `a | b` denotes the **bitwise or** between two integers `a` and `b`.

**Example 1:**

```
Input: nums = [12,9], k = 1
Output: 30
Explanation: If we apply the operation to index 1, our new array nums will be equal to [12,18]. Thus, we return the bitwise or of 12 and 18, which is 30.
```

**Example 2:**

```
Input: nums = [8,1,2], k = 2
Output: 35
Explanation: If we apply the operation twice on index 0, we yield a new array of [32,1,2]. Thus, we return 32|1|2 = 35.
```

**Constraints:**

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^9`
- `1 <= k <= 15`

## Approach 1: Prefix & Suffix

<Tabs>
<TabItem value="cpp" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def maximumOr(self, nums: List[int], k: int) -> int:
        n, res = len(nums), 0
        pre, suf = [0] * n, [0] * n
        # calculate the prefix OR
        for i in range(n - 1): pre[i + 1] = pre[i] | nums[i]
        # calculate the suffix OR
        for i in range(n - 1, 0, -1): suf[i - 1] = suf[i] | nums[i]
        # iterate each number
        # we apply k operations on nums[i], i.e. shift k bits to the left
        # why not applying on multiple numbers?
        # first in binary format, multiplying a number by 2 is shifting 1 bit to the left
        # e.g. 0010 (2) -> 0100 (4)
        # e.g. 0101 (5) -> 1010 (10)
        # second, in OR operation, we wish there is a 1 as left as possible
        # which produces the greater value
        # hence, we apply on the same number to achieve the max value
        # which produces the max OR value
        # now we calculate nums[0] | nums[1] | ... | nums[n - 1]
        # by utilising the prefix OR and suffix OR
        # the reason is simple
        # we precompute the result instead of calculate the OR values on each iteration
        for i in range(n): res = max(res, pre[i] | nums[i] << k | suf[i])
        return res
```

</TabItem>
</Tabs>
