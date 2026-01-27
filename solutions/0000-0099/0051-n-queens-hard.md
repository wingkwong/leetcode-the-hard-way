---
description: 'Author: @ColeB2 | https://leetcode.com/problems/n-queens/'
tags: [Array, Backtracking]
---

# 0051 - N-Queens (Hard)

## Problem Link

https://leetcode.com/problems/n-queens/

## Problem Statement

The **n-queens** puzzle is the problem of placing `n` queens on an `n x n` chessboard such that no two queens attack each other.

Given an integer `n`, return _all distinct solutions to the **n-queens puzzle**_. You may return the answer in **any** order.

Each solution contains a distinct board configuration of the n-queens' placement, where `'Q'` and `'.'` both indicate a queen and an empty space, respectively.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/11/13/queens.jpg)

```
Input: n = 4
Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
```

**Example 2:**

```
Input: n = 1
Output: [["Q"]]
```

**Constraints:**

`1 <= n <= 9`

## Approach 1: Backtracking

Once you understand how the queen moves, which is straight in both the orthogonal and diagonal directions, then it becomes a fairly straightforward backtracking problem.

Knowing how a queen moves, we know we can only place one queen per row, so for each row we have to find a valid square to place the queen. So the backtracking comes in by trying to place a queen on all valid squares and continuing, and if it ever doesn't work, we backtrack and try the next valid square in that row.

How do we track valid squares? We can use sets for $$O(1)$$ access, to see if the square is valid. We know we can only ever place one queen in any row, so no need to use a set there as we can track our row during our backtracking and just move on to the next row. We can also easily use a set to track valid columns, by just adding the current column of the queen we just placed into the set. How do we track diagonals?

We will use 2 sets, one for diagonal going forward, and one for diagonal going backwards. That is any diagonal going from left to right, bottom to top will all have the same coordinate integer if we add the row and columns together. Also any diagonal going from right to left, bottom to top, will also have the same coordinate integer if we subtract the row from the column position. See the below diagram.

```
4x4 Board
Diagonals
x  0 1 2 3
  ---------
0 |0 1 2 3
1 |1 2 3 4
2 |2 3 4 5
3 |3 4 5 6
Backward Diagonals
x   0  1  2 3
  -----------
0 | 0  1  2 3
1 |-1  0  1 2
2 |-2 -1  0 1
3 |-3 -2 -1 0
```

Time Complexity: $$O(n!)$$ where n is the size of the board. You can imagine we have n choice to make for the first row, then after that for each choice we have $$n-1$$ choices for the 2nd row, and $$n-2$$ for the 3rd, etc. as placing a queen removes that column from each row.

Space Complexity: $$O(n^2)$$ our board will be of size $$n*n$$.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        # initialize our return list and our board
        n_queens = []
        # Note our board will be a list of lists where each cell is
        # a list containing a string character. As this gives us
        # more efficient access to each cell to replace it with
        # either a 'Q' or a '.'
        board = [['.'] * n for _ in range(n)]
        # Our sets to track valid squares.
        col, dia, dia_b = set(), set(), set()
        # recursive backtracking algorithm
        def backtracking(r):
            # if our row, r every reaches n. It means we successfully
            # placed a queen in all n rows.
            if r == n:
                # create a copy of the board, join method will join
                # all our list of strings, into a single string for that
                # row. ie: ['.']['.']['.']['Q'] => ['...Q']
                board_copy = [''.join(row) for row in board]
                n_queens.append(board_copy)
                return
            # check all our columns in current row.
            for c in range(n):
                # check if square is valid, if it isn't backtrack.
                if c in col or (r + c) in dia or (c - r) in dia_b:
                    continue
                # found valid square, add the squares queen touches
                # to the proper sets.
                col.add(c)
                dia.add(r + c)
                dia_b.add(c - r)
                # update board to reflect
                board[r][c] = 'Q'
                # continue down the decision tree onto the next row.
                backtracking(r + 1)
                # Backtrack from previous call-> remove all values
                # from the sets
                col.remove(c)
                dia.remove(r + c)
                dia_b.remove(c - r)
                # reset that board position for the next iteration.
                board[r][c] = '.'
        # call the algorithm starting at 0, and return our answer.
        backtracking(0)
        return n_queens

```

</TabItem>
</Tabs>
