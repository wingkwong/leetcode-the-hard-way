---
description: >-
  Author: @jessicaribeiroalves | https://leetcode.com/problems/transpose-matrix/
---

# 0867 - Transpose Matrix (Easy)

## Problem Link

<https://leetcode.com/problems/transpose-matrix/>

## Problem Statement

Given a 2D integer array `matrix`, return _the **transpose** of_ `matrix`.

The **transpose** of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

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
- `1 <= m * n <= 105`
- `-109 <= matrix[i][j] <= 109`

## Approach 1: Iterating over each row and transforming it in columns

Starting from the assumption that transposing a matrix means switching the row and columns indices of the matrix by producing another matrix, the solution used was iterating over the columns of the given matrix (which are the elements inside each subarray) to create a new row for each of these columns.

So for example, considering the given matrix $[[1, 2], [3, 4]]$ our solution will put the elements 1 and 3 - corresponding to the first column - on the positions of the first row and do the same for second column 2 and 4, putting on the position of the second row. To do that we first iterate over the first element of the matrix, which contains the row elements $[1, 2]$. And for each of these elements, we add an empty array to $transposedMatrix$ - representing the new row - and iterate over the matrix elements (which define the numbers of columns of the transposed matrix) to add the element at its new corresponding position until until we get the final result of $transposedMatrix$ which will be $[[1, 3], [2, 4]]$.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@jessicaribeiroalves"/>

```py
class Solution:
    def transpose(self, matrix: List[List[int]]) -> List[List[int]]:
        transposedMatrix = []
        for row in range(len(matrix[0])):
            transposedMatrix.append([])
            for column in range(len(matrix)):
                transposedMatrix[row].append(matrix[column][row])

        return transposedMatrix
```

</TabItem>

<TabItem value="js" label="JavaScript">
<SolutionAuthor name="@jessicaribeiroalves"/>

```js
const transpose = (matrix) => {
    const transposedMatrix = [];
    for (const column in matrix[0]) {
        transposedMatrix.push([]);
        for (const row of matrix) {
            transposedMatrix[column].push(row[column]);
        }
    }
    return transposedMatrix;
};
```

</TabItem>
</Tabs>

**Time Complexity: $O(mxn)$**

The time complexity for this solution is $O(mxn)$ considering $m$ as the number of rows and $n$ as the number of columns in the original matrix.

**Space Complexity: $O(mxn)$**

The space complexity for this solution is also $O(mxn)$ considering $m$ as the number of rows and $n$ as the number of columns in the original matrix.
once we are creating a new matrix based on the number of rows and columns from the original matrix, considering m as the number of rows and n as the number of columns.
