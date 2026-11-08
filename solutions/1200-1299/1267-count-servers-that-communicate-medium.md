---
title: 'LeetCode 1267 – Count Servers that Communicate'
description: 'Use row and column totals to count servers that share a row or column with another server.'
tags: ['Array', 'Counting', 'Depth-First Search', 'Breadth-First Search', 'Union-Find', 'Matrix']
---

# 1267 - Count Servers that Communicate (Medium)

## Problem Link

https://leetcode.com/problems/count-servers-that-communicate

## Problem Statement

You are given a map of a server center, represented as a $m * n$ integer matrix `grid`, where 1 means that on that cell there is a server and 0 means that it is no server. Two servers are said to communicate if they are on the same row or on the same column.

Return the number of servers that communicate with any other server.

**Example 1:**

```
Input: grid = [[1,0],[0,1]]
Output: 0
Explanation: No servers can communicate with others.
```

**Example 2:**

```
Input: grid = [[1,0],[1,1]]
Output: 3
Explanation: All three servers can communicate with at least one other server.
```

**Example 3:**

```
Input: grid = [[1,1,0,0],[0,0,1,0],[0,0,1,0],[0,0,0,1]]
Output: 4
Explanation: The two servers in the first row can communicate with each other. The two servers in the third column can communicate with each other. The server at right bottom corner can't communicate with any other server.
```

**Constraints:**

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m <= 250`
- `1 <= n <= 250`
- `grid[i][j] == 0 or 1`

## Approach 1: Counting

Each server contributes a $1$ to its row and column. Sum each row to get its server count $r[i]$ and each column to get its server count $c[j]$. For each occupied cell $(i, j)$, both totals already include the server itself. It can communicate with another server exactly when $r[i] > 1$ or $c[j] > 1$. Checking this condition once per occupied cell counts the server once even when it has neighbors in both directions.

For a grid with $m$ rows and $n$ columns, the time complexity is $O(mn)$ and the space complexity is $O(m + n)$.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def countServers(self, grid: list[list[int]]) -> int:
        r = list(map(sum, grid))
        c = list(map(sum, zip(*grid)))
        return sum(v and (r[i] > 1 or c[j] > 1)
                  for i, v in enumerate(grid) for j, v in enumerate(v))
```

</TabItem>
</Tabs>
