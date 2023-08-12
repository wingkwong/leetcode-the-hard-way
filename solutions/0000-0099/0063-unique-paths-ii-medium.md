---
description: 'Author: @wingkwong | https://leetcode.com/problems/unique-paths-ii/'
tags: [Array, Dynamic Programming, Matrix]
---

# 0063 - Unique Paths II (Medium) 

## Problem Link

https://leetcode.com/problems/unique-paths-ii/

## Problem Statement

You are given an `m x n` integer array `grid`. There is a robot initially located at the **top-left corner** (i.e., `grid[0][0]`). The robot tries to move to the **bottom-right corner** (i.e., `grid[m - 1][n - 1]`). The robot can only move either down or right at any point in time.

An obstacle and space are marked as `1` or `0` respectively in `grid`. A path that the robot takes cannot include **any** square that is an obstacle.

Return *the number of possible unique paths that the robot can take to reach the bottom-right corner*.

The testcases are generated so that the answer will be less than or equal to `2 * 109`.

**Example 1:**

```
Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
Output: 2
Explanation: There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right
```

**Example 2:**

```
Input: obstacleGrid = [[0,1],[0,0]]
Output: 1
```

**Constraints:**

- `m == obstacleGrid.length`
- `n == obstacleGrid[i].length`
- `1 <= m, n <= 100`
- `obstacleGrid[i][j]` is `0` or `1`.

## Approach 1: Dynamic Programming

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int uniquePathsWithObstacles(vector<vector<int>>& obstacleGrid) {
        // DP - O(N * M)
        int n = obstacleGrid.size(), m = obstacleGrid[0].size();
        // dp[i][j]: the number of possible unique paths to reach grid[i][j]
        vector<vector<int>> dp(n, vector<int>(m));
        // base case - there is only one way to reach grid[0][0]
        dp[0][0] = 1;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (obstacleGrid[i][j]) {
                    // if there is an obstacle at grid[i][j], 
                    // then we couldn't reach grid[i][j],
                    // hence setting dp[i][j] to 0
                    dp[i][j] = 0;
                } else {
                    // otherwise, we can either reach grid[i][j] from the left cell dp[i][j - 1]
                    if (j) dp[i][j] += dp[i][j - 1];
                    // or from the top cell dp[i - 1][j]
                    if (i) dp[i][j] += dp[i - 1][j];
                }
            }
        }
        // the number of possible unique paths 
        // that the robot can take to reach the bottom-right corner
        return dp[n - 1][m - 1];
    }
};
```

</TabItem>
</Tabs>