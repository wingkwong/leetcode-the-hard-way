---
description: "Author: @wingkwong | https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum/"
---

# 3300 - Minimum Element After Replacement With Digit Sum (Easy)

## Problem Link

https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum/

## Problem Statement

You are given an integer array `nums`.

You replace each element in `nums` with the **sum** of its digits.

Return the **minimum** element in `nums` after all replacements.

**Example 1:**

**Input:** nums = [10,12,13,14]

**Output:** 1

**Explanation:**

`nums` becomes `[1, 3, 4, 5]` after all replacements, with minimum element 1.

**Example 2:**

**Input:** nums = [1,2,3,4]

**Output:** 1

**Explanation:**

`nums` becomes `[1, 2, 3, 4]` after all replacements, with minimum element 1.

**Example 3:**

**Input:** nums = [999,19,199]

**Output:** 10

**Explanation:**

`nums` becomes `[27, 10, 19]` after all replacements, with minimum element 10.

**Constraints:**

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 10^4`

## Approach 1: Brute Force

For each element, we calculate the digit sum and use $res$ to keep track of the minimum one.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wingkwong"/>

```py
class Solution:
    def minElement(self, nums: List[int]) -> int:
        res = 10 ** 9
        for x in nums:
            s = 0
            while x > 0:
                s += x % 10
                x //= 10
            res = min(res, s)
        return res
```

</TabItem>
</Tabs>
