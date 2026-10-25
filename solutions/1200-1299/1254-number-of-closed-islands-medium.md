---
description: 'Author: @wkw | https://leetcode.com/problems/number-of-closed-islands'
tags: ['Array', 'Depth-First Search', 'Breadth-First Search', 'Union-Find']
---

# 1254 - Number of Closed Islands (Medium)

## Problem Link

https://leetcode.com/problems/number-of-closed-islands

## Problem Statement

Given a 2D `grid` consists of `0s` (land) and `1s` (water).  An *island* is a maximal 4-directionally connected group of `0s` and a *closed island* is an island **totally** (all left, top, right, bottom) surrounded by `1s.`

Return the number of *closed islands*.

**Example 1:**

```
Input: grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
Output: 2
Explanation: 
Islands in gray are closed because they are completely surrounded by water (group of 1s).
```

**Example 2:**

```
Input: grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
Output: 1
```

**Example 3:**

```
Input: grid = [[1,1,1,1,1,1,1],
               [1,0,0,0,0,0,1],
               [1,0,1,1,1,0,1],
               [1,0,1,0,1,0,1],
               [1,0,1,1,1,0,1],
               [1,0,0,0,0,0,1],
               [1,1,1,1,1,1,1]]
Output: 2
```

**Constraints:**

- `1 <= grid.length, grid[0].length <= 100`
- `0 <= grid[i][j] <=1`

## Approach 1: DFS

We can treat every group of $4$-directionally connected $0$s as one island. For each unvisited land cell, run DFS to explore its entire island.

During the DFS:

- Mark each visited land cell as $2$ so it is not processed again.
- Check whether any cell in the island lies on the boundary of the grid.
- If a land cell touches the boundary, the island cannot be completely surrounded by water, so it is not closed.

Before exploring each new island, set `self.ok = True`. If DFS reaches a boundary cell, set `self.ok = False`. After the traversal finishes, increment the result only if `self.ok` is still True.

This ensures every island is visited exactly once, and only islands that do not touch any grid boundary are counted.

The time complexity is $O(n * m)$ and the space complexity is $O(n * m)$ where $n$ is the number of rows and $m$ is the number of columns.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def closedIsland(self, grid: List[List[int]]) -> int:
        n, m = len(grid), len(grid[0])
        res = 0
        # use dfs to explore every connected land cell belonging to the current island
        def dfs(x, y):
            # if the island reaches the grid boundary, it is not closed
            if x in (0, n - 1) or y in (0, m - 1): self.ok = False
            # visit the four neighboring cells
            for next_x, next_y in [(x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)]:
                # continue only if the neighbor is inside the grid and is land
                if 0 <= next_x < n and 0 <= next_y < m and grid[next_x][next_y] == 0:
                    # mark the land cell as visited
                    grid[next_x][next_y] = 2
                    # recursively explore the neighboring land cell
                    dfs(next_x, next_y)
        for i in range(n):
            for j in range(m):
                if grid[i][j] == 0:
                    # assume the current island is closed
                    self.ok = True
                    # explore the entire island
                    dfs(i, j)
                    # count the island if it does not touch the grid boundary
                    if self.ok == True: res += 1
        return res
```

</TabItem>
</Tabs>