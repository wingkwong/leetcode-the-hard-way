---
description: 'Author: @wkw | https://leetcode.com/problems/snakes-and-ladders/'
tags: [Array, Breadth-First Search, Matrix]
---

# 0909 - Snakes and Ladders (Medium)

## Problem Link

https://leetcode.com/problems/snakes-and-ladders/

## Problem Statement

You are given an `n x n` integer matrix `board` where the cells are labeled from `1` to `n2` in a [**Boustrophedon style**](https://en.wikipedia.org/wiki/Boustrophedon) starting from the bottom left of the board (i.e. `board[n - 1][0]`) and alternating direction each row.

You start on square `1` of the board. In each move, starting from square `curr`, do the following:

- Choose a destination square `next` with a label in the range `[curr + 1, min(curr + 6, n2)]`.

      This choice simulates the result of a standard **6-sided die roll**: i.e., there are always at most 6 destinations, regardless of the size of the board.

- If `next` has a snake or ladder, you **must** move to the destination of that snake or ladder. Otherwise, you move to `next`.
- The game ends when you reach the square `n2`.

A board square on row `r` and column `c` has a snake or ladder if `board[r][c] != -1`. The destination of that snake or ladder is `board[r][c]`. Squares `1` and `n2` do not have a snake or ladder.

Note that you only take a snake or ladder at most once per move. If the destination to a snake or ladder is the start of another snake or ladder, you do **not** follow the subsequent snake or ladder.

- For example, suppose the board is `[[-1,4],[-1,3]]`, and on the first move, your destination square is `2`. You follow the ladder to square `3`, but do **not** follow the subsequent ladder to `4`.

Return _the least number of moves required to reach the square_`n2`_. If it is not possible to reach the square, return_`-1`.

**Example 1:**

```
Input: board = [[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]]
Output: 4
Explanation:
In the beginning, you start at square 1 (at row 5, column 0).
You decide to move to square 2 and must take the ladder to square 15.
You then decide to move to square 17 and must take the snake to square 13.
You then decide to move to square 14 and must take the ladder to square 35.
You then decide to move to square 36, ending the game.
This is the lowest possible number of moves to reach the last square, so return 4.
```

**Example 2:**

```
Input: board = [[-1,-1],[-1,3]]
Output: 1
```

**Constraints:**

- `n == board.length == board[i].length`
- `2 <= n <= 20`
- `grid[i][j]` is either `-1` or in the range `[1, n2]`.
- The squares labeled `1` and `n2` do not have any ladders or snakes.

## Approach 1: Dijkstra

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int snakesAndLadders(vector<vector<int>>& board) {
        int n = board.size();
        // reconstruct board to 1D array
        vector<int> g(n * n + 1);
        for (int i = n - 1, k = 1, d = 1; i >= 0; i--, d ^= 1) {
            if (d % 2 == 0) {
                // if the direction is even,
                // we iterate columns from the right to the left
                // e.g. 12 <- 11 <- 10 <- 9 <- 8 <- 7
                for (int j = n - 1; j >= 0; j--) {
                    g[k++] = board[i][j];
                }
            } else {
                // if the direction is odd,
                // we iterate columns from the left to the right
                // e.g. 1 -> 2 -> 3 -> 4 -> 5 -> 6
                for (int j = 0; j < n; j++) {
                    g[k++] = board[i][j];
                }
            }
        }
        // dijkstra
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> q;
        q.push({0, 1}); // {dist, pos}
        unordered_map<int, int> vis;
        while (!q.empty()) {
            auto [dist, cur_pos] = q.top(); q.pop();
            // skip if the current position is visited and the dist is greater than that
            if (vis.count(cur_pos) && dist >= vis[cur_pos]) continue;
            // if the current position reaches the square, return dist
            if (cur_pos == n * n) return dist;
            // we need `dist` to reach `cur_pos`
            vis[cur_pos] = dist;
            // we can have at most 6 destinations, try each step
            for (int i = 1; i <= 6; i++) {
                // since we reconstruct the input as a 1D array,
                // we can calculate next_pos by adding `i` to `cur_pos`
                int next_pos = cur_pos + i;
                // skip if it is out of bound
                // e.g. in 34, you can only go to 35 and 36, not any cells after 36 (see example 1)
                if (next_pos > n * n) continue;
                // if the next position is -1, then we can go there
                if (g[next_pos] == -1) {
                    q.push({dist + 1, next_pos});
                } else {
                    // otherwise, there is a ladder / snake which leads to `g[next_pos]`
                    q.push({dist + 1, g[next_pos]});
                }
            }
        }
        // not possible to reach the square
        return -1;
    }
};
```

</TabItem>
</Tabs>
