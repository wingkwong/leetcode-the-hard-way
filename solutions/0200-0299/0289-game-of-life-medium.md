---
description: 'Author: @Pranathi-star | https://leetcode.com/problems/game-of-life/'
tags: [2-D Array, Iteration]
---

# 0994 - Rotting Oranges

## Problem Statement

According to Wikipedia's article: "**The Game of Life**, also known simply as **Life**, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

The board is made up of an `m x n` grid of cells, where each cell has an initial state: **live** (represented by a `1`) or **dead** (represented by a `0`). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

- Any live cell with fewer than two live neighbors dies as if caused by under-population.
- Any live cell with two or three live neighbors lives on to the next generation.
- Any live cell with more than three live neighbors dies, as if by over-population.
- Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the `m x n` grid `board`, return the next state.

**Example 1:**

```
Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
```

**Example 2:**

```
Input: board = [[1,1],[1,0]]
Output: [[1,1],[1,1]]
```


**Constraints:**

- `m == board.length`
- `n == board[i].length`
- `1 <= m, n <= 25`
- `board[i][j] is 0 or 1.`

## Approach 1: Iterating the 2-D array

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@pranathi_kodich"/>

```py
# Time Complexity: O(R * C). 
# Each cell in the matrix is visited atmost once
# Space Complexity: O(1). 
# Constant space required for storing directions.

class Solution:
		def gameOfLife(self, board: List[List[int]]) -> None:

			# 2 lists indicating 8 directions
			dirx = [-1, -1, -1, 0, 0, 1, 1, 1]
			diry = [-1, 0, 1, 1, -1, 1, 0, -1]
			r, c = len(board), len(board[0])

			for i in range(r):
				for j in range(c):
					if board[i][j] == 0:
						#cnt1 indicates no of 1's in 8 neighbor cells. used to check condition 4
						cnt1 = 0

						# checking all 8 neighbor cells
						for k in range(8):
							# checking if the coordinate is within bounds. useful for boundry cells.
							if i + dirx[k] < 0 or i + dirx[k] >= r or j + diry[k] < 0 or j + diry[k] >= c:
								continue
							# checking if the neighbor within bounds has value 1. Since it is happening simultaneously, in a previous operation a cell initially alive may have been changed to Dead (indicated by D). that cell should be considered as 1 only.

							elif board[i + dirx[k]][j + diry[k]] == 1 or board[i + dirx[k]][j + diry[k]] == 'D':
								cnt1 += 1

						# instead of changing 0 cell with 3 neighbor 1's as 1 directly, we change it to L or live. because operations are simultaneous, their original state must be considered even though modification happened.
						if cnt1 == 3:
							board[i][j] = 'L'

					else: # if cell contains 1
						cnt1 = 0
						cnt0 = 0
						# checking all 8 neighbor cells
						for k in range(8):
							# checking if the coordinate is within bounds. useful for boundry cells.
							if i + dirx[k] < 0 or i + dirx[k] >= r or j + diry[k] < 0 or j + diry[k] >= c:
								continue
							# checking if the neighbor within bounds has value 1. Since it is happening simultaneously, in a previous operation a cell initially alive may have been changed to Dead (indicated by D). that cell should be considered as 1 only.
							elif board[i + dirx[k]][j + diry[k]] == 1 or board[i + dirx[k]][j + diry[k]] == 'D':
								cnt1 += 1
							elif board[i + dirx[k]][j + diry[k]] == 0:
								cnt0 += 1

						# because operations are simultaneous, their original state must be considered even though modification happened. hence to differentiate modified cells from original, using D for Dead 
						if cnt1 > 3:
							board[i][j] = 'D'
						elif cnt1 < 2:
							board[i][j] = 'D'

			# finally changing L to 1 and D to 0 to return the result
			for i in range(r):
				for j in range(c):
					if board[i][j] == 'L':
						board[i][j] = 1
					elif board[i][j] == 'D':
						board[i][j] = 0
			return board
                        
```

</TabItem>
</Tabs>
