---
description: >-
  Author: @jessicaribeiroalves | https://leetcode.com/problems/transpose-matrix/
tags: [Array, Matrix, Simulation]
---

# 0867 - Transpose Matrix (Easy)

## Problem Link

https://leetcode.com/problems/transpose-matrix/

## Problem Statement

Given a 2D integer array `matrix`, return _the **transpose** of_ `matrix`.

The **transpose** of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

![Representation of matrix transposition](https://assets.leetcode.com/uploads/2021/02/10/hint_transpose.png)

**Example 1:**

```Python
**Input:** matrix = [[1,2,3],[4,5,6],[7,8,9]]
**Output:** [[1,4,7],[2,5,8],[3,6,9]]
```

**Example 2:**

```Python
**Input:** matrix = [[1,2,3],[4,5,6]]
**Output:** [[1,4],[2,5],[3,6]]
```

**Constraints:**

- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= m, n <= 1000`
- `1 <= m * n <= 10 ^ 5`
- `-10 ^ 9 <= matrix[i][j] <= 10 ^ 9`

## Approach 1: Iterating over the columns and rows

The solution used was iterating over the columns and rows of the original matrix switching their indexes and creating a new row for each column from the original matrix in order to obtain its transposed matrix.

For example, consider the given matrix $[[1, 2, 4], [5, 7, 8]]$ as the input. Starting from the first element of the first column we assign it to the first element of the first row of the transposed matrix $transposed[0][0] = matrix[0][0]$. Then we go to the second element of the first column and assign it to the second element of the first row of the transposed matrix $transposed[0][1] = matrix[1][0]$. And we repeat this process for every column of the original matrix until we get the final result of $transposed$ which will be $[[1, 5], [2, 7], [4, 8]]$.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@jessicaribeiroalves"/>

```py
class Solution:
    def transpose(self, matrix: List[List[int]]) -> List[List[int]]:
        transposed = []
        for row in range(len(matrix[0])):
            transposed.append([])
            for column in range(len(matrix)):
                transposed[row].append(matrix[column][row])
        return transposed
```

</TabItem>

<TabItem value="js" label="JavaScript">
<SolutionAuthor name="@jessicaribeiroalves"/>

```js
const transpose = (matrix) => {
    const transposed = [];
    for (const row in matrix[0]) {
        transposed.push([]);
        for (const column of matrix) {
            transposed[row].push(column[row]);
        }
    }
    return transposed;
};
```

</TabItem>
</Tabs>

**Time Complexity: $O(m*n)$**

The time complexity for this solution is $O(m*n)$ considering $m$ as the number of rows and $n$ as the number of columns in the original matrix.

**Space Complexity: $O(m*n)$**

The space complexity for this solution is also $O(m*n)$ considering $m$ as the number of rows and $n$ as the number of columns in the original matrix.
