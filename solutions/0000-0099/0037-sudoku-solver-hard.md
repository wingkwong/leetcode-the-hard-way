---
description: >-
  Author: @vigneshshiv |
  https://leetcode.com/problems/sudoku-solver/
---

# 0037 - Sudoku Solver (Hard)

## Problem Link

https://leetcode.com/problems/sudoku-solver/

## Problem Statement

Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

1. Each of the digits `1-9` must occur exactly once in each row.
2. Each of the digits `1-9` must occur exactly once in each column.
3. Each of the digits `1-9` must occur exactly once in each of the $9$ `3x3` sub-boxes of the grid.

The `'.'` character indicates empty cells.

**Example 1:**

![Alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png)

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
Output: 
[["5","3","4","6","7","8","9","1","2"]
,["6","7","2","1","9","5","3","4","8"]
,["1","9","8","3","4","2","5","6","7"]
,["8","5","9","7","6","1","4","2","3"]
,["4","2","6","8","5","3","7","9","1"]
,["7","1","3","9","2","4","8","5","6"]
,["9","6","1","5","3","7","2","8","4"]
,["2","8","7","4","1","9","6","3","5"]
,["3","4","5","2","8","6","1","7","9"]]

Explanation: The input board is shown above and the only valid solution is shown below:

```

![Alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Sudoku-by-L2G-20050714_solution.svg/250px-Sudoku-by-L2G-20050714_solution.svg.png)


**Constraints:**

* `board.length == 9`
* `board[i].length == 9`
* `board[i][j]` is a digit `1-9` or `'.'`.
* It is guaranteed that the input board has only one solution.

## Approach 1: Recursion with Backtrack

As we all would have try to solve Sudoku problem in the past, it's `9 x 9` grid with numbers. 

As stated above, a number (in cell) should appear only once in row and column and `3 x 3` block. 

Let's walk through with the given example above, 1st row - `"5","3",".",".","7",".",".",".","."`. The 3rd column (2nd Index) is not filled with any fith any number. 

So what are the possibilities 3rd column can have? Well, It can be from `1-9`, So we use 3 types of checks to place a number on the board. 

1. Check the current row, columns from `1 - 9`.
2. Check the current column, rows from `1 - 9`.
3. Check the current cell block, which is `3 x 3` grid.

How to define `3 x 3` block start and end range for the current cell we are operating on? Let's say our current cell is $(0, 2)$, we know by seeing the board, it's starts from $(0, 0)$ and end in the range of $(2, 2)$. We can use a simple idea to get the stand and end position, just use `row - row % sqrt(board.length)`, Either we can use $sqrt$ approach or just use 3, since we know here Sudoku is `9 x 9` matrix and any block is size of 3. 

For the above said cell $(0, 2)$, start range of this block is $(0, 0)$, since the start is clear, end is always within `3 x 3` from the start index. 

Now, apply the above said 3 conditions, Try with number $1$, we check from column `1-9`, if the row doesn't have number $1$, then we are clear about row. Next check the column direction (which is row) from `1-9`, we are good again. The Last check to be performed in `3 x 3` block. 

If all $3$ checks is valid, then we can place the number ($1$) in the current cell $(0, 2)$, Now let's move to the next emptied column. In case if we find any invalid cases like, number is already present from in the row or column or `3 x 3`, we try with next number that is $2$. 

So for each cell, we trying with $n$ possibilities, The process continues till for all the rows and columns. If some cases we might end up being not able to place any number and we reached last number that is $9$. **So it means we have placed some wrong order in the past, it requires us to validate the previous placed numbers on the board to solve the current cell problem.** 

This types of situation problems can be solved with backtracking technique. If any of the current operation or action is going to cause future actions then we need to backtrack the previous cases, like placing next number and next number so on to solve the current problem. 

At the end, we would have solved all the cells in the board. 

Time complexity: O(9^n^2) - Exponential time complexity. 

Space complexity: $O(n)$

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    public void solveSudoku(char[][] board) {
        solveBoard(board);
    }
    
    public boolean solveBoard(char[][] board) {
        int n = board.length;
        int row = -1;
        int col = -1;
        boolean emptyLeft = true;
        // Empty Item, so fill that row & col
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (board[i][j] == '.') {
                    row = i;
                    col = j;
                    emptyLeft = false;
                    break;
                }
            }
            // If empty left to be filled found, then break the loop
            if (!emptyLeft) {
                break;
            }
        }
        if (emptyLeft) {
            return true;
        }
        // Backtrack
        for (char number = '1'; number <= '9'; number++) {
            if (isSafeToPlace(board, row, col, number)) {
                board[row][col] = number;
                if (solveBoard(board)) {
                    return true;
                } else {
                    // Backtrack
                    board[row][col] = '.';
                }
            }
        }
        return false; // Cannot be solved
    }
    
    public boolean isSafeToPlace(char[][] board, int row, int col, char num) {
        // Check the row, from col 0 to 8
        for (int i = 0; i < board.length; i++) {
            if (board[row][i] == num) {
                return false;
            }
        }
        // Check the column, from row 0 to row 8
        for (char[] nums : board) {
            if (nums[col] == num) {
                return false;
            }
        }
        int sqrt = (int) Math.sqrt(board.length);
        int rowStart = row - row % sqrt;
        int colStart = col - col % sqrt;
        //
        for (int r = rowStart; r < rowStart + sqrt; r++) {
            for (int c = colStart; c < colStart + sqrt; c++) {
                if (board[r][c] == num) {
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