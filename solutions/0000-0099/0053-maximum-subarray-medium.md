---
description: 'Author: @ColeB2 | https://leetcode.com/problems/maximum-subarray/'
tags: [Array, Divide and Conquer, Dynamic Programming]
---

# 0053 - Maximum Subarray (Medium)

## Problem Link

https://leetcode.com/problems/maximum-subarray/

## Problem Statement

Given an integer array `nums`, find the subarray with the largest sum, and return _its sum_.

**Example 1:**

```
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
```

**Example 2:**

```
Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
```

**Example 3:**

```
Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
```

**Constraints:**

- `1 <= nums.length <= 10^5`
- `-10^4 <= nums[i] <= 10^4`

**Follow up**: If you have figured out the `O(n)` solution, try coding another solution using the **divide and conquer** approach, which is more subtle.

## Approach 1: Kadane's Algorithm

We can use a dynamic programming approach, using tabulation. We would store the maximum value of the subarray at each position in the tabulation table, $$i$$, based off either the current number, or the maximum of the previous sum, $$i - 1$$ plus the current number.

Since we only ever need to know the previous sum though, we can save space using Kadane's Algorithm and just track the current running sum, and the max subarray.

We can initialize both current, and max sum as the first number in nums, loop through each number in nums starting at $$1$$ and then update our current sum with the max of either the current number plus current sum, or the current number. We can update our max subarray sum with the current sum and max subarray sum, and return the max subarray sum at the end.

Time Complexity: $$O(n)$$, where $$n$$ is the length of $$nums$$. We must iterate each number in $$nums$$.

Space Complexity: $$O(1)$$. We can use constant space, just tracking current subarray sum, and the max subarray sum.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        # initialize max and current subarray sums as first value of nums.
        max_sum = nums[0]
        cur_sum = nums[0]
        # loop each number in nums starting at 1.
        for i in range(1, len(nums)):
            # update our current sum and max sum. If current number is
            # larger than current sum plus current number, then take
            # the current number instead.
            cur_sum = max(cur_sum + nums[i], nums[i])
            max_sum = max(max_sum, cur_sum)
        # return max_sum.
        return max_sum
```

</TabItem>
</Tabs>
