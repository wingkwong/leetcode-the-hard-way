---
description: 'Author: @wkw | https://leetcode.com/problems/create-grid-with-exactly-one-path'
rating: 1311
---

# 3963 - Create Grid With Exactly One Path (Easy)

## Problem Link

https://leetcode.com/problems/create-grid-with-exactly-one-path

## Problem Statement

You are given two integers `m` and `n`, representing the number of rows and columns of a grid.

Construct **any** `m x n` grid consisting only of the characters `'.'` and `'#'`, where:

- `'.'` represents a free cell.
- `'#'` represents an obstacle cell.

A **valid path** is a sequence of free cells that:

- Starts at the top-left cell `(0, 0)`.
- Ends at the bottom-right cell `(m - 1, n - 1)`.
- Moves only:
    - Right, from `(i, j)` to `(i, j + 1)`, or
    - Down, from `(i, j)` to `(i + 1, j)`.

Return any grid such that there is **exactly one valid path** from the top-left cell to the bottom-right cell.

**Example 1:**

**Input:** m = 2, n = 3

**Output:** ["..#","#.."]

**Explanation:**

The only valid path is: `(0,0) -> (0,1) -> (1,1) -> (1,2)`

**Example 2:**

**Input:** m = 3, n = 3

**Output:** ["..#","#..","##."]

**Explanation:**

The only valid path is: `(0,0) -> (0,1) -> (1,1) -> (1,2) -> (2,2)`

**Example 3:**

**Input:** m = 1, n = 4

**Output:** ["...."]

**Explanation:**

The only valid path is: `(0,0) -> (0,1) -> (0,2) -> (0,3)`

**Constraints:**

- `1 <= m, n <= 25`

## Approach 1: Construction

We only need to create one valid path and block every possible alternative. A simple way is to make every cell in the first row free and every cell in the last column. All other cells are obstacles. Therefore, the path is forced to move right across the first row and move down the last column until reaching the bottom-right cell. For example, when $m=3$ and $n=4$, we construct

```
....
###.
###.
```

The only valid path is (0,0) -> (0,1) -> (0,2) -> (0,3) -> (1,3) -> (2,3). The path cannot move down before reaching the last column because all such cells are obstacles. Therefore, no second path is possible.

The time complexity is $O(m * n)$ and the space complexity is $O(1)$.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def createGrid(self, m: int, n: int) -> list[str]:
        return ["." * n] + ["#" * (n - 1) + "." for _ in range(m - 1)]
```

</TabItem>
</Tabs>