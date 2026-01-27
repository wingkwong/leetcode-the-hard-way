---
description: >-
  Author: @wkw | https://leetcode.com/problems/equal-row-and-column-pairs


tags: ['Hash Map']
---

# 2352 - Equal Row and Column Pairs (Medium)

## Problem Link

https://leetcode.com/problems/equal-row-and-column-pairs

## Problem Statement

Given a **0-indexed** `n x n` integer matrix `grid`, _return the number of pairs_ `(Ri, Cj)` _such that row_ `Ri` _and column_ `Cj` _are equal_.

A row and column pair is considered equal if they contain the same elements in the same order (i.e. an equal array).

&#x20;

**Example 1:**

![](https://assets.leetcode.com/uploads/2022/06/01/ex1.jpg)

```
Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
Output: 1
Explanation: There is 1 equal row and column pair:
- (Row 2, Column 1): [2,7,7]
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2022/06/01/ex2.jpg)

```
Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
Output: 3
Explanation: There are 3 equal row and column pairs:
- (Row 0, Column 0): [3,1,2,2]
- (Row 2, Column 2): [2,4,2,2]
- (Row 3, Column 2): [2,4,2,2]
```

**Constraints:**

- `n == grid.length == grid[i].length`
- `1 <= n <= 200`
- `1 <= grid[i][j] <= 10^5`

## Approach 1: Hash Map

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int equalPairs(vector<vector<int>>& g) {
        int n = g.size(), ans = 0;
        // count the frequency of a vector
        map<vector<int>, int> m;
        // check all rows
        for (int i = 0; i < n; i++) {
            vector<int> tmp;
            for (int j = 0; j < n; j++) tmp.push_back(g[i][j]);
            // in example 1, we got {3,2,1}, {1,7,6}, {2,7,7}
            m[tmp] += 1;
        }
        // check all cols
        for (int j = 0; j < n; j++) {
            vector<int> tmp;
            for (int i = 0; i < n; i++) tmp.push_back(g[i][j]);
            // in example 1, we got {3,1,2}, {2,7,7}, {1,6,7}
            // since {2,7,7} has frequency of 1, we add it to answer
            // otherwise, it would be adding 0
            ans += m[tmp];
        }
        return ans;
    }
};
```
