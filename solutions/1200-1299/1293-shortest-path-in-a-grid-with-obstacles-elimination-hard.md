---
description: 'Author: @wingkwong | https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/'
tags: [Array, Breadth-First Search, Matrix]
---

<!-- 3304199 -->

# 1293 - Shortest Path in a Grid with Obstacles Elimination (Hard) 

## Problem Link

https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/

## Problem Statement

You are given an `m x n` integer matrix `grid` where each cell is either `0` (empty) or `1` (obstacle). You can move up, down, left, or right from and to an empty cell in **one step**.

Return *the minimum number of **steps** to walk from the upper left corner*`(0, 0)`*to the lower right corner*`(m - 1, n - 1)`*given that you can eliminate **at most***`k`*obstacles*. If it is not possible to find such walk return `-1`.

**Example 1:**

```
Input: grid = [[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]], k = 1
Output: 6
Explanation: 
The shortest path without eliminating any obstacle is 10.
The shortest path with one obstacle elimination at position (3,2) is 6. Such path is (0,0) -> (0,1) -> (0,2) -> (1,2) -> (2,2) -> (3,2) -> (4,2).
```

**Example 2:**

```
Input: grid = [[0,1,1],[1,1,1],[1,0,0]], k = 1
Output: -1
Explanation: We need to eliminate at least two obstacles to find such a walk.
```

**Constraints:**

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 40`
- `1 <= k <= m * n`
- `grid[i][j]` is either `0` **or** `1`.
- `grid[0][0] == grid[m - 1][n - 1] == 0`

## Approach 1: BFS

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    // 4 directions 
    const int dx[4] = { -1, 0, 0, 1 }, dy[4] = { 0, -1, 1, 0 };
    // if you are working on 8 directions, then you can use
    // const int dx[8]= { -1, 0, 0, 1, -1, -1, 1, 1 },
    //           dy[8]= { 0, 1, -1, 0, -1, 1, -1, 1 };
    
    int shortestPath(vector<vector<int>>& grid, int k) {
        int m = grid.size(), n = grid[0].size(), steps = 0;
        vector<vector<int>> remains(m, vector<int>(n, INT_MIN));
        // we have a queue storing {x, y, k} 
        // where x and y are coordinate 
        // and r is remain number of obstacles you can remove
        queue<array<int, 3>> q;
        // we start at (0, 0) with k
        q.push({0, 0, k});
        // at the beginning, you can eliminate at most k obstacles
        remains[0][0] = k;
        // BFS
        while (!q.empty()) {
            for (int it = q.size(); it > 0; it--) {
                auto cur = q.front(); q.pop();
                // if we reach the lower right corner (m - 1, n - 1)
                // then return the minimum number of steps
                if (cur[0] == m - 1 && cur[1] == n - 1) return steps;
                // otherwise we can try 4 directions (up, down, left and right)
                for (int i = 0; i < 4; i++) {
                    // given we have at (x, y), we can move to (next_x, next_y)
                    int next_x = cur[0] + dx[i], next_y = cur[1] + dy[i];
                    // however, first we need to make sure (next_x, next_y) is within the grid
                    if(next_x < 0 || next_x >= m || next_y < 0 || next_y >= n) continue;
                    // then, we check if we can eliminate an obstacle and move there
                    int remain = cur[2] - grid[next_x][next_y];
                    // we can only do that when `remain` is greater or equal to 0
                    // and the target remaining k must be less than the current remaining k
                    if(remain >= 0 && remains[next_x][next_y] < remain) {
                        // push to the queue for further process
                        q.push({next_x, next_y, remain});
                        // update the remaining k
                        remains[next_x][next_y] = remain;
                    }
                }
            }
            // increase step count
            steps += 1;
        }
        // if we reach here, 
        // then it means it is not possible to find such walk 
        return -1;
    }
};

```

</TabItem>
</Tabs>