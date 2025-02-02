---
description: 'Author: @wkw | https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/'
---

# 2639 - Find the Width of Columns of a Grid (Easy)

## Problem Link

https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/

## Problem Statement

You are given a **0-indexed** `m x n` integer matrix `grid`. The width of a column is the maximum **length**of its integers.

- For example, if `grid = [[-10], [3], [12]]`, the width of the only column is `3` since `-10` is of length `3`.

Return _an integer array_ `ans` _of size_ `n` _where_ `ans[i]` _is the width of the_ `ith` _column_.

The **length** of an integer `x` with `len` digits is equal to `len` if `x` is non-negative, and `len + 1` otherwise.

**Example 1:**

```
Input: grid = [[1],[22],[333]]
Output: [3]
Explanation: In the 0th column, 333 is of length 3.
```

**Example 2:**

```
Input: grid = [[-15,1,3],[15,7,12],[5,6,-2]]
Output: [3,1,2]
Explanation:
In the 0th column, only -15 is of length 3.
In the 1st column, all integers are of length 1.
In the 2nd column, both 12 and -2 are of length 2.
```

**Constraints:**

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 100`
- `-109 <= grid[r][c] <= 1e9`

## Approach 1: Transpose and Count Digits

The idea is to first transpose `grid` using `zip`. Then we calculate the number of digits and take the max. Alternatively we can convert to string and check the length.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def findColumnWidth(self, grid: List[List[int]]) -> List[int]:
        def cal(x):
            res = 0
            if x == 0:
                res += 1
            if x < 0:
                res += 1
                x = -x
            while x > 0:
                x //= 10
                res += 1
            return res
        # we can further simplifed to
        # return [max(cal(y) for y in x) for x in zip(*grid)]
        res = []
        for x in zip(*grid):
            mx = 1
            for y in x:
                mx = max(mx, cal(y))
            res.append(mx)
        return res
```

</TabItem>
</Tabs>
