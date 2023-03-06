---
description: 'Author: @wingkwong, @radojicic23, @ColeB2 | https://leetcode.com/problems/pacific-atlantic-water-flow/'
tags: [Array, Depth-First Search, Breadth-First Search, Matrix]
---

# 0417 - Pacific Atlantic Water Flow (Medium) 

## Problem Statement

There is an `m x n` rectangular island that borders both the **Pacific Ocean** and **Atlantic Ocean**. The **Pacific Ocean** touches the island's left and top edges, and the **Atlantic Ocean** touches the island's right and bottom edges.

The island is partitioned into a grid of square cells. You are given an `m x n` integer matrix `heights` where `heights[r][c]` represents the **height above sea level** of the cell at coordinate `(r, c)`.

The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is **less than or equal to** the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

Return *a **2D list** of grid coordinates*`result`*where*`result[i] = [ri, ci]`*denotes that rain water can flow from cell*`(ri, ci)`*to **both** the Pacific and Atlantic oceans*.

**Example 1:**

```
Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
Explanation: The following cells can flow to the Pacific and Atlantic oceans, as shown below:
[0,4]: [0,4] -> Pacific Ocean 
       [0,4] -> Atlantic Ocean
[1,3]: [1,3] -> [0,3] -> Pacific Ocean 
       [1,3] -> [1,4] -> Atlantic Ocean
[1,4]: [1,4] -> [1,3] -> [0,3] -> Pacific Ocean 
       [1,4] -> Atlantic Ocean
[2,2]: [2,2] -> [1,2] -> [0,2] -> Pacific Ocean 
       [2,2] -> [2,3] -> [2,4] -> Atlantic Ocean
[3,0]: [3,0] -> Pacific Ocean 
       [3,0] -> [4,0] -> Atlantic Ocean
[3,1]: [3,1] -> [3,0] -> Pacific Ocean 
       [3,1] -> [4,1] -> Atlantic Ocean
[4,0]: [4,0] -> Pacific Ocean 
       [4,0] -> Atlantic Ocean
Note that there are other possible paths for these cells to flow to the Pacific and Atlantic oceans.
```

**Example 2:**

```
Input: heights = [[1]]
Output: [[0,0]]
Explanation: The water can flow from the only cell to the Pacific and Atlantic oceans.
```

**Constraints:**

- `m == heights.length`
- `n == heights[r].length`
- `1 <= m, n <= 200`
- `0 <= heights[r][c] <= 10^5`

## Approach 1: DFS

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwonmg"/>

```cpp
class Solution {
public:
    void dfs(vector<vector<int>>& M, vector<vector<int>>& vis, int i, int j) {
        int m = M.size(), n = M[0].size();
        // marked this cell (i, j) as visited
        // so that we won't visit it again
        vis[i][j] = 1;
        // perform DFS on the left cell
        if (i - 1 >= 0 && !vis[i - 1][j] && M[i - 1][j] >= M[i][j]) dfs(M, vis, i - 1, j);
        // perform DFS on the right cell
        if (i + 1 < m && !vis[i + 1][j] && M[i + 1][j] >= M[i][j]) dfs(M, vis, i + 1, j);
        // perform DFS on the top cell
        if (j - 1 >= 0 && !vis[i][j - 1] && M[i][j - 1] >= M[i][j]) dfs(M, vis, i, j - 1);
        // perform DFS on the bottom cell
        if (j + 1 < n && !vis[i][j + 1] && M[i][j + 1] >= M[i][j]) dfs(M, vis, i, j + 1);
    }
    
    vector<vector<int>> pacificAtlantic(vector<vector<int>>& M) {
        vector<vector<int>> ans;
        int m = M.size(), n = M[0].size();
        // P[i][j] = 1 means it is able to flow to pacific ocean
        vector<vector<int>> P(m, vector<int>(n));
        // A[i][j] = 1 means it is able to flow to atlantic ocean
        vector<vector<int>> A(m, vector<int>(n));
        for(int i = 0; i < m; i++) {
            // perform dfs starting from the left-most column 
            dfs(M, P, i, 0);
            // perform dfs starting from the right-most column 
            dfs(M, A, i, n - 1);
        }
        for(int i = 0; i < n; i++) {
            // perform dfs starting from the top-most row
            dfs(M, P, 0, i);
            // perform dfs starting from the bottom-most row
            dfs(M, A, m - 1, i);
        }
        // iterate each row
        for(int i = 0; i < m; i++) {
            // iterate each column
            for(int j = 0; j < n; j++) {
                // if both P[i][j] & A[i][j] are visited
                // that means this cell can flow to both ocean
                if(P[i][j] && A[i][j]) {
                    // then put the coordinate (i, j) to answer
                    ans.push_back(vector<int>{i, j});
                }
            }
        }
        return ans;
    }
};
```

</TabItem>

<TabItem value="python" label="Python">
<SolutionAuthor name="@radojicic23"/>

```python
class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        rows, cols = len(heights), len(heights[0]) 
        # 2 hashsets to maintain all the positions that can reach two oceans
        pac, atl = set(), set() 
        
        def dfs(r, c, visit, prev_height):
            # if position is already been visited or 
            # if it's out of bounds or if height is to small
            if ((r, c) in visit or 
                r < 0 or c < 0 or r == rows or c == cols or
                heights[r][c] < prev_height): 
                return
            # visit new cell
            visit.add((r, c)) 
            # run dfs on all four of those neighbours
            dfs(r + 1, c, visit, heights[r][c])
            dfs(r - 1, c, visit, heights[r][c])
            dfs(r, c + 1, visit, heights[r][c])   
            dfs(r, c - 1, visit, heights[r][c])         
        
        # go through every single column in the first row
        # for the first row and the last row
        for c in range(cols): 
            dfs(0, c, pac, heights[0][c])
            dfs(rows - 1, c, atl, heights[rows - 1][c])
        # for the first column and the last column
        for r in range(rows): 
            dfs(r, 0, pac, heights[r][0])
            dfs(r, cols - 1, atl, heights[r][cols - 1])
        
        res = []
        for r in range(rows):
            for c in range(cols):
                if (r, c) in pac and (r, c) in atl:
                    res.append([r, c])
        return res
```

</TabItem>
</Tabs>

## Approach 2: Breadth-First Search

We will start at the "beaches" of each ocean, and find the highest point they reach using BFS. By storing those values in a set and doing it for both oceans, we can return the intersecting points of each set as we know if it rained, those high points will run off into both oceans.

Note: Since we are finding the highest point we can reach from the beaches, we need to check that the cell we are looking at is either taller, or even in height than the cell we came from. If it is shorter, we would avoid continuing.

Time Complexity: $$O(m*n)$$ where m is the number of rows, and n is the number of columns. Our BFS will traverse each cell, check where they can reach, and will use a set to avoid repeated work.

Space Complexity: $$O(m*n)$$. We will maintain 2 hash sets of points we can reach, as well as our queue will take up to $$O(m*n)$$ space.


<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        # initialize the number of rows, cols and our visited sets.
        ROWS, COLS = len(heights), len(heights[0])
        pacific = set()
        atlantic = set()
        # BFS algorithm, takes an initial row, column starting point
        # as well as a reference to which visited set we are using.
        def bfs(r, c, visited):
            # initialize q with starting row, col and the height
            # of the current cell.
            q = deque([(r,c, heights[r][c])])

            while q:
                # get row, col of current cell, and height of prev cell.
                row, col, height = q.popleft()
                # check we are in bounds, that we haven't visited the
                # cell before and that if the current cells height
                # is shorter than the previous cells height.
                if (row < 0 or row >= ROWS
                    or col < 0 or col >= COLS
                    or (row,col) in visited
                    or heights[row][col] < height):
                    continue
                # passed our check above we can add cell to visited
                visited.add((row,col))
                # check 4 adjacent cells to add to the queue.
                for dr, dc in ((1,0), (-1,0), (0,1), (0,-1)):
                    q.append((row + dr, col + dc, heights[row][col]))
        # Our 2 loops here start our algorithm only from  the "beach squares.
        # Every column in the first/last rows
        for col in range(COLS):
            # BFS for each column at the pacific and atlantic "beach".
            # Pass a reference of the set we are starting our bfs from
            # to our algorithm.
            bfs(0, col, pacific)
            bfs(ROWS - 1, col, atlantic)
        # Every row in the first and last columns.
        for row in range(ROWS):
            # BFS for each row at the pacific and atlantic "beach."
            bfs(row, 0, pacific)
            bfs(row, COLS - 1, atlantic)
        # Return the intersection of points inside our row.
        # If they both reached the same high point, we know rain would
        # run off into either ocean.
        return pacific.intersection(atlantic)
```

</TabItem>
</Tabs>
