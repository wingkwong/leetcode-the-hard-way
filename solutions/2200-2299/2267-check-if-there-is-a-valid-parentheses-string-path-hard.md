---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/check-if-there-is-a-valid-parentheses-string-path/
---

import SolutionAuthor from '@site/src/components/SolutionAuthor';

# 2267 - Check if There Is a Valid Parentheses String Path (Hard)

## Problem Link

https://leetcode.com/problems/check-if-there-is-a-valid-parentheses-string-path/

## Problem Statement

A parentheses string is a **non-empty** string consisting only of `'('` and `')'`. It is **valid** if **any** of the following conditions is **true**:

* It is `()`.
* It can be written as `AB` (`A` concatenated with `B`), where `A` and `B` are valid parentheses strings.
* It can be written as `(A)`, where `A` is a valid parentheses string.

You are given an `m x n` matrix of parentheses `grid`. A **valid parentheses string path** in the grid is a path satisfying **all** of the following conditions:

* The path starts from the upper left cell `(0, 0)`.
* The path ends at the bottom-right cell `(m - 1, n - 1)`.
* The path only ever moves **down** or **right**.
* The resulting parentheses string formed by the path is **valid**.

Return `true` _if there exists a **valid parentheses string path** in the grid._ Otherwise, return `false`.



**Example 1:**

![](https://assets.leetcode.com/uploads/2022/03/15/example1drawio.png)

```
Input: grid = [["(","(","("],[")","(",")"],["(","(",")"],["(","(",")"]]
Output: true
Explanation: The above diagram shows two possible paths that form valid parentheses strings.
The first path shown results in the valid parentheses string "()(())".
The second path shown results in the valid parentheses string "((()))".
Note that there may be other valid parentheses string paths.
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2022/03/15/example2drawio.png)

```
Input: grid = [[")",")"],["(","("]]
Output: false
Explanation: The two possible paths form the parentheses strings "))(" and ")((". Since neither of them are valid parentheses strings, we return false. 
```

**Constraints:**

* `m == grid.length`
* `n == grid[i].length`
* `1 <= m, n <= 100`
* `grid[i][j]` is either `'('` or `')'`.

## Approach 1: DFS + DP + Memo

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    bool hasValidPath(vector<vector<char>>& grid) {
        int n = grid.size(), m = grid[0].size(), mxN = 105;
        vector<vector<vector<int>>> dp(mxN, vector<vector<int>>(mxN, vector<int>(mxN * 2, -1)));
        function<bool(int, int, int)> dfs = [&](int i, int j, int k) -> bool {
            // out of bound - return false
            if (i == n || j == m) return false;
            // count the overall balance
            k += grid[i][j] == '(' ? 1 : -1;
            // negative balance - return false
            // e.g. ()) is invalid (k = -1)
            if (k < 0) return false;
            // if it reaches the target cell 
            // and the balance is 0, e.g. ((()))
            // then return true 
            if (i == n - 1 && j == m - 1 && k == 0) return true;
            // if the result is calculated before, return it directly
            if (dp[i][j][k] != -1) return dp[i][j][k];
            // otherwise, we either move right or move down
            return dp[i][j][k] = dfs(i + 1, j, k) || dfs(i, j + 1, k);
        };
        // starting from top left cell with balance = 0
        return dfs(0, 0, 0);
    }
};
```
