---
description: 'Author: @jit | https://leetcode.com/problems/largest-submatrix-with-rearrangements/'
tags: [Array, Greedy, Sorting, Matrix]
---

# 1727 - Largest Submatrix With Rearrangements (Medium)

## Problem Link

https://leetcode.com/problems/largest-submatrix-with-rearrangements/

## Problem Statement

You are given a binary matrix `matrix` of size `m x n`, and you are allowed to rearrange the **columns** of the `matrix` in any order.

Return _the area of the largest submatrix within_`matrix`_where **every** element of the submatrix is_`1`_after reordering the columns optimally._

**Example 1:**

```
Input: matrix = [[0,0,1],[1,1,1],[1,0,1]]
Output: 4
Explanation: You can rearrange the columns as shown above.
The largest submatrix of 1s, in bold, has an area of 4.
```

**Example 2:**

```
Input: matrix = [[1,0,1,0,1]]
Output: 3
Explanation: You can rearrange the columns as shown above.
The largest submatrix of 1s, in bold, has an area of 3.
```

**Example 3:**

```
Input: matrix = [[1,1,0],[1,0,1]]
Output: 2
Explanation: Notice that you must rearrange entire columns, and there is no way to make a submatrix of 1s larger than an area of 2.
```

**Constraints:**

- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= m * n <= 1e5`
- `matrix[i][j]` is either `0` or `1`.

## Approach 1: Sorting

<Tabs>
<TabItem value="elixir" label="Elixir">
<SolutionAuthor name="@jit"/>

```elixir
@spec largest_submatrix(matrix :: [[integer]]) :: integer
# Enumerate the height of columns, then sort:
def largest_submatrix(matrix) do
  std_heights = matrix
  |> Enum.zip_with(&Enum.scan(&1, fn elt, h -> elt * (h + 1) end))
  |> Enum.zip_with(&Enum.sort(&1, :desc))

  for row <- std_heights,
      {h, w} <- Enum.with_index(row, 1), reduce: 0 do
    area -> max(area, h * w)
  end
end
```

</TabItem>
</Tabs>
