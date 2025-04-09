---
description: 'Author: @wkw | https://leetcode.com/problems/minimum-operations-to-make-array-values-equal-to-k/'
---

# 3375. Minimum Operations to Make Array Values Equal to K (Easy)

## Problem Link

https://leetcode.com/problems/minimum-operations-to-make-array-values-equal-to-k

## Problem Statement

You are given an integer array nums and an integer k.

An integer h is called valid if all values in the array that are strictly greater than h are identical.

For example, if nums = [10, 8, 10, 8], a valid integer is h = 9 because all nums[i] > 9 are equal to 10, but 5 is not a valid integer.

You are allowed to perform the following operation on nums:

Select an integer h that is valid for the current values in nums. For each index i where nums[i] > h, set nums[i] to h. Return the minimum number of operations required to make every element in nums equal to k. If it is impossible to make all elements equal to k, return -1.

**Example 1:**

**Input:** nums = [5,2,5,4,5], k = 2

**Output:** 2

**Explanation:**

The operations can be performed in order using valid integers 4 and then 2.

**Example 2:**

**Input:** nums = [2,1,2], k = 2

**Output:** -1

**Explanation:**

It is impossible to make all the values equal to 2.

**Example 3:**

**Input:** nums = [9,7,5,3], k = 1

**Output:** 4

**Explanation:**

The operations can be performed using valid integers in the order 7, 5, 3, and 1.

**Constraints:**

- $1 <= nums.length <= 100$
- $1 <= nums[i] <= 100$
- $1 <= k <= 100$

## Approach 1: Check Distinct Numbers

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
# TC: O(n)
# SC: O(1)
class Solution:
    def minOperations(self, nums: List[int], k: int) -> int:
        # we can just focus on distinct numbers in $nums$

        # in example 1, d = {5, 4, 2}
        # we can see that the numbers > 2 are 5 and 4, so the answer is 2
        # in op1, we can choose h = 4 to make [5,2,5,4,5] to [4,2,4,4,4]
        # in op2, we can choose h = 2 to make [4,2,4,4,4] to [2,2,2,2,2]

        # in example 2, d = {1, 2}
        # since 1 < 2 so it is not possible to make all elements equal to k,
        # hence we return -1 in this case

        # if there is a number $x$ that is less than $k$,
        # then return -1
        if any(x < k for x in nums): return -1
        # otherwise check the size of the unique number that is greater than k
        return len(set(x for x in nums if x > k))
```

</TabItem>
</Tabs>
