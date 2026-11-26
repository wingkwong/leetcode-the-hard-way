---
title: 'LeetCode 3360 – Stone Removal Game'
description: 'A simple simulation of decreasing stone removals, using turn parity to determine whether Alice wins.'
tags: ['Math', 'Simulation']
---

# 3360 - Stone Removal Game (Easy)

## Problem Link

https://leetcode.com/problems/stone-removal-game

## Problem Statement

Alice and Bob are playing a game where they take turns removing stones from a pile, with *Alice going first*.

- Alice starts by removing **exactly** 10 stones on her first turn.
- For each subsequent turn, each player removes **exactly** 1 fewerstonethan the previous opponent.

The player who cannot make a move loses the game.

Given a positive integer `n`, return `true` if Alice wins the game and `false` otherwise.

**Example 1:**

**Input:** n = 12

**Output:** true

**Explanation:**

- Alice removes 10 stones on her first turn, leaving 2 stones for Bob.
- Bob cannot remove 9 stones, so Alice wins.

**Example 2:**

**Input:** n = 1

**Output:** false

**Explanation:**

- Alice cannot remove 10 stones, so Alice loses.

**Constraints:**

- `1 <= n <= 50`

## Approach 1: Simulation

We start with $x = 10$ because Alice must remove exactly 10 stones on her first turn. After every successful move, we subtract $x$ from $n$ and decrease $x$ by $1$. This represents the required sequence of moves: $10, 9, 8, ...$.

The loop continues as long as there are at least $x$ stones available. When $n < x$, the current player cannot make the required move, so that player loses. Alice takes turns when $x$ is even ($10, 8, 6, ...$), while Bob takes turns when $x$ is odd ($9, 7, 5, ...$). Therefore, if the loop ends with an odd $x$, it is Bob's turn and he cannot move, meaning Alice wins.

The time complexity is $O(1)$ and the space complexity is $O(1)$.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def canAliceWin(self, n: int) -> bool:
        x = 10
        while n >= x:
            n -= x
            x -= 1
        return x % 2 == 1
```

</TabItem>
</Tabs>