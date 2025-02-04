---
description: 'Author: @wkw | https://leetcode.com/problems/path-with-maximum-gold/'
tags: [Array, Backtracking, Matrix]
---

# 1219 - Path with Maximum Gold (Medium)

## Problem Link

https://leetcode.com/problems/path-with-maximum-gold/

## Problem Statement

In a gold mine `grid` of size `m x n`, each cell in this mine has an integer representing the amount of gold in that cell, `0` if it is empty.

Return the maximum amount of gold you can collect under the conditions:

- Every time you are located in a cell you will collect all the gold in that cell.
- From your position, you can walk one step to the left, right, up, or down.
- You can't visit the same cell more than once.
- Never visit a cell with `0` gold.
- You can start and stop collecting gold from **any**position in the grid that has some gold.

**Example 1:**

```
Input: grid = [[0,6,0],[5,8,7],[0,9,0]]
Output: 24
Explanation:
[[0,6,0],
 [5,8,7],
 [0,9,0]]
Path to get the maximum gold, 9 -> 8 -> 7.
```

**Example 2:**

```
Input: grid = [[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]]
Output: 28
Explanation:
[[1,0,7],
 [2,0,6],
 [3,4,5],
 [0,3,0],
 [9,0,20]]
Path to get the maximum gold, 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7.
```

**Constraints:**

- $m == grid.length$
- $n == grid[i].length$
- $1 <= m, n <= 15$
- $0 <= grid[i][j] <= 100$
- There are at most **25** cells containing gold.

## Approach 1: DFS Backtracking

Since only at most $25$ cells containing gold, we can try all the possible paths using backtracking.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int dx[4] = {-1, 0, 1, 0};
    int dy[4] = {0, -1, 0, 1};
    int dfs(vector<vector<int>>& grid, int i, int j) {
        int m = grid.size(), n = grid[0].size();
        int res = 0, orig = grid[i][j];
        // mark grid[i][j] as 0 so that we won't visit again in this route
        grid[i][j] = 0;
        // try all 4 directions
        for (int d = 0; d < 4; d++) {
            // next (i, j)
            int next_i = i + dx[d], next_j = j + dy[d];
            // check if next coordinate is still in the grid
            if (0 <= next_i && next_i < m && 0 <= next_j && next_j < n && grid[next_i][next_j]) {
                // if so, continue with the next position
                res = max(res, grid[next_i][next_j] + dfs(grid, next_i, next_j));
            }
        }
        // backtrack
        grid[i][j] = orig;
        return res;
    }
    int getMaximumGold(vector<vector<int>>& grid) {
        int m = grid.size(), n = grid[0].size(), ans = 0;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j]) {
                    // start from grid[i][j]
                    ans = max(ans, grid[i][j] + dfs(grid, i, j));
                }
            }
        }
        return ans;
    }
};
```

</TabItem>
</Tabs>
