---
description: >-
  Author: @wkw | https://leetcode.com/problems/maximum-students-taking-exam/
---

# 1349 - Maximum Students Taking Exam (Hard)

## Problem Link

https://leetcode.com/problems/maximum-students-taking-exam/

## Problem Statement

Given a `m * n` matrix `seats` that represent seats distributions in a classroom. If a seat is broken, it is denoted by `'#'` character otherwise it is denoted by a `'.'` character.

Students can see the answers of those sitting next to the left, right, upper left and upper right, but he cannot see the answers of the student sitting directly in front or behind him. Return the **maximum** number of students that can take the exam together without any cheating being possible..

Students must be placed in seats in good condition.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/01/29/image.png)

```
Input: seats = [["#",".","#","#",".","#"],
                [".","#","#","#","#","."],
                ["#",".","#","#",".","#"]]
Output: 4
Explanation: Teacher can place 4 students in available seats so they don't cheat on the exam.
```

**Example 2:**

```
Input: seats = [[".","#"],
                ["#","#"],
                ["#","."],
                ["#","#"],
                [".","#"]]
Output: 3
Explanation: Place all students in available seats.
```

**Example 3:**

```
Input: seats = [["#",".",".",".","#"],
                [".","#",".","#","."],
                [".",".","#",".","."],
                [".","#",".","#","."],
                ["#",".",".",".","#"]]
Output: 10
Explanation: Place students in available seats in column 1, 3 and 5.
```

**Constraints:**

- `seats` contains only characters `'.' and'#'.`
- `m == seats.length`
- `n == seats[i].length`
- `1 <= m <= 8`
- `1 <= n <= 8`

## Approach 1: Bit Masking

We can use bit masking approach in this problem where $$1$$ means a student is sitting at $$j$$-th place and $$0$$ means the seat at $$j$$-th place is empty. For example, $$10001_2$$ means there are two students sitting in leftmost and rightmost place while the middle three seats are empty.

First we need to know where are the broken seats for each row first. We can simply iterate each seats and store the result in $$broken[i]$$ where $$i$$ is the row number. Then We can use DP to calculate the answer row by row. We iterate each row, iterate each mask $$curMask$$ and iterate each previous mask $$prevMask$$.

For $$curMask$$, we need to skip some cases.

1. If there is a student sitting on a broken seat
2. If there is a student sitting next to the left of another student
3. If there is a student sitting next to the right of another student

For $$prevMask$$, we also need to skip some cases.

1. If there is a student sitting on upper left
2. If there is a student sitting on upper right

Otherwise, we can calculate $$dp[row][curMask]$$ by taking the previous row with previous mask value plus the number of students who can seat on $$row$$ (i.e. number of $$1s$$ in $$curMask$$). The answer is the maximum mask of $$dp[n]$$.

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int maxStudents(vector<vector<char>>& seats) {
        int n = seats.size(), m = seats[0].size();
        vector<int> broken(n);
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (seats[i][j] == '#') {
                    broken[i] |= 1 << j;
                }
            }
        }
        // dp[i][j]:
        // the maximum number of students that can take the exam together
        // without any cheating being possible at row i with j mask
        vector<vector<int>> dp(n + 1, vector<int>(1 << m, 0));
        for (int row = 1; row <= n; row++) {
            for (int curMask = 0; curMask < 1 << m; curMask++) {
                if (
                    // there is a student sitting on a broken seat
                    curMask & broken[row - 1] ||
                    // there is a student sitting next to the left of another student
                    curMask & (curMask >> 1) ||
                    // If there is a student sitting next to the right of another student
                    curMask & (curMask << 1)
                   ) {
                    continue;
                }
                for (int prevMask = 0; prevMask < 1 << m; prevMask++) {
                    if (
                        // there is a student sitting on upper left
                        (prevMask >> 1) & curMask ||
                        // there is a student sitting on upper right
                        (prevMask << 1) & curMask
                    ) {
                        continue;
                    }
                    // previous result + the number of students who can seat on this row
                    dp[row][curMask] = max(dp[row][curMask], dp[row - 1][prevMask] + __builtin_popcount(curMask));
                }
            }
        }
        // return the max mask on the last row
        return *max_element(dp[n].begin(), dp[n].end());
    }
};
```
