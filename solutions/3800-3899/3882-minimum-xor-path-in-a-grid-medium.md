---
description: 'Author: @wkw | https://leetcode.com/problems/minimum-xor-path-in-a-grid'
tags: ['Dynamic Programming', 'Bit Manipulation', 'Matrix']
---

# 3882 - Minimum XOR Path in a Grid (Medium)

## Problem Link

https://leetcode.com/problems/minimum-xor-path-in-a-grid

## Problem Statement

You are given a 2D integer array `grid` of size `m * n`.

You start at the **top-left** cell `(0, 0)` and want to reach the **bottom-right** cell `(m - 1, n - 1)`.

At each step, you **may** move either **right or down**.

The **cost** of a path is defined as the **bitwise XOR** of all the values in the cells along that path, **including** the start and end cells.

Return the **minimum** possible XOR value among all valid paths from `(0, 0)` to `(m - 1, n - 1)`.

**Example 1:**

**Input:** grid = [[1,2],[3,4]]

**Output:** 6

**Explanation:**

There are two valid paths:

- `(0, 0) → (0, 1) → (1, 1)` with XOR: `1 XOR 2 XOR 4 = 7`
- `(0, 0) → (1, 0) → (1, 1)` with XOR: `1 XOR 3 XOR 4 = 6`

The minimum XOR value among all valid paths is 6.

**Example 2:**

**Input:** grid = [[6,7],[5,8]]

**Output:** 9

**Explanation:**

There are two valid paths:

- `(0, 0) → (0, 1) → (1, 1)` with XOR: `6 XOR 7 XOR 8 = 9`
- `(0, 0) → (1, 0) → (1, 1)` with XOR: `6 XOR 5 XOR 8 = 11`

The minimum XOR value among all valid paths is 9.

**Example 3:**

**Input:** grid = [[2,7,5]]

**Output:** 0

**Explanation:**

There is only one valid path:

- `(0, 0) → (0, 1) → (0, 2)` with XOR: `2 XOR 7 XOR 5 = 0`

The XOR value of this path is 0, which is the minimum possible.

**Constraints:**

- `1 <= m == grid.length <= 1000`
- `1 <= n == grid[i].length <= 1000`
- `m * n <= 1000`
- `0 <= grid[i][j] <= 1023`

## Approach 1: Dynamic Programming

For each cell, we keep track of every XOR value that can be obtained by reaching that cell. We cannot store only the minimum XOR because XOR is not monotonic. A smaller XOR at an intermediate cell does not always lead to a smaller XOR at the destination.

A path can reach $(i, j)$ only from the cell above $(i - 1, j)$ or the cell to the left $(i, j - 1)$. Therefore, we take all XOR values reachable from those two cells and XOR each one with $grid[i][j]$.

Since every grid value is between $0$ and $1023$, every possible path XOR is also between $0$ and $1023$. Thus, each cell can have at most $1024$ different XOR values.

We use a one-dimensional DP array, where $dp[j]$ stores the XOR values reachable at column $j$. While processing a cell, $dp[j]$ contains the states from above, and $dp[j - 1]$ contains the updated states from the left. After processing the bottom-right cell, the smallest value in its set is the answer.

The time complexity is $O(m * n * 1024)$ and the space complexity is $O(n * 1024)$.


<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def minCost(self, grid: list[list[int]]) -> int:
        m, n = len(grid), len(grid[0])
        dp = [set() for _ in range(n)]
        for i in range(m):
            for j in range(n):
                val = set()
                if i == 0 and j == 0: val.add(0)
                if i > 0: val.update(dp[j])
                if j > 0: val.update(dp[j - 1])
                dp[j] = {v ^ grid[i][j] for v in val}
        return min(dp[-1])
```

</TabItem>
</Tabs>