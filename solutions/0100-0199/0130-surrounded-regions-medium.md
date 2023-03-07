---
description: 'Author: @ColeB2 | https://leetcode.com/problems/surrounded-regions/'
tags: [Array, Depth-First Search, Breadth-First Search, Union Find, Matrix]
---

# 0130 Surrounded Regions (Medium)

## Problem Link

https://leetcode.com/problems/surrounded-regions/

## Problem Statement

Given an `m x n` matrix `board` containing `'X'` and `'O'`, _capture all regions that are 4-directionally surrounded by_ `'X'`.

A region is **captured** by flipping all `'O'`s into `'X'`s in that surrounded region.

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/02/19/xogrid.jpg)

```
Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
Explanation: Notice that an 'O' should not be flipped if:
- It is on the border, or
- It is adjacent to an 'O' that should not be flipped.
The bottom 'O' is on the border, so it is not flipped.
The other three 'O' form a surrounded region, so they are flipped.
```

**Example 2:**

```
Input: board = [["X"]]
Output: [["X"]]
```

**Constraints:**

- `m == board.length`
- `n == board[i].length`
- `1 <= m, n <= 200`
- `board[i][j]` is `'X'` or `'O'`.

## Approach 1: Breadth-First Search

An island can only be converted if it is 4-directionally surrounded. Therefore any island that touches the edge, or comes in contact with an $$'O'$$ that touches the edge can not be converted. Therefore we can simply search for all edge $$'O'$$ values, and run a BFS on them to convert them and any neighbouring $$'O'$$ values to a different value, (we will use $$'P'$$) thus protecting them from being converted to $$'X'$$.

After that, we can iterate over the board, convert any remaining $$'O'$$ values into $$'X'$$ values and convert back any $$'P'$$ values to $$'O'$$ values.

Time Complexity: $$O(m * n)$$ where m is the number of rows, and n is the number of columns. We are going to be iterating over the board a few times, and running our BFS which in the worst case will cover all values on the board.

Space Complexity: $$O(m * n)$$. We are editing our board in place, but in the worst case, our BFS queue can grow up to $$m * n$$.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def solve(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        # Track our rows and columns which will be equal to m, n.
        ROWS, COLS = len(board), len(board[0])
        # BFS Algorithm, takes parameters of row, col which will be
        # the position of the starting cell in our 2D array, board.
        def bfs(row,col):
            # initialize our queue with the row,col coordinate.
            q = deque([(row,col)])
            # while our q is not empty.
            while q:
                # pop the row, r and c, col from the queue.
                r, c = q.popleft()
                # boundary check, and make sure our cell is an 'O' cell.
                if (r < 0 or r >= ROWS
                    or c < 0 or c >= COLS
                    or board[r][c] != 'O'
                    ):
                    continue
                # In bounds, and an 'O' convert out 'O' to 'P' to 'protect' it.
                board[r][c] = 'P'
                # loop through the 4 directions and add them to the queue.
                for (dr, dc) in ((1,0), (0,1), (-1,0), (0,-1)):
                    q.append((r + dr, c + dc))
        # iterate the board
        for row in range(ROWS):
            for col in range(COLS):
                # cell is 'O' and an edge
                if (board[row][col] == 'O' and 
                    (row == 0 or row == ROWS - 1 or 
                    col == 0 or col == COLS - 1
                    )):
                    # run our bfs algorithm
                    bfs(row, col)
        # Protected all edge Os and connecting islands.
        # Convert all non-connecting Os to Xs and Ps back to Os.
        for row in range(ROWS):
            for col in range(COLS):
                if board[row][col] == 'O':
                    board[row][col] = 'X'
                elif board[row][col] =='P':
                    board[row][col] = 'O'
```

</TabItem>
</Tabs>
