---
description: "Author: @dhanu084 | https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/"
---

# 2441 - Largest Positive Integer That Exists With Its Negative (Easy)

## Problem Link

https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative

## Problem Statement

Given an integer array nums that does not contain any zeros, find the largest positive integer k such that -k also exists in the array.

Return the positive integer k. If there is no such integer, return -1.

**Example 1:**

```
Input: nums = [-1,2,-3,3]
Output: 3
Explanation: 3 is the only valid k we can find in the array.
```

**Example 2:**

```
Input: nums = [-1,10,6,7,-7,1]
Output: 7
Explanation: Both 1 and 7 have their corresponding negative values in the array. 7 has a larger value.
```

**Example 3:**

```
Input: nums = [-10,8,6,7,-2,-3]
Output: -1
Explanation: There is no a single valid k, we return -1.
```

** Constraints **

- 1 <= nums.length <= 1000
- -1000 <= nums[i] <= 1000
- nums[i] != 0

## Approach 1: Sorting

Time complexity: $$O(n log n)$$, where n is the length of the array

Space complexity: $$O(n)$$ for set

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@dhanu084" />

```py
class Solution:
    def findMaxK(self, nums: List[int]) -> int:
        # add all elements to a set
        seen = set(nums)

        '''
            sort the number in reverse order as we need to
            find the largest number whose negative is
            present in the array
        '''
        for num in sorted(list(nums), reverse = True):
            if -num in seen:
                return num
        # if no negative is found for the maximum return -1
        return -1
```

</TabItem>
</Tabs>

## Approach 2: O(n) approach by maintaing a variable

Time complexity: $$O(n)$$, where n is the length of the array

Space complexity: $$O(n)$$ for set

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@dhanu084" />

```py
class Solution:
    def findMaxK(self, nums: List[int]) -> int:
        seen = set(nums)
        '''
            using max_so_far to store the maximum number
            whose negative is present in the array
        '''
        max_so_far = -inf
        for num in nums:
            if -num in seen:
                max_so_far = max(max_so_far, num)

        # if no negative is found for the maximum return -1
        return max_so_far if max_so_far != -inf else -1
```

</TabItem>
</Tabs>
