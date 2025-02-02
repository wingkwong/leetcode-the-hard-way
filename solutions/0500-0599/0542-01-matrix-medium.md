---
description: 'Author: @wkw | https://leetcode.com/problems/01-matrix/'
tags: [Array, Dynamic Programming, Breadth-First Search, Matrix]
---

# 0542 - 01 Matrix (Medium)

## Problem Link

https://leetcode.com/problems/01-matrix/

## Problem Statement

Given an `m x n` binary matrix `mat`, return _the distance of the nearest_`0`_for each cell_.

The distance between two adjacent cells is `1`.

**Example 1:**

```
Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
Output: [[0,0,0],[0,1,0],[0,0,0]]
```

**Example 2:**

```
Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
Output: [[0,0,0],[0,1,0],[1,2,1]]
```

**Constraints:**

- `m == mat.length`
- `n == mat[i].length`
- `1 <= m, n <= 10^4`
- `1 <= m * n <= 10^4`
- `mat[i][j]` is either `0` or `1`.
- There is at least one `0` in `mat`.

## Approach 1: BFS

The first observation is that if $mat[i][j]$ is $0$, then the output $ans[i][j]$ would be also 0 because the nearest $0$ for that cell is itself. When it comes to shortest paths on grid, we may think of BFS. We can apply the standard BFS by putting all cells with $0$ as starting point, then walk to the possible adjacent cells in four directions and update the distance in place.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    vector<vector<int>> updateMatrix(vector<vector<int>>& mat) {
        int m = mat.size(), n = mat[0].size();
        // queue for BFS
        queue<pair<int, int>> q;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (mat[i][j] == 0) {
                    // we need to start from all 0s
                    q.push({i, j});
                } else {
                    // otherwise, we set it to -1 as unvisited
                    mat[i][j] = -1;
                }
            }
        }
        // BFS
        int dir_x[4] = {-1, 0, 0, 1};
        int dir_y[4] = {0, 1, -1, 0};
        while (!q.empty()) {
            auto [x, y] = q.front(); q.pop();
            for (int d = 0; d < 4; d++) {
                int next_x = x + dir_x[d];
                int next_y = y + dir_y[d];
                // check boundary
                if (0 <= next_x && next_x < m &&
                    0 <= next_y && next_y < n &&
                    // mat[next_x][next_y] needs to be unvisited
                    mat[next_x][next_y] == -1) {
                    // push next position to the queue
                    q.push({next_x, next_y});
                    // set distance
                    mat[next_x][next_y] = mat[x][y] + 1;
                }
            }
        }
        return mat;
    }
};
```

</TabItem>
</Tabs>
