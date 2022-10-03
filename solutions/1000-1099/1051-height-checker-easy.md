---
description: 'Author: @anikethbr| https://leetcode.com/problems/height-checker/'
---

# 1051- Height Checker

## Problem Link

https://leetcode.com/problems/height-checker/

## Problem Statement

A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in non-decreasing order by height. Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.

You are given an integer array heights representing the current order that the students are standing in. Each heights[i] is the height of the ith student in line (0-indexed).

Return the number of indices where heights[i] != expected[i].

**Example 1:**

```
Input: heights = [1,1,4,2,1,3]
Output: 3
Explanation: 
heights:  [1,1,4,2,1,3]
expected: [1,1,1,2,3,4]
Indices 2, 4, and 5 do not match.
```

**Example 2:**

```
Input: heights = [5,1,2,3,4]
Output: 5
Explanation:
heights:  [5,1,2,3,4]
expected: [1,2,3,4,5]
All indices do not match.
```

**Constraints:**

* `1 <= heights.length <= 100`
* `1 <= heights[i] <= 100`

## Approach 1: Sort and scan for changes

In this approach we copy the heights array into another array and then iterate through the heights array, for each change we increment the count.

<SolutionAuthor name="@anikethbr"/>

```python
import copy
class Solution:
    def heightChecker(self, heights: List[int]) -> int:
        l=copy.deepcopy(heights)
        heights.sort()
        c=0
        for i in range(len(heights)):
            if l[i]!=heights[i]:
                c+=1
        return c
```
