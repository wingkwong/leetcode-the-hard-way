---
description: "Author: @wingkwong | https://leetcode.com/problems/flood-fill/"
---

# 0733 - Flood Fill (Easy)

## Problem Link

https://leetcode.com/problems/flood-fill/

## Problem Statement

An image is represented by an `m x n` integer grid `image` where `image[i][j]` represents the pixel value of the image.

You are also given three integers `sr`, `sc`, and `newColor`. You should perform a **flood fill** on the image starting from the pixel `image[sr][sc]`.

To perform a **flood fill**, consider the starting pixel, plus any pixels connected **4-directionally** to the starting pixel of the same color as the starting pixel, plus any pixels connected **4-directionally** to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with `newColor`.

Return _the modified image after performing the flood fill_.

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/06/01/flood1-grid.jpg)

```
Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.
```

**Example 2:**

```
Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, newColor = 2
Output: [[2,2,2],[2,2,2]]
```

**Constraints:**

- `m == image.length`
- `n == image[i].length`
- `1 <= m, n <= 50`
- `0 <= image[i][j], newColor < 2^16`
- `0 <= sr < m`
- `0 <= sc < n`

## Approach 1: DFS

First we check if the color at the starting point is same as the target one. If so, we return the input directly. Otherwise, we perform dfs from the starting point to replace the color and do the same thing for four directions. We only perform dfs when the next pixel is within the boundary.

<SolutionAuthor name="@wingkwong"/>

```python
class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, newColor: int) -> List[List[int]]:
        R, C = len(image), len(image[0])
        color = image[sr][sc]
        # check if the color is same as the target one
        # if so, return input directly
        if color == newColor: return image
        # dfs function
        def dfs(r, c):
            # check if it is same as the original color
            if image[r][c] == color:
                # paint it
                image[r][c] = newColor
                # check 4 directions
                # perform dfs only if the next pixel is within boundary
                if r > 0: dfs(r - 1, c)
                if r < R - 1: dfs(r + 1, c)
                if c > 0: dfs(r, c - 1)
                if c < C - 1: dfs(r, c + 1)
        # perform flood fill from the starting point
        dfs(sr, sc)
        return image
```

## Approach 2: BFS

Similar idea but in BFS way. Use queue to store the points and search for 4 directions to replace if possible.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int dirx[4] = { -1, 0, 0, 1};
    int diry[4] = { 0, 1, -1, 0};

    vector<vector<int>> floodFill(vector<vector<int>>& image, int sr, int sc, int newColor) {
        int oriColor = image[sr][sc];
        if (oriColor == newColor) return image;
        int n = image.size(), m = image[0].size();
        queue<pair<int, int>> q;
        q.push({sr, sc});
        while(!q.empty()) {
            auto [x, y] = q.front();
            q.pop();
            image[x][y] = newColor;
            for(int i = 0; i < 4; i++) {
                int next_x = x + dirx[i];
                int next_y = y + diry[i];
                if(next_x < 0 || next_y < 0 || next_x > n - 1 || next_y > m - 1 || image[next_x][next_y] != oriColor) continue;
                image[next_x][next_y] = newColor;
                q.push({next_x, next_y});
            }
        }
        return image;
    }
};
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@dhanu084"/>

```py
class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, color: int) -> List[List[int]]:
        queue = deque([(sr, sc)])
        visited = set([(sr, sc)])
        n,m = len(image), len(image[0])
        source_color = image[sr][sc]

        while queue:
            size = len(queue)

            for i in range(size):
                x, y = queue.popleft()
                image[x][y] = color
                for r, c in [(0, 1), (1, 0), (-1, 0), (0, -1)]:
                    row = x + r
                    col = y + c

                    if row < 0 or row >= n or col < 0 or col >= m or image[row][col] != source_color or (row, col) in visited:
                        continue
                    visited.add((row, col))
                    queue.append((row, col))
        return image
```

</TabItem>
</Tabs>
```
