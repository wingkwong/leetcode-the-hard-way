---
description: "Author: @dhanu084 | https://leetcode.com/problems/find-the-pivot-integer/"
tags: [Math]
---

# 2485 - Find the Pivot Integer (Easy)

## Problem Link

https://leetcode.com/problems/find-the-pivot-integer/

## Problem Statement

Given a positive integer n, find the pivot integer x such that:

The sum of all elements between 1 and x inclusively equals the sum of all elements between x and n inclusively.
Return the pivot integer x. If no such integer exists, return -1. It is guaranteed that there will be at most one pivot index for the given input.

**Example 1:**

```
Input: n = 8
Output: 6
Explanation: 6 is the pivot integer since: 1 + 2 + 3 + 4 + 5 + 6 = 6 + 7 + 8 = 21.
```

**Example 2:**

``
Input: n = 1
Output: 1
Explanation: 1 is the pivot integer since: 1 = 1.

```

**Example 3:**

```

Input: n = 4
Output: -1
Explanation: It can be proved that no such integer exist.

```

**Constraints**:
- 1 <= n <= 1000
```

## Approach 1: Math

Time Complexity: $$O(n)$$

Space Complexity: $$O(1)$$

<Tabs>
<TabItem value="py" label="Python">

<SolutionAuthor name="@dhanu084" />

```python

class Solution:
    def pivotInteger(self, n: int) -> int:
        if n == 1:
            return 1

        # calculate the sum till n
        total_sum = 0
        for i in range(1, n + 1):
            total_sum += i

        current_sum = 0
        '''
            start iterating again and increase current_sum and decrease total_sum
            if any case both are equal return that position
        '''
        for i in range(1, n + 1):
            current_sum += i
            if current_sum == total_sum:
                return i
            total_sum -= i

        return -1
```

</TabItem>
</Tabs>
