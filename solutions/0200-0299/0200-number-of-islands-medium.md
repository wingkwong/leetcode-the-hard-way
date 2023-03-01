---
description: 'Author: @wingkwong, @ColeB2 | https://leetcode.com/problems/number-of-islands/'
tags: [Array, Depth-First Search, Breadth-First Search, Union Find, Matrix]
---

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

Time Complexity: $$O(m*n)$$ where m is the number of rows, and n is the number of columns in the grid. We must traverse the whole grid in order to determine the number of islands.

Space Complexity: $$(m*n)$$ where m is the number of rows, and n is the number of columns in the grid. In the worst case, our queue/stack/recursive stack/visited set will grow in direct proportion to the size of the grid.

<Tabs>
<TabItem value="cpp" label="C++">
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

</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
// r - # of rows
// c - # of cols
// Time complexity: O(rc)
// Space complexity: O(rc)
class Solution {
    
    public final int NO_DIRS = 4;
    public int[] DIRS = {0, 1, 0, -1, 0};
    
    public int numIslands(char[][] grid) {
        int count = 0;
        // Visited set for string row and col, like "row # col"
        // This helps to avoid to revisiting the same cell again
        Set<String> visited = new HashSet<>();
        //
        for (int r = 0; r < grid.length; r++) {
            for (int c = 0; c < grid[0].length; c++) {
                // Explore area only if it's a land, i.e '1'
                if (grid[r][c] == '1' && exploreGrid(grid, r, c, visited)) {
                    count += 1;
                }
            }
        }
        return count;
    }
    
    public boolean exploreGrid(char[][] grid, int row, int col, Set<String> visited) {
        boolean rowInbounds = 0 <= row && row < grid.length;
        boolean colInbounds = 0 <= col && col < grid[0].length;
        // If row or col out of range, then simply return
        if (!rowInbounds || !colInbounds) {
            return false;
        }
        // Current cell is water, so no need to explore surrounding cells
        if (grid[row][col] == '0') {
            return false;
        }
        String pos = row + "#" + col;
        // Check for already visited cells, if found, then no need to traverse
        if (visited.contains(pos)) {
            return false;
        }
        // Mark as visited
        visited.add(pos);
        for (int dir = 0; dir < NO_DIRS; dir++) {
            // Explore near by cells, by traversing all directions, move UP, DOWN, LEFT, RIGHT
            // Directions can be formed by above mentioned array
            exploreGrid(grid, row + DIRS[dir], col + DIRS[dir + 1], visited);
        }
        return true;
    }
}

```

</TabItem>

<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    # Time: O(m*n) as we must traverse each position in the grid.
    # Space: O(m*n) our queue in worst case maybe all land and
    # will grow in proportion to the size of the grid.
    def bfs(self, r: int, c: int, grid: List[List[str]]) -> List[List[str]]:
        # BFS implementation of flood fill, initialize queue with
        # the row and column we passed as first starting point
        q = deque([(r,c)])
        while q:
            # pop off our row and column
            row, col = q.popleft()
            # check we are in bounds, and land.
            if (row < 0 or col < 0 
                or row >= len(grid) or col >= len(grid[0])
                or grid[row][col] != '1'
                ):
                # out of bounds/not land  -> continue
                continue
            # 'colour' our land a different colour. We will set it to -1
            grid[row][col] = -1
            # loop our directions, and add them to the queue
            for (x,y) in ((1,0),(-1,0),(0,1),(0,-1)):
                    q.append((row + x, col + y))
        # return our grid since we changed it.
        return grid


    def numIslands(self, grid: List[List[str]]) -> int:
        # initialize our row, cols and number of islands counter.
        ROWS, COLS = len(grid), len(grid[0])
        num_islands = 0
        # loop through the grid.
        for r in range(ROWS):
            for c in range(COLS):
                # if we find land
                if grid[r][c] == '1':
                    # flood fill it, making sure to overwrite our 
                    # grid as we will change it during our algorithm.
                    grid = self.bfs(r, c, grid)
                    num_islands += 1
        
        return num_islands
```

</TabItem>
</Tabs>
