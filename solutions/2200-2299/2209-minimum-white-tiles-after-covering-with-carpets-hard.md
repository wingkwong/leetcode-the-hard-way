---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/minimum-white-tiles-after-covering-with-carpets/
---

# 2209 - Minimum White Tiles After Covering With Carpets (Hard)

## Problem Link

https://leetcode.com/problems/minimum-white-tiles-after-covering-with-carpets/

## Problem Statement

You are given a **0-indexed binary** string `floor`, which represents the colors of tiles on a floor:

* `floor[i] = '0'` denotes that the `ith` tile of the floor is colored **black**.
* On the other hand, `floor[i] = '1'` denotes that the `ith` tile of the floor is colored **white**.

You are also given `numCarpets` and `carpetLen`. You have `numCarpets` **black** carpets, each of length `carpetLen` tiles. Cover the tiles with the given carpets such that the number of **white** tiles still visible is **minimum**. Carpets may overlap one another.

Return _the **minimum** number of white tiles still visible._

**Example 1:**

![](https://assets.leetcode.com/uploads/2022/02/10/ex1-1.png)

```
Input: floor = "10110101", numCarpets = 2, carpetLen = 2
Output: 2
Explanation: 
The figure above shows one way of covering the tiles with the carpets such that only 2 white tiles are visible.
No other way of covering the tiles with the carpets can leave less than 2 white tiles visible.
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2022/02/10/ex2.png)

```
Input: floor = "11111", numCarpets = 2, carpetLen = 3
Output: 0
Explanation: 
The figure above shows one way of covering the tiles with the carpets such that no white tiles are visible.
Note that the carpets are able to overlap one another.
```

**Constraints:**

* `1 <= carpetLen <= floor.length <= 1000`
* `floor[i]` is either `'0'` or `'1'`.
* `1 <= numCarpets <= 1000`

## Approach 1: DP

Let $$dp[i][j]$$ be the minimum number of white tiles still visible covering till $$floor[i]$$ with $$j$$ carpets used. The answer is $$dp[n - 1][numCarpets]$$.

The base case is if the first tile is white, we set $$dp[i][j]$$ to $$1$$ as there is one white tile visible using $$0$$ carpet. Then iterate each tile and each carpet and do the following logic.

First we take the previous result $$dp[i][j] = dp[i - 1][j]$$. If the current tile is white, we add $$1$$. If we've used a carpet, there are two cases. If the current index is greater / equal to $$carpetLen$$, then we compare the the previous result $$dp[i - carpetLen][numCarpets - 1]$$ with $$dp[i][j]$$ and take the min one. Otherwise, we set $$dp[i][j]$$ to $$0$$ as it is covered by previous carpet.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int minimumWhiteTiles(string f, int k, int l) {
        int n = f.size(), ans = 0;
        // minimum number of white tiles still visible covering first i tiles with j carpets used
        vector<vector<int>> dp(n, vector<int>(k + 1));
        // base case
        dp[0][0] = f[0] == '1';
        // iterate each tile
        for (int i = 1; i < n; i++) {
            // iterate each carpet
            for (int j = 0; j <= k; j++) {
                // take the previous result
                // if the current tile is white, then add 1
                dp[i][j] = dp[i - 1][j] + (f[i] == '1');
                // if at least one carpet is used
                if (j) {
                    if (i >= l) {
                        // compare with the previous result
                        dp[i][j] = min(dp[i][j], dp[i - l][j - 1]);    
                    } else {
                        // covered by carpet - reset to 0
                        dp[i][j] = 0;
                    }
                }
            }
        }
        return dp[n - 1][k];
    }
};
```
