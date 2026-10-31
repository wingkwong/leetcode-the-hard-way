---
description: 'Author: @wkw | https://leetcode.com/problems/twisted-mirror-path-count'
tags: ['Array', 'Dynamic Programming', 'Matrix']
---

# 3665 - Twisted Mirror Path Count (Medium)

## Problem Link

https://leetcode.com/problems/twisted-mirror-path-count

## Problem Statement

Given an `m x n` binary grid `grid` where:

- `grid[i][j] == 0` represents an empty cell, and
- `grid[i][j] == 1` represents a mirror.

A robot starts at the top-left corner of the grid `(0, 0)` and wants to reach the bottom-right corner `(m - 1, n - 1)`. It can move only **right** or **down**. If the robot attempts to move into a mirror cell, it is **reflected** before entering that cell:

- If it tries to move **right** into a mirror, it is turned **down** and moved into the cell directly below the mirror.
- If it tries to move **down** into a mirror, it is turned **right** and moved into the cell directly to the right of the mirror.

If this reflection would cause the robot to move outside the `grid` boundaries, the path is considered invalid and should not be counted.

Return the number of unique valid paths from `(0, 0)` to `(m - 1, n - 1)`.

Since the answer may be very large, return it **modulo** `1e9 + 7`.

**Note**: If a reflection moves the robot into a mirror cell, the robot is immediately reflected again based on the direction it used to enter that mirror: if it entered while moving right, it will be turned down; if it entered while moving down, it will be turned right. This process will continue until either the last cell is reached, the robot moves out of bounds or the robot moves to a non-mirror cell.

**Example 1:**

**Input:** grid = [[0,1,0],[0,0,1],[1,0,0]]

**Output:** 5

**Explanation:**

NumberFull Path1(0, 0) → (0, 1) [M] → (1, 1) → (1, 2) [M] → (2, 2)2(0, 0) → (0, 1) [M] → (1, 1) → (2, 1) → (2, 2)3(0, 0) → (1, 0) → (1, 1) → (1, 2) [M] → (2, 2)4(0, 0) → (1, 0) → (1, 1) → (2, 1) → (2, 2)5(0, 0) → (1, 0) → (2, 0) [M] → (2, 1) → (2, 2)

- `[M]` indicates the robot attempted to enter a mirror cell and instead reflected.

**Example 2:**

**Input:** grid = [[0,0],[0,0]]

**Output:** 2

**Explanation:**

NumberFull Path1(0, 0) → (0, 1) → (1, 1)2(0, 0) → (1, 0) → (1, 1)

**Example 3:**

**Input:** grid = [[0,1,1],[1,1,0]]

**Output:** 1

**Explanation:**

NumberFull Path1(0, 0) → (0, 1) [M] → (1, 1) [M] → (1, 2)
`(0, 0) → (1, 0) [M] → (1, 1) [M] → (2, 1)` goes out of bounds, so it is invalid.

**Constraints:**

- `m == grid.length`
- `n == grid[i].length`
- `2 <= m, n <= 500`
- `grid[i][j]` is either `0` or `1`.
- `grid[0][0] == grid[m - 1][n - 1] == 0`

## Approach 1: Dynamic Programming

We can process the grid from top to bottom and left to right, just like the classic Unique Paths DP. The only extra work is handling mirrors.

Let $d[j]$ be the number of ways that can reach the current cell from above when we are scanning column $j$, and let $res$ be the number of ways that can reach the current cell from the left.

For a normal cell $0$, the transition is the same as usual:

- paths from the left = $res$
- paths from above = $d[j]$
- total paths reaching this cell = $res + d[j]$

After that, this total can continue in both directions:

- to the right for the rest of the current row
- downward for future rows

So for an empty cell we do $res = d[j] = res + d[j]$

Now consider a mirror cell $1$.

- If a path tries to enter it from the left, it is reflected down.
- If a path tries to enter it from above, it is reflected right.

That means the two flows do not merge at the mirror. They simply exchange where they should go next:

- the paths from above should now continue to the right, so they become the new $res$
- the paths from the left should now continue downward, so they become the new $d[j]$

So for a mirror cell we only need to swap them.

This also automatically handles chains of mirrors. If a path is reflected into another mirror, it will be swapped again when that next mirror is processed. Invalid reflections that go out of bounds are also discarded naturally:

- if a mirror sends a path below the last row, that path stays in $d[j]$ but is never used again
- if a mirror sends a path past the last column, that path stays in $res$ but never contributes to another cell

We initialize $d[0] = 1$ because there is one way to start at $(0, 0)$, and all other entries are $0$. After scanning the whole grid, $res$ is the number of valid paths reaching the bottom-right corner.

The time complexity is $O(m * n)$ and the space complexity is $O(n)$.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def uniquePaths(self, grid: List[List[int]]) -> int:
        M = 10 ** 9 + 7
        d = [1] + [0] * (len(grid[0]) - 1)
        for r in grid:
            res = 0
            for j, x in enumerate(r):
                if x: res, d[j] = d[j], res
                else: res = d[j] = (res + d[j]) % M
        return res
```

</TabItem>
</Tabs>