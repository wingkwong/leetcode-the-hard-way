---
description: 'Author: @wkw | https://leetcode.com/problems/can-i-win/'
tags:
  [
    Math,
    Dynamic Programming,
    Bit Manipulation,
    Memoization,
    Game Theory,
    Bitmask,
  ]
---

# 0464 - Can I Win (Medium)

## Problem Link

https://leetcode.com/problems/can-i-win/

## Problem Statement

In the "100 game" two players take turns adding, to a running total, any integer from `1` to `10`. The player who first causes the running total to **reach or exceed** 100 wins.

What if we change the game so that players **cannot** re-use integers?

For example, two players might take turns drawing from a common pool of numbers from 1 to 15 without replacement until they reach a total >= 100.

Given two integers `maxChoosableInteger` and `desiredTotal`, return `true` if the first player to move can force a win, otherwise, return `false`. Assume both players play **optimally**.

**Example 1:**

```
Input: maxChoosableInteger = 10, desiredTotal = 11
Output: false
Explanation:
No matter which integer the first player choose, the first player will lose.
The first player can choose an integer from 1 up to 10.
If the first player choose 1, the second player can only choose integers from 2 up to 10.
The second player will win by choosing 10 and get a total = 11, which is >= desiredTotal.
Same with other integers chosen by the first player, the second player will always win.
```

**Example 2:**

```
Input: maxChoosableInteger = 10, desiredTotal = 0
Output: true
```

**Example 3:**

```
Input: maxChoosableInteger = 10, desiredTotal = 1
Output: true
```

**Constraints:**

- `1 <= maxChoosableInteger <= 20`
- `0 <= desiredTotal <= 300`

## Approach 1: Bitmask

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    @lru_cache(None)
    def canIWin(self, maxChoosableInteger: int, desiredTotal: int, b = 0) -> bool:
        # 1 + 2 + 3 + .. maxChoosableInteger < desiredTotal -> no one can win
        # desiredTotal <= 0 and b is set -> can't make a move
        if maxChoosableInteger * (maxChoosableInteger + 1) // 2 < desiredTotal or desiredTotal <= 0 and b:
            return False
        # try each number in [1, maxChoosableInteger]
        for i in range(1, maxChoosableInteger + 1):
            # if this number is not used
            if not (1 << i) & b:
                # then mark it used -> b | (1 << i)
                # update desiredTotal to desiredTotal - i
                if not self.canIWin(maxChoosableInteger, desiredTotal - i, b | (1 << i)):
                    return True
```

</TabItem>
</Tabs>
