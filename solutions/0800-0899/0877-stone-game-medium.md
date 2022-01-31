---
description: 'Author: @wingkwong | https://leetcode.com/problems/stone-game/'
---

# 0877 - Stone Game (Medium)

## Problem Statement

Alice and Bob play a game with piles of stones. There are an **even** number of piles arranged in a row, and each pile has a **positive** integer number of stones `piles[i]`.

The objective of the game is to end with the most stones. The **total** number of stones across all the piles is **odd**, so there are no ties.

Alice and Bob take turns, with **Alice starting first**. Each turn, a player takes the entire pile of stones either from the **beginning** or from the **end** of the row. This continues until there are no more piles left, at which point the person with the **most stones wins**.

Assuming Alice and Bob play optimally, return `true` _if Alice wins the game, or_ `false` _if Bob wins_.

**Example 1:**

```
Input: piles = [5,3,4,5]
Output: true
Explanation: 
Alice starts first, and can only take the first 5 or the last 5.
Say she takes the first 5, so that the row becomes [3, 4, 5].
If Bob takes 3, then the board is [4, 5], and Alice takes 5 to win with 10 points.
If Bob takes the last 5, then the board is [3, 4], and Alice takes 4 to win with 9 points.
This demonstrated that taking the first 5 was a winning move for Alice, so we return true.
```

**Example 2:**

```
Input: piles = [3,7,2,3]
Output: true
```

**Constraints:**

* `2 <= piles.length <= 500`
* `piles.length` is **even**.
* `1 <= piles[i] <= 500`
* `sum(piles[i])` is **odd**.

## Approach 1: Math

Yes .. Just return true. In fact, it is always true because there are an even number of piles and the total number of stones across all the piles is odd. Therefore, if Alice picks the first one, then Bob must pick either the second one or the last one. In each turn, Alice can always pick the even indexed piles while Bob can only pick odd indexed piles. Since there is no tie, if the sum of stones of even indexed piles is greater than that of odd indexed piles, Alice just need to pick the even indexed piles and win the game. Otherwise, she can pick the odd indexed piles. As Alice always go first, in this case, she must win whatsoever.&#x20;

```cpp
class Solution {
public:
    bool stoneGame(vector<int>& piles) {
        return true;
    }
};
```

Time Complexity: O(1)

Space Complexity: O(1)

## Approach 2: Dynamic Programming

Let `dp[i][j]` be the maximum difference Alice could get if she plays optimally for `piles[i .. j]`. Since we only have two options - either take `pile[i]` or `pile[j]`. We choose the maximum one.

```cpp
class Solution {
public:
    int dfs(vector<int>& piles, vector<vector<int>>& dp, int i, int j) {
        if (i == j) return piles[i];
        if (dp[i][j] != -1) return dp[i][j];
        return dp[i][j] = max(piles[i] - dfs(piles, dp, i + 1, j), piles[j] - dfs(piles, dp, i, j - 1));
    }
    bool stoneGame(vector<int>& piles) {
        int n = (int) piles.size();
        vector<vector<int>> dp(n, vector<int>(n, -1));
        return dfs(piles, dp, 0, n - 1);
    }
};
```

Time Complexity: O(n ^ 2)

Space Complexity: O(n ^ 2)
