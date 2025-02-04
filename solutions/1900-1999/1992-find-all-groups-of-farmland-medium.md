---
description: 'Author: @dhanu084 | https://leetcode.com/problems/find-all-groups-of-farmland/'
tags: [Graphs, DFS]
---

# 1992 - Find All Groups of Farmland (Medium)

## Problem Link

https://leetcode.com/problems/find-all-groups-of-farmland/

## Problem Statement

You are given a 0-indexed m x n binary matrix land where a 0 represents a hectare of forested land and a 1 represents a hectare of farmland.

To keep the land organized, there are designated rectangular areas of hectares that consist entirely of farmland. These rectangular areas are called groups. No two groups are adjacent, meaning farmland in one group is not four-directionally adjacent to another farmland in a different group.

land can be represented by a coordinate system where the top left corner of land is (0, 0) and the bottom right corner of land is (m-1, n-1). Find the coordinates of the top left and bottom right corner of each group of farmland. A group of farmland with a top left corner at (r1, c1) and a bottom right corner at (r2, c2) is represented by the 4-length array [r1, c1, r2, c2].

Return a 2D array containing the 4-length arrays described above for each group of farmland in land. If there are no groups of farmland, return an empty array. You may return the answer in any order.

**Example 1:**: [](https://assets.leetcode.com/uploads/2021/07/27/screenshot-2021-07-27-at-12-23-15-copy-of-diagram-drawio-diagrams-net.png)

```
Input: land = [[1,0,0],[0,1,1],[0,1,1]]
Output: [[0,0,0,0],[1,1,2,2]]
Explanation:
The first group has a top left corner at land[0][0] and a bottom right corner at land[0][0].
The second group has a top left corner at land[1][1] and a bottom right corner at land[2][2].
```

**Example 2:** [](Input: land = [[1,0,0],[0,1,1],[0,1,1]] Output: [[0,0,0,0],[1,1,2,2]] Explanation: The first group has a top left corner at land[0][0] and a bottom right corner at land[0][0]. The second group has a top left corner at land[1][1] and a bottom right corner at land[2][2].)

```
Input: land = [[1,1],[1,1]]
Output: [[0,0,1,1]]
Explanation:
The first group has a top left corner at land[0][0] and a bottom right corner at land[1][1].
```

**Example 3:** [](https://assets.leetcode.com/uploads/2021/07/27/screenshot-2021-07-27-at-12-32-24-copy-of-diagram-drawio-diagrams-net.png)

```
Input: land = [[0]]
Output: []
Explanation:
There are no groups of farmland.
```

**Constraints:**

- m == land.length
- n == land[i].length
- $1 <= m, n <= 300$
- land consists of only 0's and 1's.
- Groups of farmland are rectangular in shape.

## Approach 1: DFS

Time Complexity: $$O(n * m + n * m * 4)$$

Space Complexity: $$O(n*m)$$ for visited set / array

<Tabs>
<TabItem value="py" label="Python">

<SolutionAuthor name="@dhanu084" />

```python
class Solution:
    def findFarmland(self, land: List[List[int]]) -> List[List[int]]:

        n, m = len(land), len(land[0])
        visited = set()
        res = []

        def dfs(r, c , max_coords):

            # if the row or col is out of bounds or already visited or is a forest just return
            if r < 0 or c < 0 or r >= n or c >= m or (r, c) in visited or land[r][c] == 0:
                return

            # update the visited coordinates in the set
            visited.add((r, c))
            '''
                update the ending coordinates in the array when ever
                we find more connected farmlands and increase coordinates
            '''
            max_coords[0] = max(max_coords[0], r)
            max_coords[1] = max(max_coords[1], c)

            # traverse all 4 adjacent directions to find connected farmlands
            for (del_row, del_col) in [(1, 0), (0, 1), (-1, 0), (0, -1)]:
                dfs(del_row + r, del_col + c, max_coords)

        for i in range(n):
            for j in range(m):
                # whenever we find a land, mark all its group as visited using dfs
                if land[i][j] == 1 and (i, j) not in visited:
                    # start is the array of indices where the farm land starts
                    start = [i, j]
                    '''
                        end is the array of indices where the farm land ends
                        It gets updated in the dfs call
                    '''
                    end = [-1, -1]
                    dfs(i, j, end)
                    # once we have our start and end corrdinates just concantenate and add it to results
                    res.append(start + end)
        return res

```

</TabItem>
</Tabs>
