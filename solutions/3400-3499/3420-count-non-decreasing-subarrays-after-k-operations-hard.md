---
title: 'LeetCode 3420 – Count Non-Decreasing Subarrays After K Operations'
description: 'Maintain the cost of making each window non-decreasing using a monotonic deque, shrinking from the right when the cost exceeds k.'
tags: ['Array', 'Stack', 'Segment Tree', 'Queue', 'Sliding Window', 'Monotonic Stack', 'Monotonic Queue']
---

# 3420 - Count Non-Decreasing Subarrays After K Operations (Hard)

## Problem Link

https://leetcode.com/problems/count-non-decreasing-subarrays-after-k-operations

## Problem Statement

You are given an array `nums` of `n` integers and an integer `k`.

For each subarray of `nums`, you can apply **up to** `k` operations on it. In each operation, you increment any element of the subarray by 1.

**Note** that each subarray is considered independently, meaning changes made to one subarray do not persist to another.

Return the number of subarrays that you can make **non-decreasing** ​​​​​after performing at most `k` operations.

An array is said to be **non-decreasing** if each element is greater than or equal to its previous element, if it exists.

OriginalPython3**Example 1:**

**Input:** nums = [6,3,1,2,4,4], k = 7

**Output:** 17

**Explanation:**

Out of all 21 possible subarrays of `nums`, only the subarrays `[6, 3, 1]`, `[6, 3, 1, 2]`, `[6, 3, 1, 2, 4]` and `[6, 3, 1, 2, 4, 4]` cannot be made non-decreasing after applying up to k = 7 operations. Thus, the number of non-decreasing subarrays is `21 - 4 = 17`.

**Example 2:**

**Input:** nums = [6,3,1,3,6], k = 4

**Output:** 12

**Explanation:**

The subarray `[3, 1, 3, 6]` along with all subarrays of `nums` with three or fewer elements, except `[6, 3, 1]`, can be made non-decreasing after `k` operations. There are 5 subarrays of a single element, 4 subarrays of two elements, and 2 subarrays of three elements except `[6, 3, 1]`, so there are `1 + 5 + 4 + 2 = 12` subarrays that can be made non-decreasing.

**Constraints:**

- `1 <= nums.length <= 1e5`
- `1 <= nums[i] <= 1e9`
- `1 <= k <= 1e9`

## Approach 1: Sliding Window + Monotonic Deque

For a fixed subarray, the cheapest choice is to go from left to right and increase any number that is smaller than the largest number before it. We try each left endpoint from right to left and use $r$ as the farthest valid right endpoint. The deque $d$ keeps track of the running maximums in the current window. When $nums[l]$ is larger than values at the front of the deque, those parts of the window now need to be raised to $nums[l]$, so we add that amount to $cost$.

If $cost$ becomes greater than $k$, we move $r$ left until the window is valid again. Then every subarray starting at $l$ and ending from $l$ through $r$ is valid which adds $r - l + 1$ to $res$.

The time complexity is $O(n)$ and the space complexity is $O(n)$.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def countNonDecreasingSubarrays(self, nums: List[int], k: int) -> int:
        d, r, cost, res = deque(), len(nums) - 1, 0, 0
        for l in range(r, -1, -1):
            while d and nums[d[0]] < nums[l]:
                i = d.popleft()
                cost += ((d[0] if d else r + 1) - i) * (nums[l] - nums[i])
            d.appendleft(l)
            while cost > k:
                cost -= nums[d[-1]] - nums[r]
                if d[-1] == r: d.pop()
                r -= 1
            res += r - l + 1
        return res
```

</TabItem>
</Tabs>