---
description: 'Author: @wkw | https://leetcode.com/problems/find-the-number-of-winning-players'
tags: [Mid Level, Array, Hash Table, Counting]
---

# 3238 - Find the Number of Winning Players (Easy)

## Problem Link

https://leetcode.com/problems/find-the-number-of-winning-players

## Problem Statement

You are given an integer n representing the number of players in a game and a 2D array pick where $pick[i] = [x_i, y_i]$ represents that the player $x_i$ picked a ball of color $y_i$.

- Player $i$ wins the game if they pick strictly more than $i$ balls of the same color. In other words,
- Player $0$ wins if they pick any ball.
- Player $1$ wins if they pick at least two balls of the same color.
- ...
- Player $i$ wins if they pick at least $i + 1$ balls of the same color.

Return the number of players who win the game.

**Note** that _multiple_ players can win the game.


**Example 1:**

**Input:** n = 4, pick = $[[0,0],[1,0],[1,0],[2,1],[2,1],[2,0]]$

**Output:** 2

**Explanation:**

Player 0 and player 1 win the game, while players 2 and 3 do not win.

**Example 2:**

**Input:** n = 5, pick = $[[1,1],[1,2],[1,3],[1,4]]$

**Output:** 0

**Explanation:**

No player wins the game.

**Example 3:**

**Input:** n = 5, pick = $[[1,1],[2,4],[2,4],[2,4]]$

**Output:** 1

**Explanation:**

Player 2 wins the game by picking 3 balls with color 4.

**Constraints:**

- `2 <= n <= 10`
- `1 <= pick.length <= 100`
- `pick[i].length == 2`
- `0 <= x_i <= n - 1`
- `0 <= y_i <= 10`

## Approach 1: Brute Force

Count each player's balls per color in $v$, then check if any color count exceeds $i$ for player $i$ (needs $i + 1$ of same color to win).

**Time Complexity:** $O(m + n)$

**Space Complexity:** $O(n)$

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def winningPlayerCount(self, n: int, pick: List[List[int]]) -> int:
        res = 0
        v = [[0 for _ in range(11)] for _ in range(n)]
        for x in pick: v[x[0]][x[1]] += 1
        for i in range(n):
            for j in range(11):
                if v[i][j] > i:
                    res += 1
                    break
        return res
```

</TabItem>
</Tabs>
