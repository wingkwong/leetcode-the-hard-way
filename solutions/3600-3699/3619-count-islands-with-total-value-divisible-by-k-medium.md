---
description: 'Author: @wkw | https://leetcode.com/problems/count-islands-with-total-value-divisible-by-k'
tags: ['Array', 'Depth-First Search', 'Breadth-First Search', 'Union-Find', 'Matrix']
rating: 1461
---

# 3619 - Count Islands With Total Value Divisible by K (Medium)

## Problem Link

https://leetcode.com/problems/count-islands-with-total-value-divisible-by-k

## Problem Statement

You are given an `m x n` matrix `grid` and a positive integer `k`. An **island** is a group of **positive** integers (representing land) that are **4-directionally** connected (horizontally or vertically).

The **total value** of an island is the sum of the values of all cells in the island.

Return the number of islands with a total value **divisible by** `k`.

**Example 1:**

**Input:** grid = [[0,2,1,0,0],[0,5,0,0,5],[0,0,1,0,0],[0,1,4,7,0],[0,2,0,0,8]], k = 5

**Output:** 2

**Explanation:**

The grid contains four islands. The islands highlighted in blue have a total value that is divisible by 5, while the islands highlighted in red do not.

**Example 2:**

**Input:** grid = [[3,0,3,0], [0,3,0,3], [3,0,3,0]], k = 3

**Output:** 6

**Explanation:**

The grid contains six islands, each with a total value that is divisible by 3.

**Constraints:**

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 1000`
- `1 <= m * n <= 1e5`
- `0 <= grid[i][j] <= 1e6`
- `1 <= k <= 1e6`

## Approach 1: Iterative DFS

Treat each group of four-directionally connected positive cells as an island. Use iterative depth-first search (DFS) to calculate each island's total value.

Traverse the grid row by row. Skip cells containing $0$, since they are water or already visited. When a positive cell is found, start a DFS: store its value in $v$, mark it visited by setting it to $0$, and push its coordinates onto stack $st$.

While the stack is not empty, pop a cell and check its four neighbors. For each valid positive neighbor, add its value to $v$, mark it as visited, and push it onto the stack. Marking cells when they are pushed prevents them from being counted more than once. After the DFS finishes, check whether $v \% k == 0$. If so, increment $res$. After processing the entire grid, return $res$.

The time complexity is $O(n * m)$ and the space complexity is $O(n * m)$ where $n$ is the number of rows and $m$ is the number of columns.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def countIslands(self, grid: List[List[int]], k: int) -> int:
        n, m, res = len(grid), len(grid[0]), 0
        for r in range(n):
            for c in range(m):
                # skip cells with value 0 or visited cells
                if grid[r][c] == 0: continue
                # the init total value of the current island
                v = grid[r][c]
                # mark the starting cell as visited
                grid[r][c] = 0
                # initialize the stack for iterative DFS
                st = [(r, c)]
                while st:
                    x, y = st.pop()
                    # explore the four adjacent cells
                    for next_x, next_y in (
                        (x + 1, y), (x - 1, y),
                        (x, y + 1), (x, y - 1)
                    ):
                        # check bounds and look for unvisited land
                        if (
                            0 <= next_x < n
                            and 0 <= next_y < m
                            and grid[next_x][next_y]
                        ):
                            # add the neighbor's value to the island total
                            v += grid[next_x][next_y]
                            # mark visited before pushing to avoid duplicates
                            grid[next_x][next_y] = 0
                            st.append((next_x, next_y))
                # count the island if its total is divisible by k
                res += v % k == 0
        return res
```

</TabItem>
</Tabs>