---
description: "Author: @sidhantsemwal | https://leetcode.com/problems/unique-paths-ii/"
---

# 0063 - Unique Paths II(Medium)

## Problem Link

https://leetcode.com/problems/unique-paths-ii/

## Problem Statement

You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m-1][n-1]). The robot can only move either down or right at any point in time.

An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.

Return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The testcases are generated so that the answer will be less than or equal to 2 \* 109.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/11/04/robot1.jpg)

```
Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
Output: 2
Explanation: There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2020/11/04/robot2.jpg)

```
Input: obstacleGrid = [[0,1],[0,0]]
Output: 1
```

**Constraints:**

- `m == obstacleGrid.length`
- `n == obstacleGrid[i].length`
- `1 <= m, n <= 100`
- `obstacleGrid[i][j] is 0 or 1.`

## Approach : Dynamic Programming

The naive approach here would be to try every path with a recursive **depth first search (DFS)** approach. That would involve duplicating the processing used for **repeating subpaths**, however, which would quickly lead to a **TLE** result. When faced with repeating subproblems, we should be thinking of a **dynamic programming (DP)** approach to store completed subproblem and avoid any unnecessary duplication of processing.

In this situation, we can create a **DP matrix (dp)** in the same dimensions as our input matrix (OG). (Note: We can choose to use an in-place approach here and use OG as our DP matrix in order to reduce the **space complexity** of our solution to **O(1)**.) Each cell in dp will represent the number of paths that lead to the corresponding cell in OG. Since the robot can only move either to the right or down, we can perform a **bottom-up** DP solution, working from the initial cell and iterating downward and rightward through OG.

Each cell in OG **(OG[i][j])** can potentially reached by only two previously-visited cells **(OG[i-1][j] & OG[i][j-1])**, so the number of ways to reach the current cell **(dp[i][j])** should be the sum of the ways to reach those other two cells **(dp[i-1][j] + dp[i][j-1])**, should they exist.

Since any cell representing an obstacle cannot be a part of a path, its value in dp should be **0**. We'll also need to seed the initial starting position with a value of **1** to represent the single initial path. Once we're done building dp, the value of the **bottom-right cell** should be our answer.

<Tabs>
<TabItem value="c++" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int uniquePathsWithObstacles(vector<vector<int>>& OG) {
        if (OG[0][0] == 1) return 0;
        int m = OG.size(), n = OG[0].size();
        vector<vector<int>> dp(m, vector<int>(n,0));
        dp[0][0] = 1;
        for (int i = 0; i < m; i++)
            for (int j = 0; j < n; j++)
                if (OG[i][j] == 1 || (i == 0 && j == 0)) continue;
                else dp[i][j] = (i > 0 ? dp[i-1][j] : 0) + (j > 0 ? dp[i][j-1] : 0);
        return dp[m-1][n-1];
    }
};
```

</TabItem>
</Tabs>
