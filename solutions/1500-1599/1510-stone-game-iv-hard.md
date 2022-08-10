---
description: 'Author: @wingkwong | https://leetcode.com/problems/stone-game-iv/'
---

import SolutionAuthor from '@site/src/components/SolutionAuthor';

# 1510 - Stone Game IV (Hard)

## Problem Link

https://leetcode.com/problems/stone-game-iv/

## Problem Statement

Alice and Bob take turns playing a game, with Alice starting first.

Initially, there are `n` stones in a pile. On each player's turn, that player makes a _move_ consisting of removing **any** non-zero **square number** of stones in the pile.

Also, if a player cannot make a move, he/she loses the game.

Given a positive integer `n`, return `true` if and only if Alice wins the game otherwise return `false`, assuming both players play optimally.

**Example 1:**

```
Input: n = 1
Output: true
Explanation: Alice can remove 1 stone winning the game because Bob doesn't have any moves.
```

**Example 2:**

```
Input: n = 2
Output: false
Explanation: Alice can only remove 1 stone, after that Bob removes the last one winning the game (2 -> 1 -> 0).
```

**Example 3:**

```
Input: n = 4
Output: true
Explanation: n is already a perfect square, Alice can win with one move, removing 4 stones (4 -> 0).
```

**Constraints:**

* `1 <= n <= 10^5`

## Approach 1: Dynamic Programming

Let `dp[i]` be the result of the game with `i` stones. If it is true, it means Alice must win. If it is false, it means Bob must win. If there is any `j` that `dp[i - j * j]` make the other lose the game, then `dp[i]` would be true. For example, Alice can take `j * j` to make Bob into a losing state and end the game.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    bool winnerSquareGame(int n) {
        int dp[n + 1];
        memset(dp, 0, sizeof(dp));
        for(int i = 1; i <= n; i++){
            for(int j = 1; j * j <= i; j++){
                dp[i] |= !dp[i - j * j];
            }
        }
        return dp[n];
    }
};
```
