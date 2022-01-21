---
description: >-
  https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/
---

# 2120 - Execution of All Suffix Instructions Staying in a Grid (Medium)

## Problem Statement

There is an `n x n` grid, with the top-left cell at `(0, 0)` and the bottom-right cell at `(n - 1, n - 1)`. You are given the integer `n` and an integer array `startPos` where `startPos = [startrow, startcol]` indicates that a robot is initially at cell `(startrow, startcol)`.

You are also given a **0-indexed** string `s` of length `m` where `s[i]` is the `ith` instruction for the robot: `'L'` (move left), `'R'` (move right), `'U'` (move up), and `'D'` (move down).

The robot can begin executing from any `ith` instruction in `s`. It executes the instructions one by one towards the end of `s` but it stops if either of these conditions is met:

* The next instruction will move the robot off the grid.
* There are no more instructions left to execute.

Return _an array_ `answer` _of length_ `m` _where_ `answer[i]` _is **the number of instructions** the robot can execute if the robot **begins executing from** the_ `ith` _instruction in_ `s`.

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/12/09/1.png)

```
Input: n = 3, startPos = [0,1], s = "RRDDLU"
Output: [1,5,4,3,1,0]
Explanation: Starting from startPos and beginning execution from the ith instruction:
- 0th: "RRDDLU". Only one instruction "R" can be executed before it moves off the grid.
- 1st:  "RDDLU". All five instructions can be executed while it stays in the grid and ends at (1, 1).
- 2nd:   "DDLU". All four instructions can be executed while it stays in the grid and ends at (1, 0).
- 3rd:    "DLU". All three instructions can be executed while it stays in the grid and ends at (0, 0).
- 4th:     "LU". Only one instruction "L" can be executed before it moves off the grid.
- 5th:      "U". If moving up, it would move off the grid.
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2021/12/09/2.png)

```
Input: n = 2, startPos = [1,1], s = "LURD"
Output: [4,1,0,0]
Explanation:
- 0th: "LURD".
- 1st:  "URD".
- 2nd:   "RD".
- 3rd:    "D".
```

**Example 3:**

![](https://assets.leetcode.com/uploads/2021/12/09/3.png)

```
Input: n = 1, startPos = [0,0], s = "LRUD"
Output: [0,0,0,0]
Explanation: No matter which instruction the robot begins execution from, it would move off the grid.
```

**Constraints:**

* `m == s.length`
* `1 <= n, m <= 500`
* `startPos.length == 2`
* `0 <= startrow, startcol < n`
* `s` consists of `'L'`, `'R'`, `'U'`, and `'D'`.

## Approach 1: Simulation

We can just simulate the whole process. For each $$i−th$$instruction, we have max $$s.size()−i$$steps assuming $$i$$ starts from $$0$$. We keep updating the position $$(x,y)$$and check if it is out of bound. If not, keep increasing $$cnt$$ by 1. If there is no further move we can make, we can break the loop and push the result $$cnt$$ to $$ans$$.

### C++

```cpp
class Solution {
public:
    vector<int> executeInstructions(int n, vector<int>& startPos, string s) {
        int m = s.size(), h = m + n, v = m + n;
        vector<int> hor((m + n) * 2, m), ver((m + n) * 2, m), ans(m);
        for (int i = m - 1; i >= 0; i--) {
            hor[h] = ver[v] = i;
            if (s[i] == 'L') h++;
            if (s[i] == 'R') h--;
            if (s[i] == 'D') v--;
            if (s[i] == 'U') v++;
            ans[i] = min({
                m, 
                hor[h - startPos[1] - 1], 
                hor[h - startPos[1] + n], 
                ver[v - startPos[0] - 1], 
                ver[v + startPos[0] * -1 + n]
            }) - i;
        }
        return ans;
    }    
};
```
