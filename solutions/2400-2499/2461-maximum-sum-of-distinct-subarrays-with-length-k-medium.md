---
description: 'Author: @Dhanu084 | https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/'
tags: [Array, Hash Table, Sliding Window]
---

# 2461 - Maximum Sum of Distinct Subarrays With Length K (Medium)

## Problem Link

https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/description/

## Problem Statement

You are given an integer array nums and an integer k. Find the maximum subarray sum of all the subarrays of nums that meet the following conditions:

The length of the subarray is k, and All the elements of the subarray are distinct. Return the maximum subarray sum of all the subarrays that meet the conditions. If no subarray meets the conditions, return 0.

A subarray is a contiguous non-empty sequence of elements within an array.

**Example 1:**

```
Input: nums = [1,5,4,2,9,9,9], k = 3
Output: 15
Explanation: The subarrays of nums with length 3 are:
- [1,5,4] which meets the requirements and has a sum of 10.
- [5,4,2] which meets the requirements and has a sum of 11.
- [4,2,9] which meets the requirements and has a sum of 15.
- [2,9,9] which does not meet the requirements because the element 9 is repeated.
- [9,9,9] which does not meet the requirements because the element 9 is repeated.
We return 15 because it is the maximum subarray sum of all the subarrays that meet the conditions
```

**Example 2:**

```
Input: nums = [4,4,4], k = 3
Output: 0
Explanation: The subarrays of nums with length 3 are:
- [4,4,4] which does not meet the requirements because the element 4 is repeated.
We return 0 because no subarrays meet the conditions.
```

**Constraints:**

- $1 <= k <= nums.length <= 10^5$
- $1 <= nums[i] <= 10^5$

## Approach 1: Sliding Window

Time complexity: $$O(n)$$, where n is the length of the array

Space complexity: $$O(k)$$, where k is the length of the dictionary/hashmap

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@dhanu084"/>

```py
class Solution:
    def maximumSubarraySum(self, nums: List[int], k: int) -> int:
        left = 0
        max_sum = current_sum = 0
        n = len(nums)
        # use dictionary instead of set to store frequencies, as the array can consist duplicates
        seen = {}
        for right in range(n):
            seen[nums[right]] = seen.get(nums[right], 0) + 1
            # current sum keeps track of the sum of the subarray of size k
            current_sum += nums[right]
            '''
                when the difference between right and left becomes k
                start reducing the value pointed by left pointer if the frequency of the number > 1
                else if the frequency is 1 we can just delete the entry
                eg Input : [3,3,3,3] and k = 2
                seen dictionary value for first subarray will be {3:2}
                when you move to next k range , it must be decremted to {3:1}

                eg Input: [1,5,4,2,9,9,9], k = 3
                seen dictionary value for first subarray will be {1:1,5:1,4:1}
                when moved to next k range remove the first 1 resulting in {5:1,4:1}

            '''
            if right - left + 1 == k:
                '''
                    if length of seen == k, this check is necessary to ensure
                    that we have no duplicates in the current subarray
                    Only after this check update the answer
                '''
                if len(seen) == k:
                    max_sum = max(max_sum, current_sum)
                if seen[nums[left]] > 1:
                    seen[nums[left]] -= 1
                else:
                    seen.pop(nums[left])
                '''
                    once value at left pointer is decreased or popped
                    from dictionary , remove its value from current sum
                    and increase left pointer
                '''
                current_sum -= nums[left]
                left += 1
        return max_sum
```

</TabItem>
</Tabs>
