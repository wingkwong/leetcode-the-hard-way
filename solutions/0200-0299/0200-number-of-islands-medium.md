---
description: 'Author: @wingkwong | https://leetcode.com/problems/number-of-islands/'
---

import SolutionAuthor from '@site/src/components/SolutionAuthor';

# 0200 - Number of Islands (Medium)

## Problem Link

https://leetcode.com/problems/number-of-islands/

## Problem Statement

Given an `m x n` 2D binary grid `grid` which represents a map of `'1'`s (land) and `'0'`s (water), return _the number of islands_.

An **island** is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

**Example 1:**

```
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
```

**Example 2:**

```
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
```

**Constraints:**

* `m == grid.length`
* `n == grid[i].length`
* `1 <= m, n <= 300`
* `grid[i][j]` is `'0'` or `'1'`.

## Approach 1: Flood Fill

We can use [0733 - Flood Fill (Easy)](../0700-0799/flood-fill-easy) solution in this problem. The idea is to search for $$1$$ and paint the entire island with different character that  does not exist in the grid (says $$2$$). Every time we start flood fill, we increase our answer by $$1$$.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    // Check out 0733 - Flood Fill (Easy)
    // we need to find tune the type (int -> char) from that solution
    int dirx[4] = { -1, 0, 0, 1};
    int diry[4] = { 0, 1, -1, 0};
    // the idea is to use bfs to paint the cell with value '1' starting from (sr, sc)
    void floodFill(vector<vector<char>>& image, int sr, int sc, char newColor) {
        // record the original color
        int oriColor = image[sr][sc];
        // if it is same as the one we want to paint, then skip
        if (oriColor == newColor) return;
        int n = image.size(), m = image[0].size();
        // standard bfs
        queue<pair<int, int>> q;
        q.push({sr, sc});
        while(!q.empty()) {
            auto [x, y] = q.front(); q.pop();
            // paint the new color here so that we won't visit it again
            image[x][y] = newColor;
            // after painting the cell at (x, y), we try four different directions
            for(int i = 0; i < 4; i++) {
                int next_x = x + dirx[i];
                int next_y = y + diry[i];
                // we need to make sure that the next cell is valid and the color isn't same as the orginal color
                if(next_x < 0 || next_y < 0 || next_x > n - 1 || next_y > m - 1 || image[next_x][next_y] != oriColor) continue;
                // paint it with the new color
                image[next_x][next_y] = newColor;
                // push the next color to the queue
                q.push({next_x, next_y});
            }
        }
        return;
    }
    
    int numIslands(vector<vector<char>>& grid) {
        int ans = 0;
        // iterate each row
        for(int row = 0; row < grid.size(); row++) {
            // iterate each column
            for(int col = 0; col < grid[0].size(); col++) {
                // if it is land
                if(grid[row][col] == '1'){
                    // perform flood fill and make each cell to 2 or any number except 0 and 1
                    // so that we won't visit it again
                    floodFill(grid, row, col, '2');
                    // after performing flood fill, we color one island 
                    ans++;
                }
            }
       }
       return ans; 
    }
};
```
