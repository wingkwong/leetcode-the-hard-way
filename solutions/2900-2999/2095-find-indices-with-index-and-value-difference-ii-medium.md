---
description: 'Author: @wkw | https://leetcode.com/problems/find-indices-with-index-and-value-difference-ii/'
tags: [Array]
---

# 2905 - Find Indices With Index and Value Difference II (Medium)

## Problem Link

https://leetcode.com/problems/find-indices-with-index-and-value-difference-ii/

## Problem Statement

You are given a **0-indexed** integer array `nums` having length `n`, an integer `indexDifference`, and an integer `valueDifference`.

Your task is to find **two** indices `i` and `j`, both in the range `[0, n - 1]`, that satisfy the following conditions:

- `abs(i - j) >= indexDifference`, and
- `abs(nums[i] - nums[j]) >= valueDifference`

Return _an integer array_ `answer`, _where_ `answer = [i, j]` _if there are two such indices_, _and_ `answer = [-1, -1]` _otherwise_. If there are multiple choices for the two indices, return _any of them_.

**Note:** `i` and `j` may be **equal**.

**Example 1:**

```
Input: nums = [5,1,4,1], indexDifference = 2, valueDifference = 4
Output: [0,3]
Explanation: In this example, i = 0 and j = 3 can be selected.
abs(0 - 3) >= 2 and abs(nums[0] - nums[3]) >= 4.
Hence, a valid answer is [0,3].
[3,0] is also a valid answer.
```

**Example 2:**

```
Input: nums = [2,1], indexDifference = 0, valueDifference = 0
Output: [0,0]
Explanation: In this example, i = 0 and j = 0 can be selected.
abs(0 - 0) >= 0 and abs(nums[0] - nums[0]) >= 0.
Hence, a valid answer is [0,0].
Other valid answers are [0,1], [1,0], and [1,1].
```

**Example 3:**

```
Input: nums = [1,2,3], indexDifference = 2, valueDifference = 4
Output: [-1,-1]
Explanation: In this example, it can be shown that it is impossible to find two indices that satisfy both conditions.
Hence, [-1,-1] is returned.
```

**Constraints:**

- `1 <= n == nums.length <= 1e5`
- `0 <= nums[i] <= 1e9`
- `0 <= indexDifference <= 1e5`
- `0 <= valueDifference <= 1e9`

## Approach 1: One Pass

The brute force approach takes $O(n ^ 2)$ complexity. It won't pass in this problem. We can further optimize to $O(n)$. Since we know that $abs(i - j) >= indexDifference$, we can start iterating from $indexDifference$, then find the current min index and max index in $nums$. If the second condition is satisfied, then return the current index and the target index (either min index or max index depending on the case). See below code for better understanding.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def findIndices(self, nums: List[int], indexDifference: int, valueDifference: int) -> List[int]:
        mi_i, mx_i = 0, 0
        for i in range(indexDifference, len(nums)):
            if nums[i - indexDifference] < nums[mi_i]: mi_i = i - indexDifference
            if nums[i - indexDifference] > nums[mx_i]: mx_i = i - indexDifference
            if nums[i] - nums[mi_i] >= valueDifference: return [i, mi_i]
            if nums[mx_i] - nums[i] >= valueDifference: return [i, mx_i]
        return [-1, -1]
```

</TabItem>
</Tabs>
