---
description: 'Author: @heder | https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/'
tags: [Array, Matrix, Simulation]
---

# 2482 - Difference Between Ones and Zeros in Row and Column (Medium)

## Problem Link

https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/

## Problem Statement

You are given a **0-indexed** `m x n` binary matrix `grid`.

A **0-indexed** `m x n` difference matrix `diff` is created with the following procedure:

- Let the number of ones in the `ith` row be `onesRowi`.
- Let the number of ones in the `jth` column be `onesColj`.
- Let the number of zeros in the `ith` row be `zerosRowi`.
- Let the number of zeros in the `jth` column be `zerosColj`.
- `diff[i][j] = onesRowi + onesColj - zerosRowi - zerosColj`

Return _the difference matrix_`diff`.

**Example 1:**

```
Input: grid = [[0,1,1],[1,0,1],[0,0,1]]
Output: [[0,0,4],[0,0,4],[-2,-2,2]]
Explanation:
- diff[0][0] = onesRow0 + onesCol0 - zerosRow0 - zerosCol0 = 2 + 1 - 1 - 2 = 0
- diff[0][1] = onesRow0 + onesCol1 - zerosRow0 - zerosCol1 = 2 + 1 - 1 - 2 = 0
- diff[0][2] = onesRow0 + onesCol2 - zerosRow0 - zerosCol2 = 2 + 3 - 1 - 0 = 4
- diff[1][0] = onesRow1 + onesCol0 - zerosRow1 - zerosCol0 = 2 + 1 - 1 - 2 = 0
- diff[1][1] = onesRow1 + onesCol1 - zerosRow1 - zerosCol1 = 2 + 1 - 1 - 2 = 0
- diff[1][2] = onesRow1 + onesCol2 - zerosRow1 - zerosCol2 = 2 + 3 - 1 - 0 = 4
- diff[2][0] = onesRow2 + onesCol0 - zerosRow2 - zerosCol0 = 1 + 1 - 2 - 2 = -2
- diff[2][1] = onesRow2 + onesCol1 - zerosRow2 - zerosCol1 = 1 + 1 - 2 - 2 = -2
- diff[2][2] = onesRow2 + onesCol2 - zerosRow2 - zerosCol2 = 1 + 3 - 2 - 0 = 2
```

**Example 2:**

```
Input: grid = [[1,1,1],[1,1,1]]
Output: [[5,5,5],[5,5,5]]
Explanation:
- diff[0][0] = onesRow0 + onesCol0 - zerosRow0 - zerosCol0 = 3 + 2 - 0 - 0 = 5
- diff[0][1] = onesRow0 + onesCol1 - zerosRow0 - zerosCol1 = 3 + 2 - 0 - 0 = 5
- diff[0][2] = onesRow0 + onesCol2 - zerosRow0 - zerosCol2 = 3 + 2 - 0 - 0 = 5
- diff[1][0] = onesRow1 + onesCol0 - zerosRow1 - zerosCol0 = 3 + 2 - 0 - 0 = 5
- diff[1][1] = onesRow1 + onesCol1 - zerosRow1 - zerosCol1 = 3 + 2 - 0 - 0 = 5
- diff[1][2] = onesRow1 + onesCol2 - zerosRow1 - zerosCol2 = 3 + 2 - 0 - 0 = 5
```

**Constraints:**

- $m == grid.length$
- $n == grid[i].length$
- $1 <= m, n <= 10 ^ 5$
- $1 <= m * n <= 10 ^ 5$
- $grid[i][j]$ is either $0$ or $1$.

## Approach 1: Row and Column Sum

We compute the sum of each row and column, which is equal to the number of ones and from that we can reason about the number of zeros. Note that we are rewriting the input.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
class Solution {
public:
    static vector<vector<int>> onesMinusZeros(vector<vector<int>>& grid) noexcept {
        const int rows = size(grid);
        const int cols = size(grid[0]);

        vector<int> rs(rows);
        vector<int> cs(cols);
        for (int r = 0; r < rows; ++r)
            for (int c = 0; c < cols; ++c) {
                rs[r] += grid[r][c];
                cs[c] += grid[r][c];
            }

        for (int r = 0; r < rows; ++r)
            for (int c = 0; c < cols; ++c)
                grid[r][c] = rs[r] + cs[c] - (rows - rs[r]) - (cols - cs[c]);

        return grid;
    }
};
```

</TabItem>
</Tabs>

For the second pass over the grid we can factor out some invariants and make it:

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
for (int r = 0; r < rows; ++r) {
    const int k = 2 * rs[r] - rows - cols;
    for (int c = 0; c < cols; ++c)
        grid[r][c] = k + 2 * cs[c];
}
```

</TabItem>
</Tabs>

This generated different code (https://godbolt.org/z/G7xoWGqj9) and is faster than the version above.

Bonus Variant: using the Elvis operator `?:`

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
class Solution {
public:
    static vector<vector<int>> onesMinusZeros(vector<vector<int>>& grid) noexcept {
        const int rows = size(grid);
        const int cols = size(grid[0]);

        vector<int> rs(rows);
        vector<int> cs(cols);
        for (int r = 0; r < rows; ++r)
            for (int c = 0; c < cols; ++c) {
                rs[r] += grid[r][c] ?: -1;
                cs[c] += grid[r][c] ?: -1;
            }

        for (int r = 0; r < rows; ++r)
            for (int c = 0; c < cols; ++c)
                grid[r][c] = rs[r] + cs[c];

        return grid;
    }
};
```

</TabItem>
</Tabs>

Unfortunatly this variant seems quite a bit slower, but if you turn your head to the left you might see the King of Rock'n'Roll. :)

#### Complexity Analysis

Let $$n$$ be the number of rows and $$m$$ be the number of columns then the

- Time complexity: $$O(n * m)$$ as we need to compute the row and column sums and the fill the grid.
- Space complexity: $$O(n + m)$$ for the row and column sums.
