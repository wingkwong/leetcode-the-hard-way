---
description: 'Author: @wingkwong, @jit | https://leetcode.com/problems/largest-local-values-in-a-matrix/'
tags: [Array, Matrix]
---

# 2373 - Largest Local Values in a Matrix (Easy) 

## Problem Link

https://leetcode.com/problems/largest-local-values-in-a-matrix/

## Problem Statement

You are given an `n x n` integer matrix `grid`.

Generate an integer matrix `maxLocal` of size `(n - 2) x (n - 2)` such that:

- `maxLocal[i][j]` is equal to the **largest** value of the `3 x 3` matrix in `grid` centered around row `i + 1` and column `j + 1`.

In other words, we want to find the largest value in every contiguous `3 x 3` matrix in `grid`.

Return *the generated matrix*.

**Example 1:**

```
Input: grid = [[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]
Output: [[9,9],[8,6]]
Explanation: The diagram above shows the original matrix and the generated matrix.
Notice that each value in the generated matrix corresponds to the largest value of a contiguous 3 x 3 matrix in grid.
```

**Example 2:**

```
Input: grid = [[1,1,1,1,1],[1,1,1,1,1],[1,1,2,1,1],[1,1,1,1,1],[1,1,1,1,1]]
Output: [[2,2,2],[2,2,2],[2,2,2]]
Explanation: Notice that the 2 is contained within every contiguous 3 x 3 matrix in grid.
```

**Constraints:**

- `n == grid.length == grid[i].length`
- `3 <= n <= 100`
- `1 <= grid[i][j] <= 100`

## Approach 1: Simulation

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wingkwong"/>

```py
class Solution:
    def largestLocal(self, grid: List[List[int]]) -> List[List[int]]:
        n = len(grid)
        # the result matrix is always (n - 2) * (n - 2)
        res = [[0] * (n - 2) for _ in range(n - 2)]
        # iterate all possible 3 x 3 grids
        for i in range(n - 2):
            for j in range(n - 2):
                # for (i, j) being at top-left, 
                # iterate to check the max in this 3 x 3 grid
                for ii in range(i, i + 3):
                    for jj in range(j, j + 3):
                        res[i][j] = max(res[i][j], grid[ii][jj])
        return res
```

</TabItem>

<TabItem value="scala" label="scala">
<SolutionAuthor name="@jit"/>

```scala
object Solution:
  def largestLocal(grid: Array[Array[Int]]): Array[Array[Int]] =
    Array.tabulate(grid.size - 2, grid.size - 2): (i, j) =>
      grid.slice(i, i + 3).map(_.slice(j, j + 3).max).max
```

</TabItem>
</Tabs>