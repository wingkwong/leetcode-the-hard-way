---
description: >-
  Author: @vigneshshiv, @radojicic23 | https://leetcode.com/problems/valid-sudoku/
---

# 0036 - Valid Sudoku (Easy)

## Problem Link

https://leetcode.com/problems/valid-sudoku/

## Problem Statement

Determine if a `9 x 9` Sudoku board is valid. Only the filled cells need to be validated **according to the following rules:**

1. Each row must contain the digits `1-9` without repetition.
2. Each column must contain the digits `1-9` without repetition.
3. Each of the nine `3 x 3` sub-boxes of the grid must contain the digits `1-9` without repetition.

**Note:**

- A Sudoku board (partially filled) could be valid but is not necessarily solvable.
- Only the filled cells need to be validated according to the mentioned rules.

**Example 1:**

```
5 3 .  . 7 .  . . .
6 . .  1 9 5  . . .
. 9 8  . . .  . 6 .

8 . .  . 6 .  . . 3
4 . .  8 . 3  . . 1
7 . .  . 2 .  . . 6

. 6 .  . . .  2 8 .
. . .  4 1 9  . . 5
. . .  . 8 .  . 7 9
```

```
Input: board =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
```

**Example 2:**

```
Input: board =
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
```

**Constraints:**

- `board.length == 9`
- `board[i].length == 9`
- `board[i][j]` is a digit `1-9` or `'.'`.

## Approach 1: HashSet

Every value in the row or column or `3 x 3` block, the value is unique, With the help of this simple logic, add the Numbers in the HashSet, Add `num` value for `m`th row and for `n`th column and the same for `3 x 3` matrix.

If the same value repeat again for the same row or column or `3 x 3` block, then the given sudoku is not valid, otherwise is valid.

Time Complexity: $O(m * n)$, where $m$ - # of rows, $n$ - # of columns,

Space complexity: $O(1)$, since the values are fixed for `9 x 9` board

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    public boolean isValidSudoku(char[][] board) {
        Set<String> seen = new HashSet<>();
        for (int r = 0; r < 9; r++) {
            for (int c = 0; c < 9; c++) {
                int num = board[r][c];
                if (num != '.') {
                    if (!seen.add(num + " in row " + r) || !seen.add(num + " in column " + c)
                            || !seen.add(num + " in block " + (r / 3) + "-" + (c / 3))) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
}
```

</TabItem>

<TabItem value="python" label="Python">
<SolutionAuthor name="@radojicic23"/>

```python
class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        cols = collections.defaultdict(set)
        rows = collections.defaultdict(set)
        squares = collections.defaultdict(set)

        for r in range(9):
            for c in range(9):
                # if it's empty skip it
                if board[r][c] == ".":
                    continue
                # have we found a duplicate
                if (board[r][c] in rows[r] or
                    board[r][c] in cols[c] or
                    board[r][c] in squares[(r // 3, c // 3)]):
                    return False
                # if it is valid
                cols[c].add(board[r][c])
                rows[r].add(board[r][c])
                squares[(r // 3, c // 3)].add(board[r][c])
        # if we never detect duplicates
        return True
```

</TabItem>
</Tabs>

## Approach 2: Standard

Iterate over rows and columns and `3 x 3` block to check if the number is repeats.

Since, it's easier to find the duplicate number on the same row or column. But how to find the `3 x 3` block for any given index in the grid.

For example, first `3 x 3` starts and end in the range of $(0, 0)$ to $(2, 2)$. Suppose, if we are in the cell of $(1, 2)$, how to find the start range of this cell which is same above mentioned.

It's simple, just `row - row % sqrt(board.length)`, Either we can use $sqrt$ approach or just use 3, since we know here Sudoku is `9 x 9` matrix.

For the above said cell $(1, 2)$, start range of this block is $(0, 0)$, since the start is clear, end is always within `3 x 3` from the start index.

Time complexity: $O(n^2)$

Space complexity: $O(n)$

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    public boolean isValidSudoku(char[][] board) {
        for (int row = 0; row < board.length; row++) {
            for (int col = 0; col < board[0].length; col++) {
                if (board[row][col] != '.' && !isValid(board, row, col, board[row][col])) {
                    return false;
                }
            }
        }
        return true;
    }

    public boolean isValid(char[][] board, int row, int col, int num) {
        // Check the row, from col 0 to 8
        for (int i = 0; i < board.length; i++) {
            if (i != col && board[row][i] == num) {
                return false;
            }
        }
        // Check the column, from row 0 to row 8
        for (int i = 0; i < board[0].length; i++) {
            if (i != row && board[i][col] == num) {
                return false;
            }
        }
        //
        int sqrt = (int) Math.sqrt(board.length);
        int rowStart = row - row % sqrt;
        int colStart = col - col % sqrt;
        for (int r = rowStart; r < rowStart + sqrt; r++) {
            for (int c = colStart; c < colStart + sqrt; c++) {
                if (row != r && col != c && board[r][c] == num) {
                    return false;
                }
            }
        }
        return true;
    }
}
```

</TabItem>
</Tabs>
